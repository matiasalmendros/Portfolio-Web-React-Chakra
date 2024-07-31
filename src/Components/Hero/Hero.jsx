import React from "react";
import { Box, Flex, Link, Image, Text, Heading, Button } from "@chakra-ui/react";
import facebookIcon from '../../assets/facebook.svg';
import instagramIcon from '../../assets/instagram.svg';
import twitterIcon from '../../assets/twitter.svg';
import linkedinIcon from '../../assets/linkedin.svg';
import editarIcon from '../../assets/editar.svg';
import programadorImg from '../../assets/programador.png';
import fondoImg from '../../assets/fondofto.png';

const Hero = () => {
  return (
    <Box as="section" id="inicio" p="10% 2% 2% 0" display="flex" justifyContent="space-between" bgImage={`url(${fondoImg})`} bgPos="center" bgSize="cover" bgRepeat="no-repeat">
      <Flex direction="column-reverse" alignItems="center" p="0 4%" gap="3%">
        <Flex direction="column-reverse" h="26.5%" w="35%" alignItems="center">
          <Link href="https://www.facebook.com/zuck"><Image src={facebookIcon} boxSize="1.55em" /></Link>
          <Link href="https://www.instagram.com/zuck"><Image src={instagramIcon} boxSize="1.55em" /></Link>
          <Link href="https://twitter.com/elonmusk"><Image src={twitterIcon} boxSize="1.55em" /></Link>
          <Link href="https://www.linkedin.com/in/reidhoffman"><Image src={linkedinIcon} boxSize="1.55em" /></Link>
          <Link href="mailto:mirot88763@geekjun.com"><Image src={editarIcon} boxSize="1.55em" /></Link>
        </Flex>
        <Box borderLeft="2px solid #fff" h="7%"></Box>
        <Text transform="rotate(270deg)">Seguime</Text>
      </Flex>
      <Box mt="5%">
        <Text color="#f52a57">Hola, mi nombre es</Text>
        <Heading as="h1" pb="2%" fontSize="60px" fontFamily="Libre Franklin">Matias Almendros.</Heading>
        <Heading as="h1" pb="2%" fontSize="60px" fontFamily="Libre Franklin">Construyo cosas para la web.</Heading>
        <Text w="83%" mt="-2%">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus asperiores, consequuntur reiciendis accusantium similique dicta non beatae laudantium ullam repellendus.
        </Text>
        <Link href="#ultimos">
          <Button p="1.2% 1.2%" backgroundColor="#f52a57" color="#fff" border="none" cursor="pointer" fontSize="18px" fontWeight="600">
            Mira mi Portfolio
          </Button>
        </Link>
      </Box>
      <Box m="3% 7% 3% 0">
        <Image src={programadorImg} />
      </Box>
    </Box>
  );
}

export default Hero;
