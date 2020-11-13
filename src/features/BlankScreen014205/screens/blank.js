import React from "react";
import {StyleSheet, Image, ScrollView, TouchableOpacity, View} from "react-native";

import {Text, Button} from "react-native-ui-kitten";
import Icon from 'react-native-vector-icons/FontAwesome';

import LogoIcon from "../../assets/images/backgroundLoginV1.png";
import {installed_blueprints} from "../../config/installed_blueprints";
import {store} from "../../redux/store";
import {styles} from '../styles'
import logo from "../../assets/icons/logo.png"
import {connect} from 'react-redux';

// Splash Screen

//import DateTimePicker from 'react-native-datepicker';
//import Icon from 'react-native-vector-icons/FontAwesome';
//import Slider from '@react-native-community/slider';
//import { CheckBox } from 'react-native-elements';
//import {SlideMenuIcon} from '../../../navigator/slideMenuIcon';

//export default class Blank extends React.Component {
//  static navigationOptions = ({navigation}) => {
//    return {
//      headerLeft: <SlideMenuIcon navigationProps={navigation} />,
//    };
//  };
  
//  state = {};
class App extends Component {

    static navigationOptions = {
        title: 'Installed blueprints'
    };

    componentDidMount() {
        store.dispatch({type: 'TEST/ALO'});
        const {navigation: {
                navigate
            }} = this.props;
        if(this.props.accessToken){
          navigate("MainApp")
          //navigate("EmailAuth");
        }

            
        setTimeout(() => {
          if(!this.props.accessToken){
            navigate("EmailAuth")
          }
        }, 3330)
    }

    renderItems() {
        const {navigation: {
                navigate
            }} = this.props;

        return installed_blueprints.map(item => {
            if (item.hasOwnProperty('access_route')) {
                return (
                    <TouchableOpacity
                        onPress={_ => navigate(item.access_route)}
                        style={styles.item}
                        key={`${item.name}--blueprint-button`}>
                        <Icon
                            style={styles.itemLogo}
                            name={item.icon_name
                            ? item.icon_name
                            : 'pencil-square-o'}
                            size={40}
                            color="#F88087"/>
                        <Text style={styles.itemFont}>{item.human_name}</Text>
                    </TouchableOpacity>
                );
            }
        });
    }
  
    render = () => (
      <View style={styles.itemsContainer}>
                <Image
                    style={{
                    width: 365,
                    height: 161,
                }}
                    resizeMode="contain"
                    source={{uri: 'https://crowdbotics-slack-dev.herokuapp.com/'}}/>
                <Text style={styles.heading}>{"Splash Screen Text"}</Text>
      </View>
    );
  }

//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    marginHorizontal: 16,
//  },
//});
