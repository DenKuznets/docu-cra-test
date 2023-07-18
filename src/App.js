import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { styled } from "styled-components";
import { Button } from "@mui/material";
import { library, icon as someIcon } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    width: 100vw;
    height: 100vh;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    svg {
        color: white;
    }
`;

library.add(fas);

function App() {
    const [randomIcon, setRandomIcon] = useState("hand-dots");
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }

    const handleClick = () => {
        console.log("click");
        let icons = Object.entries(fas);
        // console.log(Math.floor(Math.random() * icons.length));
        let randomIndex = Math.floor(Math.random() * icons.length);
        // console.log(icons.length);
        console.log(icons[randomIndex][1].iconName);
        setRandomIcon(icons[randomIndex][1].iconName);
        // for()
    };

    return (
        <div className="App">
            <Container>
                <Content>
                    <Button onClick={handleClick} variant="contained">
                        PUSH ME
                    </Button>
                    <FontAwesomeIcon size="6x" icon={randomIcon} />
                </Content>
            </Container>
        </div>
    );
}

export default App;
