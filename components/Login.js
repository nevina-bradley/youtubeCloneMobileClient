import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';

import {Formik} from 'formik';

import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';

import {StyledContainer, InnerContainer, PageLogo, PageTitle, SubTitle, StyledFormArea, LeftIcon, StyledInputLabel, StyledTextInput, RightIcon, Colors, StyledButton, ButtonText, MsgBox, Line, ExtraView, ExtraText, TextLink, TextLinkContent} from './Styles';
import {View, ScrollView} from 'react-native';

const {brand, darkLight, primary} = Colors;

const Login = ({ navigation }) => {
    const [hidePassword, setHidePassword] = useState(true);

    return (
        <ScrollView>
            <StyledContainer>
                <StatusBar style="dark"/>
                <InnerContainer>
                    <PageLogo resizeMode="cover" source={require('./../assets/tutorialtubelogo.jpeg')} />
                    <PageTitle>TutorialTube</PageTitle>
                    <SubTitle>Account Login</SubTitle>

                    <Formik initialValues={{email: '', password: ''}} onSubmit={(values) => {console.log(values);}}>
                        {({handleChange, handleBlur, handleSubmit, values}) => (
                        <StyledFormArea>
                            <MyTextInput label="Email Address" icon="mail" placeholder="andyj@gmail.com" placeholderTextColor={darkLight} onChangeText={handleChange('email')} onBlur={handleBlur('email')} value={values.email} keyboardType="email-address" />
                            <MyTextInput label="Password" icon="lock" placeholder="* * * * * * * *" placeholderTextColor={darkLight} onChangeText={handleChange('password')} onBlur={handleBlur('password')} value={values.password} secureTextEntry={hidePassword} isPassword={true} hidePassword={hidePassword} setHidePassword={setHidePassword} />
                            <MsgBox>...</MsgBox>
                            <StyledButton onPress={() => navigation.navigate('Home')}>
                                <ButtonText>Log in</ButtonText>
                            </StyledButton>
                            <Line />
                            <StyledButton google={true} onPress={handleSubmit}>
                                <Fontisto name="google" color={primary} size={25} />
                                <ButtonText google={true}>Sign in with Google</ButtonText>
                            </StyledButton>
                            <ExtraView>
                                <ExtraText>Don't have an account already? </ExtraText>
                                <TextLink onPress={() => navigation.navigate('SignUp')}>
                                    <TextLinkContent>Sign up</TextLinkContent>
                                </TextLink>
                            </ExtraView>
                        </StyledFormArea>)}
                    </Formik>

                </InnerContainer>
            </StyledContainer>
        </ScrollView>
    );
};

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (<RightIcon onPress={() => setHidePassword(!hidePassword)}><Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} /></RightIcon>)}
        </View>
    );
};

export default Login;