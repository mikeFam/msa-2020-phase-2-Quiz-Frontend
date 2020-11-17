import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './Images/dave-herring.jpg';
import Logo from './Images/logo/logo_transparent.png';

export const UserInput = styled.div`
  margin: 4px;
  display: flex;
  

  form {
    font-size: 2vh;
  }

  input {
    margin-right: 4px;
    height: 35px;
  }
  

  button {
    cursor: pointer;
    background: linear-gradient(180deg, #ffffff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 10px 0;
    padding: 0 40px;
  }
`;

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    height: 100%;
    background-image: url(${BGImage});
    background-position:center;
    -webkit-background-size: cover;
    -moz-background-size:cover;
    -o-background-size: cover;
    background-size: cover;
    background-repeat:no-repeat;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }
  * {
    font-family: 'Catamaran', sans-serif;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: #fff;
  }

  img {
    float: left;
    width: 150px;
    height: 150px;

  }
  
  h1 {
    position: relative;
    font-family: Fascinate Inline;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }


  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  .final-score {
    color: #000;
    font-size: 4rem;
    margin: 0;
  }

  .start, .next, .end {
    cursor: pointer;
    background: linear-gradient(180deg, #ffffff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
  .start {
    max-width: 200px;
  }
`;