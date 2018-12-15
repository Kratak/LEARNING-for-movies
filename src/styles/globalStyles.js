import { createGlobalStyle } from 'styled-components'

// import one from './one.jpg'
const HTMLglob = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=B612');
  *{
    box-sizing: border-box;
    background-color: ${({theme}) => theme.netlix.background};
    color: ${({theme})=>theme.netlix.foreground};
    font-family: 'B612', sans-serif;
    margin: 0px;
    
  }
  
  body {
/*     
    height: 100%;
    width: 100%;
    font-size: 20pt; */
  }
  button::-moz-focus-inner {
    /* border: 0;*/
  }
  button{
    /* 
    text-shadow: none;
    font-size: 20px;
    width: 250px;
    height: 50px;
    
    border-style: none;
    opacity: .8; */
  }
  input{
    /*
    text-shadow: none;
    text-align: center;
    font-size: 20px;
    width: 250px;
    height: 50px; */
  }
  ::placeholder{

  }
`

export {HTMLglob}