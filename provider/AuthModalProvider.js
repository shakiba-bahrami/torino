"use client";

import AuthModalManager from "@/components/authentication/AuthModalManager";
import Header from "@/components/Header";
import { useState } from "react";

function AuthModalProvider({ children }) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      <Header setIsLoginOpen={setIsLoginOpen} />
      {children}
      <AuthModalManager
        isLoginOpen={isLoginOpen}
        setIsLoginOpen={setIsLoginOpen}
      />
    </>
  );
}

export default AuthModalProvider;
