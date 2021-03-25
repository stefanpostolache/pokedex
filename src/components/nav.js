import styled from "styled-components"

export default function Nav () {
    return (
        <StyledNav>
            <div className="nav-content">
                <div className="trapezium-nav">
                </div>
                <h1>Pokédex</h1>
                <h2>By Number</h2>
            </div>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    position: absolute;
    top: 5vh;
    background-color: rgba(0,0,0, 0.12);
    width: 100vw;
    height: 10vh;
    z-index: 3;

    .nav-content {
        position: relative;
        width: 100vw;
        height: 100%;
        .trapezium-nav {
            width: 39.55%;
            height: 100%;
            background-color: #333333;
            position: absolute;
            right: 0;
            top: 0;
            clip-path: polygon(7.6% 0%, 100% 0, 100% 100%, 0% 100%);
        }
        h1 {
            position: absolute;
            left: 2rem;
            top: 50%;
            transform: translateY(-50%);
        }
        h2 {
            position: absolute;
            right: 15rem;
            top: 50%;
            color: white;
            transform: translateY(-50%);
        }
    }
`