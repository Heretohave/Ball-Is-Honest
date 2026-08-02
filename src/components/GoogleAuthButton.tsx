"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import type { Locale } from "@/i18n/config";

export default function GoogleAuthButton({
  locale,
  signInLabel,
  signOutLabel,
  lessonsLabel,
  buttonClassName,
  theme = "light",
}: {
  locale: Locale;
  signInLabel: string;
  signOutLabel: string;
  lessonsLabel: string;
  buttonClassName: string;
  theme?: "light" | "dark";
}) {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  if (status === "loading") {
    return <div className={`${buttonClassName} invisible`} aria-hidden="true" />;
  }

  if (session?.user) {
    const ringColor = theme === "dark" ? "ring-white/40" : "ring-fairway-100";
    const initial = (session.user.name ?? session.user.email ?? "?").charAt(0).toUpperCase();

    return (
      <div className="relative" ref={menuRef}>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-haspopup="true"
          className="flex items-center rounded-full transition-opacity hover:opacity-80"
        >
          {session.user.image ? (
            <Image
              src={session.user.image}
              alt=""
              width={32}
              height={32}
              className={`rounded-full ring-2 ${ringColor}`}
              referrerPolicy="no-referrer"
            />
          ) : (
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-full bg-fairway-100 text-xs font-semibold text-fairway-700 ring-2 ${ringColor}`}
            >
              {initial}
            </span>
          )}
        </button>

        {open && (
          <div className="absolute right-0 top-full mt-2 w-64 rounded-2xl border border-fairway-100 bg-white shadow-lift overflow-hidden z-50 text-left">
            <div className="flex items-center gap-3 p-4 border-b border-fairway-100">
              {session.user.image && (
                <Image
                  src={session.user.image}
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-full"
                  referrerPolicy="no-referrer"
                />
              )}
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-fairway-900">{session.user.name}</p>
                <p className="truncate text-xs text-fairway-500">{session.user.email}</p>
              </div>
            </div>

            <Link
              href={`/${locale}/lessons`}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-sm font-medium text-fairway-700 transition-colors hover:bg-fairway-50 hover:text-fairway-900"
            >
              {lessonsLabel}
            </Link>

            <button
              type="button"
              onClick={() => signOut({ callbackUrl: `/${locale}` })}
              className="block w-full text-left px-4 py-3 text-sm font-medium text-red-600 transition-colors hover:bg-red-50 border-t border-fairway-100"
            >
              {signOutLabel}
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => signIn("google", { callbackUrl: `/${locale}/lessons` })}
      className={buttonClassName}
    >
      {signInLabel}
    </button>
  );
}
