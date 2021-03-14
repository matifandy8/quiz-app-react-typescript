import styled from 'styled-components';

export const Div = styled.div`
  color:red;
  > 
  
  }
`;

export const Main = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width: 100%;
  max-width: 1550px;
  margin: 0 auto;
  height: 90vh;
  > 
 
  

  form {
    width: 80%;
      height:80%;
      background: #fff;
      border-radius: 10px;
      overflow: hidden;
      padding:10px;
    @media (min-width: 520px) {
      width: 30%;
      padding:40px;
  }
 
  h1 {
    display: block;
    font-family: Poppins-Bold;
    font-size: 39px;
    color: #333333;
    line-height: 1.2;
    text-align: center;
  }
  div {
      margin:20px;
  }
  input {
    font-family: Poppins-Medium;
    font-size: 16px;
    color: #333333;
    line-height: 1.2;
    display: block;
    width: 100%;
    height: 50px;
    background: transparent;
    padding: 0 0px 0 10px;
    outline: none;
    border: none;
  }
  button {
    font-family: Poppins-Medium;
    cursor:pointer;
    font-size: 16px;
    color: white;
    background: #1d3870;
    line-height: 1.2;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    width: 100%;
    height: 50px;
    outline: none !important;
    border: none;
    border-radius: 40px;
  }
  }
`;