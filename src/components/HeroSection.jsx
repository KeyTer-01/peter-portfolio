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

const MotionBox = motion.create(Box);
const MotionText = motion.create(Text);
const MotionHeading = motion.create(Heading);

const HeroSection = () => {
  return (
    <Box id="home" minH="100vh" display="flex" alignItems="center" pt="16">
      <VStack spacing={8} align="flex-start" w="full">
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
          lineHeight="0.6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Peter Babalola.
        </MotionHeading>

        <MotionHeading
          fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
          fontWeight="bold"
          color="whiteAlpha.500"
          lineHeight="0.9"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I build things for the web.
        </MotionHeading>

        {/* <MotionText
          fontSize={{ base: "lg", md: "xl" }}
          color="whiteAlpha.700"
          maxW="600px"
          lineHeight="1.6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          I&apos;m a software engineer specializing in building exceptional
          digital experiences. Currently, I&apos;m focused on building
          accessible, human-centered products using modern web technologies.
        </MotionText> */}

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <HStack spacing={1} flexWrap="wrap">
            {/* <Button
              size="md"
              colorScheme="purple"
              variant="outline"
              leftIcon={<Download size={20} />}
              _hover={{
                bg: "purple.500",
                borderColor: "purple.500",
                color: "white",
              }}
            >
              My CV
            </Button> */}

            <Link href="https://github.com/KeyTer-01" isExternal>
              <Button
                size="md"
                variant="ghost"
                color="whiteAlpha.800"
                // borderRadius={"full"}
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

        {/* <MotionBox
          position="fixed"
          bottom="8"
          left="50%"
          transform="translateX(-50%)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Icon
            as={ArrowDown}
            boxSize={6}
            color="whiteAlpha.600"
            animation="bounce 2s infinite"
          />
        </MotionBox> */}
      </VStack>
    </Box>
  );
};

export default HeroSection;
