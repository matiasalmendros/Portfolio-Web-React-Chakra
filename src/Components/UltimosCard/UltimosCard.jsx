import React from "react";
import { Box, Flex, Image, space, Text } from "@chakra-ui/react";

const UltimosCard = ({ imgUrl, code, tittle, descripcion }) => {
    return (
        <Box className="espacioultimos" marginBottom="10%" width="30%">
            <Image src={imgUrl} m="0" width="100%" height="80%" alt="imagen"/>
            <Flex className="textoultimos" gap="3%" width="100%">
                {code.map((elemento, index) => (
                    <Text m="0" color="#f52a57" key={index}>
                        {elemento.name}
                    </Text>
                ))}
            </Flex>
            <Text as="h3" m="0 0 1% 0" fontSize="25px" align="left">
                {tittle}
            </Text>
            <Text m="0" align="left">
                {descripcion}
            </Text>
        </Box>
    );
}

export default UltimosCard;