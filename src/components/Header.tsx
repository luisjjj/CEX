"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CaretDown, List, X, Globe, SignOut } from "@phosphor-icons/react";
import { navigationData, languages, type NavItem } from "@/lib/navigation";
import { createClient } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";

function NavDropdown({
  item,
  isActive,
  onToggle,
  onClose,
}: {
  item: NavItem;
  isActive: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    }
    if (isActive) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isActive, onClose]);

  if (!item.children) {
    return (
      <Link
        href={item.href || "#"}
        className="flex items-center gap-1 px-3 py-2 text-sm lg:text-[15px] font-normal transition-colors duration-200 hover:opacity-70 whitespace-nowrap rounded-lg hover:bg-gray-50"
        onClick={onClose}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div ref={ref} className="relative group">
      <button
        onClick={onToggle}
        className="flex items-center gap-1 px-3 py-2 text-sm lg:text-[15px] font-normal transition-colors duration-200 hover:opacity-70 whitespace-nowrap rounded-lg hover:bg-gray-50"
        aria-expanded={isActive}
      >
        {item.label}
        <CaretDown
          size={14}
          className={`transition-transform duration-200 ${isActive ? "rotate-180" : ""}`}
        />
      </button>

      {isActive && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 hidden lg:block">
          <div
            className={`bg-white rounded-xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-gray-100 py-2 ${
              item.children.some((c) => c.children)
                ? "min-w-[420px]"
                : "min-w-[220px]"
            }`}
          >
            {item.children.some((c) => c.children) ? (
              <div className="grid grid-cols-2 gap-0">
                {item.children.map((group, gi) => (
                  <div
                    key={gi}
                    className={`px-4 py-3 ${gi === 0 ? "border-r border-gray-100" : ""}`}
                  >
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-1">
                      {group.label}
                    </div>
                    {group.children?.map((child, ci) => (
                      <Link
                        key={ci}
                        href={child.href || "#"}
                        className="block px-3 py-2 text-sm text-gray-700 hover:text-brand-dark hover:bg-gray-50 rounded-lg transition-colors duration-150"
                        onClick={onClose}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-1">
                {item.children.map((child, ci) => (
                  <Link
                    key={ci}
                    href={child.href || "#"}
                    className="block px-5 py-2.5 text-sm text-gray-700 hover:text-brand-dark hover:bg-gray-50 transition-colors duration-150"
                    onClick={onClose}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileNavDropdown({
  item,
  isOpen,
  onToggle,
}: {
  item: NavItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  if (!item.children) {
    return (
      <Link
        href={item.href || "#"}
        className="block py-3 text-base font-normal border-b border-gray-100"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-3 text-base font-normal border-b border-gray-100"
        aria-expanded={isOpen}
      >
        {item.label}
        <CaretDown
          size={16}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="pl-4 pb-2">
          {item.children.map((child, ci) =>
            child.children ? (
              <div key={ci} className="py-1">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider py-2">
                  {child.label}
                </div>
                {child.children.map((sub, si) => (
                  <Link
                    key={si}
                    href={sub.href || "#"}
                    className="block py-2.5 text-sm text-gray-600 border-b border-gray-50"
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={ci}
                href={child.href || "#"}
                className="block py-2.5 text-sm text-gray-600 border-b border-gray-50"
              >
                {child.label}
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileOpenItems, setMobileOpenItems] = useState<number[]>([]);
  const [langOpen, setLangOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const sb = createClient();
    if (!sb) return;
    sb.auth.getUser().then((result: { data: { user: User | null } }) => setUser(result.data.user));
    const sub = sb.auth.onAuthStateChange(
      (_event: string, session: { user: User | null } | null) => setUser(session?.user ?? null)
    );
    return () => sub.data.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleLogout = async () => {
    const client = createClient();
    if (!client) return;
    await client.auth.signOut();
    router.push("/");
    router.refresh();
  };

  const toggleMobileItem = (index: number) => {
    setMobileOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 border-b border-gray-100 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
          : "bg-white"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-12">
        <div className="relative flex items-center justify-between h-[88px] lg:h-[100px]">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <img
              src="/images/logo.svg"
              alt="cextradevip"
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Nav - centered */}
          <nav className="hidden lg:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
            {navigationData.map((item, index) => (
              <NavDropdown
                key={index}
                item={item}
                isActive={activeDropdown === index}
                onToggle={() =>
                  setActiveDropdown(activeDropdown === index ? null : index)
                }
                onClose={() => setActiveDropdown(null)}
              />
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4 ml-auto">
            {/* Language selector */}
            <div className="relative hidden lg:block">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-150"
              >
                <Globe size={15} />
                EN
                <CaretDown
                  size={12}
                  className={`transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
                />
              </button>
              {langOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-gray-100 py-2 min-w-[160px] z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className={`block w-full text-left px-4 py-2 text-sm transition-colors duration-150 ${
                        lang.code === "en"
                          ? "text-brand-dark font-medium bg-gray-50"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                      onClick={() => setLangOpen(false)}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Auth buttons */}
            {user ? (
              <div className="hidden lg:flex items-center gap-3">
                <span className="text-sm text-gray-600 truncate max-w-[120px]">
                  {user.email}
                </span>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-1.5 px-5 py-2.5 text-sm font-medium text-brand-dark border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-200"
                >
                  <SignOut size={15} />
                  Sign out
                </button>
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="hidden lg:inline-flex items-center px-6 py-2.5 text-sm font-medium text-brand-dark border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-200"
                >
                  Sign in
                </Link>
                <Link
                  href="/signup"
                  className="hidden lg:inline-flex items-center px-6 py-2.5 text-sm font-medium text-black bg-brand-yellow rounded-lg hover:bg-brand-yellow-hover transition-all duration-200 shadow-sm"
                >
                  Register
                </Link>
              </>
            )}

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex items-center justify-center w-11 h-11 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={24} /> : <List size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[88px] bg-white z-40 overflow-y-auto">
          <div className="px-5 py-4">
            {navigationData.map((item, index) => (
              <MobileNavDropdown
                key={index}
                item={item}
                isOpen={mobileOpenItems.includes(index)}
                onToggle={() => toggleMobileItem(index)}
              />
            ))}

            <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
              {user ? (
                <>
                  <div className="text-sm text-gray-600 text-center truncate">
                    {user.email}
                  </div>
                  <button
                    onClick={() => { handleLogout(); setMobileOpen(false); }}
                    className="block w-full text-center px-5 py-3 text-sm font-medium text-brand-dark border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-200"
                  >
                    Sign out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="block w-full text-center px-5 py-3 text-sm font-medium text-brand-dark border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-200"
                    onClick={() => setMobileOpen(false)}
                  >
                    Sign in
                  </Link>
                  <Link
                    href="/signup"
                    className="block w-full text-center px-5 py-3 text-sm font-medium text-black bg-brand-yellow rounded-lg hover:bg-brand-yellow-hover transition-all duration-200"
                    onClick={() => setMobileOpen(false)}
                  >
                    Register
                  </Link>
                </>
              )}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Languages
              </div>
              <div className="grid grid-cols-3 gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`px-3 py-2 text-xs rounded-lg transition-colors duration-150 ${
                      lang.code === "en"
                        ? "bg-brand-dark text-white font-medium"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
