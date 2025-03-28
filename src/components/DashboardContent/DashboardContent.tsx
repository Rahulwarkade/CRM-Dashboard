import React from "react";
import { Button, Container, FeedContent, Image, Text } from "@/components";
import { NewYearParty, PetalBg } from "@/assets/Images";
import { FilterIcon, StarIcon } from "@/assets/icons/svgIcons";

const DashboardContent: React.FC = () => {
  return (
    <Container className="w-full relative flex flex-col gap-5 mt-5">
      {/* Header Container */}
      <Container className="w-full h-[278px] relative bg-[#515DEF] rounded-3xl overflow-hidden">
        {/* Background Image Container */}
        <Container className="w-full h-full absolute flex items-center">
          <Image
            src={PetalBg.src}
            alt="backgroundImage"
            width={914}
            height={248}
          />
        </Container>

        <Container className="w-full h-full absolute flex justify-between items-center px-[56px]">
          {/* Heading Container */}
          <Container>
            <Text className="text-white text-base md:text-[30px] font-semibold uppercase">
              Ternding Post This Month
            </Text>
            <Text className="text-sm md:text-lg text-white font-medium capitalize">
              Watching to trending posts in this months
            </Text>
          </Container>
          {/* Svg Image Container */}
          <Image src={NewYearParty.src} alt="svg" width={216} height={252} />
        </Container>
      </Container>

      {/* Filter Container */}
      <Container className="w-full relative flex justify-between items-center py-2.5 px-5 bg-gray_ebf0fb rounded-[5px]">
        {/* Filter */}
        <Container className="w-fit flex gap-2.5">
          <Text
            variant="h3"
            className="text-sm md:text-2xl font-semibold capitalize"
          >
            Filter
          </Text>
          <span className="rounded-full p-[6px] bg-white">
            <StarIcon strokeColor="#838A91" className="relative" />
          </span>
        </Container>

        {/* Filter and Add New Banner Button */}
        <Container className="w-fit flex gap-4">
          <Button
            leftIcon={<FilterIcon strokeColor="#515DEF" className="relative" />}
            className="py-[6px] px-6 border rounded-[5px] border-[#515def]"
          >
            Filter
          </Button>
          <Button className="py-[6px] px-6  rounded-[5px] bg-[#515def] text-white text-sm md:text-base font-semibold">
            Add New Banner
          </Button>
        </Container>
      </Container>

      {/* Feed Section Job Posts */}
      <Container className="w-full relative">
        <FeedContent />
      </Container>
    </Container>
  );
};

export default DashboardContent;
