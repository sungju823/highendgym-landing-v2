// ============================================
// HIGHENDGYM 랜딩페이지 - Google Apps Script
// ============================================
//
// [설정 방법]
// 1. Google Sheets에서 "확장 프로그램" → "Apps Script" 클릭
// 2. 이 코드를 전체 복사해서 붙여넣기
// 3. "배포" → "새 배포" 클릭
// 4. 유형: "웹 앱" 선택
// 5. 실행 계정: "나" / 액세스 권한: "모든 사용자"
// 6. "배포" 클릭 → 생성된 URL을 복사
// 7. 복사한 URL을 CtaSection.tsx의 APPS_SCRIPT_URL에 붙여넣기
//
// [시트 헤더 자동 생성]
// 첫 제출 시 자동으로 헤더가 생성됩니다.
// ============================================

const SHEET_NAME = "시트1"; // 시트 탭 이름 (기본값)

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);

    // 시트가 없으면 생성
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
    }

    // 헤더가 없으면 자동 생성
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "접수일시",
        "이름",
        "연락처",
        "관심 프로그램",
        "상태",
      ]);

      // 헤더 스타일링
      const headerRange = sheet.getRange(1, 1, 1, 5);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#0D1B2A");
      headerRange.setFontColor("#B89A5E");

      // 열 너비 조정
      sheet.setColumnWidth(1, 180); // 접수일시
      sheet.setColumnWidth(2, 100); // 이름
      sheet.setColumnWidth(3, 140); // 연락처
      sheet.setColumnWidth(4, 160); // 관심 프로그램
      sheet.setColumnWidth(5, 100); // 상태
    }

    // 관심 프로그램 한글 변환
    const goalMap = {
      facility: "시설 이용 (자유운동)",
      pt: "PT 프로그램",
      combo: "통합 (시설 + PT)",
      consulting: "비즈니스 컨설팅",
    };

    // 데이터 추가
    const timestamp = Utilities.formatDate(
      new Date(),
      "Asia/Seoul",
      "yyyy-MM-dd HH:mm:ss"
    );

    sheet.appendRow([
      timestamp,
      data.name || "",
      data.phone || "",
      goalMap[data.goal] || data.goal || "",
      "신규",
    ]);

    // 성공 응답
    return ContentService.createTextOutput(
      JSON.stringify({ status: "success", message: "접수 완료" })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    // 에러 응답
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", message: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// GET 요청 테스트용
function doGet() {
  return ContentService.createTextOutput(
    JSON.stringify({
      status: "ok",
      message: "HIGHENDGYM 상담 접수 API 정상 작동 중",
    })
  ).setMimeType(ContentService.MimeType.JSON);
}
