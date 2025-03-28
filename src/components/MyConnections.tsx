import React from "react";
import { Container, Text, Button, Input, Image } from "@/components";
import { ProfilePic } from "../../../assets/Images";
const Login = () => {

  const ConnectionFeed = ()=>{
    return <Container className="w-full p-4 relative flex justify-between items-center drop-shadow-sm border border-[#E1E2FF] rounded-[10px]">
    {/* Profile Pic and Name and Designation */}
    <Container className="flex items-center gap-4">
      {/* Pic */}
      <span className="size-[48px] rounded-full relative overflow-hidden">
        <Image src={ProfilePic.src} alt="pic" fill />
      </span>
      {/* Name and Desigation */}
      <span>
        <Text className="text-sm md:text-base font-semibold text-[#27272E]">
          Tom Cruise
        </Text>
        <Text className="text-xs md:text-sm text-[#425466]">
          UI Developer
        </Text>
      </span>
    </Container>

    <Button className="px-[10px] py-1 rounded-[4px] bg-[#515DEF] text-white text-xs md:text-sm font-medium">
      Message
    </Button>
  </Container>
  }
  return (
    <Container className="w-full h-screen relative bg-sky-300 flex justify-center items-center">
    {/* My Connections Window*/}
      <section className="w-full max-w-[1069px] h-[90%] max-h-[1070px] bg-white rounded-[20px]  flex flex-col gap-5 p-5">
        {/* My Connection Heading */}
        <Container className="w-full relative  h-[70px] border border-[#E1E2FF] rounded-[10px] px-[30px] py-4">
          <Text className="text-base md:text-2xl font-semibold text-black">
            My Connections
          </Text>
        </Container>

      {/* Conections Cards */}
      <Container className="w-full relative grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
          Array.from({length : 12}).map((_,index:number)=>{
            return <ConnectionFeed key={`connection-${index}`}/>
          })
        }
      </Container>

        {/* Invite New Connections Heading */}
        <Container className="w-full relative  h-[70px] border border-[#E1E2FF] rounded-[10px] px-[30px] py-4">
          <Text className="text-base md:text-2xl font-semibold text-black">
          Invite New Connections
          </Text>
        </Container>

        {/* Conections Cards */}
        <Container className="w-full relative grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
          Array.from({length : 6}).map((_,index:number)=>{
            return <ConnectionFeed key={`connection-${index}`}/>
          })
        }
      </Container>
      </section>
    </Container>
  );
};

export default Login;
