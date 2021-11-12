import React, {useEffect,useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  TouchableHighlight
} from 'react-native';
import { fromUnixTime,formatDistanceToNow } from 'date-fns'
import {Thumbnail,StatsArea,StatLabel, Title,ButtonArea, ImageArea, ContentArea,TimeLabel} from './styles';

import Options from '../../components/Options'

import {api} from '../../services/api';

const Home: () => Node = ({navigation}) => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState('New');
const arrOptions = [
    {link:'new.json', title:'New'},
    {link:'top.json', title:'Top'},
    {link:'rising.json', title:'Popular'},
    {link:'hot.json', title:'Hot'},
];
  async function updateData() {
    try {
      const option = arrOptions.find(el => el.title === selected);
      const response = await api.get(option.link);
      // console.log(response.data.data.children);
      setData(response.data.data.children)
    } catch (ex) {
      console.log(ex);
    }
  }
  useEffect(() => {
    updateData();
  }, []);
  
  useEffect(() => {
    updateData();        
  }, [selected]);

  function abreLink(permalink,title){
    
    navigation.navigate('Detail', { permalink,title })
  }

  const ListItem = ({item}): Node => {
  const {
    title,
    thumbnail,
    created_utc,
    score,
    author,
    num_comments,
    permalink,
  } = item.data;
  
  
  const createdTime = fromUnixTime(created_utc);
  

  return (
    <ButtonArea onPress={()=>{abreLink(permalink)}}  >
      <ImageArea>
        <Thumbnail source={{uri: thumbnail}} />
      </ImageArea>
      <ContentArea>
        <TimeLabel>{formatDistanceToNow(createdTime, { addSuffix: true })}</TimeLabel>
        <Title>{title}</Title>
        <StatsArea>
          <StatLabel>{author}</StatLabel>
          <StatLabel>Score: {score}</StatLabel>
          <StatLabel>{num_comments} comments</StatLabel>
        </StatsArea>
      </ContentArea>
    </ButtonArea>
  );
};

  return (
    <>
      <Options options={arrOptions} selected={selected} onChange={(title)=>{setSelected(title)}}/>
      <FlatList 
      data={data} 
      renderItem={ListItem} 
      />
      
    </>
  );
};


export default Home;
