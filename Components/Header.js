import React from "react";
import styled from "styled-components";

let today = new Date().toLocaleDateString();

export default function Header() {
  return (
    <ComponentContainer>
      <HeaderText>Coisas a fazer.</HeaderText>
      <HeaderList>{today}</HeaderList>
    </ComponentContainer>
  );
}

const ComponentContainer = styled.View`
  height: 100px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HeaderText = styled.Text`
  color: white;
  font-family: poppins-bold;
  font-size: 20px;
  padding-left: 30px;
`;

const HeaderList = styled.Text`
  color: white;
  font-family: poppins-bold;
  font-size: 20px;
  margin-right: 30px;
`;