import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  ImageBackground,
  TextInput,
} from 'react-native';
import Constants from 'expo-constants';
// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.navtext}>
          Hidden Blue Shop
        </Text>
      </View>
      <View>
        <Text style={styles.heading}>
          Welcome!
        </Text>

        <View style={styles.inputtextcontainer}>
          <Text style={styles.inputtext}>
            Name
          </Text>
        </View>
        <View style={styles.fixToText}>
          <TextInput
            style={styles.input}
          />
        </View>

        <View style={styles.inputtextcontainer}>
          <Text style={styles.inputtext}>
            Pass
          </Text>
        </View>
        <View style={styles.fixToText}>
          <TextInput
            style={styles.input}
          />
        </View>
        <View style={styles.fixToText}>
          <Button
            title="                Sign In                    "
            color="lime"
            onPress={() => Alert.alert('Winner')}
          />
        </View>
        <View style={styles.fixToText}>
          <Button
            title="Sign Up"
            color="blue"
            onPress={() => Alert.alert('Winner')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 0,
  },
  heading: {
    textAlign: 'center',
    paddingLeft: 15,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 15,
    fontSize: 50,
    color: 'blue',
  },
  title: {
    textAlign: 'center',
    paddingLeft: 15,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 15,
    fontSize: 35,
    marginVertical: 0,
    color: 'blue',
  },
  fixToText: {
    paddingLeft: 15,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  navbar: {
    elevation: 10,
    backgroundColor: 'cyan',
    height: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  navtext: {
    textAlign: 'center',
    paddingTop: 2.5,
    fontSize: 35,
    color: 'white',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    width: '50%',
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  inputtextcontainer: {
    textAlign: 'left',
    paddingLeft: 15,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inputtext: {
    fontSize: 20,
    textAlign: 'left',
    flexDirection: 'row',
    justifyContent: 'center',
  }
});