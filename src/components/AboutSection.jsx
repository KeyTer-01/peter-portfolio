import {
  Box,
  Text,
  VStack,
  HStack,
  Heading,
  SimpleGrid,
  Card,
  CardBody,
  Badge,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const AboutSection = () => {
  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Git",
  ];

  return (
    <MotionBox
      id="about"
      py={20}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <VStack spacing={12} align="flex-start">
        <Heading size="xl" color="white" fontWeight="bold">
          <Text as="span" color="purple.400" fontSize="xl" fontWeight="normal">
            01.{" "}
          </Text>
          About Me
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12} w="full">
          <VStack spacing={6} align="flex-start">
            <Text color="whiteAlpha.800" fontSize="lg" lineHeight="1.8">
              Hello! My name is Peter and I enjoy creating things that live on
              the internet. My interest in web development started back in 2018
              when I decided to try editing custom Tumblr themes — turns out
              hacking together a custom reblog button taught me a lot about HTML
              & CSS!
            </Text>

            <Text color="whiteAlpha.800" fontSize="lg" lineHeight="1.8">
              Fast-forward to today, and I've had the privilege of working at an
              advertising agency, a start-up, a huge corporation, and a
              student-led design studio. My main focus these days is building
              accessible, inclusive products and digital experiences for a
              variety of clients.
            </Text>

            <Text color="whiteAlpha.800" fontSize="lg" lineHeight="1.8">
              Here are a few technologies I've been working with recently:
            </Text>

            <SimpleGrid columns={2} spacing={2} w="full">
              {skills.map((skill) => (
                <HStack key={skill} spacing={2}>
                  <Text color="purple.400" fontSize="sm">
                    ▸
                  </Text>
                  <Text color="whiteAlpha.800" fontSize="sm">
                    {skill}
                  </Text>
                </HStack>
              ))}
            </SimpleGrid>
          </VStack>

          <Box>
            <Card bg="whiteAlpha.100" border="1px" borderColor="purple.400">
              <CardBody p={0}>
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Peter Babalola"
                  w="full"
                  h="400px"
                  objectFit="cover"
                  filter="grayscale(100%)"
                  _hover={{ filter: "none" }}
                  transition="filter 0.3s ease"
                />
              </CardBody>
            </Card>
          </Box>
        </SimpleGrid>
      </VStack>
    </MotionBox>
  );
};

export default AboutSection;
