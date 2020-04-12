import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { Container, Title, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right, H3 } from 'native-base'

function Feed(props) {
  const { route, navigation } = props
  const { item } = route.params
  const { name } = item
  return (
    <Container>
      <Content>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{uri: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/305775_10150282150822126_1246491813_n.jpg?_nc_cat=102&_nc_sid=e007fa&_nc_ohc=U9d3v19UA-EAX-XbBuu&_nc_ht=scontent-atl3-1.xx&oh=fd0db62ec3bb3bb897e91f904f82214d&oe=5EB8650E'}} />
              <Body>
                <H3>Jamie Phillips</H3>
                <Text note>So, let's talk about last night. Nashville, y'all were great!</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={{uri: 'https://www.mixcityinc.com/blog/wp-content/uploads/2016/08/Infrontofcrowd.jpg'}} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
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
          <CardItem>
            <Left>
              <Thumbnail source={{uri: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/305775_10150282150822126_1246491813_n.jpg?_nc_cat=102&_nc_sid=e007fa&_nc_ohc=U9d3v19UA-EAX-XbBuu&_nc_ht=scontent-atl3-1.xx&oh=fd0db62ec3bb3bb897e91f904f82214d&oe=5EB8650E'}} />
              <Body>
                <Text>Jamie Phillips</Text>
                <Text note>GeekyAnts</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={{uri: 'https://www.mixcityinc.com/blog/wp-content/uploads/2016/08/Infrontofcrowd.jpg'}} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
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
})

export default Feed
