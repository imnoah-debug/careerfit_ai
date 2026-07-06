# CareerFit AI

> 취업·공모전 데이터 기반 맞춤형 AI 포트폴리오 코치



## 프로젝트 개요



[CareerFit AI는 대학생의 전공, 보유 스킬, 관심 직무를 바탕으로  
취업·공모전 데이터를 검색하고, AI가 맞춤형 공고 추천과 포트폴리오 준비 방향을 제안하는 서비스이다.]



## 기술 스택



| 영역 | 기술 |

|---|---|

| 백엔드 | Python, FastAPI |

| AI API | Gemini 2.5 Flash-Lite |

| 데이터 | Pandas, SQLite, ChromaDB |

| 프론트엔드 | React, Vite |

| 실행 환경 | Docker |

## 진행 현황



- [x] 1일차: 프로젝트 기획 및 개발 환경 세팅

* CareerFit AI 프로젝트의 폴더 구조와 개발 환경을 구성
* GitHub Repository를 생성하고 버전 관리 및 협업 환경을 구축
* `.env`, `.gitignore` 등을 설정하여 보안 및 환경변수 관리 기반을 마련
* Cursor AI 규칙, 프롬프트, 체크리스트 등 프로젝트 문서를 작성하여 개발 가이드를 정리
* 프로젝트 계획 수립 및 팀 협업 준비를 완료


- [x] 2일차: FastAPI 서버 구축 및 Gemini API 연결

* Python 가상환경을 세팅하고 FastAPI 기반 백엔드 서버 구조를 구축
* `/health`, `/jobs`, `/analyze` 엔드포인트를 구현해 기본 API 흐름을 확인
* Gemini 2.5 Flash-Lite API를 연결해 AI 분석 응답 생성 기능을 준비
* `MOCK_MODE` 환경변수를 설정해 API 한도 초과 상황에서도 테스트 가능하도록 구성
* 2일차 기준 백엔드 핵심 기능과 LLM 연동 실습을 완료



- [x] 3일차: 데이터 파이프라인 구축

* `jobs.csv` 채용 공고 데이터를 기반으로 전처리 파이프라인(`preprocess.py`)을 구현
* Pandas를 활용해 CSV 데이터를 읽고 결측치 확인, 결측치 처리, 중복 제거를 수행
* 스킬 키워드(Python, SQL, Machine Learning 등)를 표준화하여 데이터 일관성을 확보
* 전처리된 데이터를 SQLite 데이터베이스에 저장하고 SQL 조회를 통해 저장 결과를 검증
* AI가 활용하기 위한 데이터 전처리 및 저장 파이프라인 구축 완료



- [x] 4일차: RAG 기반 서비스 + React UI

* RAG 검색 결과를 활용하는 AI 응답 파이프라인을 React 프론트엔드와 연동
* `/analyze` API를 통해 사용자 입력(전공, 보유 스킬, 관심 직무)을 분석하고 결과 및 출처를 화면에 출력
* `InputForm`, `ResultCard`, `SourceCard` 컴포넌트를 구현하고 Tailwind CSS 기반 UI 개선
* VS Code - Continue + Gemini AI Studio를 연동하여 AI 개발 환경(Harness) 구축 및 `design-skill.md` 작성
* 프로젝트 구조를 정리하고 프론트엔드와 백엔드 통합 테스트 완료



- [ ] 5일차: Docker + 포트폴리오 완성
