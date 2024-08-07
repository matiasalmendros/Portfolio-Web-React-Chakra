import React from 'react';
import { ChakraProvider, Box } from "@chakra-ui/react";
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Sobre from './Components/Sobre/Sobre';
import Trabajo from './Components/Trabajo/Trabajo';
import Experiencia from './Components/Experiencia/Experiencia';
import Ultimos from './Components/Ultimos/Ultimos';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <ChakraProvider>
      <Box as="section" display="flex" flexDirection="column" bg="#191923" color="white" fontFamily="Montserrat" lineHeight="30px">
        <Header />
        <Hero />
        <Sobre />
        <Trabajo />
        <Experiencia />
        <Ultimos />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
