import React, { useEffect } from 'react';
import { Box, Image, Input, Button, Heading, Text, Flex } from '@chakra-ui/react';
import numero05 from '../../assets/05.png';

const Footer = () => {
    useEffect(() => {
      document.getElementById('registrationForm').addEventListener('submit', function (e) {
        e.preventDefault();
        if (validarFormulario()) {
          // Aquí puedes añadir el mensaje de que se envió correctamente
        }
      });
  
      const inputs = document.querySelectorAll('#registrationForm input');
      inputs.forEach(input => {
        input.addEventListener('input', limpiarError);
      });
  
      return () => {
        inputs.forEach(input => {
          input.removeEventListener('input', limpiarError);
        });
      };
    }, []);
  
    function limpiarError(e) {
      const errorElement = document.getElementById(`${e.target.id}Error`);
      if (errorElement) {
        errorElement.style.display = 'none';
      }
    }

  function validarFormulario() {
    let nombre = document.getElementById('name').value;
    let mensaje = document.getElementById('mensaje').value;
    let email = document.getElementById('email').value;

    let nameError = document.getElementById('nameError');
    let mensajeError = document.getElementById('mensajeError');
    let emailError = document.getElementById('emailError');

    let validar = true;

    if (nombre.trim() === '') {
      nameError.textContent = "El nombre es obligatorio";
      nameError.style.display = 'block';
      validar = false;
    } else if (/\d/.test(nombre)) {
      nameError.textContent = "El nombre no puede contener números";
      nameError.style.display = 'block';
      validar = false;
    } else {
      nameError.style.display = 'none';
    }

    if (mensaje.trim() === '') {
      mensajeError.textContent = "El mensaje es obligatorio";
      mensajeError.style.display = 'block';
      validar = false;
    } else {
      mensajeError.style.display = 'none';
    }

    if (email.trim() === '') {
      emailError.textContent = "El email es obligatorio";
      emailError.style.display = 'block';
      validar = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailError.textContent = 'El email no es válido';
      emailError.style.display = 'block';
      validar = false;
    } else {
      emailError.style.display = 'none';
    }
    
    return validar;
}

  return (
    <Box as="footer" id="footer" display="flex" borderRadius="80px" bg="#0b0a0f" m="13% 10% 10% 17%">
      <Flex w="50%">
        <Image src={numero05} alt="numero05" w="15%" position="absolute" m="-4% 0 0 -3.4%" zIndex={1} />
        <Flex className="cuadroformfooter" display="flex" flexDirection="column" bg="#191923" zIndex="2" borderBottomRightRadius="100px" boxShadow="0 4px 8px rgba(0, 0, 0, 0.3)" w="100%" h="60%" m="10% 0 0 -25%" p="10% 15%" overflow="hidden">
          <form id="registrationForm" className="formulario">
            <Flex display="flex" flexDirection="column" mb="4">
              <label>Nombre</label>
              <Input type="text" id="name" name="name" bg="#0b0a0f" borderRadius="6px" border="none" color="white" placeholder="Ingrese su Nombre" fontSize="18px" p="3%" />
              <span className="error" id="nameError" style={{ display: 'none', color: '#f52a57', minHeight: '10px' }}></span>
            </Flex>
            <Flex display="flex" flexDirection="column" mb="4">
              <label>Mail</label>
              <Input type="email" id="email" name="email" bg="#0b0a0f" borderRadius="6px" border="none" color="white" placeholder="Ingrese su Mail" fontSize="18px" p="3%" />
              <span className="error" id="emailError" style={{ display: 'none', color: '#f52a57', minHeight: '10px' }}></span>
            </Flex>
            <Flex display="flex" flexDirection="column" mb="4">
              <label>Mensaje</label>
              <Input type="text" id="mensaje" name="mensaje" bg="#0b0a0f" borderRadius="6px" border="none" color="white" placeholder="Ingrese su Mensaje" fontSize="18px" p="3%" />
              <span className="error" id="mensajeError" style={{ display: 'none', color: '#f52a57', minHeight: '10px' }}></span>
            </Flex>
            <Flex justify="center" mt="2%">
              <Button id="Button" type="submit" p="3% 5%" bg="#f52a57" color="#fff" border="none" cursor="pointer" fontSize="18px" fontWeight="600">
                Enviar
              </Button>
            </Flex>
          </form>
        </Flex>
      </Flex>
      <Flex w="50%" display="flex" flexDirection="column" p="13% 5%">
        <Heading as="h1" lineHeight="1.5em" fontSize="60px" m="0" textShadow="0px 3px 0px rgba(0, 0, 0, 1), 0px 3.5px 0px rgba(255, 255, 255, 1)">
          Ponte en Contacto
        </Heading>
        <Text fontSize="25px" fontWeight="700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aperiam illo minus esse assumenda magni nostrum?
        </Text>
        <Text mt={4}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente voluptatum nulla fugit? Molestias, impedit quae asperiores esse voluptatum magnam, ipsum expedita alias repellat sequi natus.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
