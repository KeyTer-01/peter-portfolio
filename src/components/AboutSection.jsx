import {
  Box,
  Text,
  VStack,
  Heading,
  Card,
  CardBody,
  Image,
  Flex,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import myImage from "../assets/images/rImage.jpg";
import { Download } from "lucide-react";

const MotionBox = motion.create(Box);

const AboutSection = () => {
  return (
    <MotionBox
      id="about"
      py={20}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <VStack spacing={12} align="center" justify={"center"}>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          gap={12}
          justifyContent={"center"}
        >
          <Box>
            <Card
              bg="whiteAlpha.100"
              border="1px"
              borderColor="purple.400"
              w={"300px"}
            >
              <CardBody p={0}>
                <Image
                  src={myImage}
                  alt="Peter Babalola"
                  w="full"
                  h="280px"
                  objectFit="cover"
                  filter="grayscale(100%)"
                  _hover={{ filter: "none" }}
                  transition="filter 0.3s ease"
                />
              </CardBody>
            </Card>
          </Box>
          <VStack
            spacing={4}
            align="flex-start"
            w={{ base: "full", md: "50%" }}
          >
            <Heading size="xl" color="white" fontWeight="bold">
              About Me
            </Heading>
            <Text color="whiteAlpha.800" fontSize="lg" lineHeight="1.8">
              I&apos;m passionate frontend developer with a strong focus on
              creating userfriendly, efficient, and scalable web applications. A
              fast learner and problem solver, I thrive in optimizing interfaces
              for performance and user experience. With excellent teamwork and
              communication skills, I bring creativity and critical thinking to
              every project
            </Text>
            <Button
              size="md"
              colorScheme="purple"
              variant="outline"
              leftIcon={<Download size={16} />}
              _hover={{
                bg: "purple.500",
                borderColor: "purple.500",
                color: "white",
              }}
            >
              View My CV
            </Button>
          </VStack>
        </Flex>
      </VStack>
    </MotionBox>
  );
};

export default AboutSection;
