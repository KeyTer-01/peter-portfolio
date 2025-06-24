import {
  Box,
  Text,
  Button,
  VStack,
  HStack,
  Heading,
  Icon,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

// import bgImage from "../assets/images/tech-bg.jpg";

const MotionBox = motion.create(Box);
const MotionText = motion.create(Text);
const MotionHeading = motion.create(Heading);

const HeroSection = () => {
  const titles = [
    "Frontend Developer",
    "Web Craftsman",
    "Mobile App Developer",
    "AI Enthusiast",
  ];
  return (
    <>
      <Box
        id="home"
        minH={{ base: "80vh", md: "100vh" }}
        display="flex"
        alignItems="center"
        pt="16"
        px={[8, 40]}
      >
        <VStack spacing={8} align="flex-start" w="full" zIndex={1}>
          <MotionText
            fontSize={{ base: "lg", md: "xl", lg: "xl" }}
            color="purple.400"
            fontWeight="500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hi There, I&apos;m
          </MotionText>

          <MotionHeading
            fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
            fontWeight="bold"
            color="white"
            lineHeight="0.1"
            textShadow="0 0 20px rgba(128, 90, 213, 0.6)"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Peter Babalola.
          </MotionHeading>

          <MotionHeading
            fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
            fontWeight="bold"
            color="whiteAlpha.400"
            lineHeight="0.9"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Typewriter
              words={titles}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </MotionHeading>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <HStack spacing={1} flexWrap="wrap">
              <Link href="https://github.com/KeyTer-01" isExternal>
                <Button
                  size="md"
                  variant="ghost"
                  color="whiteAlpha.800"
                  _hover={{ color: "purple.400", bg: "whiteAlpha.100" }}
                >
                  <Icon as={Github} boxSize={5} />
                </Button>
              </Link>

              <Link href="https://linkedin.com" isExternal>
                <Button
                  size="md"
                  variant="ghost"
                  color="whiteAlpha.800"
                  _hover={{ color: "purple.400", bg: "whiteAlpha.100" }}
                >
                  <Icon as={Linkedin} boxSize={5} />
                </Button>
              </Link>

              <Link href="mailto:peterbabalola44@gmail.com">
                <Button
                  size="md"
                  variant="ghost"
                  color="whiteAlpha.800"
                  _hover={{ color: "purple.400", bg: "whiteAlpha.100" }}
                >
                  <Icon as={Mail} boxSize={5} />
                </Button>
              </Link>
            </HStack>
          </MotionBox>
        </VStack>
      </Box>
    </>
  );
};

export default HeroSection;
