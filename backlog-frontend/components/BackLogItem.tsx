import styled from "styled-components";
type BackLogItemType = {
  title: string;
  body: string;
};

const BackLogItem = ({title, body}: BackLogItemType) => {
  return (
    <BackLogItemWrapper>
        <BackLogItemTitleStyle>{title}</BackLogItemTitleStyle>
        <BackLogItemBodyStyle>{body}</BackLogItemBodyStyle>
    </BackLogItemWrapper>
  );
}

const BackLogItemWrapper = styled.li`
  display: flex;
  flex-flow: column;
  border-radius: 5px;
  border: 1px solid;
  border-color: black;
  background-color: white;
  padding: 10px;
  margin-top:2px;
`
const BackLogItemTitleStyle = styled.div`
  color: black;
`

const BackLogItemBodyStyle = styled.div`
  color: black;
`

export default BackLogItem;