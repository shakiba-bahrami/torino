"use client";

import { useState } from "react";
import SendOtpForm from "./SendOtpForm";
import CheckOtpForm from "./CheckOtpForm";

function AuthenticationForm({ setIsLoginOpen }) {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [code, setCode] = useState("");

  return (
    <div>
      {step === 1 && (
        <SendOtpForm setStep={setStep} setMobile={setMobile} mobile={mobile} setCode={setCode} setIsLoginOpen={setIsLoginOpen}/>
      )}
      {step === 2 && <CheckOtpForm setStep={setStep} setMobile={setMobile} mobile={mobile} code={code} setIsLoginOpen={setIsLoginOpen}/>}
    </div>
  );
}

export default AuthenticationForm;
