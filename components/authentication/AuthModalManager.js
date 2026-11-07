"use client";
import ModalContainer from "../containers/ModalContainer";
import AuthenticationForm from "./AuthenticationForm";

function AuthModalManager({isLoginOpen,setIsLoginOpen}) {
  if (!isLoginOpen) return null;
  return (
    <ModalContainer setIsLoginOpen={setIsLoginOpen}>
      <AuthenticationForm setIsLoginOpen={setIsLoginOpen} />
    </ModalContainer>
  );
}

export default AuthModalManager;
