import React, { useState } from "react";
import { Box, Button, Image, Heading, Text, Flex, useBreakpointValue } from "@chakra-ui/react";
import TrabajoCard from '../TrabajoCard/TrabajoCard';
import numero02 from '../../assets/02.png';
import foto1PNG from '../../assets/fto 1.png';
import foto2PNG from '../../assets/fto 2.png';
import foto3PNG from '../../assets/fto 3.png';
import foto4PNG from '../../assets/fto 4.png';
import foto11PNG from '../../assets/fto 11.png';
import foto12PNG from '../../assets/fto 12.png';
import foto13PNG from '../../assets/fto 13.png';
import foto14PNG from '../../assets/fto 14.png';

const Trabajo = () => {
    const trabajos = [
        { "imageUrl": foto1PNG, "tittle": "Project Breeze" },
        { "imageUrl": foto2PNG, "tittle": "Command Program" },
        { "imageUrl": foto3PNG, "tittle": "Command Program" },
        { "imageUrl": foto4PNG, "tittle": "Project Illuminate" },
        { "imageUrl": foto11PNG, "tittle": "Project Illuminate" },
        { "imageUrl": foto12PNG, "tittle": "Command Program" },
        { "imageUrl": foto13PNG, "tittle": "Project Breeze" },
        { "imageUrl": foto14PNG, "tittle": "Command Program" },
    ];

    const [objetoPivot, setobjetoPivot] = useState(0);
    const objetosVisibles = 4;
    const tamaño = trabajos.length;

    const siguiente = () => {
        setobjetoPivot((objetoPivot + 1) % tamaño);
    };

    const atras = () => {
        setobjetoPivot((objetoPivot - 1 + tamaño) % tamaño);
    };

    const Trabajosmostrados = trabajos.slice(objetoPivot, objetoPivot + objetosVisibles);
    if (Trabajosmostrados.length < objetosVisibles) {
        Trabajosmostrados.push(...trabajos.slice(0, objetosVisibles - Trabajosmostrados.length));
    }

    return (
        <Box id="trabajo" my="10%" px="10%">
            <Flex justify="space-between" align="center">
                <Box w={useBreakpointValue({base: '100%', sm: '100%', md: '50%', lg: '50%', xl: '50%', xxl: '50%'})}>
                    <Heading as="h1" fontSize={useBreakpointValue({base: '20px', sm: '25px', md: '30px', lg: '40px', xl: '50px', xxl: '60px'})} textShadow="0px 3px 0px rgba(0, 0, 0, 1), 0px 3.5px 0px rgba(255, 255, 255, 1)">
                        Donde he trabajado
                    </Heading>
                    <Text fontSize={useBreakpointValue({base: '13px', sm: '13px', md: '15px', lg: '20px'})} fontWeight="500" lineHeight="40px">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias vero et temporibus? Soluta quod architecto temporibus ab similique atque, dolor tempore et neque quia ducimus tempora nemo a sequi amet.
                    </Text>
                </Box>
                <Box w="20%" display={useBreakpointValue({base: 'none', md: 'flex'})} justifyContent="flex-end" mt={useBreakpointValue({ md: '-30%', lg: '-20%', xl: '-10%'})}>
                    <Image src={numero02} alt="Número 02" w="100%"/>
                </Box>
            </Flex>
            <Flex align="center">
                <Button onClick={atras} backgroundColor="transparent" color="#fff" fontSize={useBreakpointValue({base: '20px', md: '30px'})} fontWeight="600" border="none" cursor="pointer">{"<"}</Button>
                <Flex gap="2%" mx="2%" flex="1" justify="center" display="flex" flexWrap={useBreakpointValue({base: 'wrap', sm: 'wrap', md: 'wrap', lg: ''})}>
                    {Trabajosmostrados.map((elemento, index) => (
                        <TrabajoCard key={index} imageUrl={elemento.imageUrl} tittle={elemento.tittle} />
                    ))}
                </Flex>
                <Button onClick={siguiente} backgroundColor="transparent" color="#fff"fontSize={useBreakpointValue({base: '20px', md: '30px'})} fontWeight="600" border="none" cursor="pointer">{">"}</Button>
            </Flex>
        </Box>
    );
};

export default Trabajo;
