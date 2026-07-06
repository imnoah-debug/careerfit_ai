# CareerFit AI Design Skill

## 프로젝트 개요

CareerFit AI는 **대학생을 위한 취업·공모전 포트폴리오 코치** 서비스입니다.

### 디자인 목표

- 전문적이지만 부담스럽지 않은 UI
- 신뢰감 있는 색상 사용
- 처음 사용하는 사용자도 쉽게 사용할 수 있는 구조
- 정보 전달이 명확한 카드 중심 인터페이스

---

# 1. Color Palette

Tailwind CSS 기본 색상 체계를 사용합니다.

| 용도 | Tailwind |
|------|-----------|
| Primary | `blue-600` |
| Primary Hover | `blue-700` |
| Secondary | `slate-500` |
| Background | `slate-50` |
| Card Background | `white` |
| Text | `slate-800` |
| Sub Text | `slate-500` |
| Border | `slate-200` |
| Error Text | `red-700` |
| Error Background | `red-50` |
| Error Border | `red-200` |

### 버튼

```jsx
bg-blue-600 hover:bg-blue-700 text-white
```

### 카드

```jsx
bg-white border border-slate-200 rounded-xl shadow-sm
```

---

# 2. Typography Rules

## 페이지 제목

```txt
text-2xl font-bold text-slate-800
```

## 카드 제목

```txt
text-lg font-semibold text-slate-800
```

## 본문

```txt
text-sm text-slate-700 leading-6
```

## 설명

```txt
text-sm text-slate-500
```

## 에러 메시지

```txt
text-sm text-red-700
```

---

# 3. Component Structure

## App

역할

- 전체 페이지 레이아웃
- API 호출
- 상태 관리
- 결과 출력

State

- result
- error
- isLoading

---

## InputForm

역할

- 사용자 입력

입력 항목

- 전공
- 보유 스킬
- 관심 직무

규칙

- label 제공
- 필수값 검사
- 로딩 시 버튼 비활성화

---

## ResultCard

역할

AI 분석 결과 출력

내용

- 현재 역량 평가
- 추천 공고
- 부족한 역량
- 준비 방향

스타일

```txt
bg-white
border
rounded-xl
shadow-sm
p-5
```

---

## SourceCard

역할

RAG 검색 출처 표시

출력 항목

- 회사명
- 공고명
- 직무
- 필요 스킬
- 검색 거리(distance)

스타일

```txt
bg-slate-50
border
rounded-lg
p-4
```

---

# 4. Layout Rules

## 페이지

```txt
min-h-screen
bg-slate-50
py-10
px-4
```

## 콘텐츠 영역

```txt
max-w-2xl
mx-auto
```

## 카드 간격

```txt
space-y-4
```

## 입력 폼

```txt
space-y-4
```

## 반응형

- 모바일 우선 설계
- 최대 너비 2xl 유지
- 좌우 padding 유지

---

# 5. Accessibility Rules

- 모든 입력에는 label을 제공한다.
- 버튼은 명확한 텍스트를 사용한다.
- 로딩 상태를 사용자에게 표시한다.
- 에러 메시지는 화면에 출력한다.
- 충분한 색상 대비를 유지한다.
- 색상만으로 상태를 표현하지 않는다.

---

# 6. Forbidden Rules

다음 사항은 금지한다.

- API Key를 프론트엔드 코드에 작성하지 않는다.
- 색상을 과도하게 사용하지 않는다.
- 컴포넌트마다 서로 다른 디자인 규칙을 적용하지 않는다.
- 긴 문장을 작은 글씨로 출력하지 않는다.
- 버튼 스타일을 페이지마다 변경하지 않는다.
- 콘솔에만 에러를 출력하고 화면에는 표시하지 않는다.
- RAG 검색 결과에 없는 정보를 임의로 생성하지 않는다.
- Tailwind CSS 대신 인라인 스타일을 남용하지 않는다.
- 사용자 입력 검증 없이 API를 호출하지 않는다.