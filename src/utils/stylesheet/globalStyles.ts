import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { media } from './breckpoints';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inconsolata&display=swap');
${normalize}
  body, html {
    margin: 0;
    padding: 0;
    background-color: white;
    box-sizing: border-box;
    font-size: 14px;
    font-family: 'Inconsolata', monospace;
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

   @media ${media.md} {
    p{
      font-size: 0.9rem;
    }
    span{
       font-size: 0.6rem;
    }
   }

   @media ${media.sm}  {
    p {
      font-size: 0.8rem;
    }
    span{
       font-size: 0.5rem;
    }
   }

    @media ${media.s}  {
    p{
       font-size: 0.5rem;
    }

   }
   

  :root {

    /*PALLET*/
   --accent-yellow: #DEDF79;
   --accent-blue: #A29BC7;
   --grey:#F3F3F7;
   --white:#FFF;
   --black:#000;
   --text-dark:#323434;
   --purple_v1: #d7d4e4;



    /*Utils*/
    --border-radius: 10px;


    /*Card*/
    --base-radius: 10px;
    --card-gap: 24px;
    --card-shadow: drop-shadow(0px 4px 4px rgba(199, 199, 199, 0.25));

    /*Containers*/
    --laptop: 1024px;
    --mobile: 734px;
    --sm-mobile: 420px;


    /*gradient*/
    --gradient_purple_v1: linear-gradient(45deg, #4568dc, #b06ab3);
    --gradient_purple_v2: radial-gradient(#76b2fe, #b69efe);
    --gradient_purple_v3: linear-gradient(#591bc5, #f588d8, #c0a3e5, #591bc5);
  }



  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  a {
    text-decoration: none;
    transition: all .3s;
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
