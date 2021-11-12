import styled from 'styled-components/native';
import {
  Dimensions
} from 'react-native';
const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');
export const Container = styled.View`
  height: ${SCREEN_HEIGHT-90}px;
  width: ${SCREEN_WIDTH}px;
  margin-right:10px;
  background-color:red;
`;