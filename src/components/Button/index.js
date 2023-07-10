import React from 'react'
import styles from "./styles";
import { Image, Text, TouchableOpacity, View } from 'react-native'

const Button = ({onPress, children}) => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text style={styles.text}>{children}</Text>
        <Image style={styles.icon} source={require('../../../assets/arrowRight.png')} />
      </TouchableOpacity>
    )
  }

export default React.memo(Button);