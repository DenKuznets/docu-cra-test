import logo from "./logo.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { styled } from "styled-components";
import { Button } from "@mui/material";
import { library, icon as someIcon } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

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
    .fa-user-secret {
        color: white;
    }
`;

function App() {
    const handleClick = () => {
      console.log("click");
      console.log(fas);
    };

    return (
        <div className="App">
            <Container>
                <Content>
                    <Button onClick={handleClick} variant="contained">
                        PUSH ME
                    </Button>
                    <FontAwesomeIcon
                        size="6x"
                        icon={icon({ name: "user-secret" })}
                    />
                </Content>
            </Container>
        </div>
    );
}

export default App;
