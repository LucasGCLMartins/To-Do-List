import React from "react";
import { View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components";
import { Checkbox } from 'react-native-paper';

export default function TodoList({ item, deleteItem }) {
  const [checked, setChecked] = React.useState(false);

  return (
    <ComponentContainer>
      <ListContainer>
        <CirlceContainer>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
        </CirlceContainer>
        <View>
          <TextItem>{item.value}</TextItem>
        </View>
        <IconContainer onPress={() => deleteItem(item.key)}>
          <MaterialIcons name="delete" size={24} color="midnightblue" />
        </IconContainer>
      </ListContainer>
    </ComponentContainer>
  );
}

const ListContainer = styled.TouchableOpacity`
  background-color: whitesmoke;
  height: auto;
  width: 90%;
  margin-bottom: 30px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

const ComponentContainer = styled.View`
  align-items: center;
  justify-content: center;
  
`;

const TextItem = styled.Text`
  color: black;
  width: 250px;
  height: auto;
  font-size: 20px;
  margin-top: 10px;
  margin-left: 10px;
  font-family: poppins-regular;
  
`;

const IconContainer = styled.TouchableOpacity`
  margin-right: 10px;
  margin-top: 13px;
  margin-left: -50px;
  height: 35px;

  border-radius: 10px;
`;

const CirlceContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding-left: 5px;
`;