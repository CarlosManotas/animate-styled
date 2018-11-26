import React from "react";
import { render } from "react-dom";
import styled from "styled-components";

import AnimateStyled from "../../src";

const MiDiv = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

class Demo extends React.Component {
  render() {
    return (
      <MiDiv>
        <AnimateStyled
          name="flip"
          duration="600ms"
          timingFunction="ease-in-out"
          delay="200ms"
          iterationCount={3}
          direction="normal"
          fillMode="forwards"
          playState="running"
          transformOrigin="center top"
          backfaceVisibility="visible"
        >
          <AnimateStyled name="shake" iterationCount={4} delay="2s">
            <AnimateStyled name="bounce" iterationCount={5} delay="3s">
              <h1>Animate-styled</h1>
            </AnimateStyled>
          </AnimateStyled>
        </AnimateStyled>
     </MiDiv>
    )
  }
}

render(<Demo/>, document.querySelector("#demo"));
