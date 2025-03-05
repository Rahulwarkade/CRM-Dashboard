import Header from "@/components/header/header";

const ProfileLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Header />
      {children}
      <h2>Profile layout</h2>
    </>
  );
};

export default ProfileLayout;
