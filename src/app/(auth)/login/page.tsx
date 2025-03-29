import React from "react";
import { Container, Text, Button, Input, Image } from "@/components";
import { ProfilePic } from "../../../assets/Images";
import { Icons } from "../../../assets/icons";
const Login = () => {
  const PlanFeed = ({
    planDetails,
    isPro,
  }: {
    planDetails: {
      planIcon: any;
      planName: string;
      Subscription: string;
      SubscriptionDuration: string;
      planType: string;
    };
    isPro: boolean;
  }) => {
    {
      /* Plan */
    }
    return (
      <Container
        className={`w-full relative flex flex-col gap-4 px-6 py-10 rounded-[24px] border border-[#EFF0F6] drop-shadow-sm backdrop-blur-sm ${
          isPro && "bg-[#515DEF]"
        }`}
      >
        {/* For Individuals etc. */}
        <Container className="flex gap-[18px] items-center">
          {planDetails.planIcon ? (
            <span className="size-[72px] rounded-[16px] bg-[#ECEBFF] flex justify-center items-center">
              <Image
                src={planDetails.planIcon}
                alt="planicon"
                width={38}
                height={38}
              />
            </span>
          ) : (
            <span className="size-[72px] rounded-[16px] bg-[#ECEBFF] flex justify-center items-center">
              <svg
                width="20"
                height="38"
                viewBox="0 0 20 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="translate-x-1"
              >
                <path
                  d="M19.7275 0C14.599 -6.00908e-08 9.68063 2.00178 6.05427 5.56497C2.4279 9.12816 0.390625 13.9609 0.390625 19C0.390625 24.0391 2.4279 28.8718 6.05426 32.435C9.68063 35.9982 14.599 38 19.7275 38L19.7275 19V0Z"
                  fill="#515DEF"
                />
              </svg>
              <svg
                width="21"
                height="38"
                viewBox="0 0 21 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.727575 38C5.85603 38 10.7744 35.9982 14.4008 32.435C18.0272 28.8718 20.0645 24.0391 20.0645 19C20.0645 13.9609 18.0272 9.12817 14.4008 5.56498C10.7745 2.00178 5.85604 2.5942e-06 0.727582 2.15367e-06L0.727577 19L0.727575 38Z"
                  fill="#B8B1FF"
                />
              </svg>
            </span>
          )}

          {/* For Individuals Heading */}
          <span>
            <Text
              className={`text-base md:text-lg ${
                isPro ? "text-white" : "text-[#6F6C90]"
              }`}
            >
              {planDetails.planName}
            </Text>
            <Text
              className={`text-base md:text-2xl  font-semibold ${
                isPro ? "text-white" : "text-[#170F49]"
              } `}
            >
              {planDetails.planType}
            </Text>
          </span>
        </Container>
        {/* Free */}
        <Container>
          <span>
            <Text>
              <span
                className={`text-2xl md:text-[56px] capitalize font-bold
                ${isPro ? "text-white" : "text-[#170F49]"}`}
              >
                {planDetails.Subscription}
              </span>
              <span
                className={`text-base md:text-xl ${
                  isPro ? "text-white" : "text-[#6F6C90]"
                }`}
              >
                /{planDetails.SubscriptionDuration}
              </span>
            </Text>
          </span>
        </Container>
        {/* What's included */}
        <Container>
          <Text
            className={`text-base md:text-lg font-semibold ${
              isPro ? "text-white" : "text-[#170F49]"
            } `}
          >
            Whats's included
          </Text>
        </Container>

        {/* plans blute points */}
        <Container className="w-full relative flex flex-col gap-5">
          {Array.from({ length: 5 }).map((_, index: number) => {
            return (
              <ul key={`plan-${index}`}>
                <span className="flex gap-[14px] items-center">
                  {isPro ? (
                    <Image
                      src={Icons.CheckCircle2}
                      width={26}
                      height={26}
                      alt="circle"
                    />
                  ) : (
                    <Image
                      src={Icons.CheckCircle1}
                      width={26}
                      height={26}
                      alt="circle"
                    />
                  )}
                  <li
                    className={`text-sm md:text-base ${
                      isPro ? "text-white" : "text-[#170F49]"
                    } `}
                  >
                    All analytics features
                  </li>
                </span>
              </ul>
            );
          })}
        </Container>

        {/* Get started button */}
        <Container>
          <Button
            className={`w-full relative h-[48px] rounded-full  text-base md:text-lg font-medium flex itemx-center justify-center ${
              isPro ? "bg-white text-[#515DEF]" : " bg-[#515DEF] text-white"
            }`}
          >
            Get started
          </Button>
        </Container>
      </Container>
    );
  };
  return (
    <Container className="w-full h-screen relative bg-sky-300 flex justify-center items-center">
      {/* My Connections Window*/}
      <section className="w-full max-w-[1069px]  max-h-[1070px] bg-white rounded-[20px] border border-[#E1E2FF] overflow-hidden">
        {/* Settings Heading */}
        <Container className="w-full relative border-b border-[#E1E2FF]  px-[30px] py-4">
          <Text className="text-base md:text-2xl font-semibold text-black">
            Settings
          </Text>
        </Container>

        {/* General Information, Password and Billing */}
        <Container className="w-full relative flex h-[70px] border-b border-[#E1E2FF] ">
          {/* General Info */}
          <Container className="w-full h-full relative bg-[#515DEF] text-white flex justify-center items-center border border-[#E1E2FF]">
            <Text className="text-sm md:text-base lg:text-lg font-medium">
              General Information
            </Text>
          </Container>
          {/* General Info */}
          <Container className="w-full h-full relative flex justify-center items-center border border-[#E1E2FF]">
            <Text className="text-sm md:text-base lg:text-lg font-medium">
              Change Password
            </Text>
          </Container>
          {/* General Info */}
          <Container className="w-full h-full relative flex justify-center items-center border border-[#E1E2FF]">
            <Text className="text-sm md:text-base lg:text-lg font-medium">
              Billing & Payments
            </Text>
          </Container>
        </Container>

        {/* Billing and Payment Window */}
        <Container className="w-full h-full relative p-[30px] flex flex-col gap-[30px]">
          {/* Billing and Payment Heading */}
          <Container className="w-full relative">
            <Text className="text-base md:text-2xl font-medium text-black">
              Billing & Payments
            </Text>
            <Text className="text-sm md:text-xl text-[#787774]">
              Manage Your Billing and Payments from here. You can also manage
              your payment methods from here.
            </Text>
          </Container>

          {/* Billing Plans Cards */}
          <Container className="w-full relative grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                planIcon: false,
                planName: "For individuals",
                Subscription: "Free",
                SubscriptionDuration: "3 Months",
                planType: "Basic",
              },
              {
                planIcon: Icons.EnterpriseIcon,
                planName: "For Startups",
                Subscription: "$199",
                SubscriptionDuration: "6 Months",
                planType: "Pro",
              },
              {
                planIcon: Icons.ProIcon,
                planName: "For big companies",
                Subscription: "$399",
                SubscriptionDuration: "12 Months",
                planType: "Enterprise",
              },
            ].map((planDetails, index: number) => {
              return (
                <PlanFeed
                  key={`planfeed-${index}`}
                  planDetails={planDetails}
                  isPro={index == 1}
                />
              );
            })}
          </Container>
        </Container>
      </section>
    </Container>
  );
};

export default Login;
