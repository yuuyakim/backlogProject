import styled from "styled-components";
import BackLogList from "./BackLogList";

const BackLogContainer = () => {
  return (
    <BackLogContainerStyle>
      <BackLogList/>
    </BackLogContainerStyle>
  );
}

const BackLogContainerStyle = styled.div`
  height: inherit;
  width: 500px;
`

export default BackLogContainer;