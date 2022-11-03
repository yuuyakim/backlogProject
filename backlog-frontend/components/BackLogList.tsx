import styled from "styled-components";
import BackLogItem from "./BackLogItem";
const BackLogList = () => {
  return (
    <BackLogListStyle>
      <BackLogItem title="hoge" body="fugafuga"/>
      <Hoge>a</Hoge>
      <BackLogItem title="uooooooooo" body="waaaaaaaaaaaaa"/>
    </BackLogListStyle>
  )
}

const BackLogListStyle = styled.ul`
  display: block;
  /* width: 30%; */
  background-color: white;
`
const Hoge = styled.div`
  display: block;
  background-color: blue;
`

export default BackLogList;