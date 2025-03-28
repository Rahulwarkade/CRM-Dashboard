"use client";
import React, { useEffect, useState } from "react";
import { Container, Image, Text } from "@/components";
import { Logo } from "@/assets/Images";
import {
  DashboardIcon,
  ConnectionIcon,
  ChatIcon,
  BellIcon,
  ProfileIcon,
  SettingsIcon,
  LougoutIcon,
} from "@/assets/icons/svgIcons";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBar: React.FC = () => {
  const pathname = usePathname();
  const parts = pathname?.split("/");
  const url = `${parts[1]}`;
  const [activeNav, setActiveNav] = useState("dashboard");
  useEffect(() => {
    if (url != "") {
      if (
        url == "connection" ||
        url == "chat" ||
        url == "notification" ||
        url == "profile" ||
        url == "settings" ||
        url == "lougout" ||
        url == "notification"
      ) {
        setActiveNav(url);
      } else {
        setActiveNav("/");
      }
    }
  }, [activeNav, setActiveNav, url]);

  return (
    <>
      <Container className="w-full md:max-w-[291px] h-full rounded-[20px]  relative bg-gray_f9f9f9 p-5">
        {/* Logo Container */}
        <Container className="w-full relative my-[40px] flex items-center justify-center">
          <Image src={Logo.src} alt="Logo" width={214} height={53} />
        </Container>

        {/* Navigations  */}
        <Container className="w-full relative flex flex-col gap-5">
          {[
            {
              routeIcon: (
                <DashboardIcon
                  strokeColor={`${
                    "dashboard" == activeNav ? "#6956E5" : "#878787"
                  }`}
                  className="size-3 md:size-6"
                />
              ),
              routeName: "Dashbaord",
              routeSlug: "/dashboard",
            },
            {
              routeIcon: (
                <ConnectionIcon
                  strokeColor={`${
                    "connection" == activeNav ? "#6956E5" : "#878787"
                  }`}
                  className="size-3 md:size-6"
                />
              ),
              routeName: "My Connection",
              routeSlug: "/connection",
            },
            {
              routeIcon: (
                <ChatIcon
                  strokeColor={`${"chat" == activeNav ? "#6956E5" : "#878787"}`}
                  className="size-3 md:size-6"
                />
              ),
              routeName: "My Chat",
              routeSlug: "/chat",
            },
            {
              routeIcon: (
                <BellIcon
                  strokeColor={`${
                    "notification" == activeNav ? "#6956E5" : "#878787"
                  }`}
                  className="size-3 md:size-6"
                />
              ),
              routeName: "My Notification",
              routeSlug: "/notification",
            },
            {
              routeIcon: (
                <ProfileIcon
                  strokeColor={`${
                    "profile" == activeNav ? "#6956E5" : "#878787"
                  }`}
                  className="size-3 md:size-6"
                />
              ),
              routeName: "My Profile",
              routeSlug: "/profile",
            },
            {
              routeIcon: (
                <SettingsIcon
                  strokeColor={`${
                    "setting" == activeNav ? "#6956E5" : "#878787"
                  }`}
                  className="size-3 md:size-6"
                />
              ),
              routeName: "Settings",
              routeSlug: "/setting",
            },
            {
              routeIcon: (
                <LougoutIcon
                  strokeColor={`${
                    "logout" == activeNav ? "#6956E5" : "#878787"
                  }`}
                  className="size-3 md:size-6"
                />
              ),
              routeName: "Logout",
              routeSlug: "/logout",
            },
          ].map((route, index) => {
            return (
              <Link
                href={route.routeSlug}
                key={`${index}`}
                className="flex gap-4"
              >
                {route.routeIcon}
                <Text
                  className={`text-sm md:text-[18px] text-nowrap ${
                    activeNav == route.routeSlug.slice(1)
                      ? "text-[#6956E5]"
                      : "text-gray_878787"
                  }  capitalize`}
                >
                  {route.routeName}
                </Text>
              </Link>
            );
          })}
        </Container>
      </Container>
    </>
  );
};

export default SideBar;
