/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  View,
  FlatList,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Board from './components/Board';
import baordData from './components/constant'




function App(): React.JSX.Element {
  
const [move, setMove] = useState()

  const playerMove = (item) =>{
setMove(item)
    
  }
    return (
    <>
     <View style={styles.container}>
     
<Text style={styles.heading}>Tic Tac Toe</Text>
<View style={styles.playerTurn}>
  <Text style={styles.turn}>Player O's turn</Text>
  
</View>

<View style={styles.boardContainer}>
<View>
  <Pressable
  
  onPress={() => playerMove('')}
  >
    <Board  />
  </Pressable>

  <Pressable
  
  onPress={() => playerMove('')}
  >
    <Board  />
  </Pressable>  

  <Pressable
  
  onPress={() => playerMove('')}
  >
    <Board  />
  </Pressable>  
  </View>
  
  <View>
  <Pressable
  
  onPress={() => playerMove('')}
  >
    <Board  />
  </Pressable>

  <Pressable
  
  onPress={() => playerMove('')}
  >
    <Board  />
  </Pressable>  

  <Pressable
  
  onPress={() => playerMove('')}
  >
    <Board  />
  </Pressable>  
  </View>
  <View>
  <Pressable
  
  onPress={() => playerMove('')}
  >
    <Board  />
  </Pressable>

  <Pressable
  
  onPress={() => playerMove('')}
  >
    <Board  />
  </Pressable>  

  <Pressable
  
  onPress={() => playerMove('')}
  >
    <Board  />
  </Pressable>  
  </View>
  </View>

  <Pressable style={styles.button}
  
  onPress={() => playerMove('')}
  >
    <Text style={styles.reloadGame}>Reload Game</Text>
  </Pressable>  
    </View>
    </>
  );
}

const styles = StyleSheet.create({
 container:{ 
  flex: 1,
  justifyContent: 'center', 
  alignItems: 'center',
  
},
heading:{
  fontSize: 30,
  color: '#1b68e3',
  fontWeight: 'bold',
  marginTop: 30
},
playerTurn:{
  backgroundColor: '#1bcce3',
  marginTop: 20,
  padding: 10,
  paddingHorizontal: 30,
  borderRadius: 8
},
turn:{
  fontSize: 24,

},
boardContainer:{
  flex:1,
  justifyContent: 'center',
  marginTop: 20,
  
  flexDirection: 'row'
},
reloadGame:{
  fontSize: 24
},
button:{
  backgroundColor: '#6cc6d4',
  marginBottom: 200,
  padding: 10,
  borderRadius: 8
}

});

export default App;
