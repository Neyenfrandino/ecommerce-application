import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const NavigateContainer = styled.div`
  height: 80px;
  width: 95%;
  display: flex;
  justify-content: space-between;
  position: fixed; /* Hace que el contenedor de navegación sea fijo */
  top: 0; /* Posiciona el contenedor en la parte superior */
  background-color: white; /* Elimina el color de fondo del contenedor */
  z-index: 1000; /* Asegura que esté por encima de otros elementos */
  
`;

export const Placeholder = styled.div`
  height: 70px; /* La misma altura que NavigateContainer para ocupar su espacio */
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;  
  cursor: pointer;
`;

export const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;