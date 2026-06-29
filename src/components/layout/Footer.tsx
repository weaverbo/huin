"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const footerLinks = [
  { href: "/about", label: "ABOUT" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/contact", label: "CONTACT" },
];

const policyLinks = [
  { href: "#", label: "개인정보보호" },
  { href: "#", label: "쿠키설정" },
  { href: "#", label: "이용약관" },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="bg-bg pt-20 text-ink">
      <div className="container-base">
        <div className="border-t border-ink/30" />

        <div className="pt-10">
        <div className="flex justify-between gap-12">
          <div className="max-w-sm space-y-6">
            <Link href="/" className="block text-6xl leading-none text-ink" style={{ fontFamily: "var(--font-neue)", fontWeight: 400 }}>
              HUIN
            </Link>
            <p className="text-4xl text-ink" style={{ fontFamily: "var(--font-neue)", fontWeight: 100, lineHeight: "48px" }}>
              설계에 따라
              <br />
              공간의 경험이 달라집니다.
            </p>
          </div>

          <div className="flex pt-2 text-base leading-none justify-end">
            <nav className="flex flex-col gap-4" style={{ width: "80px", marginRight: "295px" }}>
              {footerLinks.map((link) => (
                <Link key={link.label} href={link.href} className={`menu-underline ${pathname === link.href ? "is-active" : ""}`}>
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="text-base" style={{ width: "176px" }}>
              <Link href="#" target="_blank" rel="noreferrer" className="menu-underline">
                INSTAGRAM
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-40 mb-12 flex h-[72px] items-end justify-between gap-12 text-sm">
          <div className="text-muted">
            <div className="flex flex-col" style={{ gap: "2px" }}>
              <p>
                <span className="font-semibold text-ink">대표자명</span> 김현우
              </p>
              <p>
                <span className="font-semibold text-ink">사업자 등록번호</span> 123-45-67890
              </p>
              <p>
                <span className="font-semibold text-ink">주소</span> 서울특별시 강남구 테헤란로 152, 5층
              </p>
            </div>
          </div>

          <div className="text-muted" style={{ width: "176px" }}>
            <div className="flex flex-col" style={{ gap: "2px" }}>
              <p>
                <span className="font-semibold text-ink">고객센터</span> 1544-2720
              </p>
              <p>
                <span className="font-semibold text-ink">휴대번호</span> 010-0511-0745
              </p>
              <p>
                <span className="font-semibold text-ink">문의메일</span> huin@naver.com
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-ink/30 py-6 text-2xs text-ink">
          <div className="w-40" />
          <p>© 2024 HUIN. All rights reserved.</p>
          <div className="flex justify-end gap-4" style={{ width: "204px" }}>
            {policyLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
}
