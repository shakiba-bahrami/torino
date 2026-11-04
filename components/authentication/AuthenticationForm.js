"use client";

import { useState } from "react";
import SendOtpForm from "./SendOtpForm";
import CheckOtpForm from "./CheckOtpForm";

function AuthenticationForm({ setIsLoginOpen }) {
  const [step, setStep] = useState(2);
  const [mobile, setMobile] = useState("");
  
  return (
    <div>
      {step === 1 && <SendOtpForm setStep={setStep} setMobile={setMobile} mobile={mobile} />}
      {step === 2 && <CheckOtpForm setStep={setStep} mobile={mobile} />}
    </div>
  );
}

export default AuthenticationForm;
