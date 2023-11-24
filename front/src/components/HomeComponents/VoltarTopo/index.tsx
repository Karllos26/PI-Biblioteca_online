import React from 'react';
import { Button } from '@chakra-ui/react';
import { FaArrowUp } from 'react-icons/fa';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // Rola suavemente até o topo
  });
};

const ScrollToTopButton = () => {
  return (
    <Button
      onClick={scrollToTop}
      position="fixed"
      bottom="20px"
      right="20px"
      zIndex="1"
      bg="blue.500"
      color="white"
      _focus={{ outline: 'none', boxShadow: 'none' }}
    >
      <FaArrowUp />
    </Button>
  );
};

export default ScrollToTopButton;
