import {
  Box,
  Text,
  VStack,
  HStack,
  Heading,
  Card,
  CardBody,
  Badge,
  Divider,
  Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const MotionBox = motion.create(Box);
const MotionCard = motion.create(Card);

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Frontend Engineer",
      company: "Vatebra Ltd.",
      location: "Lekki, Lagos",
      period: "2023 - Present",
      description: [
        "Contributed to the development of several government websites and web applications using HTML, CSS3, and React.js.",
        "Participated in JAD sessions, code reviews, and monthly technology meetings, providing actionable feedback that improved design and coding practices",
        "Collaborate with cross-functional teams to deliver high-quality products",
        "Utilized Swagger UI and Postman for testing and consuming API endpoints",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Next js",
        "Redux",
        "Adobe XD",
        "Figma",
        "Chakra UI",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Krevus",
      location: "Remote",
      period: "Aug. 2023 - Feb. 2024",
      description: [
        "Worked on a fintech web application, using HTML, CSS3, and React.js to streamline access to quick loans",
        "Collaborated with UX/UI designers to implement design systems",
        "Engaged in weekly code reviews, delivering feedback that significantly enhanced overall code quality and standards",
        "Employed MUI (Material-UI) to develop a visually appealing, responsive, and accessible web application",
      ],
      technologies: ["JavaScript", "React", "Git", "Figma"],
    },
    {
      title: "Frontend Developer - Intern",
      company: "Intelligence Technologies",
      location: "Lagos, Nigeria",
      period: "Mar. 2021 - Oct. 2021",
      description: [
        "Contributed to the development of a user-friendly online Health Insurance Marketplace, providing access to affordable health insurance for over 10,000 individuals across Nigeria",
        "Gained experience with WordPress and accessible plugins to create an ecommerce web application for product sales and bidding.",
      ],
      technologies: ["React", "Redux", "Material UI"],
    },
  ];

  return (
    <>
      <MotionBox
        id="experience"
        py={20}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Flex align="center" justifyContent={"center"} w={"full"}>
          <Flex flexDirection={"column"} w={{ base: "100%", md: "80%" }}>
            <Heading size="xl" color="white" fontWeight="bold" mb={4}>
              Where I&apos;ve Worked
            </Heading>

            <VStack spacing={8} w="full">
              {experiences.map((exp, index) => (
                <MotionCard
                  key={index}
                  w="full"
                  bg="whiteAlpha.50"
                  border="1px"
                  // width={"80%"}
                  borderColor="whiteAlpha.200"
                  _hover={{ borderColor: "purple.400", bg: "whiteAlpha.100" }}
                  transition="all 0.3s ease"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  //   transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CardBody p={8}>
                    <VStack spacing={4} align="flex-start">
                      <HStack justify="space-between" w="full" flexWrap="wrap">
                        <VStack spacing={2} align="flex-start">
                          <Heading size="lg" color="white">
                            {exp.title}
                          </Heading>
                          <Heading size="md" color="purple.400">
                            {exp.company}
                          </Heading>
                        </VStack>
                        <VStack spacing={1} align="flex-end">
                          <HStack color="whiteAlpha.700">
                            <Calendar size={16} />
                            <Text fontSize="sm">{exp.period}</Text>
                          </HStack>
                          <HStack color="whiteAlpha.700">
                            <MapPin size={16} />
                            <Text fontSize="sm">{exp.location}</Text>
                          </HStack>
                        </VStack>
                      </HStack>

                      <VStack spacing={2} align="flex-start" w="full">
                        {exp.description.map((item, idx) => (
                          <HStack key={idx} align="flex-start" spacing={3}>
                            <Text color="purple.400" fontSize="sm" mt="2px">
                              ▸
                            </Text>
                            <Text color="whiteAlpha.800" lineHeight="1.6">
                              {item}
                            </Text>
                          </HStack>
                        ))}
                      </VStack>

                      <Divider borderColor="whiteAlpha.200" />

                      <HStack spacing={2} flexWrap="wrap">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            colorScheme="purple"
                            variant="outline"
                            px={3}
                            py={1}
                            borderRadius="full"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </HStack>
                    </VStack>
                  </CardBody>
                </MotionCard>
              ))}
            </VStack>
          </Flex>
        </Flex>
      </MotionBox>
    </>
  );
};

export default ExperienceSection;
