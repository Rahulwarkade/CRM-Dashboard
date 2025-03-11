import React from "react";
import { Text, Container, Button } from "@/components/common";

const Profile = () => {
  return (
    <Container
      maxWidth="lg"
      padding="lg"
      bgColor="bg-white"
      rounded="lg"
      shadow="md"
      border
    >
      <Text variant="h1" weight="bold" className="mb-4">
        User Profile
      </Text>
      <Text variant="p" className="mb-6">
        Welcome to your profile dashboard
      </Text>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Container padding="md" bgColor="bg-gray-50" rounded="md" border>
          <Text variant="h3" weight="semibold" className="mb-3">
            Personal Information
          </Text>
          <Text variant="p" className="mb-2">
            Manage your personal details
          </Text>
          <Button variant="outline" size="sm" className="mt-2">
            Edit Profile
          </Button>
        </Container>
        <Container padding="md" bgColor="bg-gray-50" rounded="md" border>
          <Text variant="h3" weight="semibold" className="mb-3">
            Account Settings
          </Text>
          <Text variant="p" className="mb-2">
            Update your account preferences
          </Text>
          <Button variant="outline" size="sm" className="mt-2">
            Manage Settings
          </Button>
        </Container>
      </div>
    </Container>
  );
};

export default Profile;
