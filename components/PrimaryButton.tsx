"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { SlArrowDown } from "react-icons/sl";

const PrimaryButton = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex justify-end items-center gap-5 w-full h-full">
        <button className="flex items-center gap-2 border border-white/20 rounded-md p-2">
          {session ? (
            <img
              src={session.user?.image as string}
              alt={`${session.user?.name} profile picture`}
              width={20}
              height={20}
              className="rounded-full"
            />
          ) : (
            <div className="w-[20px] h-[20px] rounded-full bg-white"></div>
          )}

          <span className="text-white text-sm tracking-tight font-medium mr-4">
            {session.user?.name ?? "User"}
          </span>
          <SlArrowDown className="text-white/50" width={5} height={5} />
        </button>
      </div>
    );
  }
  return (
    <div className="flex justify-end items-center gap-5 w-full h-full">
      <button
        onClick={() =>
          signIn("google", { callbackUrl: "http://localhost:3000/dashboard" })
        }
        className="w-fit px-[1.5rem] py-[0.3rem] rounded-md innershadow "
      >
        <span className="text-white text-sm tracking-tight font-medium whitespace-nowrap">
          Sign in
        </span>
      </button>
    </div>
  );
};

export default PrimaryButton;
