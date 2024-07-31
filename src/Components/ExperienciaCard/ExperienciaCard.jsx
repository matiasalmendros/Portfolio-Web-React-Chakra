import React from "react";
import { Box, Flex, Heading, Image, Text, Progress, Link } from "@chakra-ui/react";

const ExperienciaCard = ({ imageUrl, title, years, description, skills, links, reverse }) => {
    return (
        <Flex direction={reverse ? "row-reverse" : "row"} my="3%" alignItems="flex-start">
            <Image src={imageUrl} alt={title} width="60%" pr={reverse ? "0" : "3%"} pl={reverse ? "3%" : "0"} />
            <Box width="40%">
                <Text color="#f52a57" m="0">Proyecto Destacado</Text>
                <Flex alignItems="baseline">
                    <Heading as="h2" size="lg" mr="3%">{title}</Heading>
                    <Text>{years}</Text>
                </Flex>
                <Text m="0">{description}</Text>
                <Flex justify="space-between" width="100%">
                    <Box width="15%">
                        {skills.map((elemento, index) => (
                            <Text margin="10% 0 11% 0" key={index}>{elemento.name}</Text>
                        ))}
                    </Box>
                    <Box width="67%">
                    {skills.map((elemento, index) => (
                        <Box key={index} width="100%" backgroundColor="#0a090e" border="0.2px solid #3c1b2c" borderRadius="10px" overflow="hidden" position="relative" height="6px" margin="5% 0 8% 0"  >
                        <Box  width={`${elemento.percentage}%`} height="100%" backgroundColor="#f52a57" borderRadius="10px"/>
                        </Box>
                    ))}
                    </Box>
                    <Box width="10%">
                        {skills.map((elemento, index) => (
                            <Text margin="10% 0 18% 0" key={index}>{elemento.percentage}%</Text>
                        ))}
                    </Box>
                </Flex>
                <Flex width="90%">
                    {links.map((link, index) => (
                        <Link href={link.url} key={index} display="flex" alignItems="center" color="#f52a57" flex="1">
                            <Image src={link.icon} alt={link.text} width="10%" mr="2%" />
                            {link.text}
                        </Link>
                    ))}
                </Flex>
            </Box>
        </Flex>
    );
}

export default ExperienciaCard;
