import React, { useState } from "react";
import { Box, Flex, Link, Image, Heading, Button, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import mailIcon from "../../assets/mail.svg";
import telefonoIcon from "../../assets/telefono.svg";
import facebookIcon from "../../assets/facebook.svg";
import instagramIcon from "../../assets/instagram.svg";
import twitterIcon from "../../assets/twitter.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import editarIcon from "../../assets/editar.svg";
import iconIcon from "../../assets/icono.png";
import cv from "../../Docs/CV.pdf";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <Box as="header" position="fixed" w="100%" bg="#191923" borderBottom="1px solid #2b2a38" zIndex="10" h="16.5%">
      <Flex justify="space-between" p="0.7% 10%" bg="#2b2a38" h="30%">
        <Flex align="center" w="50%" gap={useBreakpointValue({ base: '15%', lg: '10%', xl: '5%' })}>
          <Link href="mailto:mirot88763@geekjun.com" display="flex" alignItems="center" color="#b1b2b4" textDecoration="none" whiteSpace="nowrap" fontSize="13px">
            <Image src={mailIcon} alt="mail" w="10%" h="auto" mr="5%" />
            mirot88763@geekjun.com
          </Link>
          <Link href="tel:+695336989523" display="flex" alignItems="center" color="#b1b2b4" textDecoration="none" whiteSpace="nowrap" fontSize="13px">
            <Image src={telefonoIcon} alt="telefono" w="10%" h="auto" mr="5%" />
            6953-3698-9523
          </Link>
        </Flex>
        <Flex justify="flex-end" w="15%" display={useBreakpointValue({ base: 'none', md: 'flex' })} flexDirection="row">
          <Link href="https://www.facebook.com/zuck" mr="6%" textDecoration="none">
            <Image src={facebookIcon} alt="facebook" w="100%" h="100%" />
          </Link>
          <Link href="https://www.instagram.com/zuck" mr="6%" textDecoration="none">
            <Image src={instagramIcon} alt="instagram" w="100%" h="100%" />
          </Link>
          <Link href="https://twitter.com/elonmusk" mr="6%" textDecoration="none">
            <Image src={twitterIcon} alt="twitter" w="100%" h="100%" />
          </Link>
          <Link href="https://www.linkedin.com/in/reidhoffman" mr="6%" textDecoration="none">
            <Image src={linkedinIcon} alt="linkedin" w="100%" h="100%" />
          </Link>
          <Link href="mailto:mirot88763@geekjun.com" mr="6%" textDecoration="none">
            <Image src={editarIcon} alt="editar" w="100%" h="100%" />
          </Link>
        </Flex>
      </Flex>
      <Flex align="center" h="60%" w="100%" m="auto" gap="14%">
        <Flex align="center" mx={useBreakpointValue({ base: '10%', sm: '10%', md: '10%', lg: '', xl: '', xxl: '' })} position="relative">
          <IconButton display={useBreakpointValue({ base: 'flex', lg: 'none' })} icon={<HamburgerIcon />} bg="#191923" color="#f52a57" border="none" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
          {isOpen && (
            <Flex direction="column" align="center" mt={2} position="absolute" top="100%" left="0" right="0" bg="#2b2a38" p={2} borderRadius="md" boxShadow="md" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <Link href="#inicio" color="#fff" textDecoration="none" transition="border 0.3s" p="1% 3%" border="2px solid transparent" _hover={{ bg: "#f52a57", color: "#fff" }}>
                Inicio
              </Link>
              <Link href="#sobre" color="#fff" textDecoration="none" transition="border 0.3s" p="1% 3%" border="2px solid transparent" _hover={{ bg: "#f52a57", color: "#fff" }}>
                Sobre
              </Link>
              <Link href="#experiencia" color="#fff" textDecoration="none" transition="border 0.3s" p="1% 3%" border="2px solid transparent" _hover={{ bg: "#f52a57", color: "#fff" }}>
                Experiencia
              </Link>
              <Link href="#trabajo" color="#fff" textDecoration="none" transition="border 0.3s" p="1% 3%" border="2px solid transparent" _hover={{ bg: "#f52a57", color: "#fff" }}>
                Trabajo
              </Link>
              <Link href="#footer" color="#fff" textDecoration="none" transition="border 0.3s" p="1% 3%" border="2px solid transparent" _hover={{ bg: "#f52a57", color: "#fff" }}>
                Contacto
              </Link>
            </Flex>
          )}
        </Flex>
        <Flex align="center" w="13%" display={useBreakpointValue({ base: 'none', md: 'flex' })} ml="-5%">
          <Image src={iconIcon} alt="icono" w="20%" h="auto" mr="5%" />
          <Heading as="h2" fontSize="20px" fontWeight="bold">
            Logoipsum
          </Heading>
        </Flex>
        <Flex as="nav" align="center" w="40%" h="50%" display={{ base: "none", lg: "flex" }} ml={useBreakpointValue({ lg: '-5%', xl: '-5%', xxl: '-10%' })}>
          <Link href="#inicio" color="#fff" textDecoration="none" transition="border 0.3s" p="1% 3%" border="2px solid transparent" _hover={{ bg: "#f52a57" }}>
            Inicio
          </Link>
          <Link href="#sobre" color="#fff" textDecoration="none" transition="border 0.3s" p="1% 3%" border="2px solid transparent" _hover={{ bg: "#f52a57" }}>
            Sobre
          </Link>
          <Link href="#experiencia" color="#fff" textDecoration="none" transition="border 0.3s" p="1% 3%" border="2px solid transparent" _hover={{ bg: "#f52a57" }}>
            Experiencia
          </Link>
          <Link href="#trabajo" color="#fff" textDecoration="none" transition="border 0.3s" p="1% 3%" border="2px solid transparent" _hover={{ bg: "#f52a57" }}>
            Trabajo
          </Link>
          <Link href="#footer" color="#fff" textDecoration="none" transition="border 0.3s" p="1% 3%" border="2px solid transparent" _hover={{ bg: "#f52a57" }}>
            Contacto
          </Link>
        </Flex>
        <Link href={cv}>
          <Button p="25% 35%" backgroundColor="#f52a57" color="#fff" border="none" cursor="pointer" fontSize="18px" fontWeight="600">
            Resume
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Header;
