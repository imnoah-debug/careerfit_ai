# CareerFit AI

> 취업·공모전 데이터 기반 맞춤형 AI 포트폴리오 코치



## 프로젝트 개요



[공모전을 준비할 때 자신과 맞는 수준의 팀원을 찾는데 어려움이 있다.]



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

- [ ] 4일차: RAG 기반 서비스 + React UI

- [ ] 5일차: Docker + 포트폴리오 완성
