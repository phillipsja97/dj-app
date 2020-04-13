import React from 'react'
import { StyleSheet, View, Text, Image, Navigation } from 'react-native'
import { Container, Title, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base'
import { Appbar, header, BackAction, Content, Action } from 'react-native-paper';
import { AuthContext } from '../Context/Context'


function Chat(props) {
  const { signOut } = React.useContext(AuthContext)
  return (
    <View>
      <Appbar.Header
          style={styles.header}
      >
        <Appbar.Content
          title="Messages"
        />
        <Appbar.Action icon="magnify"/>
        <Appbar.Action icon="logout" onPress={() => signOut()} />
      </Appbar.Header>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black'
  }
})

export default Chat
