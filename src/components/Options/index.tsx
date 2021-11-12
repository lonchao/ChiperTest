import React, {useEffect,useState} from 'react';
import type {Node} from 'react';
import WebView from 'react-native-webview';
import {
  Text,
  View,
  Dimensions
} from 'react-native';
import {Container,ButtonOption,ButtonLabel,ButtonOptionSelected,ButtonLabelSelected} from './styles';

const Options: () => Node = ({navigation,route,options,selected,onChange}) => {


  return (
    <Container>
      {options.map(opt => opt.title === selected ? 
        (
        <ButtonOption key={opt.title} onPress={()=>{onChange(opt.title)}}>
            <ButtonLabel  >{opt.title}</ButtonLabel >
        </ButtonOption>) : 
        (
        <ButtonOptionSelected key={opt.title} onPress={()=>{onChange(opt.title)}}>
            <ButtonLabelSelected  >{opt.title}</ButtonLabelSelected >
        </ButtonOptionSelected>))}
      
    </Container>
  );
};


export default Options;
