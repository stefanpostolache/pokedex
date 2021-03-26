
import styled from 'styled-components';
import Nav from '../components/nav';
import PokemonData from '../components/pokemon-data';
import PokemonImage from '../components/pokemon-image';
import { StyledContainer } from '../styles';

export default function Home () {
    return (
        <StyledHome>
            <Nav />
            <div className="shadow-container">
              <div className="trapezium1">
              </div>
            </div>
            <div className="trapezium2">
            </div>
            <div className="content">
                <PokemonImage />
                <PokemonData />
            </div>
        </StyledHome>
    )
}

const StyledHome = styled(StyledContainer)`

  div.shadow-container {
    filter: drop-shadow(-10pt 0 50pt rgba(0,0,0,0.3));
    div.trapezium1 {
      position: absolute;
      top: 0;
      right: 0;
      height: 100vh;
      width: 65vw;
      clip-path: polygon(46.11% 0%, 100% 0, 100% 100%, 0% 100%);
      background-color: #f3523b;
    }
  }

  div.trapezium2 {
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    width: 50vw;
    clip-path: polygon(58% 0%, 100% 0, 100% 100%, 0% 100%);
    background-color: #fa7247;
  }
`