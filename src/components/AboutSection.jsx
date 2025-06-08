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
    <>
      <Box
        position={"relative"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"100%"}
        p={8}
        py={12}
        id="about"
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h={["115vh", "100vh"]}
          // bgColor="gray.900"
          bgColor="#15131c"
          zIndex={0}
          opacity={0.8}
        />

        <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          zIndex={2}
          display={"flex"}
          h="100vh"
          justifyContent={"center"}
        >
          <VStack
            spacing={12}
            align="center"
            justify={"center"}
            // bgColor={"yellow"}
          >
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
                  _hover={{ boxShadow: "0 0 20px rgba(128, 90, 213, 0.6)" }}
                >
                  <CardBody p={0}>
                    <Image
                      src={myImage}
                      alt="Peter Babalola"
                      w="full"
                      h="280px"
                      objectFit="cover"
                      // filter="grayscale(100%)"
                      // _hover={{ filter: "none" }}
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
                <Heading size="xl" color="white" fontWeight="bold" zIndex={2}>
                  About Me
                </Heading>
                <Text
                  color="whiteAlpha.800"
                  fontSize="lg"
                  lineHeight="1.8"
                  zIndex={2}
                >
                  I&apos;m passionate frontend developer with a strong focus on
                  creating userfriendly, efficient, and scalable web
                  applications. A fast learner and problem solver, I thrive in
                  optimizing interfaces for performance and user experience.
                  With excellent teamwork and communication skills, I bring
                  creativity and critical thinking to every project
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
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/drive/folders/19WlUWsJJk0lQouUlDT5CPq3Km_mMRWxT?usp=sharing",
                      "_blank"
                    )
                  }
                >
                  View My CV
                </Button>
              </VStack>
            </Flex>
          </VStack>
        </MotionBox>
      </Box>
    </>
  );
};

export default AboutSection;
