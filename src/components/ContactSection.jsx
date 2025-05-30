import {
  Box,
  Text,
  VStack,
  HStack,
  Heading,
  Button,
  Icon,
  Link,
  SimpleGrid,
  Card,
  CardBody,
  Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "peterbabalola44@gmail.com",
      href: "mailto:peterbabalola44@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+234 907 769 8077",
      href: "tel:+2349077698077",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lagos, Nigeria",
      href: "#",
    },
  ];

  return (
    <MotionBox
      id="contact"
      py={20}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <VStack spacing={16} align="center" textAlign="center">
        <VStack spacing={6}>
          <Text color="purple.400" fontSize="lg" fontWeight="500">
            04. What's Next?
          </Text>
          <Heading size="2xl" color="white" fontWeight="bold">
            Get In Touch
          </Heading>
          <Text
            color="whiteAlpha.700"
            fontSize="lg"
            maxW="600px"
            lineHeight="1.6"
          >
            I'm currently looking for new opportunities and my inbox is always
            open. Whether you have a question or just want to say hi, I'll try
            my best to get back to you!
          </Text>
        </VStack>

        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          spacing={6}
          w="full"
          maxW="800px"
        >
          {contactInfo.map((info, index) => (
            <MotionCard
              key={index}
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
              <CardBody p={6} textAlign="center">
                <VStack spacing={4}>
                  <Icon as={info.icon} boxSize={8} color="purple.400" />
                  <VStack spacing={2}>
                    <Text color="white" fontWeight="600">
                      {info.label}
                    </Text>
                    <Link
                      href={info.href}
                      color="whiteAlpha.700"
                      _hover={{ color: "purple.400" }}
                      fontSize="sm"
                    >
                      {info.value}
                    </Link>
                  </VStack>
                </VStack>
              </CardBody>
            </MotionCard>
          ))}
        </SimpleGrid>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link href="mailto:peterbabalola44@gmail.com">
            <Button
              size="lg"
              colorScheme="purple"
              variant="outline"
              leftIcon={<Send size={20} />}
              _hover={{
                bg: "purple.500",
                borderColor: "purple.500",
                color: "white",
              }}
              px={8}
              py={6}
              fontSize="lg"
            >
              Say Hello
            </Button>
          </Link>
        </MotionBox>
      </VStack>
    </MotionBox>
  );
};

export default ContactSection;
