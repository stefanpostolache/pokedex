
import styled from 'styled-components';
import Nav from '../components/nav';
import PokemonData from '../components/pokemon-data';
import PokemonImage from '../components/pokemon-image';

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

const StyledHome = styled.main`
  min-height: 100vh;
  width: 100%;
  background: rgb(255, 220, 248);
  background: radial-gradient(circle at 0% 60%, rgba(255, 220, 248, 1) 0%, rgba(255, 255, 255, 1) 35%, rgba(225, 243, 243, 1) 58%);

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

  div.content {
    height: 94vh;
    width: 100%;
    display: flex;
    & > div {
      margin-top: 18vh;
      flex: 1;
      z-index: 3;
    }
  }
`