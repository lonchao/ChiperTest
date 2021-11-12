import React, {useEffect,useState} from 'react';
import type {Node} from 'react';
import WebView from 'react-native-webview';
import {
  Text,
  View,
  Dimensions
} from 'react-native';
import {Container} from './styles';

const Detail: () => Node = ({navigation,route}) => {

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');

function getUrl() {
  const BASE_URL = 'https://www.reddit.com';
  return BASE_URL+route.params.permalink; 
}
  return (
    <Container>
      
      <WebView
        javaScriptEnabled
        style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT-44 }}
        startInLoadingState
        source={{
          uri: getUrl(),
        }}
      />
      
    </Container>
  );
};


export default Detail;
