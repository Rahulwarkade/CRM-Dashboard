import Header from "@/components/Header/Header";
import { Icons } from "@/assets/icons";
import Image from "next/image";

const ProfileLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Header />
      {children}
      <h2
        className={`text-[color:var(--color-blue_3e91ff)]  text-fs-16  px-16`}
      >
        Profile layout
      </h2>
      <Image src={Icons.Add} alt="add" />
    </>
  );
};

export default ProfileLayout;
