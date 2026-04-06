export const BRAND = {
  name: "HIGHENDGYM",
  nameKr: "하이엔드짐",
  founder: "안성주",
  founderTitle: "유일무이한, 책 쓰는 운동 사업가",
  instagram: {
    personal: "https://www.instagram.com/cap_ahnmerica",
    dongil: "https://www.instagram.com/highendgym_gang",
    suyu: "https://www.instagram.com/highendgym_suyu",
  },
  blog: "https://m.blog.naver.com/highend_fit",
} as const;

export const PROBLEMS = [
  {
    icon: "🏚️",
    title: "장비 과밀",
    description: "피크타임엔 러닝머신조차 줄을 서야 합니다",
  },
  {
    icon: "🤷",
    title: "방임형 운영",
    description: "등록 후 아무도 당신에게 말을 걸지 않습니다",
  },
  {
    icon: "📉",
    title: "획일적 프로그램",
    description: "누구에게나 같은 루틴, 결과가 다를 수 없습니다",
  },
  {
    icon: "🪞",
    title: "낮은 동기부여 환경",
    description: "지저분한 탈의실, 낡은 장비, 의욕을 갉아먹는 공간",
  },
] as const;

export const COMPARISON = [
  {
    category: "피크타임 대기",
    general: "10~30분",
    highend: "없음 (회원 수 제한)",
  },
  {
    category: "트레이너 자격",
    general: "생활스포츠지도사",
    highend: "의무 고급 자격 + 정기 심사",
  },
  {
    category: "프로그램 방식",
    general: "획일적",
    highend: "1:1 맞춤 분석 기반",
  },
  {
    category: "공간 분리",
    general: "없음",
    highend: "PT존 / 자유운동존 / 리커버리존",
  },
  {
    category: "장비 유지보수",
    general: "불규칙",
    highend: "주간 점검 의무화",
  },
] as const;

export const PROCESS_STEPS = [
  {
    number: 1,
    icon: "📋",
    title: "무료 상담 예약",
    description: "온라인 또는 현장 방문 (15분)",
  },
  {
    number: 2,
    icon: "🧬",
    title: "체성분 & 자세 분석",
    description: "전문 측정 장비로 기초 데이터 수집",
  },
  {
    number: 3,
    icon: "🗺️",
    title: "맞춤 운동 설계",
    description: "목표 / 생활패턴 기반 루틴 수립",
  },
  {
    number: 4,
    icon: "💪",
    title: "트레이닝 시작",
    description: "1:1 or 자유운동 병행",
  },
  {
    number: 5,
    icon: "📊",
    title: "월간 리포트",
    description: "데이터 기반 피드백 및 재설계",
  },
] as const;

export const STATS = [
  { label: "PT 완주율", value: 94, suffix: "%" },
  { label: "재등록률", value: 87, suffix: "%" },
  { label: "평균 체중 감량 (3개월)", value: 8.3, suffix: "kg", decimal: true },
  { label: "회원 만족도", value: 4.9, suffix: "/5.0", decimal: true },
] as const;

export const REVIEWS = [
  {
    name: "김○○",
    age: 34,
    job: "직장인",
    badge: "PT 40회 회원",
    quote:
      "처음엔 그냥 살 빼려고 왔는데, 6개월 만에 체지방 12% 줄이고 삶의 방식이 바뀌었습니다.",
    result: "체지방 28% → 16%",
  },
  {
    name: "이○○",
    age: 28,
    job: "프리랜서",
    badge: "6개월 회원",
    quote:
      "다른 헬스장에서 3번 실패했는데, 여기서는 트레이너가 매주 피드백을 줘서 꾸준히 할 수 있었어요.",
    result: "체중 -11kg",
  },
  {
    name: "박○○",
    age: 41,
    job: "사업가",
    badge: "PT 60회 회원",
    quote:
      "시설도 좋지만, 진짜 다른 건 관리 시스템입니다. 월간 리포트 받으면서 동기부여가 확실히 됩니다.",
    result: "근육량 +4.2kg",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "운동 경험이 없어도 괜찮나요?",
    answer:
      "물론입니다. 오히려 처음 시작하시는 분들이 올바른 자세와 루틴을 배우기에 가장 좋은 환경입니다. 첫 상담에서 현재 체력 수준을 정확히 분석해드립니다.",
  },
  {
    question: "언제부터 시작할 수 있나요?",
    answer:
      "상담 예약 후 빠르면 당일, 늦어도 2~3일 내에 시작 가능합니다. 체성분 분석과 맞춤 프로그램 설계까지 첫 방문 시 모두 진행됩니다.",
  },
  {
    question: "PT는 필수인가요?",
    answer:
      "아닙니다. 시설만 이용하는 회원권도 있습니다. 다만 처음 2주간의 오리엔테이션 PT는 모든 회원에게 무료로 제공됩니다.",
  },
  {
    question: "중간에 그만두면 환불이 되나요?",
    answer:
      "네, 소비자 보호법에 따라 잔여 기간/횟수에 대해 환불이 가능합니다. 상세한 환불 정책은 상담 시 안내드립니다.",
  },
  {
    question: "회원 수 제한이 실제로 있나요?",
    answer:
      "네, 쾌적한 운동 환경 유지를 위해 지점별 회원 수를 엄격히 제한합니다. 현재 잔여 슬롯은 상담 시 확인 가능합니다.",
  },
] as const;
