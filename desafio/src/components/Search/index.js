import React from 'react';
import * as S from './styles';

export default function Search({ type, placeholder, onChange }) {
  return (
      <S.Input type={type} placeholder={placeholder} onChange={onChange} />
  )
}
