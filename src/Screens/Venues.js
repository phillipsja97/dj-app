import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, Navigation } from 'react-native'
import { Container, Content, Header, CardItem, Thumbnail, Icon, Left, Body, Right } from 'native-base'
import { Searchbar, Appbar, Card, Title, Button, Avatar } from 'react-native-paper'
import { AuthContext } from '../Context/Context'



function Venues(props) {
  const [ searchQuery, setSearchQuery ] = useState('')
  const { signOut } = React.useContext(AuthContext)

  const _onChangeSearch = query => setSearchQuery(query);

  return (
    <React.Fragment>
      <View>
      <Appbar.Header
          style={styles.header}
      >
        <Appbar.Content
          title="Venues"
        />
        <Appbar.Action icon="magnify"/>
        <Appbar.Action icon="logout" onPress={() => signOut()} />
      </Appbar.Header>
    </View>
    <View>
    <Searchbar
        placeholder="Search"
        onChangeText={_onChangeSearch}
        value={searchQuery}
    />
    </View>
    <View>
    <Card onPress={() => alert('pressed')}>
      <Card.Content>
        <Title>Marathon Music Works</Title>
      </Card.Content>
      <Card.Cover source={{ uri: 'https://pbs.twimg.com/media/DXsen9kVQAAv0TM.jpg' }} />
    </Card>
    </View>
  </React.Fragment>
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

export default Venues
