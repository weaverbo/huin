"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const transparentLinks = [
  { href: "/projects", label: "PROJECTS" },
  { href: "#", label: "INSTAGRAM" },
];

const solidLinks = [
  { href: "/", label: "HOME" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/contact", label: "CONTACT" },
];

export default function Header() {
  const pathname = usePathname();
  const variant = pathname === "/" ? "transparent" : "solid";
  const isTransparent = variant === "transparent";
  const links = isTransparent ? transparentLinks : solidLinks;
  const textClass = isTransparent ? "text-white" : "text-ink";
  const wrapperClass = isTransparent ? "absolute inset-x-0 top-0 z-50" : "relative z-50 bg-bg";
  const surfaceClass = isTransparent ? "bg-white/20 backdrop-blur-md" : "bg-transparent";

  return (
    <header className={wrapperClass}>
      <div className={`flex h-20 items-center justify-between ${surfaceClass}`}>
        <div className="container-base relative flex items-center justify-between">
          <Link href="/" className={`text-3xl leading-none ${textClass}`}>
            HUIN
          </Link>

          <nav
            className={isTransparent ? "absolute left-1/2 flex -translate-x-1/2 items-center gap-4 text-xs leading-none" : "flex items-center gap-8 text-xs leading-none"}
          >
            {links.map((link) => {
              const isExternal = link.href.startsWith("http") || link.href === "#";

              return (
                <Link key={link.label} href={link.href} className={`${textClass}`} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noreferrer" : undefined}>
                  {link.label}
                </Link>
              );
            })}

            {isTransparent ? (
              null
            ) : null}
          </nav>

          {isTransparent ? (
            <Link href="/contact" className="ml-auto rounded border border-white px-5 py-1 text-xs leading-none text-white">
              CONTACT
            </Link>
          ) : null}
        </div>
      </div>
    </header>
  );
}
