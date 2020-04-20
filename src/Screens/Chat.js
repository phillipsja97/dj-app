import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, Navigation } from 'react-native'
import { Container, Title, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base'
import { Appbar, header, BackAction, Content, Action, List, Avatar, Divider, Searchbar } from 'react-native-paper';
import { AuthContext } from '../Context/Context'

function Chat(props) {
  const { navigation, route } = props;
  const [searchQuery, setSearchQuery] = useState('');


  const _onChangeSearch = query => setSearchQuery(query);

  return (
    <React.Fragment>
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
    <View>
    <Searchbar
        placeholder="Search"
        onChangeText={_onChangeSearch}
        value={searchQuery}
    />
    </View>
    <View>
    <List.Item
      title="The Fresh Prince"
      left={props => <Avatar.Image {...props} source={{ uri: 'https://i.iheart.com/v3/re/new_assets/5d9f95520198ce596a26ddde?ops=contain(740,0)'}} />}
      onPress={() => alert('opened')}
    />
    <Divider />
    <List.Item
      title="DJ Khaled"
      left={props => <Avatar.Image {...props} source={{ uri: 'https://i.insider.com/567322aedd08952d5d8b46de?width=1100&format=jpeg&auto=webp'}} />}
      onPress={() => alert('opened')}
    />
    <Divider />
    <List.Item
      title="Diplo"
      left={props => <Avatar.Image {...props} source={{ uri: 'https://weraveyou.com/wp-content/uploads/2020/03/Diplo-e1584370289406.jpg'}} />}
      onPress={() => alert('opened')}
    />
    <Divider />
    <List.Item
      title="Dr. Dre"
      left={props => <Avatar.Image {...props} source={{ uri: 'https://cache.umusic.com/_images/facebook/drdre/og-dre.jpg'}} />}
      onPress={() => alert('opened')}
    />
    <Divider />
    <List.Item
      title="Calvin Harris"
      left={props => <Avatar.Image {...props} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Calvin_Harris_-_Rock_in_Rio_Madrid_2012_-_09.jpg/220px-Calvin_Harris_-_Rock_in_Rio_Madrid_2012_-_09.jpg'}} />}
      onPress={() => alert('opened')}
    />
    <Divider />
    </View>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgb(0, 102, 245)'
  }
})

export default Chat
