import React from 'react'
import { ImageBackground, View, Text, StyleSheet, Image, Alert, TouchableOpacity } from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Left, Right, Body, Button, Icon } from 'native-base'
import { AuthContext } from '../Context/Context'
const image = { uri: "https://images2.alphacoders.com/701/thumb-1920-70172.jpg" };

const styles = StyleSheet.create ({
  text: {
    marginTop: 200,
    position: 'absolute',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
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
  logo: {
    height: 200, 
    width: 200, 
    marginBottom: 10,
    backgroundColor: 'transparent'
  }
})

function Home() {
    const { signIn } = React.useContext(AuthContext)
    return (
       <ImageBackground source={image} style={{ height: '100%', width: '100%' }}>
       <View style={styles.text} >
        <Image source={{
            uri: 'https://github.com/phillipsja97/dj-app/blob/master/src/Assets/DJ.jpg?raw=true'
            }} 
            style={styles.logo} 
          />
              <Button full danger iconRight
                style={styles.buttonContainer}
                onPress={() => signIn() }>
                <Icon type="AntDesign" name="google"></Icon>
                <Text style={styles.buttonText}>Login with Google</Text>
              </Button>
              <Text style={styles.buttonText}
              onPress={() => alert('account creation page')}
              >Or Create An Account Here</Text>
       </View>
       </ImageBackground>
    );
  }

export default Home
