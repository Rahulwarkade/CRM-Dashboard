import React from "react";
import { Container, NavBar, ProfileWindow, SideBar } from "@/components";

const DashboardLayout: React.FC = () => {
  return (
    <>
      <section className="w-full h-full relative p-[4%] md:px-[7%] md:py-[4%] flex gap-[30px]">
        {/* Side Nav Bar */}
        <Container className="w-fit h-full relative">
          <SideBar />
        </Container>
        {/* Nav Bar and Dashboard Main Content */}
        <Container className="w-full h-full flex flex-col gap-5">
          {/* Nav Bar */}
          <Container className="w-full h-fit">
            <NavBar />
          </Container>
          {/* Dashboard Content */}
          <Container className="w-full h-full">
            <ProfileWindow />
          </Container>
        </Container>
      </section>
    </>
  );
};

export default DashboardLayout;
