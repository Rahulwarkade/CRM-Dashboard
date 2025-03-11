import React from "react";
import { Container, Text, Button } from "@/components/common";

const Login = () => {
  return (
    <Container
      maxWidth="md"
      padding="lg"
      bgColor="bg-white"
      rounded="lg"
      shadow="md"
      border
    >
      <Text variant="h2" align="center" weight="bold" className="mb-6">
        Login
      </Text>
      <Text className="mb-4">Please enter your credentials to login</Text>
      <div className="mt-6">
        <Button fullWidth>Sign In</Button>
      </div>
    </Container>
  );
};

export default Login;
