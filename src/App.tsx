/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {useState} from 'react';
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



import Icon from 'react-native-vector-icons/FontAwesome5';
import Snackbar from 'react-native-snackbar';

function App(): React.JSX.Element {



  const [turn, setTurn] = useState('circle');
  
  const [boardInfo, setBoardInfo] = useState<BoardInfo>({
    topLeft: '',
    topCenter: '',
    topRight: '',
    midLeft: '',
    midCenter: '',
    midRight: '',
    bottomLeft: '',
    bottomCenter: '',
    bottomRight: '',
  });
  const dataArray: [string, string][] = Object.entries(boardInfo);
  const updateBoardInfo = (key: keyof BoardInfo, value: string) => {
    const dataArray: [string, string][] = Object.entries(boardInfo);
    if(getWinner()){
      let winner = getWinner() === 'circle' ? '0' : 'X' 
      Snackbar.show({
        text: winner.toString(),
        backgroundColor: "#EA7773",
        textColor: "#000000"
      })
    reloadGame()
    }


    

    if (!boardInfo[key]) {
      setBoardInfo(prevState => ({
        ...prevState,
        [key]: value,
      }));
      turn === 'times' ? setTurn('circle') : setTurn('times')
      
     
    }
    
  };
  function reloadGame() {
    setTurn('circle')
   setBoardInfo({
    topLeft: '',
    topCenter: '',
    topRight: '',
    midLeft: '',
    midCenter: '',
    midRight: '',
    bottomLeft: '',
    bottomCenter: '',
    bottomRight: '',
   })


  }
 

  function getWinner(){
    let winner = ''
    if(
      boardInfo.topRight === boardInfo.topCenter &&
      boardInfo.topRight === boardInfo. topLeft &&
      boardInfo. topRight !== ''
    )
    {return winner = boardInfo.topRight}
    if(
      boardInfo.midRight === boardInfo.midCenter &&
      boardInfo.midRight === boardInfo. midLeft &&
      boardInfo. midRight !== ''
    )
    {return winner = boardInfo.midRight}
    if(
      boardInfo.bottomRight === boardInfo.bottomCenter &&
      boardInfo.bottomRight === boardInfo. bottomLeft &&
      boardInfo. bottomRight !== ''
    )
    {return winner = boardInfo.bottomRight}
    if(
      boardInfo.topLeft === boardInfo.midLeft &&
      boardInfo.midLeft === boardInfo. bottomLeft &&
      boardInfo. topLeft !== ''
    )
    {return winner = boardInfo.topLeft}
    if(
      boardInfo.topCenter === boardInfo.midCenter &&
      boardInfo.midCenter === boardInfo. bottomCenter &&
      boardInfo. topCenter !== ''
    )
    {return winner = boardInfo.topCenter}
    if(
      boardInfo.topRight === boardInfo.midRight &&
      boardInfo.midRight === boardInfo. bottomRight &&
      boardInfo. topRight !== ''
    )
    {return winner = boardInfo.topRight}
    if(
      boardInfo.topRight === boardInfo.midCenter &&
      boardInfo.midCenter === boardInfo. bottomLeft &&
      boardInfo. topRight !== ''
    )
    {return winner = boardInfo.topRight}
    if(
      boardInfo.topLeft === boardInfo.midCenter &&
      boardInfo.midCenter === boardInfo. bottomRight &&
      boardInfo. topLeft !== ''
    )
    {return winner = boardInfo.topLeft}
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}>Tic Tac Toe</Text>
        <View style={styles.playerTurn}>
          <Text style={styles.turn}>Player {turn === 'circle' ? '0' : 'X'}'s turn</Text>
        </View>

        <View style={styles.boardContainer}>
          <FlatList 
          numColumns={3}
          contentContainerStyle = {{alignItems: 'center', }}
            data={dataArray}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <View style={styles.boardMoves}>
                <Pressable onPress={() => updateBoardInfo(item[0], turn)}>
                  {item[1] === '' ? (
                    <Icon name='edit' size={30} />
                  ) : (
                    <Icon name={item[1]} size={30} />
                  )}
                  
                </Pressable>
              </View>
            )}
          />
        </View>

        <Pressable
          style={styles.button}
          onPress={() => reloadGame()}>
          <Text style={styles.reloadGame}>Reload Game</Text>
        </Pressable>
        <Text>{turn}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 30,
    color: '#1b68e3',
    fontWeight: 'bold',
    marginTop: 30,
  },
  playerTurn: {
    backgroundColor: '#1bcce3',
    marginTop: 20,
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  turn: {
    fontSize: 24,
  },
  boardContainer: {
    
    
    marginVertical: 20,
    flexDirection: 'row',
    
  },
  boardMoves: {
    alignItems: 'center',
    justifyContent: 'center',
    
    backgroundColor: '#95e89d',
    margin: 10,
    padding: 10,
    borderRadius: 8,
    width: 100,
  },
  reloadGame: {
    fontSize: 24,
  },
  button: {
    backgroundColor: '#6cc6d4',
    padding: 10,
    borderRadius: 8,
  },
 

});

export default App;
