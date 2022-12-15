import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from "./Colors";


const Input = ({
    label,
    iconName,
    error,
    right,
    password,
    onFocus = () => {},
    ...props
  }) => {
    return(

      <View>
        <View style={{marginBottom: 20,}}>
            <Text style={style.label}>{label}</Text>
            <View style={style.inputContainer}>
            <Icon name={iconName} style={{color: '#3540e6', fontSize: 20, marginRight: 10,marginTop: 15}}/>
            <TextInput autoCorrect={false} style= {{color: 'black' , flex:1}}  {...props} />
            </View>
        </View>

        {right &&
        <View style={{marginBottom: 20,}}>
            <Text style={style.label}>{label}</Text>
            <View style={style.inputContainer}>
            <Icon name={iconName} style={{color: 'red', fontSize: 20, marginRight: 10,marginTop: 15}}/>
            <TextInput autoCorrect={false} style= {{color: 'black' , flex:1}}  {...props} />
            </View>
        </View>
        }
      </View>
        
    );

  };

  
  const style = StyleSheet.create({
    label: {
      marginVertical: 5,
      fontSize: 14,
      color: 'black',
    },
    inputContainer: {
      height: 50,
      backgroundColor: '#edeefd' ,
      flexDirection: 'row',
      paddingHorizontal: 15,
      borderTopRightRadius: 10,
      borderBottomLeftRadius: 10,


      
    },
  });
  
  export default Input;