import React from "react";
import { Container, Text, Button, Input } from "@/components/common";

const Login = () => {
  return (
    <Container className="w-full h-screen relative bg-sky-300 flex justify-center items-center">
      {/* Messaging Component */}
      <section className="w-full max-w-[1536px] h-[80%] max-h-[1070px] bg-[#FDFDFF] rounded-[20px] border border-grey_e1e2ff">
        {/* Messages Container */}
        <Container className="w-full max-w-[331px] p-4 relative border-r border-grey_e1e2ff flex flex-col gap-6">
          {/* Messaging and Search Bar  */}
          <Container className="w-full relative flex flex-col gap-3">
            {/* Messaging and Chat Icon */}
            <Container className="w-full relative flex items-center justify-between">
              <Text className="text-sm md:text-2xl font-semibold text-black_000929">
                Messaging
              </Text>

              <span className="flex items-center gap-1">
                <Text className="text-xs md:text-sm font-medium text-black_000929">
                  Chat
                </Text>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.02002 7H21.02"
                    stroke="#000929"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    opacity="0.34"
                    d="M6.02002 12H18.02"
                    stroke="#000929"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M10.02 17H14.02"
                    stroke="#000929"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </Container>
            {/* Search Bar */}
            <Container className="w-full h-[46px] relative">
              <Input
                placeholder="Search in dashboard..."
                containerClassName="w-full h-full"
                className="w-full h-full relative rounded-[5px] overflow-hidden bg-blue_f7f7fd placeholder:text-grey_92929d placeholder:text-xs md:placeholder:text-sm placeholder:pl-1 text-center outline-none"
                leftIcon={
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.625 15.75C12.56 15.75 15.75 12.56 15.75 8.625C15.75 4.68997 12.56 1.5 8.625 1.5C4.68997 1.5 1.5 4.68997 1.5 8.625C1.5 12.56 4.68997 15.75 8.625 15.75Z"
                      stroke="#000929"
                      strokeWidth="1.5"
                      stroke-linecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      opacity="0.4"
                      d="M16.5 16.5L15 15"
                      stroke="#000929"
                      strokeWidth="1.5"
                      stroke-linecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
              />
            </Container>
          </Container>

          {/* Profile Section container*/}
          <Container className="w-full relative">
              {/* Profile */}
              <Container className="w-full relative flex gap-3 items-center justify-center h-[66px] bg-blue_f2f2ff rounded-[7px] border border-blue_dfe0eb px-2 py-[10px]">
              <Container className="w-fit relative">
                {/* Star icon */}
                <span className="size-[40px] rounded-full bg-grey_bdbdbd flex justify-center items-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 15.77L16.18 19.5L14.54 12.47L20 7.74L12.81 7.13L10 0.5L7.19 7.13L0 7.74L5.46 12.47L3.82 19.5L10 15.77Z" fill="black" fillOpacity="0.54"/>
                </svg>
                </span>
              </Container>
                {/* Messenger Name and short Description */}
              <Container className="w-full relative flex flex-col">
                  {/* Messenger and recieved time */}
                  <Container className="w-full relative flex justify-center">
                    <span className="text-black text-medium text-sm md:text-base">Support ADMIN</span>
                    <span className="text-[8px] md:text-xs text-grey_a1a1a1">11:48</span>
                  </Container>
                  <span className="text-[8px] md:text-xs text-grey_a1a1a1 line-clamp-1 mr-[38px]">Thank you very much I'm this and that lorem ipsum text...</span>
              </Container>
              </Container>
          </Container>
        </Container>

        {/* Chat Container */}
        <Container className="w-full relative">Chat</Container>
      </section>
    </Container>
  );
};

export default Login;
{/*
  --color-grey_e1e2ff : #E1E2FF;
  --color-grey_92929d : #92929D;
  --color-grey_bdbdbd : #BDBDBD;
  --color-grey_a1a1a1 : #A1A1A1;
  --color-white_fdfdff : #FDFDFF;
  --color-black_000929 : #000929;
  --color-blue_f7f7fd : #F7F7FD;
  --color-blue_f2f2ff : #F2F2FF;
  --color-blue_dfe0eb : #DFE0EB;
*/}
