import React from 'react';
import ProductCard from '../ProductCard';
import { Container, List, Title, Products } from './styles';

const products = [
  {
  "createdAt": "2022-07-19T04:27:38.577Z",
  "name": "Shoes",
  "avatar": "http://loremflickr.com/640/480/food",
  "desciption": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
  "price": "567.00",
  "id": "1"
  },
  {
  "createdAt": "2022-07-19T19:54:33.675Z",
  "name": "Shoes",
  "avatar": "http://loremflickr.com/640/480/food",
  "desciption": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
  "price": "272.00",
  "id": "2"
  },
  {
  "createdAt": "2022-07-19T20:26:38.920Z",
  "name": "Ball",
  "avatar": "http://loremflickr.com/640/480/food",
  "desciption": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
  "price": "323.00",
  "id": "3"
  },
  {
  "createdAt": "2022-07-19T03:54:53.760Z",
  "name": "Shirt",
  "avatar": "http://loremflickr.com/640/480/food",
  "desciption": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
  "price": "284.00",
  "id": "4"
  },
  {
  "createdAt": "2022-07-19T01:22:19.182Z",
  "name": "Salad",
  "avatar": "http://loremflickr.com/640/480/food",
  "desciption": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
  "price": "111.00",
  "id": "5"
  },
  {
  "createdAt": "2022-07-19T09:25:22.304Z",
  "name": "Shirt",
  "avatar": "http://loremflickr.com/640/480/food",
  "desciption": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
  "price": "883.00",
  "id": "6"
  },
  {
  "createdAt": "2022-07-19T23:24:40.400Z",
  "name": "Pizza",
  "avatar": "http://loremflickr.com/640/480/food",
  "desciption": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
  "price": "831.00",
  "id": "7"
  },
  {
  "createdAt": "2022-07-19T07:06:30.317Z",
  "name": "Gloves",
  "avatar": "http://loremflickr.com/640/480/food",
  "desciption": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
  "price": "119.00",
  "id": "8"
  }
]

const ProductList = () => {
  return (
    <Container>
      <Title>CONHEÇA NOSSOS PRODUTOS</Title>
      <List>
        <Products>
          {products.map((product) => (
            <ProductCard key={product.id} product={product}/>
          ))}
        </Products>
      </List>
    </Container>
  )
}

export default ProductList;