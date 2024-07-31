import React from "react";
import { Box, Image, Link, Text } from "@chakra-ui/react";
import reaccionPng from '../../assets/reaccion.png';

const TrabajoCard = ({ imageUrl, tittle }) => {
    return (
        <Box width="25%" display="flex" flexDirection="column" gap="2%">
            <Link href="#" position="relative">
                <Image src={reaccionPng} position="absolute" width="100%" height="auto" opacity="0" zIndex="2" _hover={{ opacity: 1, transition: "0.7s" }} />
                <Image src={imageUrl} width="100%" height="auto" objectFit="cover" position="relative" zIndex="1" />
            </Link>
            <Text textAlign="center" my="4%">{tittle}</Text>
        </Box>
    );
}

export default TrabajoCard;
