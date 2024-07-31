import React from "react";
import { Box, Flex, Heading, Image, Text, Link, useBreakpointValue } from "@chakra-ui/react";

const ExperienciaCard = ({ imageUrl, title, years, description, skills, links, reverse }) => {
    const flexDirection = useBreakpointValue({ base: "column", lg: reverse ? "row-reverse" : "row" });
    const imageWidth = useBreakpointValue({ base: "100%", lg: "60%" });
    const boxWidth = useBreakpointValue({ base: "100%", lg: "40%" });
    const showImage = useBreakpointValue({ base: false, lg: true });
    const projectMarginY = useBreakpointValue({ base: "6%", sm: "6%", md: "3%" });

    return (
        <Flex direction={flexDirection} my={projectMarginY} alignItems="flex-start">
            {showImage && (
                <Image src={imageUrl} alt={title} width={imageWidth} pr={reverse ? "0" : { lg: "3%" }} pl={reverse ? { lg: "3%" } : "0"} />
            )}
            <Box width={boxWidth}>
                <Text color="#f52a57" m="0">Proyecto Destacado</Text>
                <Flex alignItems="baseline">
                    <Heading as="h2" fontSize={useBreakpointValue({ base: '20px', sm: '25px', md: '30px', lg: '40px', xl: '50px', xxl: '60px' })} mr="3%">{title}</Heading>
                    <Text>{years}</Text>
                </Flex>
                <Text m="0">{description}</Text>
                <Flex justify="space-between" width="100%" display={useBreakpointValue({ base: 'none', xl: 'flex' })}>
                    <Box width="15%">
                        {skills.map((elemento, index) => (
                            <Text margin="10% 0 11% 0" key={index} whiteSpace="nowrap">{elemento.name}</Text>
                        ))}
                    </Box>
                    <Box width={useBreakpointValue({ lg: '55%', xl: '67%' })}>
                        {skills.map((elemento, index) => (
                            <Box key={index} width="100%" backgroundColor="#0a090e" border="0.2px solid #3c1b2c" borderRadius="10px" overflow="hidden" position="relative" height="6px" m={useBreakpointValue({ xl: '5% 0 10% 0' })}>
                                <Box width={`${elemento.percentage}%`} height="100%" backgroundColor="#f52a57" borderRadius="10px" />
                            </Box>
                        ))}
                    </Box>
                    <Box width="10%">
                        {skills.map((elemento, index) => (
                            <Text margin="10% 0 18% 0" key={index} whiteSpace="nowrap">{elemento.percentage}%</Text>
                        ))}
                    </Box>
                </Flex>
                <Flex width="90%" direction="column">
                    {links.map((link, index) => (
                        <Link href={link.url} key={index} display="flex" alignItems="center" color="#f52a57" my="2%">
                            <Image src={link.icon} width="5%" mr="2%" />
                            {link.text}
                        </Link>
                    ))}
                </Flex>
            </Box>
        </Flex>
    );
};

export default ExperienciaCard;
