# backend/routers/jobs.py

from fastapi import APIRouter

from typing import List

router = APIRouter()



# 목업 데이터: 3일차에 실제 CSV 데이터로 교체한다
MOCK_JOBS = [
    {
        "id": 1,
        "company": "한빛전자",
        "title": "품질관리 데이터 분석 담당자",
        "required_skills": ["통계분석", "Python", "SQL"],
        "preferred_skills": ["Minitab", "SPC"],
        "description": "제조 공정에서 발생하는 품질 데이터를 분석하고 불량률 개선 과제를 도출합니다. Python과 SQL을 활용해 공정 데이터를 정리하고, 통계적 품질관리 기법으로 이상 원인을 파악합니다.",
        "deadline": "2026-08-31"
    },
    {
        "id": 2,
        "company": "대한물류시스템",
        "title": "SCM 수요예측 분석가",
        "required_skills": ["Excel", "SQL", "수요예측"],
        "preferred_skills": ["Python", "Tableau"],
        "description": "판매·재고·물류 데이터를 분석해 수요예측 모델을 만들고 공급 계획 수립을 지원합니다. 데이터 기반으로 재고 부족과 과잉 재고를 줄이는 개선안을 제안합니다.",
        "deadline": "2026-08-31"
    },
    {
        "id": 3,
        "company": "푸른식품",
        "title": "품질보증 QA/QC 담당자",
        "required_skills": ["품질관리", "데이터분석", "통계"],
        "preferred_skills": ["HACCP", "ISO"],
        "description": "제품 검사 결과와 클레임 데이터를 분석해 품질 이슈를 관리합니다. 통계적 사고를 바탕으로 반복적으로 발생하는 문제를 찾고, 생산·물류 부서와 개선 방안을 협의합니다.",
        "deadline": "2026-08-31"
    }
]



@router.get("/jobs", tags=["Jobs"])

def get_jobs():

    """

    취업 공고 목록을 반환하는 엔드포인트.

    현재는 목업 데이터를 반환하며, 3일차에 실제 데이터로 교체한다.

    """

    return {

        "count": len(MOCK_JOBS),

        "jobs": MOCK_JOBS

    }



@router.get("/jobs/{job_id}", tags=["Jobs"])

def get_job_by_id(job_id: int):

    """

    특정 공고의 상세 정보를 반환한다.

    """

    for job in MOCK_JOBS:

        if job["id"] == job_id:

            return job

    # 찾지 못한 경우

    from fastapi import HTTPException

    raise HTTPException(status_code=404, detail=f"공고 ID {job_id}를 찾을 수 없습니다.")

    