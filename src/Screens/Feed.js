import { Body, Button, Card, CardItem, Container, Content, H3, Icon, Left, Right, Thumbnail } from 'native-base';
import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { Appbar } from 'react-native-paper';
import { AuthContext } from '../Context/Context';

function Feed(props) {
  const { signOut } = React.useContext(AuthContext)
  return (
    <Container>
    <Appbar.Header
          style={styles.header}
      >
        <Appbar.Content
          title="Social"
        />
        <Appbar.Action icon="magnify"/>
        <Appbar.Action icon="logout" onPress={() => signOut()} />
      </Appbar.Header>
      <Content>
        <Card>
          <CardItem style={styles.card}>
            <Left>
              <Thumbnail source={{uri: 'https://i.insider.com/567322aedd08952d5d8b46de?width=1100&format=jpeg&auto=webp'}} />
              <Body>
                <H3>DJ Khaled</H3>
                <Text note>Once again Nashville came to party. Major respect! #majorKey</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody style={styles.card}>
            <Image source={{uri: 'https://media-assets-05.thedrum.com/cache/images/thedrum-prod/s3-news-tmp-136481-dj_khaled_booking_dot_com_0--2x1--940.png'}} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem style={styles.card}>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>1225 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
              </Button>
            </Body>
            <Right>
              <Text>19h ago</Text>
            </Right>
          </CardItem>
        </Card>
        <Card>
          <CardItem style={styles.card}>
            <Left>
              <Thumbnail source={{uri: 'https://cache.umusic.com/_images/facebook/drdre/og-dre.jpg'}} />
              <Body>
                <H3>Dr Dre</H3>
                <Text note>New album in the works #backToBasics</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody style={styles.card}>
            <Image source={{uri: 'https://centralsauce.com/wp-content/uploads/2018/11/dr_dre.jpg'}} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem style={styles.card}>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>8376 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
              </Button>
            </Body>
            <Right>
              <Text>11h ago</Text>
            </Right>
          </CardItem>
        </Card>
        <Card>
          <CardItem style={styles.card}>
            <Left>
              <Thumbnail source={{uri: 'https://weraveyou.com/wp-content/uploads/2020/03/Diplo-e1584370289406.jpg'}} />
              <Body>
                <H3>Diplo</H3>
                <Text note>Sometimes you have to get out of your comfort zone to build some incredible music. </Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody style={styles.card}>
            <Image source={{uri: 'https://runthetrap.com/wp-content/uploads/2019/04/diplocountry-1024x512.jpg'}} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem style={styles.card}>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>200K+ Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>8123 Comments</Text>
              </Button>
            </Body>
            <Right>
              <Text>Yesterday</Text>
            </Right>
          </CardItem>
        </Card>
      </Content>
    </Container>
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
  header: {
    backgroundColor: 'black'
  },
  card: {
    backgroundColor: '#DCDCDC'
  }
})

export default Feed
