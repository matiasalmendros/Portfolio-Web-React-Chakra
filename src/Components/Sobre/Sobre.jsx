import React from 'react';
import { Box, Flex, Image, Text, Heading, List } from '@chakra-ui/react';
import SobreCard from '../SobreCard/SobreCard';
import numero01 from '../../assets/01.png';
import programadorImg from '../../assets/programador 2.png';
import compuImg from '../../assets/compu.png';

const Sobre = () => {
  const Lenguajes = [
    { name: "JavaScript (ES6+)" },
    { name: "Eleventy" },
    { name: "TypeScript" },
    { name: "Node.js" },
    { name: "React" },
    { name: "WordPress" },
    { name: "JavaScript (ES6+)" },
    { name: "Eleventy" },
    { name: "TypeScript" },
    { name: "Node.js" },
    { name: "React" },
    { name: "WordPress" },
  ];

  const column1 = Lenguajes.slice(0, 6);
  const column2 = Lenguajes.slice(6, 12);

  return (
    <Box id="sobre" bg="#191923" color="white" fontFamily="Montserrat" px="10%" py="5%">
      <Box position="relative" w="full" mb="5%">
        <Image src={numero01} alt="Numero 01" w="15%" position="absolute" top="-5%" left="-4%"/>
      </Box>
      <Flex direction={['column', 'row']} borderRadius="80px" bg="#0b0a0f" p="10%" alignItems="center" gap="10%">
        <Box>
          <Image src={programadorImg} alt="Programador" ml="-15em"/>
        </Box>
        <Box>
          <Heading as="h1" fontFamily="Libre Franklin" fontSize="60px" lineHeight="1em" textShadow="0px 3px 0px rgba(0, 0, 0, 1), 0px 3.5px 0px rgba(255, 255, 255, 1)" mb={2}>
            SOBRE
          </Heading>
          <Heading as="h2" fontSize="30px" fontWeight="500" lineHeight="40px" mb="5%">
            Soy estudiante de ingeniería en sistemas y programación
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos doloremque animi corrupti tempore, atque, ex hic distinctio similique cum soluta sit vero! Hic laborum doloremque quas amet et obcaecati rem!
          </Text>
          <Flex lineHeight="0%">
            <List display="flex" flexDirection="column" flex="1" p="0" m="0">
              {column1.map((elemento, index) => (
                <SobreCard key={index} name={elemento.name} />
              ))}
            </List>
            <List display="flex" flexDirection="column" flex="1" p="0" m="0">
              {column2.map((elemento, index) => (
                <SobreCard key={index + 6} name={elemento.name} />
              ))}
            </List>
          </Flex>
        </Box>
      </Flex>
      <Box textAlign="right">
        <Image src={compuImg} alt="Compu" w="10%" h="25%" mt="-14.5em" ml="-15em" position="absolute"/>
      </Box>
    </Box>
  );
};

export default Sobre;
