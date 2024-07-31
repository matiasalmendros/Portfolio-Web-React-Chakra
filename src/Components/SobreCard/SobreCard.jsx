import React from 'react';
import { Text } from '@chakra-ui/react';

const SobreCard = ({name}) => {
  return (
    <Text>
        {"<"} {name}
    </Text>
  );
};

export default SobreCard;
