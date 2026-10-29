"use client";


import React from 'react';
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Education", href: "/education" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    return (
       <header className="nav-blur fixed inset-x-0 top-0 z-50 border-b border-line">

      <nav className="container-wide flex h-[72px] items-center justify-between">

        <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl border border-line bg-card text-sm font-black text-title">AR
            <span className="text-brand">.</span></span>

          <span className="leading-tight"><span className="block text-sm font-extrabold tracking-tight text-title">Ashfaqur Rashid</span><span className="text-xs text-muted">Developer Portfolio</span></span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} aria-current={active ? "page" : undefined} className={`relative text-sm font-semibold transition ${active ? "text-brand" : "text-muted hover:text-title"}`}>
                {link.label}
                {active && <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-brand" />}
              </Link>
            );
          })}
          <Link href="/lets-talk" className="btn btn-primary">Let&apos;s talk <ArrowUpRight size={15} /></Link>
        </div>

        <button aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-card text-title transition hover:border-brand md:hidden">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

      </nav>

      {
      open &&
      <div className="border-t border-line bg-ink px-5 py-4 md:hidden">
        <div className="container-wide flex flex-col gap-1">
          {
            links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} aria-current={pathname === link.href ? "page" : undefined} className={`rounded-xl px-3 py-3 text-sm font-semibold transition ${pathname === link.href ? "bg-card text-brand" : "text-body hover:bg-card"}`}>
            {link.label}
            </Link>
            )}

          <Link href="/lets-talk" onClick={() => setOpen(false)} className="btn btn-primary mt-2 w-full">Let&apos;s talk</Link>
        </div>
      </div>
      }
    </header>
    );
};

export default Navbar;
