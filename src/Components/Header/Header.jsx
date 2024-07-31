import React from "react";
import { Box, Flex, Link, Image, Heading, Button } from "@chakra-ui/react";
import mailIcon from "../../assets/mail.svg";
import telefonoIcon from "../../assets/telefono.svg";
import facebookIcon from "../../assets/facebook.svg";
import instagramIcon from "../../assets/instagram.svg";
import twitterIcon from "../../assets/twitter.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import editarIcon from "../../assets/editar.svg";
import iconIcon from "../../assets/icono.png";
import listaIcon from "../../assets/lista.svg";

const Header = () => {

  return (
    <Box as="header" position="fixed" w="100%" bg="#191923" borderBottom="1px solid #2b2a38" zIndex="10" h="16.5%">
      <Flex justify="space-between" p="0.7% 10%" bg="#2b2a38" h="20%">
        <Flex align="center" w="35%" gap="5%">
          <Link href="#" display="flex" alignItems="center" color="#b1b2b4" textDecoration="none" whiteSpace="nowrap" fontSize="13px">
            <Image src={mailIcon} alt="mail" w="10%" h="auto" mr="5%" />
            mirot88763@geekjun.com
          </Link>
          <Link href="#" display="flex" alignItems="center" color="#b1b2b4" textDecoration="none" whiteSpace="nowrap" fontSize="13px">
            <Image src={telefonoIcon} alt="telefono" w="10%" h="auto" mr="5%" />
            6953-3698-9523
          </Link>
        </Flex>
        <Flex justify="flex-end" w="15%">
          <Link href="#" mr="6%" textDecoration="none">
            <Image src={facebookIcon} alt="facebook" w="80%" h="80%" />
          </Link>
          <Link href="#" mr="6%" textDecoration="none">
            <Image src={instagramIcon} alt="instagram" w="80%" h="80%" />
          </Link>
          <Link href="#" mr="6%" textDecoration="none">
            <Image src={twitterIcon} alt="twitter" w="80%" h="80%" />
          </Link>
          <Link href="#" mr="6%" textDecoration="none">
            <Image src={linkedinIcon} alt="linkedin" w="80%" h="80%" />
          </Link>
          <Link href="#" mr="6%" textDecoration="none">
            <Image src={editarIcon} alt="editar" w="80%" h="80%" />
          </Link>
        </Flex>
      </Flex>
      <Flex align="center" h="60%" w="80%" m="auto" gap="14%">
        <Flex align="center" w="13%">
          <Image src={iconIcon} alt="icono" w="20%" h="auto" mr="5%" />
          <Heading as="h2" fontSize="20px" fontWeight="bold">
            Logoipsum
          </Heading>
        </Flex>
        <Image src={listaIcon} alt="lista" display="none" />
        <Flex as="nav" justify="space-between" align="center" w="40%" h="50%">
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
        <Button padding="1.2% 1.4%" backgroundColor="#f52a57" color="#fff" border="none" cursor="pointer" fontSize="18px" fontWeight="600">
          Resume
        </Button>
      </Flex>
    </Box>
  );
};

export default Header;