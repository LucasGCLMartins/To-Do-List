import React, { useState } from "react";
import styled from "styled-components";

import { AntDesign } from "@expo/vector-icons";

export default function AddInput({ submitHandler }) {
  const [value, setValue] = useState("");

  const onChangeText = (text) => {
    setValue(text);
  };

  return (
    <ComponentContainer>
      <InputContainer>
        <Textarea placeholder="Adcione algo..." onChangeText={onChangeText} />
      </InputContainer>
      <SubmitButton
        onPress={() => {
          setValue(submitHandler(value));
        }}
      >
        <AntDesign name="plus" size={24} color="midnightblue" />
      </SubmitButton>
    </ComponentContainer>
  );
}

const ComponentContainer = styled.View`
  flex-direction: row;
`;

const InputContainer = styled.View`
  flex-direction: row;
  border-radius: 10px;
  width: 270px;
  margin-left: 15px;
  margin-bottom: 20px;
`;

const Textarea = styled.TextInput`
  font-family: poppins-regular;
  font-size: 20px;
  background-color: white;
  width: 320px;
  padding: 10px;
  border-radius: 10px;
`;

const SubmitButton = styled.TouchableOpacity`
  width: 50px;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin-bottom: 20px;
  margin-left: -5px;
  border-radius: 50px;
`;