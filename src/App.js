import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { styled } from "styled-components";
import { Button } from "@mui/material";
import { library, icon as someIcon } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useMemo, useRef, useState } from "react";

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
    const [taskCounter, setTaskCounter] = useState(0);
    const timerId = useRef("");
    const icons = useMemo(() => Object.entries(fas), []);

    useEffect(() => {
        if (taskCounter === 0) {
            clearInterval(timerId.current);
            timerId.current = null;
        }
        if (taskCounter > 0 && timerId.current === null) {
            timerId.current = setInterval(() => {
                let randomIndex = Math.floor(Math.random() * icons.length);
                setRandomIcon(icons[randomIndex][1].iconName);
                setTaskCounter((prev) => prev - 1);
            }, 3000);
        }
    }, [taskCounter]);

    const handleClick = () => {
        setTaskCounter((prev) => prev + 1);
    };

    return (
        <div className="App">
            <Container>
                <Content>
                    <Button
                        style={{ width: "150px" }}
                        onClick={handleClick}
                        variant="contained"
                    >
                        PUSH ME
                    </Button>
                    <FontAwesomeIcon size="6x" icon={randomIcon} />
                </Content>
            </Container>
        </div>
    );
}

export default App;
