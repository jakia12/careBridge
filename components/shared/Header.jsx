"use client";

import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";

export default function Header() {
  return (
    <div className="primary-header-one primary-header">
      <div className="container">
        <div className="primary-header-inner">
          <div className="header-logo">
            <Link href="/">
              <img src="/images/logo-dark.png" alt="Logo" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="header-menu-wrap d-none d-lg-block">
            <ul className="dl-menu">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/events">Events</Link>
              </li>
              <li>
                <Link href="/causes">Causes</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="header-right">
            <div className="search-icon dl-search-icon">
              <i className="ti-search"></i>
            </div>
            <Link
              className="default-btn d-none d-lg-inline-block"
              href="/causes"
            >
              Donate Now<span></span>
            </Link>

            {/* Mobile Burger */}
            <div className="d-lg-none">
              <HamburgerMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
