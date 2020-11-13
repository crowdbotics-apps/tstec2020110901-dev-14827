import React from "react";
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
} from "react-native";
import DateTimePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/FontAwesome';
import Slider from '@react-native-community/slider';
import { CheckBox } from 'react-native-elements';
import {SlideMenuIcon} from '../../../navigator/slideMenuIcon';
import logo from '../assets/logo.png';

export default class Blank extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />,
    };
  };
  
  state = {};

  render = () => (
    <View style={styles.container}>
                  <View style={styles.itemsContainer}>
                <Image
                    style={{
                    width: 365,
                    height: 161,
                }}
                    resizeMode="contain"
                    source={logo}/>
                <Text style={styles.heading}>{"Splash Screen Text"}</Text>
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
});
