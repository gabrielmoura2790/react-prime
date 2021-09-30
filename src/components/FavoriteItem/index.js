import React from 'react';
import { Container, Title, RateContainer, Rate, ActionContainer, DetailButton, DeleteButton } from './styles';

import { theme } from '../../global/styles/theme';
import { Ionicons, Feather } from '@expo/vector-icons';

export default function FavoriteItem({ data, deleteMovie, navigatePage }) {
    return (
        <Container>
            <Title size={22}>{data.title}</Title>

            <RateContainer>
                <Ionicons name="md-star" size={12} color={theme.colors.yellow} />
                <Rate>{data.vote_average}/10</Rate>
            </RateContainer>

            <ActionContainer>
                <DetailButton onPress={() => navigatePage(data)}>
                    <Title size={14} >Ver Detalhes</Title>
                </DetailButton>

                <DeleteButton onPress={() => deleteMovie(data.id)}>
                    <Feather name="trash" size={24} color="#FFF" />
                </DeleteButton>
            </ActionContainer>
        </Container>
    );
}