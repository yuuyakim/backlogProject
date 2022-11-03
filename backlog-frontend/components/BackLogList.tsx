import styled from "styled-components";
import BackLogItem from "./BackLogItem";
const BackLogList = () => {
  return (
    <BackLogListWrapper>
      <BackLogListStyle>
        <BackLogItem title="hoge" body="fugafuga"/>
        <BackLogItem title="uooooooooo" body="waaaaaaaaaaaaa"/>
      </BackLogListStyle>
    </BackLogListWrapper>
  )
}

const BackLogListWrapper = styled.div`
  background-color: white;
  border: 1px solid red;
`

const BackLogListStyle = styled.ul`
  display: block;
  width: 400px;
  background-color: white;
`

export default BackLogList;