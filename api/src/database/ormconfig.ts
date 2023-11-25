import { DataSource } from 'typeorm'
import dotenv from 'dotenv'
import Book from '../models/Book'

dotenv.config() // carrega as variáveis de ambiente do arquivo .env

const dataBase = new DataSource({
  type: 'sqlite',
  database: process.env.DATABASE || './src/database/database.sqlite',
  entities: [
    './src/models/*.ts'
  ],
  logging: true, // log das queries executadas
  synchronize: true // cria as tabelas automaticamente
})

dataBase.initialize()
  .then(() => {
    console.log(`Banco de dados inicializado`);
    //startBooks()
  })
  .catch((err) => {
    console.error(`Erro ao inicializar o banco de dados`, err);
  })

export default dataBase

function startBooks() {
  const booksRepository = Book

  books.forEach(async b=> {
    const book = new Book()
    book.heading = b.heading 
    book.imageUrl = b.imageUrl
    book.href = b.href
    book.category = b.category
    book.rating = b.rating
    await book.save()
  })

 
}

export const books = [
  {   
      heading: 'Como Treinar o Seu Dragão',
      imageUrl: 'https://m.media-amazon.com/images/I/71KccJk7rsL._SY425_.jpg',
      href: 'https://drive.google.com/file/d/1N64iV5e2ofvT1nOfHT9aqA1FIFVPQhkw/view',
      category: ['Mais Avaliados', 'Mais Lidos', 'Infantil'],
      rating: 5,
    },
    {
      heading: 'Harry Potter E As Reliquias Da Morte Parte 1',
      imageUrl: 'https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/_043f916aa9efbb0688b45a7b43237130bfcc0a79.jpg',
      href:'https://escolaluizaugusto.com.br/home/wp-content/uploads/2020/06/J.-K.-Rowling-Harry-Potter-e-as-Relíquias-da-Morte-Oficial-1.pdf',
      category: ['Fantasia', 'Mais Lidos']
    },
      {
        heading: 'O SENHOR DOS ANÉIS: A SOCIEDADE DO ANEL',
        imageUrl: 'https://m.media-amazon.com/images/I/41RBd2DvmgL._SY445_SX342_.jpg',
        href: 'http://cabana-on.com/Ler/wp-content/uploads/2017/08/J.R.R.-Tolkien-A-Sociedade-do-Anel-–-O-Senhor-dos-Anéis-–-Vol-1.pdf',
        category: ['Mais Lidos', 'Fantasia', 'Mais Avaliados'],
        rating: 4.9,
      },
      {
        heading: 'O SENHOR DOS ANÉIS: AS DUAS TORRES',
        imageUrl: 'https://m.media-amazon.com/images/I/81lQ5N0QwJL._SY342_.jpg',
        href: 'http://cabana-on.com/Ler/wp-content/uploads/2017/08/J.R.R.-Tolkien-As-Duas-Torres-–-O-Senhor-dos-Anéis-–-Vol-2.pdf',
        category: ['Mais Lidos', 'Fantasia', 'Mais Avaliados'],
        rating: 5,
      },
      {
        heading: 'O SENHOR DOS ANÉIS: O RETORNO DO REI',
        imageUrl: 'https://m.media-amazon.com/images/I/41KWSPU9wcL._SY445_SX342_.jpg',
        href: 'http://cabana-on.com/Ler/wp-content/uploads/2017/08/J.R.R.-Tolkien-O-Retorno-do-Rei-–-O-Senhor-Dos-Anéis-Vol.-3.pdf',
        category:['Classicos', 'Fantasia', 'Mais Avaliados'],
        rating: 4.5,
      }, 
      {
        heading: 'A Barraca do Beijo - Beth Reekles',
        imageUrl: 'https://m.media-amazon.com/images/I/51f9MHtQutL._SY445_SX342_.jpg',
        href: 'https://drive.google.com/file/d/1w67w7gg_OFRioIhjl4l0cwJ1lDJXhTjw/view?usp=sharing',
        category: ['Romance'],
        rating: 3.5,
      },
      {
        heading: 'A Playlist de Hayden - Michelle Falkoff',
        imageUrl: 'https://m.media-amazon.com/images/I/51GM0+N2HdL._SY445_SX342_.jpg',
        href: 'https://drive.google.com/file/d/1g_biVthWFOUSY4up52ae-R4XZa1MyNqH/view?usp=drive_link',
        category: ['Romance'],
        rating: 3.5,
      },
      {
        heading: 'A Sereia - Kiera Cass',
        imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSrs2iUKjIzii-ihyWq5CVaS0RGCkns5H3bzJRjsK1glXswygKp',
        href: 'https://drive.google.com/file/d/1tw2sa-oEP_4sewXgwqYPQDXVENkMmlod/view?usp=drive_link',
        category: ['Romance'],
        rating: 3.5,
      },
      {
        heading: 'As Quatro Rainhas Mortas - Astrid Scholte',
        imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSo9Z9Ab_FRjM_jO4MstoWfaBGHChIBb4jv1PBvjqTNMr4F7usH',
        href: 'https://drive.google.com/file/d/1UukFbzC9TSdfhDAYAIGu-iBzgnCipa4f/view?usp=drive_link',
        category: ['Fantasia'],
        rating: 2,
      },
      {
        heading: 'Cartas de Amor aos Mortos - Ava Dellaira',
        imageUrl: 'https://books.google.com.br/books/publisher/content?id=RcynBAAAQBAJ&hl=pt-BR&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U2AD5F6QeMuM5t5EIXIw4ur55mt4Q&w=1280',
        href: 'https://drive.google.com/file/d/118uyT8DRVfjM8UhOXMkld6ILhoWrU9go/view?usp=drive_link',
        category: ['Romance', 'Mais Avaliados'],
        rating: 5,
      },
      {
        heading: 'Com Amor, Simon - Becky Albertalli',
        imageUrl: 'https://m.media-amazon.com/images/I/516Hh6zREFL.jpg',
        href: 'https://drive.google.com/file/d/1hkSF6hhSrM4HYrNkLTIjeMIWwTkqX65I/view?usp=drive_link',
        category: ['Romance']
      },
      {
        heading: 'Coraline - Neil Gaiman',
        imageUrl: 'https://m.media-amazon.com/images/I/51gzrvHasGL.jpg',
        href: 'https://drive.google.com/file/d/1OxofiHhd9_WlaoELdzPL4wUGoTsduDGb/view?usp=drive_link',
        category: ['Infantil', 'Terror', 'Fantasia', 'Mais Avaliados'],
        rating: 5,
      },
      {
        heading: 'Demonologista - Ed _ Lorraine Warren',
        imageUrl: 'https://books.google.com.br/books/publisher/content?id=meg4DwAAQBAJ&hl=pt-BR&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U26XInlXU2wCeqUPiSRoHRIbhDS4A&w=1280',
        href: 'https://drive.google.com/file/d/1DPcnZNN3YUczGU_qrbIeMDSsgyN1yo07/view?usp=drive_link',
        category: ['Terror','Biografia']
      },
      {
        heading: 'Eu Sei o Que Vocês Fizeram no Verão Passado - Lois Duncan',
        imageUrl: 'https://books.google.com.br/books/publisher/content?id=6HlXEAAAQBAJ&hl=pt-BR&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U3SdXU9Z49Ws-KjcloEr7UdUelH8A&w=1280',
        href: 'https://drive.google.com/file/d/1Uo3qIiyybmx9WTlSQoUhbFOdvD9BGZNL/view?usp=drive_link',
        category: ['Terror'],
        rating: 3,
      },
      {
        heading: 'Me Chame Pelo Seu Nome - André Aciman',
        imageUrl: 'https://m.media-amazon.com/images/I/41o8xAVpNxL.jpg',
        href: 'https://drive.google.com/file/d/1m9mZwo5ZlFM0MYgTPRIPMokzJI-ty5sL/view?usp=drive_link',
        category: ['Romance'],
        rating: 3.5,
      },
      {
        heading: 'O Assassino do Zodíaco - Sam Wilson',
        imageUrl: 'https://m.media-amazon.com/images/I/81GfIfEk6wL._AC_UF1000,1000_QL80_.jpg',
        href: 'https://drive.google.com/file/d/1v0ZnUn28urpx5hjGIrONSGDuIwr86LjP/view?usp=drive_link',
        category: ['Ficção', 'Mais Avaliados'],
        rating: 5,
      }, 
      {
        heading: 'O Bosque das Ilusões Perdidas - Alain-Fournier',
        imageUrl: 'https://m.media-amazon.com/images/I/71iB8Hi6vYL._AC_UF1000,1000_QL80_.jpg',
        href: 'https://drive.google.com/file/d/1nZLUmf6T_FSIKnzT9y1fq6HUSGLZwnqM/view?usp=drive_link',
        category: ['Ficção'],
        
      }, 
      {
        heading: 'O Cemitério - Stephen King',
        imageUrl: 'https://m.media-amazon.com/images/I/8151ymQnnuL._AC_UF1000,1000_QL80_.jpg',
        href: 'https://drive.google.com/file/d/1PxWSf7-M2aBX4LWNgRrIU1a1rOf95ngA/view?usp=drive_link',
        category: ['Terror'],
        rating: 4.5,
      }, 
      {
        heading: 'O Homem de Giz - C. J. Tudor',
        imageUrl: 'https://m.media-amazon.com/images/I/41LuOehnKtL.jpg',
        href: 'https://drive.google.com/file/d/1tKMHkTqxW0vRTwqWifhu8H7ivkJ-LuDq/view?usp=drive_link',
        category: ['Romance', 'Mais Avaliados'],
        rating: 5,
      }, 
      {
        heading: 'O Pequeno Príncipe - Antoine de Saint-Exupéry',
        imageUrl: 'https://m.media-amazon.com/images/I/51nNwwVSclL._SY425_.jpg',
        href: 'https://drive.google.com/file/d/1rC9G2Otb3oUnz6h8vPZdIw9kn6kGbYQk/view?usp=drive_link',
        category: ['Infantil', 'Ficção', 'Mais Avaliados'],
        rating: 5,
      }, 
      {
        heading: 'O Tempo e o Vento - Érico Veríssimo',
        imageUrl: 'https://m.media-amazon.com/images/I/51lV89906rL._SY445_SX342_.jpg',
        href: 'https://drive.google.com/file/d/1a135DY39JpKMfO3Hva1COKDWEBZDifnK/view?usp=drive_link',
        category: ['Ficção'],
      }, 
      {
        heading: 'Os Garotos do Cemitério - Aiden Thomas',
        imageUrl: 'https://m.media-amazon.com/images/I/81cz8NZytZL._AC_UF1000,1000_QL80_.jpg',
        href: 'https://drive.google.com/file/d/1uQ8TN4pfaIBELsVj6i_SLBEjPTm6rxZj/view?usp=drive_link',
        category: ['Ficção', 'Terror'],
        rating: 4.5,
      }, 
      {
        heading: 'Os Sete Maridos de Evelyn Hugo - Taylor Jenkins Reid',
        imageUrl: 'https://m.media-amazon.com/images/I/41xVhz5sL1L._SY445_SX342_.jpg',
        href: 'https://drive.google.com/file/d/1A7HErcIexYh4e7mIZ4mvIUGtNJHa2dW9/view?usp=drive_link',
        category: ['Romance', 'Ficção', 'Mais Avaliados'],
        rating: 5,
      }, 
      {
        heading: 'Pequena Abelha - Chris Cleave',
        imageUrl: 'https://m.media-amazon.com/images/I/410WYgHcyRL.jpg',
        href: 'https://drive.google.com/file/d/1fxYH3sN5P6mmtlZYQA5QBu0iphXn1PTP/view?usp=drive_link',
        category: ['Romance', 'Ficção'],
      }, 
      {
        heading: 'QianQiu - Thousand Autumns',
        imageUrl: 'https://m.media-amazon.com/images/I/91Zd6uL9tkL._AC_UF1000,1000_QL80_.jpg',
        href: 'https://drive.google.com/file/d/1U4yX9ZBLu1ioi8PL09wgZKXGDp-wSR82/view?usp=drive_link',
        category: ['Ficção', 'Romance', 'Fantasia'],
        rating: 5,
      }, 
      {
        heading: 'Sem Amor - Alice Oseman',
        imageUrl: 'https://m.media-amazon.com/images/I/413kDBFfmcL._SY445_SX342_.jpg',
        href: 'https://drive.google.com/file/d/1gAlfYw35PrzIdWYk8xHOaooutZ6AZuQs/view?usp=drive_link',
        category: ['Ficção'],
      }, 
      {
        heading: 'Sorriso de Ônix',
        imageUrl: 'Sorriso_de_onix_logo.png',
        href: 'https://drive.google.com/file/d/1PxWSf7-M2aBX4LWNgRrIU1a1rOf95ngA/view?usp=drive_link',
        category: ['Terror'],
      }, 
      {
        heading: 'The Butcher Boy - Patrick McCabe',
        imageUrl: 'https://m.media-amazon.com/images/I/416vJFoe0TL.jpg',
        href: 'https://drive.google.com/file/d/1yyW_jCnSNMci5vCcvr_A4usKI04gePPW/view?usp=drive_link',
        category: ['Ficção', 'Romance'],
      }, 
      {
        heading: 'Tian Guan Ci Fu_ Benção Oficial do Céu - Mo Xiang Tong Xiu',
        imageUrl: 'https://m.media-amazon.com/images/I/516XZ+3DcGL._SY445_SX342_.jpg',
        href: 'https://drive.google.com/file/d/1iKD18iIgBE9b05M_L42fLzI7xvDUTHJ5/view?usp=drive_link',
        category: ['Romance', 'Fantasia'],
        rating: 5,
      }, 
      {
        heading: 'Uni-duni-tê - M.J. Arlidge',
        imageUrl: 'https://m.media-amazon.com/images/I/91jUNEhWdnL._SY425_.jpg',
        href: 'https://drive.google.com/file/d/1QbFi_J7hmzBEd_277sEgLfpCF3e5qIcM/view?usp=drive_link',
        category: ['Ficção'],
        rating: 3,
      }
];
