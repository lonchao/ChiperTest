import styled from 'styled-components/native';

export const ButtonArea = styled.TouchableOpacity`
  min-height: 60px;
  width: 100%;
  background: #fff;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
  padding: 10px;
  flex-direction: row;
`;
export const Thumbnail = styled.Image`
  height: 60px;
  width: 60px;
`;
export const ImageArea = styled.View`
  height: 60px;
  width: 60px;
  margin-right:10px;
`;
export const ContentArea = styled.View`
  flex:1;  
`;
export const StatsArea = styled.View`  
  flex-direction: row;
  padding-bottom:0;
`;

export const TimeLabel = styled.Text`
  color: #000000;
  width: 100%;
  text-align: right;  
  font-size: 12px;
`;
export const StatLabel = styled.Text`
  color: #000000;
  text-align: left;  
  font-size: 12px;
  flex:1;
  padding-bottom:0;
`;
export const Title = styled.Text`
  color: #000000;
  width: 100%;
  text-align: left;
  font-weight: bold;
  font-size: 16px;
  flex:1;
`;
