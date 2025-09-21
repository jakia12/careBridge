"use client";

import Link from "next/link";
import { useState } from "react";
import { stack as Menu } from "react-burger-menu";

const items = [
  { href: "/", label: "Home", icon: "ti-home", active: true },
  { href: "/about", label: "About", icon: "ti-info-alt" },
  { href: "/events", label: "Events", icon: "ti-calendar" },
  { href: "/causes", label: "Causes", icon: "ti-heart" },
  { href: "/blog", label: "Blog", icon: "ti-pencil-alt" },
  { href: "/contact", label: "Contact", icon: "ti-email" },
  { href: "/causes", label: "Donate Now", icon: "ti-gift" },
];

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);

  return (
    <Menu
      right
      isOpen={isOpen}
      onStateChange={(s) => setIsOpen(s.isOpen)}
      pageWrapId={"page-wrap"}
      outerContainerId={"outer-container"}
      burgerButtonClassName={"bm-burger-button"}
      crossButtonClassName={"bm-cross-button"}
      itemListClassName={"bm-item-list"}
      overlayClassName={"bm-overlay"}
      width={320}
    >
      <nav className="menu-nav">
        {items.map((it) => (
          <Link
            key={it.href}
            href={it.href}
            className={`menu-link ${it.active ? "is-active" : ""}`}
            onClick={close}
          >
            <i className={it.icon} aria-hidden="true" />
            <span>{it.label}</span>
          </Link>
        ))}
      </nav>
    </Menu>
  );
}
