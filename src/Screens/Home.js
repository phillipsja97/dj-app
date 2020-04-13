import React from 'react'
import { ImageBackground, View, Text, StyleSheet, Image, Alert, TouchableOpacity } from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Left, Right, Body, Button, Icon } from 'native-base'

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
  }
})

const user = {
  name: "Jamie Phillips"
}

function Home(props) {
    const { navigation } = props
    return (
       <ImageBackground source={image} style={{ height: '100%', width: '100%' }}>
       <View style={styles.text} >
        <Image source={{
            uri: 'https://www.logofury.com/blog/wp-content/uploads/2018/12/DJ-Logo-Idea-1.jpg'
            }} 
            style={{ height: 200, width: 200, marginBottom: 50 }} 
          />
              <Button full danger iconRight
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('Profile', { item: user }) }>
                <Icon type="AntDesign" name="google"></Icon>
                <Text style={styles.buttonText}>Login with Google</Text>
              </Button>
       </View>
       </ImageBackground>
    );
  }

export default Home


// import React, { Component } from 'react';
// import { ImageBackground, View, Text, StyleSheet, Image, Alert } from 'react-native';
// import { Container, Header, Title, Content, Footer, FooterTab, Left, Right, Body, Button, Icon } from 'native-base';

// const image = { uri: "https://images2.alphacoders.com/701/thumb-1920-70172.jpg" };

// const styles = StyleSheet.create ({
//   text: {
//     marginTop: 200,
//     position: 'absolute',
//     alignItems: 'center',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//   },
//   button: {
//     width: '85%',
//     justifyContent: 'center'
//   }
// })

// export default function HomeScreen() {
//     return (
//        <ImageBackground source={image} style={{ height: '100%', width: '100%' }}>
//        <View style={styles.text} >
//        <Image source={{
//          uri: 'https://www.logofury.com/blog/wp-content/uploads/2018/12/DJ-Logo-Idea-1.jpg'
//         }} 
//         style={{ height: 200, width: 200, marginBottom: 50 }} 
//         />
//           <View style={{ justifyContent: 'center' }}>
//           <Button full danger iconRight style={styles.button}
//           onPress={() => alert("You logged In!")}
//           >
//               <Text style={{ paddingRight: 30 }}>Sign In With Google</Text>
//               <Icon type= "AntDesign" name="google"></Icon>
//           </Button>
//           </View>
//        </View>
//        </ImageBackground>
//     );
//   }
