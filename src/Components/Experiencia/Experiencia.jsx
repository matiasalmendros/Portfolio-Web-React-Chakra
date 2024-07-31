import React from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import ExperienciaCard from "../ExperienciaCard/ExperienciaCard";
import numero3 from "../../assets/03.png";
import fto5 from "../../assets/fto 5.png";
import fto6 from "../../assets/fto 6.png";
import fto7 from "../../assets/fto 7.png";
import enlaceexterno from "../../assets/enlaceexterno.svg";
import ubicacion from "../../assets/ubicacion.svg";

const Experiencia = () => {
    const experiencias = [
        {
            "imageUrl": fto5,
            "title": "Tema Halcyon",
            "years": "2019 - Presente",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam officia fugiat earum autem.",
            "skills": [
                { "name": "Javascript", percentage: 80 },
                { "name": "Dart", percentage: 70 },
                { "name": "React", percentage: 65 },
                { "name": "NextJS", percentage: 75 },
                { "name": "Flutter", percentage: 89 },
            ],
            "links": [
                { "url": "https://saimonglobal.com", text: "saimonglobal.com", icon: enlaceexterno },
                { "url": "https://maps.google.com/?q=Dhaka+Bangladesh", text: "Dhaka, Bangladesh", icon: ubicacion },
            ],
        },
        {
            "imageUrl": fto6,
            "title": "Tema Halcyon",
            "years": "2019 - Presente",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam officia fugiat earum autem.",
            "skills": [
                { "name": "Javascript", percentage: 80 },
                { "name": "Dart", percentage: 70 },
                { "name": "React", percentage: 65 },
                { "name": "NextJS", percentage: 75 },
                { "name": "Flutter", percentage: 89 },
            ],
            "links": [
                { "url": "https://saimonglobal.com", text: "saimonglobal.com", icon: enlaceexterno },
                { "url": "https://maps.google.com/?q=Remote+(Toronto,+Canada)", text: "Remote (Toronto, Canada)", icon: ubicacion },
            ],
        },
        {
            "imageUrl": fto7,
            "title": "Tema Halcyon",
            "years": "2019 - Presente",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam officia fugiat earum autem.",
            "skills": [
                { "name": "Javascript", percentage: 80 },
                { "name": "Dart", percentage: 70 },
                { "name": "React", percentage: 65 },
                { "name": "NextJS", percentage: 75 },
                { "name": "Flutter", percentage: 89 },
            ],
            "links": [
                { "url": "https://upwork.com", text: "upwork.com", icon: enlaceexterno },
                { "url": "https://maps.google.com/?q=Remote", text: "Remote", icon: ubicacion },
            ],
        },
    ];

    return (
        <Box as="section" id="experiencia" my="5%" px="10%">
            <Flex justify="center" mb="5%">
                <Image src={numero3} alt="Número 3" width="20%" height="auto" mb="-10%"/>
            </Flex>
            <Heading as="h1" lineHeight="2em" fontSize="60px" textAlign="center" textShadow="0px 3px 0px rgba(0, 0, 0, 1), 0px 3.5px 0px rgba(255, 255, 255, 1)">
                Experiencia Profesional
            </Heading>
            {experiencias.map((elemento, index) => (
                <ExperienciaCard
                    key={index}
                    imageUrl={elemento.imageUrl}
                    title={elemento.title}
                    years={elemento.years}
                    description={elemento.description}
                    skills={elemento.skills}
                    links={elemento.links}
                    reverse={index % 2 !== 0}
                />
            ))}
        </Box>
    );
};

export default Experiencia;
