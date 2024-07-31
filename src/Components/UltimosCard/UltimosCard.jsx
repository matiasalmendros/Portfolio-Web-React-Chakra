import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

const UltimosCard = ({ imgUrl, code, title, descripcion }) => {
    return (
        <Box className="espacioultimos" marginBottom="8%" width={{ base: "100%", md: "48%", lg: "30%" }}p={{ base: "6%", md: "2%" }}>
            <Image src={imgUrl} m="0" width="100%" height="80%" alt="imagen" />
            <Flex className="textoultimos" gap="5%" width="100%">
                {code.map((elemento, index) => (
                    <Text m="0" color="#f52a57" key={index}>
                        {elemento.name}
                    </Text>
                ))}
            </Flex>
            <Text as="h3" m="0 0 1% 0" fontSize={{ base: "20px", md: "25px" }} align="left">
                {title}
            </Text>
            <Text m="0" align="left">
                {descripcion}
            </Text>
        </Box>
    );
};

export default UltimosCard;
