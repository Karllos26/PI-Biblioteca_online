import React, { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Container, Text, Flex, Heading, SimpleGrid, Button } from '@chakra-ui/react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

import { cardData } from '../../ListaLivros/CardData';
import Card from '../../CardLivro';
import ScrollToTopButton from '../../VoltarTopo';

const Home: React.FC = () => {
  // Código do componente CardsHome
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
    arrows: false,
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

  // Código do componente HomeListaCategoria
  const renderItemsByCategory = (category: string) => {
    const filteredData = cardData.filter((data) =>
      data.category?.includes(category)
    ).slice(0, 5);

    return (
      <Container maxW="100vw" mt={12} px={4}>
        <Flex justify="space-between" flexWrap="wrap" alignItems="center">
          <Heading size="lg" mb={{ base: 4, md: 0 }}>
            {category}
          </Heading>
          <Link to={`/categoria/${category}`}>
            <Button variant="outline" colorScheme="blue" size="sm">
              Ver Mais
            </Button>
          </Link>
        </Flex>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {filteredData.map((data, index) => (
            <Card key={index} {...data} />
          ))}
        </SimpleGrid>
      </Container>
    );
  }

  return (
    <div>
      {/* Componente CardsHome */}
      <Box p={4} maxWidth="100vw">
        <Text textAlign="center" fontSize="xl" fontWeight="bold" mb={4}>
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

      {/* Componente HomeListaCategoria */}
      {renderItemsByCategory('Classicos')}
      {renderItemsByCategory('Fantasia')}
      {renderItemsByCategory('Mais Lidos')}
      {renderItemsByCategory('Poesias')}
      {renderItemsByCategory('Mais Avaliados')}
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
