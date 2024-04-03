import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'




export default function Board() {
  return (
    <View style={styles.selection}>
    
      
    
    <Icon name='edit' size={40} color='#900' />
   
    
   
    </View>
  )
}

const styles = StyleSheet.create({

selection:{
    backgroundColor: '#95e89d',
    padding: 25,
   
    margin: 10,
    borderRadius: 20,
}
})