import { createGlobalStyle } from 'styled-components';
import { ACCENT, H3_PURPLE_TEXT_COLOUR, MOBILE, WHITE } from './index';

//importing fonts and global fonts
const Global = createGlobalStyle`   
  *,
  *:after,
  *:before{
    box-sizing: border-box;
   margin: 0;
   padding: 0;
  }
  
  .idea-title{
   font-size: 1.5rem;
   opacity: 1;
   font-weight: bold;
   color: ${ACCENT}!important;
  }


  .idea-text{
   font-size: 1rem;
   opacity: 1;
  }

  .icon{
   width: 1000px;
  }
   
  li{
   font-weight: 200;
   color: white;
   font-size: 0.8rem;
   margin: 2rem 0;
  }
  
  .footer-link {
   cursor: pointer;
   transition: color 300ms ease-in-out;
  }
  
  .footer-link:hover{
   color: ${ACCENT};
  }
  
  
   body{
     background: ${WHITE};
     font-family: 'Poppins', sans-serif;
     font-size: 1.15em;
     color: ${ACCENT};
     margin: 0; 
     font-weight: 700;
   }
  
   h1{
    color: #99efd0;
    font-size: 60px;
    font-weight: bold;
   }
   
   h2{
    color: #99efd0;
    font-size: 25px;
   }

  h5{
   color: ${ACCENT};
   font-size: 30px;
   font-weight: 600;
   margin: 1rem 0;
  }
   
  p{
   color: ${WHITE};
   font-size: 18px!important;
    opacity: .6;
    line-height: 1.2;
  }

  .light-blue{
   color: #2581c1;
  }

  h3{
   font-weight: 900;
   font-family: 'Poppins', sans-serif;
   font-size: 3rem;
   color: ${H3_PURPLE_TEXT_COLOUR};
   
  }

  .centerptag {
   text-align: center;
   margin: 2rem 0;
   width: 80ch;
  }
  
  img{
    max-width: 100%;
  }
  
  .small-width{
   width: 15ch;
  }
  
  @media (max-width: ${MOBILE}){
   display: flex;
   flex-direction: column;
    p{
     font-size: 1.3rem;
    }

   h1 {
    font-size: 2.5rem;
   }
   
   h3 {
    font-size: 2rem;
   }

   .add-margin {
    margin: 2rem 0;
   }
  }
 `;

export default Global;
