import { Box, Container, Flex, Text, VStack } from "@chakra-ui/react";
// import { motion } from "framer-motion";
// import {
//   Github,
//   Linkedin,
//   Mail,
//   ExternalLink,
//   Calendar,
//   MapPin,
// } from "lucide-react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";

// const MotionBox = motion(Box);

const Index = () => {
  return (
    <Flex
      minH="100vh"
      position="relative"
      width={"100%"}
      color="white"
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"flex-end"}
      px={[0, "100px"]}
    >
      {/* Background Pattern */}
      <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity="0.05"
        backgroundImage="radial-gradient(circle at 25% 25%, #8b5cf6 0%, transparent 50%), radial-gradient(circle at 75% 75%, #06b6d4 0%, transparent 50%)"
        pointerEvents="none"
        zIndex="-1"
      />

      <Navigation />

      <Box
        // maxW="6xl"
        px={8}
        display={"flex"}
        justifyContent={"center"}
        // bgColor={"orange"}
        width={"100%"}
      >
        <VStack spacing={20} align="stretch">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </VStack>
      </Box>

      {/* Footer */}
      <Box py={8} mt={20} borderTop="1px" borderColor="whiteAlpha.200">
        <Container maxW="6xl">
          <Text textAlign="center" color="whiteAlpha.600" fontSize="sm">
            © 2025 Peter Babalola. Built with React & Chakra UI.
          </Text>
        </Container>
      </Box>
    </Flex>
  );
};

export default Index;
