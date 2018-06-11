import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";


const Button = ({handleClick, buttonText}) => {
    return (
        <TouchableOpacity style={styles.button} onPress={handleClick}>
          <Text style={styles.buttonText}> {buttonText} </Text>
        </TouchableOpacity>
    );
};

Button.propTypes = {

};
const styles = StyleSheet.create({
    button: {
      padding: 10,
      backgroundColor: '#1565C0',
      borderRadius: 2,
      shadowColor: '#000000',
      shadowOffset: {
        width: 10,
        height: 13
      },
      shadowRadius: 5,
      shadowOpacity: 1.0,
      elevation: 5,
    },
    buttonText: {
      fontWeight: "700",
      color: "#ffffff",
    }
  });
export default Button;