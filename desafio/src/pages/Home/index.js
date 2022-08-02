import React from 'react';
import * as S from './styles';

//components
import ProductList from '../../components/ProductList';
import Cart from '../../components/Cart';

export default function Home() {
  return (
    <>
      <S.Container>
        <S.TwoColumnGrid>
          <S.Side>
          </S.Side>
          <S.Main>
            <S.MainHeader>
              <p>Produto(s) encontrados</p>
            </S.MainHeader>
            <ProductList />
          </S.Main>
        </S.TwoColumnGrid>
        <Cart />
      </S.Container>
    </>
  );
}