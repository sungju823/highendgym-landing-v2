export const BRAND = {
  name: "HIGHENDGYM",
  nameKr: "하이엔드짐 헬스&PT 왕십리점",
  slogan: "당신이 경험하게 될 하이엔드 트레이닝 서비스",
  instagram: {
    personal: "https://www.instagram.com/cap_ahnmerica",
    wangsimni: "https://www.instagram.com/highendgym_wang",
  },
  blog: "https://m.blog.naver.com/highend_fit",
} as const;

export const PROBLEMS = [
  {
    icon: "😶",
    title: "아무도 알려주지 않는다",
    description:
      "등록 후 기구 사용법을 물어봐야 하는데, 먼저 다가오는 사람이 없습니다",
  },
  {
    icon: "👀",
    title: "시선이 신경 쓰인다",
    description:
      "헬창들 사이에서 혼자 어색하게 서 있는 그 느낌",
  },
  {
    icon: "⏳",
    title: "피크타임엔 자리가 없다",
    description:
      "원하는 기구 앞에서 기다리다 그냥 가게 됩니다",
  },
  {
    icon: "📋",
    title: "내 몸에 맞는 운동이 뭔지 모른다",
    description:
      "유튜브 영상대로 해봤는데 왜 안 되는지도 모릅니다",
  },
] as const;

export const COMPARISON = [
  {
    category: "첫 방문 안내",
    general: "없거나 형식적",
    highend: "트레이너가 직접 기구 사용법 안내",
  },
  {
    category: "피크타임 혼잡",
    general: "매우 혼잡",
    highend: "회원 수 제한으로 쾌적 유지",
  },
  {
    category: "분위기",
    general: "고강도·경쟁적",
    highend: "편안하고 집중된 분위기",
  },
  {
    category: "트레이너 접근성",
    general: "PT 등록 후에만",
    highend: "시설 회원도 질문 가능",
  },
  {
    category: "공간 청결도",
    general: "불규칙",
    highend: "매일 정기 청소·관리",
  },
] as const;

export const PROCESS_STEPS = [
  {
    number: 1,
    icon: "📝",
    title: "설문지 작성",
    description: "1분이면 됩니다. 이름·연락처·목표만 입력하면 OK",
  },
  {
    number: 2,
    icon: "📞",
    title: "담당자 연락",
    description: "작성 후 24시간 내 트레이너가 직접 연락드립니다",
  },
  {
    number: 3,
    icon: "🚪",
    title: "무료 방문 상담",
    description: "부담 없이 공간을 먼저 경험해보세요 (구매 강요 없음)",
  },
  {
    number: 4,
    icon: "💪",
    title: "나만의 루틴으로 시작",
    description: "시설만 이용할지, PT와 함께할지 그때 결정하면 됩니다",
  },
] as const;

export const STATS = [
  { label: "시설 이용권 재등록률", value: 85, suffix: "%" },
  { label: "회원 평균 만족도", value: 90, suffix: "%" },
  { label: "PT 완주율", value: 95, suffix: "%" },
] as const;

export const REVIEWS = [
  {
    reviewer: "운동 목적: 체형 개선",
    badge: "PT고객 전용 리뷰",
    quote:
      "선생님 수업이 체계적이고 정말 꼼꼼하세요. 운동을 하면서 주변에서 체형 변화를 알아볼 정도로 효과를 느껴서 너무 만족스러웠고, 앞으로도 정준이 쌤께 계속 PT 받으려구 따라온거에요!! 시설도 확장 이전해서 환경까지 더 좋아지고 기구도 더 많아져서 엄청 기대됩니닷♥ 왕십리나 한양대 근처에서 PT 고민 중이라면 하이엔드 PT 적극 추천드립니다!! 😊",
    highlight: "운동을 하면서 주변에서 체형 변화를 알아볼 정도로 효과를 느껴서 너무 만족스러웠고,",
    image: "/images/reviews/review-1.png",
  },
  {
    reviewer: "운동 목적: 근육량 증가",
    badge: "PT고객 전용 리뷰",
    quote:
      "재희쌤 덕분에 운동하는 즐거움을 찾아가고있어요! 처음 PT를 시작할 때 걱정이 많았는데, 단순한 반복 운동이 아니라 제 체형과 컨디션에 맞춰서 움직임을 하나하나 정확하게 짚어주셔서 큰 도움이 됩니다! 뿐만 아니라 초보자의 눈높이에 맞춰 쉽게 설명해 주셔서, 자극부위를 놓치지 않으며 운동하고 있습니다. 덕분에 다음날 몸의 변화를 바로 느낄수있고, 그래서 더욱 성취감이 생기는 것 같아요..! 혼자서 운동하기 힘드셨던 분들 저처럼 좋은 쌤만나 건강해지시길요><",
    highlight: "뿐만 아니라 초보자의 눈높이에 맞춰 쉽게 설명해 주셔서, 자극부위를 놓치지 않으며 운동하고 있습니다.",
    image: "/images/reviews/review-2.png",
  },
  {
    reviewer: "운동 목적: 다이어트",
    badge: "PT고객 전용 리뷰",
    quote:
      "확장이전한 센터라 시설이 더 쾌적하고 운동하기 정말 좋았습니다. 무엇보다 트레이너님이 체형과 움직임을 꼼꼼하게 봐주시고 그에 맞게 운동을 알려주셔서 운동할 때 자극이 확실히 다르게 느껴졌어요. 단순히 기구 사용법만 알려주는 게 아니라 왜 이 운동을 해야 하는지까지 설명해주셔서 이해도 잘 되고 꾸준히 운동하고 싶은 동기부여도 많이 됩니다. 추천합니다!",
    highlight: "단순히 기구 사용법만 알려주는 게 아니라 왜 이 운동을 해야 하는지까지 설명해주셔서 이해도 잘 되고 꾸준히 운동하고 싶은 동기부여도 많이 됩니다.",
    image: "/images/reviews/review-3.png",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "운동 경험이 전혀 없어도 되나요?",
    answer:
      "물론입니다. 오히려 처음 오시는 분들을 위한 안내가 잘 되어 있습니다. 첫 방문 시 트레이너가 기구 사용법을 직접 안내해드립니다.",
  },
  {
    question: "PT 등록을 강요하진 않나요?",
    answer:
      "전혀 없습니다. 시설 이용만으로도 충분히 환영합니다. PT는 본인이 원하실 때 상담 요청하시면 됩니다.",
  },
  {
    question: "설문지 작성하면 바로 연락이 오나요?",
    answer:
      "네, 24시간 내로 담당 트레이너가 직접 문자 또는 전화로 연락드립니다.",
  },
  {
    question: "무료 방문 상담 후 꼭 등록해야 하나요?",
    answer:
      "아닙니다. 공간을 직접 보시고 결정하셔도 됩니다. 어떤 부담도 드리지 않습니다.",
  },
  {
    question: "여성 회원도 편하게 이용할 수 있나요?",
    answer:
      "네, 현재 여성 회원 비율이 더 높습니다. 성별 구분 없이 편안하게 이용 가능한 환경을 유지하고 있습니다.",
  },
] as const;
