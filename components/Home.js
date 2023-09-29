import React from 'react';
import { StatusBar } from 'expo-status-bar';

import {InnerContainer, PageTitle, SubTitle, StyledFormArea, StyledButton, ButtonText, Line, WelcomeContainer, WelcomeImage, Avatar} from './Styles';

const Home = () => {

    return (
        <>
            <StatusBar style="light"/>
            <InnerContainer>
                <WelcomeImage resizeMode="cover" source={require('./../assets/tutorialtubelogo.jpeg')} />
                <WelcomeContainer>
                    <PageTitle welcome={true}>Welcome!</PageTitle>
                    <SubTitle welcome={true}>Olga Simpson</SubTitle>
                    <SubTitle welcome={true}>olgasimp@gmail.com</SubTitle>
                    <StyledFormArea>
                        <Avatar resizeMode="cover" source={require('./../assets/tutorialtubelogo.jpeg')} />
                        <Line />
                        <StyledButton onPress={() => {}}>
                            <ButtonText>Log out</ButtonText>
                        </StyledButton>
                    </StyledFormArea>
                </WelcomeContainer>
            </InnerContainer>
        </>
    );
};

export default Home;