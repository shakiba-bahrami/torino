"use client";

import { useEffect } from "react";
import { api } from "@/core/config/api.js";

function Test() {
  useEffect(() => {
    const fetchDate = async () => {
      try {
        const resp = await api.get("/user/profile");
        console.log(resp);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDate();
  }, []);
  return <div>تست</div>;
}

export default Test;
