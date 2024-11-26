"use client";

import { BackToHome } from "@/components/backToHome/backToHome";
import { useEffect, useState } from "react";

export const UserAgent = ({ userAgent: serverUserAgent }: { userAgent?: string }) => {
  const [userAgent, setUserAgent] = useState<string | undefined>(serverUserAgent);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUserAgent(navigator.userAgent); 
    }
  }, []);

  return (
    <div>
      <BackToHome />
      {userAgent ? (
        <div className="flex font-mono font-semibold text-sm">
          <div className="border p-2">UserAgent</div>
          <div className="border p-2">{userAgent}</div>
        </div>
      ) : (
        <div>No user agent</div>
      )}
    </div>
  );
};
