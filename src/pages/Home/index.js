import React from 'react';
import {
  Container,
  SearchContainer,
  Input,
  SearchButton,
} from './styles';

import { Feather } from '@expo/vector-icons';

import Header from '../../components/Header';

export default function Home() {
  return (
    <Container>
      <Header title="React Prime" />

      <SearchContainer>
        <Input
          placeholder="Ex Vingadores..."
          placeholderTextColor="#DDD" 
        />

        <SearchButton>
          <Feather name="search" size={30} color="#FFF" />
        </SearchButton>

      </SearchContainer>

    </Container>
  );
}