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
  Icon,
  Link,
  Image,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Folder } from "lucide-react";

const MotionBox = motion.create(Box);
const MotionCard = motion.create(Card);

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform built with React and Node.js, featuring user authentication, payment processing, and inventory management.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard that displays current weather conditions and forecasts for multiple cities using external APIs.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      technologies: ["JavaScript", "CSS3", "Weather API", "Chart.js"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing projects and skills with modern animations and responsive design.",
      technologies: ["React", "Framer Motion", "Chakra UI"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
    },
    {
      title: "Blog Platform",
      description:
        "A modern blog platform with markdown support, user authentication, and content management system.",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
    },
    {
      title: "Chat Application",
      description:
        "Real-time chat application with rooms, private messaging, and emoji support using WebSocket technology.",
      technologies: ["Socket.io", "Express", "React", "MongoDB"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <MotionBox
      id="projects"
      py={20}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <VStack spacing={16} align="flex-start">
        <Heading size="xl" color="white" fontWeight="bold">
          <Text as="span" color="purple.400" fontSize="xl" fontWeight="normal">
            03.{" "}
          </Text>
          Some Things I've Built
        </Heading>

        {/* Featured Projects */}
        <VStack spacing={12} w="full">
          {featuredProjects.map((project, index) => (
            <MotionCard
              key={index}
              w="full"
              bg="whiteAlpha.50"
              border="1px"
              borderColor="whiteAlpha.200"
              _hover={{ borderColor: "purple.400", bg: "whiteAlpha.100" }}
              transition="all 0.3s ease"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              //   transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CardBody p={0}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0}>
                  <Box position="relative" overflow="hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      w="full"
                      h="300px"
                      objectFit="cover"
                      filter="grayscale(100%)"
                      _hover={{ filter: "none" }}
                      transition="filter 0.3s ease"
                    />
                    <Box
                      position="absolute"
                      top="0"
                      left="0"
                      right="0"
                      bottom="0"
                      bg="purple.500"
                      opacity="0.3"
                      _hover={{ opacity: "0" }}
                      transition="opacity 0.3s ease"
                    />
                  </Box>
                  <VStack spacing={6} align="flex-start" p={8}>
                    <VStack spacing={4} align="flex-start">
                      <Text color="purple.400" fontSize="sm" fontWeight="500">
                        Featured Project
                      </Text>
                      <Heading size="lg" color="white">
                        {project.title}
                      </Heading>
                      <Text color="whiteAlpha.800" lineHeight="1.6">
                        {project.description}
                      </Text>
                    </VStack>

                    <HStack spacing={2} flexWrap="wrap">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          colorScheme="purple"
                          variant="outline"
                          px={2}
                          py={1}
                          fontSize="xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </HStack>

                    <HStack spacing={4}>
                      <Link href={project.github} isExternal>
                        <Button
                          size="sm"
                          variant="ghost"
                          color="whiteAlpha.800"
                          _hover={{ color: "purple.400" }}
                        >
                          <Icon as={Github} boxSize={5} />
                        </Button>
                      </Link>
                      <Link href={project.live} isExternal>
                        <Button
                          size="sm"
                          variant="ghost"
                          color="whiteAlpha.800"
                          _hover={{ color: "purple.400" }}
                        >
                          <Icon as={ExternalLink} boxSize={5} />
                        </Button>
                      </Link>
                    </HStack>
                  </VStack>
                </SimpleGrid>
              </CardBody>
            </MotionCard>
          ))}
        </VStack>

        {/* Other Projects */}
        <VStack spacing={8} w="full">
          <Heading size="lg" color="white" alignSelf="center">
            Other Noteworthy Projects
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} w="full">
            {otherProjects.map((project, index) => (
              <MotionCard
                key={index}
                h="300px"
                bg="whiteAlpha.50"
                border="1px"
                borderColor="whiteAlpha.200"
                _hover={{
                  borderColor: "purple.400",
                  bg: "whiteAlpha.100",
                  transform: "translateY(-5px)",
                }}
                transition="all 0.3s ease"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                // transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CardBody
                  p={6}
                  display="flex"
                  flexDirection="column"
                  justify="space-between"
                >
                  <VStack spacing={4} align="flex-start" flex="1">
                    <HStack justify="space-between" w="full">
                      <Icon as={Folder} boxSize={8} color="purple.400" />
                      <HStack spacing={2}>
                        <Link href={project.github} isExternal>
                          <Button
                            size="sm"
                            variant="ghost"
                            color="whiteAlpha.700"
                            _hover={{ color: "purple.400" }}
                            p={0}
                          >
                            <Icon as={Github} boxSize={5} />
                          </Button>
                        </Link>
                        <Link href={project.live} isExternal>
                          <Button
                            size="sm"
                            variant="ghost"
                            color="whiteAlpha.700"
                            _hover={{ color: "purple.400" }}
                            p={0}
                          >
                            <Icon as={ExternalLink} boxSize={5} />
                          </Button>
                        </Link>
                      </HStack>
                    </HStack>

                    <Heading size="md" color="white">
                      {project.title}
                    </Heading>

                    <Text
                      color="whiteAlpha.700"
                      fontSize="sm"
                      lineHeight="1.5"
                      flex="1"
                    >
                      {project.description}
                    </Text>
                  </VStack>

                  <HStack spacing={2} flexWrap="wrap" mt={4}>
                    {project.technologies.map((tech) => (
                      <Text key={tech} color="whiteAlpha.600" fontSize="xs">
                        {tech}
                      </Text>
                    ))}
                  </HStack>
                </CardBody>
              </MotionCard>
            ))}
          </SimpleGrid>
        </VStack>
      </VStack>
    </MotionBox>
  );
};

export default ProjectsSection;
