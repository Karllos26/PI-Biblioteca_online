import React, { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from '../CardLivro';
import { cardData } from '../ListaLivros/CardData';
import { Box, Container, Text } from '@chakra-ui/react';
import { useMediaQuery } from 'react-responsive';

const CardsHome: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 992 });

  let slidesToShow = 3; // Define o padrão para desktop

  if (isMobile) {
    slidesToShow = 1;
  } else if (isTablet) {
    slidesToShow = 2;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow,
    

  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getItemsByCategory = (category: string, count: number) => {
    const filteredData = cardData.filter((data) =>
      data.category?.includes(category)
    );
    return filteredData.slice(0, count);
  };

  const randomItems = getItemsByCategory('Mais Lidos', 5);

  return (
    <Box p={4} maxWidth="100vw">
      <Text textAlign="center" fontSize="3xl" fontWeight="bold" mb={4}>
        Destaques
      </Text>
      <Container maxW="90%" mt={12}>
        <Slider ref={sliderRef} {...settings}>
          {randomItems.map((data, index) => (
            
              <Card
              
                key={index}
                heading={data.heading}
                imageUrl={data.imageUrl}
                href={data.href}
                rating={data.rating}
              
              />
           
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default CardsHome;
