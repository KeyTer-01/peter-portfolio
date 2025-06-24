import { Box, Container, Flex, Text, VStack } from "@chakra-ui/react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
// import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import bgImage from "../assets/images/tech-bg.jpg";

const Index = () => {
  return (
    <>
      <Flex
        minH="100vh"
        position="relative"
        width={"100%"}
        color="white"
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"flex-end"}
      >
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

        <Box display={"flex"} justifyContent={"center"} width={"100%"}>
          <VStack spacing={20} align="stretch">
            <Box
              position="fixed"
              top={0}
              left={0}
              w="100%"
              h="100vh"
              bgImage={`url(${bgImage})`}
              bgSize="cover"
              bgPosition="center"
              bgRepeat="no-repeat"
              bgColor="gray.900"
              zIndex={0}
              opacity={0.05}
              filter={"blur(8px)"}
            />
            <HeroSection />
            <AboutSection />
            <Flex flexDirection={"column"} px={[8, "100px"]}>
              <ExperienceSection />
              {/* <ProjectsSection /> */}
              <ContactSection />
            </Flex>
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
    </>
  );
};

export default Index;
