import React from "react";
import { Container, Image, Text } from "@/components";
import {
  DownArrow,
  MessageIcon,
  NotificationsIcon,
} from "@/assets/icons/svgIcons";
import { Pic } from "@/assets/Images";

const NavBar: React.FC = () => {
  return (
    <Container className="w-full relative flex justify-between pb-4 border-b border-black_c0c0c0 rounded-[4px]">
      {/* Greetings Container */}
      <Container className="w-fit">
        <Text className="text-black_23262f text-lg md:text-[26px] font-semibold">
          Good Morning JohnDoe
        </Text>
        <Text className="text-black_828282 text-sm md:text-base">
          Hope you have a good day
        </Text>
      </Container>

      {/* Controler Container Messages, Notifications, and Profile Icon */}
      <Container className="w-fit flex gap-10 items-center">
        {/* Messages */}
        <MessageIcon className="w-[30px] h-[30px]" strokeColor="black" />
        {/* Notification */}
        <NotificationsIcon className="w-[30px] h-[30px]" strokeColor="black" />
        {/* Profile Pic and Down Arrow */}
        <Container className="flex gap-4 items-center">
          <Container className="size-[50px] relative rounded-full overflow-hidden">
            <Image src={Pic.src} fill alt="pic" />
          </Container>
          <DownArrow className="relative" strokeColor="#23262F" />
        </Container>
      </Container>
    </Container>
  );
};

export default NavBar;
