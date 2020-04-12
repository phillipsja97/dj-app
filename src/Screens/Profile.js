import React from 'react'
import { StyleSheet, View, Text, Image, Navigation } from 'react-native'
import { Container, Title, Content, Header, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base'



function Profile(props) {
  const { route, navigation } = props
  const { item } = route.params
  const { name } = item
  return (
    <View>
      <Text>Profile</Text>
      <Button full danger
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Feed', { item: name }) }>
        <Text style={styles.buttonText}>Social Feed</Text>
      </Button>
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
