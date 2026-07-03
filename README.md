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

- [x] 3일차: 데이터 파이프라인 구축

* `jobs.csv` 파일을 생성하고 데이터 분석 직무 공고 데이터를 CSV 형식으로 구성
* Pandas를 활용해 채용 데이터를 불러오고 구조(`shape`, `columns`, `head`)를 확인
* `/analyze` 엔드포인트와 LLM 서비스를 연동하여 `MOCK_MODE`에 따라 목업 또는 Gemini 응답을 반환하도록 개선
* LLM 프롬프트 생성 구조를 구현하고 향후 RAG(ChromaDB) 연동을 위한 데이터 처리 흐름을 구성
* 3일차 기준 데이터 파이프라인 및 AI 응답 연동 구조 구현 완료


- [ ] 4일차: RAG 기반 서비스 + React UI

- [ ] 5일차: Docker + 포트폴리오 완성
