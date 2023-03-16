import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${normalize}
  body, html {
    margin: 0;
    padding: 0;
    background-color: white;
    box-sizing: border-box;
    font-family: "Inter","Roboto", sans-serif; 
  }

  * {
    box-sizing: border-box;

    &:after {
      box-sizing: border-box;
    }

    &:before {
      box-sizing: border-box;
    }
  }

  :root {

    /*PALLET*/
   --accent-yellow: #DEDF79;
   --accent-blue: #A29BC7;
   --grey:#F3F3F7;
   --white:#FCFCFD;
   --text-dark:#323434;
   /* SCSS Gradient */
   $gradient-top: linear-gradient(0deg, #072ac8ff, #1e96fcff, #60b6fbff, #81c6faff, #a2d6f9ff, #fcf300ff, #fedd00ff, #ffd200ff, #ffc600ff);


    /*Utils*/
    --border-radius: 10px;
    --input-border-radius: 5px;

    /*Card*/
    --card-radius: 10px;
    --card-gap: 24px;
    --card-shadow: drop-shadow(0px 4px 4px rgba(199, 199, 199, 0.25));

    /*Containers*/
    --container-width: 1420px;
    --container-width-1000: 1000px;
    --card-container-width: 1200px;


    /*gradient*/
    --gradient_blue: linear-gradient(70deg, #0862B3, #022B68, #04112B);
    --gradient_insta: linear-gradient(70deg, rgb(247, 9, 95, 255), rgb(241, 115, 36, 255), rgb(173, 1, 151, 255), rgba(91, 49, 245, 255), rgba(80, 172, 174, 255));

  }



  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    color: var(--moon-D);
  }

  a {
    text-decoration: none;
    transition: all .3s;
  }


  a, .link {
    color: #2997ff;
  }

  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  button {
    transition: all .3s;
  }

  button:hover {
    cursor: pointer;
  }

  button:focus {
    outline: none;
  }

  input:focus,
  input:active,
  button:active,
  button:focus {
    outline: none;
  }

`;

export default GlobalStyle;
