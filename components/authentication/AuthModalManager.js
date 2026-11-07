"use client";
import { useState } from "react";
import ModalContainer from "../containers/ModalContainer";
import AuthenticationForm from "./AuthenticationForm";

function AuthModalManager() {
  const [isLoginOpen, setIsLoginOpen] = useState(true);
  if (!isLoginOpen) return null;
  return (
    <ModalContainer setIsLoginOpen={setIsLoginOpen}>
      <AuthenticationForm setIsLoginOpen={setIsLoginOpen} />
    </ModalContainer>
  );
}

export default AuthModalManager;
