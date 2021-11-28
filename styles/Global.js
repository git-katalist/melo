import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`

*, ::before, ::after{
margin: 0;
padding: 0;
box-sizing: border-box;
}


body{
/*background-color:green;*/
}

html, body, #__next{
height: 100%;
}

#__next{
display: grid;
grid-template-rows: auto 1fr auto; 
}

p{
font-size: 1rem;
line-height:1.5;

}

`;
