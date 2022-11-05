import { createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';


export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root{
    height: 100%;
  }

  body{
    background: #eff3f9 !important;
    color: #333333;
    -webkit-font-smoothing: antialised;
    font-family: "open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 15px;
  }
  select{
    -webkit-appearance: none;
  }

  h1, h2, h3, h4, h5, strong, b{
    font-weight: 700;
  }

  button{
    cursor: pointer;
    &:focus{
      outline: none !important;
    }
  }

  .row{
    --bs-gutter-x: 0rem;
  }

`;
