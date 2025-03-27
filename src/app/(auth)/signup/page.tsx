import React from "react";
import { SignUp } from "@/components";
import { Container } from "@/components/common";

const Page = () => {
  return (
    <Container className="w-full max-w-[1440px] h-screen max-h-[1024px]   mx-auto flex justify-center items-center">
      <SignUp />
    </Container>
  );
};

export default Page;
