import React from 'react'
import { StyleSheet, View, Text, Image, Navigation } from 'react-native'
import { Container, Content, Header, CardItem, Thumbnail, Icon, Left, Body, Right } from 'native-base'
import { Appbar, header, BackAction, Action, Card, Paragraph, Title, Avatar, Button } from 'react-native-paper';
import { AuthContext } from '../Context/Context'

const LeftContent = props => <Avatar.Image {...props} source={{ uri: 'https://img.apmcdn.org/09dada94c3220c94931e9e6e586e6e3c8af913bf/square/d2c9aa-20170908-dj-jazzy-jeff.jpeg' }} />

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
      <Card
        style={styles.card}
      >
        <Card.Title title="DJ JazzyJeff" subtitle="Nashville, Tennessee" left={LeftContent} style={styles.title} />
        <Card.Cover source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Jazzyjeff_061111.jpg/1200px-Jazzyjeff_061111.jpg' }} />
        <Card.Actions>
        <Button iconLeft style={styles.buttonSpotify}>
            <Icon type="SimpleLineIcons" name='social-spotify' style={styles.icon} onPress={() => alert('Pressed')}/>
        </Button>
        <Button iconLeft style={styles.buttonSoundcloud}>
            <Icon type="SimpleLineIcons" name='social-soundcloud' style={styles.icon} onPress={() => alert('Pressed')} />
        </Button>
        <Button iconLeft style={styles.buttonTwitter}>
            <Icon type="SimpleLineIcons" name='social-twitter' style={styles.icon} onPress={() => alert('Pressed')}/>
        </Button>
        </Card.Actions>
      </Card>
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
  icon: {
    color: 'white'
  },
  title: {
    color: 'white'
  },
  buttonTwitter: {
    backgroundColor: '#1DA1F2',
    borderRadius: 5,
    margin: 10,
    width: 100
  },
  buttonSpotify: {
    backgroundColor: '#1DB954',
    borderRadius: 5,
    margin: 10,
    width: 100
  },
  buttonSoundcloud: {
    backgroundColor: '#FF7F34',
    borderRadius: 5,
    margin: 10,
    width: 100
  },
  card: {
    height: '100%',
    backgroundColor: 'gray',
    color: 'white'
  }
})

export default Profile
