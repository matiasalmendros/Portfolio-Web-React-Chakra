import React, { useState } from "react";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import UltimosCard from "../UltimosCard/UltimosCard";
import numero4 from '../../assets/04.png';
import fto8 from '../../assets/fto 8.png';
import fto9 from '../../assets/fto 9.png';
import fto10 from '../../assets/fto 10.png';
import fto15 from '../../assets/fto 15.png';
import fto16 from '../../assets/fto 16.png';
import fto17 from '../../assets/fto 17.png';

const Ultimos = () => {
  const blogs = [
    {
      imgUrl: fto8,
      code: [
        { name: "Algolia" },
        { name: "WordPress" },
        { name: "PHP" },
      ],
      tittle: "Lorem ipsum dolor, sit amet consectetur.",
      descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime itaque, repellendus consectetur.",
    },
    {
      imgUrl: fto9,
      code: [
        { name: "Algolia" },
        { name: "WordPress" },
        { name: "PHP" },
      ],
      tittle: "Lorem ipsum dolor, sit amet consectetur.",
      descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime itaque, repellendus consectetur.",
    },
    {
      imgUrl: fto10,
      code: [
        { name: "Node" },
        { name: "Express" },
        { name: "Firebase" },
        { name: "Vue" },
      ],
      tittle: "Lorem ipsum dolor, sit amet consectetur.",
      descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime itaque, repellendus consectetur.",
    },
    {
      imgUrl: fto15,
      code: [
        { name: "Algolia" },
        { name: "WordPress" },
        { name: "PHP" },
      ],
      tittle: "Lorem ipsum dolor, sit amet consectetur.",
      descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime itaque, repellendus consectetur.",
    },
    {
      imgUrl: fto16,
      code: [
        { name: "Algolia" },
        { name: "WordPress" },
        { name: "PHP" },
      ],
      tittle: "Lorem ipsum dolor, sit amet consectetur.",
      descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime itaque, repellendus consectetur.",
    },
    {
      imgUrl: fto17,
      code: [
        { name: "Node" },
        { name: "Express" },
        { name: "Firebase" },
        { name: "Vue" },
      ],
      tittle: "Lorem ipsum dolor, sit amet consectetur.",
      descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime itaque, repellendus consectetur.",
    },
  ];

  const [objetoPivot, setObjetoPivot] = useState(3);

  const mostrarMas = () => {
    setObjetoPivot((prevPivot) => prevPivot + 3);
  };

  const mostrarMenos = () => {
    setObjetoPivot(3);
  };

    return (
      <Box as="section" id="ultimos" className="ultimos" textAlign="center" bg="#191923" color="white" m="5% 10% 0 10%">
        <Image src={numero4} alt="Número 4" m="0 0 -2% 0" width="18%" className="numero4 img"/>
        <Heading as="h1" m="0" p="0" className="ultimos h1" fontFamily="Libre Franklin" fontSize="60px" textShadow="0px 3px 0px rgba(0, 0, 0, 1), 0px 3.5px 0px rgba(255, 255, 255, 1)">
          Lo último de los blogs
        </Heading>
        <Heading as="h3" m="4% 0 3% 0" p="0" className="ultimos h3" fontWeight="625" color="#f52a57" fontSize="33px" height="20%">
          Blog
        </Heading>
        <Flex wrap="wrap" className="ultimostextoimagen" gap="3%" >
          {blogs.slice(0, objetoPivot).map((elemento, index) => (
            <UltimosCard key={index} imgUrl={elemento.imgUrl} code={elemento.code} tittle={elemento.tittle} descripcion={elemento.descripcion} />
          ))}
        </Flex>
        <Button p="1.2% 1.2%" backgroundColor="#f52a57" color="#fff" border="none" cursor="pointer" fontSize="18px" fontWeight="600" _hover={{ bg: "#e0214b" }} onClick={objetoPivot < blogs.length ? mostrarMas : mostrarMenos}>
          {objetoPivot < blogs.length ? "Mostrar Más" : "Mostrar Menos"}
        </Button>
      </Box>
    );
  };
  
  
export default Ultimos;
