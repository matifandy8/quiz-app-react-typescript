import styled from 'styled-components';

export const Nav = styled.div`
  background: #00000031;
  heigth:400px;
  width:100%;
  font-family: Poppins-Bold;
 
  > 
  ul {
    display:flex;
    justify-content:flex-end;
    list-style:none;
    margin: 0;
    padding: 10px;
  }
  a {
    margin:30px;
    text-decoration:none;
    color:white;
    font-size: 20px;
    line-height: 1.2;
  }
  li {
    padding:10px;
  }
  li:hover {
    background: #00000051;
  }
  
  }
`;