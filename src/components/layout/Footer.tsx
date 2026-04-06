import { BRAND } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-white/5 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-gold text-lg font-bold italic mb-3">
              HIGHENDGYM
            </h3>
            <p className="text-cream/40 text-sm leading-relaxed">
              유일무이한, 책 쓰는 운동 사업가의
              <br />
              노하우가 녹아있는 공간
            </p>
          </div>

          <div>
            <h4 className="text-cream font-semibold text-sm mb-3">지점 안내</h4>
            <div className="space-y-2 text-cream/40 text-sm">
              <p>동일점 @highendgym_gang</p>
              <p>수유점 @highendgym_suyu</p>
            </div>
          </div>

          <div>
            <h4 className="text-cream font-semibold text-sm mb-3">소셜 미디어</h4>
            <div className="space-y-2 text-sm">
              <a
                href={BRAND.instagram.personal}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/40 hover:text-gold transition-colors block"
              >
                Instagram @cap_ahnmerica
              </a>
              <a
                href={BRAND.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/40 hover:text-gold transition-colors block"
              >
                네이버 블로그
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-cream/30 text-xs">
          &copy; {new Date().getFullYear()} HIGHENDGYM. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
