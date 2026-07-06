# backend/routers/analyze.py

from fastapi import APIRouter
from pydantic import BaseModel
from typing import List, Literal
from services.llm_service import get_llm_response 
# < 추가

router = APIRouter()


# 요청 본문(Request Body) 모델
# 손님이 제출하는 주문서 양식
class AnalyzeRequest(BaseModel):
    major: str
    skills: List[str]
    job_type: str

    experience_years: int = 0
    preferred_company_size: Literal["무관", "대기업", "중견기업", "스타트업"] = "무관"


# 응답 본문(Response Body) 모델
# 주방에서 손님에게 돌려주는 영수증 양식
class AnalyzeResponse(BaseModel):
    answer: str             # AI 분석 결과 텍스트
    sources: List[dict]     # 답변 근거 데이터 목록

@router.post("/analyze", response_model=AnalyzeResponse, tags=["Analyze"])
def analyze_career(request: AnalyzeRequest):
    """
    사용자의 전공·스킬·관심 직무를 기반으로
    취업·공모전 맞춤 분석을 제공한다.

    MOCK_MODE=true이면 목업 응답을 반환하고,
    MOCK_MODE=false이면 Gemini API 응답을 반환한다.
    """

    # Gemini 또는 목업 응답에 전달할 사용자 질문
    query = (
        f"{request.major} 학생으로서 {request.job_type} 직무에 지원하려면, "
        f"현재 보유한 {', '.join(request.skills)} 역량을 바탕으로 "
        f"어떤 준비가 필요한지 분석해줘. "
        f"경력은 {request.experience_years}년이고, "
        f"선호 기업 규모는 {request.preferred_company_size}이야."
    )

    # MOCK_MODE 값에 따라 llm_service.py에서 목업 또는 Gemini 응답 반환
    result = get_llm_response(query, context_docs=[])

    # 답변의 근거가 되는 임시 목업 데이터
    mock_sources = [
        {
            "title": "목업 데이터 — 테크스타트업A 데이터 분석가",
            "content": "요구 스킬: Python, SQL, 통계"
        }
    ]

    # 정해둔 응답 형식에 맞춰 반환
     # 정해둔 응답 형식에 맞춰 반환
    return AnalyzeResponse(
        answer=result["answer"],
        sources=result["sources"]
    )
