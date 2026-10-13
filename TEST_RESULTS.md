# 검증 결과 — 2026-10-13

원본: Fiera77/90-S-HIPHOP-BEST-TOP10,
커밋 b1554dd1004930bd3da7ad72acf88988ba71e980.

## 실행 결과

- 환경: Windows, Node.js, Playwright 및 설치된 Chrome(headless).
- `npm run check`: JavaScript 구문 검사 통과.
- `BROWSER_CHANNEL=chrome npm test`: **12개 테스트 모두 통과**, 실패/건너뛰기 0개.
- HOME/EAST/WEST/TOP 10/ABOUT의 로컬 파일 및 메뉴 링크 정상 응답 확인.
- East/West 각각 1990~1999년, 총 20개 연도 목록에서 10곡과 원본 배열의 순서 확인.
- 반복 선택 시 기존 목록 교체 및 활성/aria-pressed 버튼 하나 유지 확인.
- Essential 목록 20곡 모두 YouTube 링크 생성 확인.
- 200개 연도별 항목, 199개 고유 제목, 각 YouTube 주소의 11자 영상 ID 형식 확인.
- 키보드 Enter 선택, HTML처럼 보이는 제목의 텍스트 렌더링, 없는 ranking 컨테이너 처리 확인.
- 5개 페이지의 320px 및 375px 화면에서 가로 넘침 없음 확인.
- 320px Essential 페이지 전체 스크린샷 육안 확인.

## 원본 오류 재현

원본에서 legacy `window.ranking` 전역을 비활성화하고 1990 버튼을 누르면
`Cannot set properties of undefined (setting 'innerHTML')` 발생.
수정본은 명시적인 DOM 조회를 사용하며 동일 조건 테스트 통과.
원본 Essential 목록의 링크 개수는 19개였으며 수정본은 20개.

## 검증 범위

200개 외부 YouTube 영상의 실제 재생, 지역 제한, 삭제 여부, 곡·영상 일치,
모든 곡의 발매연도나 지역 분류는 검증하지 않음.
GitHub Actions의 Linux Chromium 작업은 정의했지만 원격 실행 결과는 없음.

## 원격 반영 상태

GitHub 저장소 정보는 push 권한을 표시했으나 연결 앱의 tree 생성과 branch 생성은
모두 HTTP 403 `Resource not accessible by integration`으로 거부됨.
원격 파일·브랜치·PR은 생성하거나 수정하지 못했음.
수정본과 배경 이미지 원본을 포함한 ZIP을 로컬 산출물로 제공함.
