import React from 'react';
import { Name, BackButton } from './styles';

import { Feather } from '@expo/vector-icons';

import { WebView } from 'react-native-webview';

export default function ModalLink({ link, title, closeModal }) {
    return (
        <>
            <BackButton onPress={closeModal}>
                <Feather name="x" size={35} color="#FFF" />
                <Name>{title}</Name>
            </BackButton>

            <WebView
                source={{ uri: link }}
            />
        </>
    );
}