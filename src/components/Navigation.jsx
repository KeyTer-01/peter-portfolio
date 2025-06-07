import {
  Box,
  Container,
  Flex,
  Text,
  Button,
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
  Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  Menu,
  Home,
  User,
  Briefcase,
  Folder,
  Mail,
  ArrowDown,
} from "lucide-react";
import { useEffect, useState } from "react";

const MotionBox = motion.create(Box);

const Navigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [showArrow, setShowArrow] = useState(true);

  const navItems = [
    { label: "Home", href: "#home", icon: <Home size={20} /> },
    { label: "About", href: "#about", icon: <User size={20} /> },
    { label: "Experience", href: "#experience", icon: <Briefcase size={20} /> },
    { label: "Projects", href: "#projects", icon: <Folder size={20} /> },
    { label: "Contact", href: "#contact", icon: <Mail size={20} /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        </>
      ) : (
        <>
          <MotionBox
            position="fixed"
            top="0"
            left="0"
            right="0"
            // bg="rgba(0, 0, 0, 0.8)"
            // backdropFilter="blur(10px)"
            // borderBottom="1px"
            // borderColor="whiteAlpha.200"
            zIndex="1000"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Container maxW="6xl">
              <Flex h="16" align="center" justify="space-between">
                <Text fontSize="xl" fontWeight="bold" color="white">
                  {/* Peter Babalola */}
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
              <DrawerContent
                bg="tranparent"
                backdropFilter={"blur(10px)"}
                maxW="250px"
              >
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
      {showArrow && (
        <MotionBox
          position="fixed"
          bottom="8"
          // left="50%"
          transform="translateX(-50%)"
          zIndex="999"
          cursor="pointer"
          onClick={() => handleScroll("#about")}
          // initial={{ opacity: 1 }}
          animate={{
            // opacity: 1,
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon
            as={ArrowDown}
            boxSize={6}
            color="whiteAlpha.600"
            animation="bounce 2s infinite"
          />
        </MotionBox>
      )}
    </>
  );
};

export default Navigation;
