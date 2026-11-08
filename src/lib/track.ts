/* ═══════════════════════════════════════════
   광고 성과 추적 — GA4 + 메타 픽셀에 동시에 보냅니다.
   기본 코드는 src/app/layout.tsx 의 <head> 에 있습니다.
   ⚠️ 이름·연락처·문의 내용 같은 개인정보는 절대 넣지 마세요.
   ═══════════════════════════════════════════ */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

const BRANCH = "highend_wangsimni";

export function track(
  gaEvent: string,
  metaEvent: string | null,
  extra?: Record<string, unknown>
) {
  const params = Object.assign({ branch: BRANCH }, extra || {});
  if (typeof window.gtag === "function") {
    window.gtag("event", gaEvent, { ...params, transport_type: "beacon" });
  }
  if (metaEvent && typeof window.fbq === "function") {
    window.fbq("track", metaEvent, params);
  }
}
