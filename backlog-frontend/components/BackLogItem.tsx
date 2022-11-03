import styled from "styled-components";
type BackLogItemType = {
  title: string;
  body: string;
};

const BackLogItem = ({title, body}: BackLogItemType) => {
  return (
    <BackLogItemWrapper>
      <BackLogItems>
        <BackLogItemStyle>{title}</BackLogItemStyle>
        <BackLogItemStyle>{body}</BackLogItemStyle>
      </BackLogItems>
    </BackLogItemWrapper>
  );
}

const BackLogItemWrapper = styled.li`
  display: flex;
  
  /* flex-flow: column; */
  border-radius: 5px;
  background-color: white;
  padding: 10px;
`
const BackLogItemStyle = styled.div`
  /* background-color: transparent; */

  /* background-color: white; */
  color: black;
`
const BackLogItems = styled.div`
  background-color: white;
`

export default BackLogItem;