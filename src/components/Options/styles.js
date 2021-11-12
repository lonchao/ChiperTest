import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction:row;
  border-bottom-width:1px;
  border-bottom-color:#cfcfcf;

`;
export const ButtonOption = styled.TouchableOpacity`
flex:1;  
  
  background-color:#89cff0;
`;
export const ButtonLabel = styled.Text`
height:44px;
text-align:center;
line-height:44px;
color:#ffffff;
`;
export const ButtonOptionSelected = styled.TouchableOpacity`
flex:1;  
  
  background-color:#ffffff;
`;
export const ButtonLabelSelected = styled.Text`
height:44px;
text-align:center;
line-height:44px;
color:#89cff0;
`;