import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard';
import { Container, List, Title, Products, SearchBox, Search } from './styles';
import { useAppContext } from '../../contexts/AppContext';
import { AiOutlineSearch } from 'react-icons/ai';

const ProductList = () => {
  const { productList } = useAppContext();

  const [products, setProducts] = useState([]);
  const [searchItem, setSearchItem] = useState([]);

  useEffect(() => {
    const filteredData = productList.filter((item) => item.name.toString().toLowerCase().includes(searchItem.toString().toLowerCase()))
    setProducts(filteredData);
  }, [searchItem, productList]);

  return (
    <Container>
      <SearchBox>
        <Title>CONHEÇA NOSSOS PRODUTOS</Title>
        <Search>
          <input 
            type="text" 
            placeholder='PROCURAR PRODUTO'
            onChange={(e) => setSearchItem(e.target.value)}
          />
          <AiOutlineSearch size={30} color='#E51674' className='icon'/>
        </Search>
      </SearchBox>
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