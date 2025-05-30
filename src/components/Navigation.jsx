import {
  Box,
  Container,
  Flex,
  Text,
  Button,
  HStack,
  useDisclosure,
  IconButton,
  VStack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useBreakpointValue,
  Tooltip,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Menu, X, Home, User, Briefcase, Folder, Mail } from "lucide-react";

const MotionBox = motion.create(Box);

const Navigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const navItems = [
    { label: "Home", href: "#home", icon: <Home size={20} /> },
    { label: "About", href: "#about", icon: <User size={20} /> },
    { label: "Experience", href: "#experience", icon: <Briefcase size={20} /> },
    { label: "Projects", href: "#projects", icon: <Folder size={20} /> },
    { label: "Contact", href: "#contact", icon: <Mail size={20} /> },
  ];

  const handleScroll = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    onClose();
  };

  return (
    <>
      {!isMobile ? (
        <>
          <MotionBox
            position="fixed"
            top="0"
            left="0"
            h="100vh"
            w="64px"
            bg="gray.900"
            borderRight="1px"
            borderColor="whiteAlpha.200"
            zIndex="1000"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent={"center"}
            py={6}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <VStack spacing={6}>
              {navItems.map((item) => (
                <Tooltip key={item.label} label={item.label} placement="right">
                  <IconButton
                    aria-label={item.label}
                    icon={item.icon}
                    variant="ghost"
                    color="whiteAlpha.800"
                    _hover={{ color: "purple.400", bg: "whiteAlpha.100" }}
                    onClick={() => handleScroll(item.href)}
                    size="lg"
                  />
                </Tooltip>
              ))}
            </VStack>
          </MotionBox>
          {/* <MotionBox
            position="fixed"
            top="0"
            left="0"
            h="100vh"
            w="64px"
            bg="gray.900"
            borderRight="1px"
            borderColor="whiteAlpha.200"
            zIndex="1000"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent={"center"}
            py={6}
          ></MotionBox> */}
        </>
      ) : (
        <>
          <MotionBox
            position="fixed"
            top="0"
            left="0"
            right="0"
            bg="rgba(0, 0, 0, 0.8)"
            backdropFilter="blur(10px)"
            borderBottom="1px"
            borderColor="whiteAlpha.200"
            zIndex="1000"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Container maxW="6xl">
              <Flex h="16" align="center" justify="space-between">
                <Text fontSize="xl" fontWeight="bold" color="white">
                  Peter Babalola
                </Text>

                <IconButton
                  aria-label="Open menu"
                  icon={<Menu />}
                  variant="ghost"
                  color="white"
                  onClick={onOpen}
                />
              </Flex>
            </Container>

            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent bg="gray.900">
                <DrawerCloseButton color="white" />
                <DrawerBody pt={16}>
                  <VStack spacing={6} align="stretch">
                    {navItems.map((item) => (
                      <Button
                        key={item.label}
                        variant="ghost"
                        color="white"
                        size="lg"
                        justifyContent="flex-start"
                        onClick={() => handleScroll(item.href)}
                        _hover={{ color: "purple.400", bg: "whiteAlpha.100" }}
                      >
                        {item.label}
                      </Button>
                    ))}
                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </MotionBox>
        </>
      )}
    </>
  );
};

export default Navigation;
