import React from 'react'
import { StyleSheet, View, Text, Image, Navigation } from 'react-native'
import { Container, Title, Content, Header, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base'
import { Appbar, header, BackAction, Action } from 'react-native-paper';
import { AuthContext } from '../Context/Context'


function Profile(props) {
  const { signOut } = React.useContext(AuthContext)
  return (
    <View>
          <Appbar.Header
          style={styles.header}
          >
        <Appbar.Content
          title="Profile"
        />
        <Appbar.Action icon="magnify"/>
        <Appbar.Action icon="logout" onPress={() => signOut()} />
      </Appbar.Header>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb'
  },
  header: {
    backgroundColor: 'black'
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold'
  },
  buttonContainer: {
    borderRadius: 5,
    padding: 10,
    margin: 20
  },
  buttonText: {
    fontSize: 20,
    color: '#fff'
  }
})

export default Profile
