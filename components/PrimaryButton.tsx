"use client";
import { useSession, signIn, signOut } from "next-auth/react";

const PrimaryButton = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <button
        className="relative inline-flex  overflow-hidden rounded-xl p-[1px] focus:outline-none"
        onClick={() => signOut(
          { callbackUrl: "http://localhost:3000/" }
        )}
      >
        <span className="absolute inset-[-1000%] animate-[spin_15s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#FFFFFF_40%,transparent_45%)]"></span>
        <span
          className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl
            px-5 py-1 text-sm font-medium text-gradient-effect backdrop-blur-2xl `}
        >
          Sign Out
        </span>
      </button>
    );
  }
  return (
    <button
      className="relative inline-flex  overflow-hidden rounded-xl p-[1px] focus:outline-none "
      onClick={() => signIn(
        "google",
        { callbackUrl: `${window.location.origin}/dashboard` }
      )}
    >
      <span className="absolute inset-[-1000%] animate-[spin_15s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#FFFFFF_40%,transparent_45%)]"></span>
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl
            px-5 py-1 text-sm font-medium text-white backdrop-blur-2xl border-[0.5px] border-white/15 `}
      >
        Sign in
      </span>
    </button>
  );
};

export default PrimaryButton;
