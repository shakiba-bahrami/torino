"use client";

import { useEffect } from "react";
import { api } from "@/core/config/api.js";
import { isValidMobile } from "@/core/utils/validation";

function Test() {
  // useEffect(() => {
  //   const fetchDate = async () => {
  //     try {
  //       const resp = await api.get("/user/profile");
  //       console.log(resp);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchDate();
  // }, []);


  return <div>تست</div>;
}

export default Test;
