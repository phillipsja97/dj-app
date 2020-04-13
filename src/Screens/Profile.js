import React, { Fragment } from 'react'
import { StyleSheet, View, Text, Image, Navigation, Linking } from 'react-native'
import { Container, Content, Header, CardItem, Thumbnail, Icon, Left, Body, Right } from 'native-base'
import { Appbar, header, BackAction, Action, Card, Paragraph, Title, Avatar, Button } from 'react-native-paper';
import { AuthContext } from '../Context/Context'
import { ScrollView } from 'react-native-gesture-handler';

const LeftContent = props => <Avatar.Image {...props} source={{ uri: 'https://img.apmcdn.org/09dada94c3220c94931e9e6e586e6e3c8af913bf/square/d2c9aa-20170908-dj-jazzy-jeff.jpeg' }} />

function Profile(props) {
  const { signOut } = React.useContext(AuthContext)
  return (
    <React.Fragment>
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
              <Icon type="SimpleLineIcons" name='social-spotify' style={styles.icon} onPress={() => Linking.openURL('https://open.spotify.com/artist/3nmiIgeri4vEY7y0VpbsCn')}/>
          </Button>
          <Button iconLeft style={styles.buttonSoundcloud}>
              <Icon type="SimpleLineIcons" name='social-soundcloud' style={styles.icon} onPress={() => Linking.openURL('https://soundcloud.com/djjazzyjeff')} />
          </Button>
          <Button iconLeft style={styles.buttonTwitter}>
              <Icon type="SimpleLineIcons" name='social-twitter' style={styles.icon} onPress={() => Linking.openURL('https://twitter.com/djjazzyjeff215?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor')}/>
          </Button>
        </Card.Actions>
      </Card>
    </View>
      <ScrollView>
        <View style={styles.scrollarea}>
          <Card style={styles.cardContainer}>
            <Card.Cover style={styles.tiles} source={{ uri: 'https://bucket.mn2s.com/wp-content/uploads/2017/05/29135534/DJ-Jazzy-Jeff-MN2S-.png' }} />
          </Card >
          <Card style={styles.cardContainer}>
            <Card.Cover style={styles.tiles} source={{ uri: 'https://townsquare.media/site/625/files/2018/03/GettyImages-74260601.jpg?w=980&q=75' }} />
          </Card>
          <Card style={styles.cardContainer}>
            <Card.Cover style={styles.tiles} source={{ uri: 'https://s3.amazonaws.com/bit-photos/large/8211299.jpeg' }} />
          </Card>
          <Card style={styles.cardContainer}>
            <Card.Cover style={styles.tiles} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTqV5kYc4wd3lbVHqrCMx4ZDBH5oKk_ll1y_CvzGWUEAmCI32YT&usqp=CAU' }} />
          </Card>
          <Card style={styles.cardContainer}>
            <Card.Cover style={styles.tiles} source={{ uri: 'https://amp.thenational.ae/image/policy:1.961116:1578399887/ac08-JAN-jazzy-jeff-will-smith.jpg?f=4x3&q=1.0&w=1024&$p$f$q$w=0153e49' }} />
          </Card>
          <Card style={styles.cardContainer}>
            <Card.Cover style={styles.tiles} source={{ uri: 'https://bloximages.chicago2.vip.townnews.com/mtexpress.com/content/tncms/assets/v3/editorial/4/2f/42feeaaa-5d99-11ea-b6db-e72df56653ec/5e5ed1b2144d3.image.jpg?resize=400%2C399' }} />
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
  scrollarea: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 5
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
  cardContainer: {
    width: '50%'
  },
  tiles: {
    height: 150,
    alignContent: 'stretch'
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
    backgroundColor: 'gray',
    color: 'white'
  }
})

export default Profile
