---
description: 새 취약점 진단 리포트 카드를 index.html에 추가합니다
argument-hint: "[취약점 제목] [심각도: critical|high|medium|low]"
---

이 프로젝트의 `index.html`에 있는 `.report-card` 구조를 참고해서,
새로운 진단 리포트 카드를 하나 추가해줘.

입력값: $ARGUMENTS
- 첫 번째 인자: 취약점 제목
- 두 번째 인자: 심각도 (critical / high / medium / low 중 하나, 없으면 medium으로)

## 해야 할 일

1. `index.html`의 기존 `.report-card` 블록 바로 아래에 새 `.report-card`를 하나 더 추가
2. 심각도에 맞는 배지 클래스를 사용 (`badge--critical`, `badge--high`, `badge--medium`, `badge--low`)
3. VULN ID는 기존 카드의 ID(`VULN-2026-014`)에서 번호를 하나 올려서 자동 생성
4. 설명, 영향 범위, 권고 조치는 일단 `[여기에 내용을 채워주세요]` 같은 플레이스홀더로 남겨두기
5. `상세 보기` 토글 버튼과 `.report-card__detail` 영역도 기존 패턴 그대로 유지
6. 새로 추가한 카드에 필요한 경우 `js/app.js`의 토글 로직이 여러 카드에서도 동작하도록
   `id` 대신 `querySelectorAll` + `closest()` 방식으로 리팩터링 제안하기 (기존 카드가 1개뿐이면
   `id` 방식이었을 수 있으니, 카드가 2개 이상이 되는 시점에는 반드시 이 리팩터링을 적용)

## 완료 후

- 어떤 파일을 어떻게 바꿨는지 간단히 요약
- 브라우저에서 확인하는 방법 안내 (Live Server 또는 `index.html` 직접 열기)
