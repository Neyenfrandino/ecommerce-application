import styled from 'styled-components'

import {
    BaseButton,
    GoogleSingInButton,
    InvertedButton
} from '../button/button.style'


export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;

    ${ BaseButton }, 
    ${ GoogleSingInButton }, 
    ${ InvertedButton } {
      margin-top: 0 auto;
    }
`

export const EmptyMessage = styled.span`  
    font-size: 18px;
    margin: 50px auto;

    ${ CartDropdownContainer }{
    }

`

export const CartItems = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    overflow-x: hidden;
`
  
  //   button {
  //     margin-top: 0 auto;
  //   }
  // }
  

  // .product-item {
  //   display: flex;
  //   align-items: center;
  //   margin-bottom: 10px;

  //   img {
  //       width: 70px; /* Tamaño fijo para la imagen */
  //       height: auto; /* Altura automática para mantener la proporción */
  //       margin-right: 10px; /* Espacio entre la imagen y el texto */
  //   }

  //   div {
  //       display: flex;
  //       flex-direction: column;
  //   }

  //   span {
  //       flex: 0.5; /* El texto ocupa todo el espacio restante */
  //   }
    

//     .price {
//         margin-top: 5px; /* Espacio entre el nombre y el precio */
//     }
// }

