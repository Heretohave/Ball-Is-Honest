"use client";

import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

export default function GoogleAuthButton({
  signInLabel,
  signOutLabel,
  buttonClassName,
  theme = "light",
}: {
  signInLabel: string;
  signOutLabel: string;
  buttonClassName: string;
  theme?: "light" | "dark";
}) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div className={`${buttonClassName} invisible`} aria-hidden="true" />;
  }

  if (session?.user) {
    const textColor = theme === "dark" ? "text-white" : "text-fairway-800";
    const mutedColor = theme === "dark" ? "text-fairway-200/80 hover:text-white" : "text-fairway-500 hover:text-fairway-800";
    return (
      <div className="flex items-center gap-2.5">
        {session.user.image && (
          <Image
            src={session.user.image}
            alt=""
            width={28}
            height={28}
            className="rounded-full ring-2 ring-white/40"
            referrerPolicy="no-referrer"
          />
        )}
        <span className={`text-sm font-medium ${textColor}`}>
          {session.user.name?.split(" ")[0] ?? session.user.email}
        </span>
        <button
          type="button"
          onClick={() => signOut()}
          className={`text-xs font-medium underline underline-offset-2 transition-colors ${mutedColor}`}
        >
          {signOutLabel}
        </button>
      </div>
    );
  }

  return (
    <button type="button" onClick={() => signIn("google")} className={buttonClassName}>
      {signInLabel}
    </button>
  );
}
