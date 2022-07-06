import React from 'react';
import {
    LoginForm,
    TitleCont,
    Form,
    FormHeader,
    FormBody,
    FormFooter,
    Buttons,
    Title,
    Label,
    Label2,
    Input,
    Links,
    Button
} from '../styles/login.style';


function login() {
  return (
    <LoginForm className="container-fluid">
        <TitleCont className="container">
            <Title>Welcome! Please Login To Continue</Title>
        </TitleCont>
        <Form className="container">
            <FormHeader className="container">
                <Label>All Inputs Are Required*</Label>
            </FormHeader>
            <FormBody className="container">
                <Label2>Username:</Label2>
                <Input type="text" id="uname" placeholder="jodoe123"/>
                <Label2>Password:</Label2>
                <Input type="password" id="pwd" placeholder="jdoe112!"/>
            </FormBody>
            <FormFooter className="container">
                <Links to="/">Forgot Password?</Links>  
            </FormFooter>
            <Buttons className="container">
                <Button id="cancel" onClick="">Cancel</Button>
                <Button id="submit" onClick="">Login</Button>
            </Buttons>
        </Form>
    </LoginForm>
  );
}

export default login;