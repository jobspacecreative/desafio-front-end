import React from 'react';
import { Container, Banner, Subtitle } from './styles';

import banner from '../../assets/images/banner.png';

const TopBanner = () => {
  return (
    <Container>
      <Banner src={banner}/>
      <Subtitle>
        Tudo para o cuidado do seu pet!
      </Subtitle>
    </Container>
  )
}

export default TopBanner;