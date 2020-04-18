import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, Navigation } from 'react-native'
import { Container, Content, Header, CardItem, Thumbnail, Icon, Left, Body, Right } from 'native-base'
import { Searchbar, Appbar, Card, Title, Button, Avatar } from 'react-native-paper'
import { AuthContext } from '../Context/Context'
import { ScrollView } from 'react-native-gesture-handler';



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
      <ScrollView>
    <View>
    <Card onPress={() => alert('pressed')}>
      <Card.Content style={styles.title}>
        <Title>Marathon Music Works</Title>
      </Card.Content>
      <Card.Cover source={{ uri: 'https://pbs.twimg.com/media/DXsen9kVQAAv0TM.jpg' }} />
    </Card>
    <Card onPress={() => alert('pressed')}>
      <Card.Content style={styles.title}>
        <Title>Exit/In</Title>
      </Card.Content>
      <Card.Cover source={{ uri: 'https://i1.wp.com/liveforlivemusic.com/wp-content/uploads/2019/12/by-Keith-Griner-D85_3158-Edit-2.jpg?fit=2048%2C1365&ssl=1' }} />
    </Card>
    <Card onPress={() => alert('pressed')}>
      <Card.Content style={styles.title}>
        <Title>3rd and Lindsey</Title>
      </Card.Content>
      <Card.Cover source={{ uri: 'https://thedailycountry.com/uploads/3/4/5/1/34519016/published/caseyd_1.jpg?1542834985' }} />
    </Card>
    <Card onPress={() => alert('pressed')}>
      <Card.Content style={styles.title}>
        <Title>Mercy Lounge</Title>
      </Card.Content>
      <Card.Cover source={{ uri: 'https://www.mercylounge.com/files/2016/09/IMG_7608-copy-e1478724550541.jpg' }} />
    </Card>
    </View>
    </ScrollView>
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
  header: {
    backgroundColor: 'rgb(0, 102, 245)'
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
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
    color: 'white'
  }
})

export default Venues
