import React from "react";
import styled from "styled-components";

export default function Empty() {
  return (
    <ComponentContainer>
      <EmptyImage
        source={require("../assets/images/emptytodo-removebg-preview.png")}
      />
      <EmptyText>Adcione algo para se lembrar.</EmptyText>
    </ComponentContainer>
  );
}

const ComponentContainer = styled.View`
  align-items: center;
  justify-content: center;
  height: 500px;
`;

const EmptyImage = styled.Image`
  width: 350px;
  height: 200px;
  margin-bottom: 20px;
`;

const EmptyText = styled.Text`
  color: white;
  font-family: poppins-bold;
  margin-top: 30px;
  font-size: 15px;
`;