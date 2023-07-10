import { View, Text, Image,TouchableOpacity } from 'react-native';
import React from 'react';
import Rating from "../../components/Rating";
import styles from './styles';

const Card = ({title, style, image, author, rating, time, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <View style={styles.row}>
        <View style={{flex:1}}>
                <Text numberOfLines={1} style={styles.title}>{title}</Text>
                <Rating rating={rating}/>
        </View>
        <Image style={styles.image} source={{ uri: image}} />
      </View>

      <View style={styles.footer}>
      {author ? (
          <View style={styles.row}>
              <Image style={styles.authorImage} source={{ uri:author.image_url }} />
              <Text style={styles.footerText}>By {author.name}</Text>
          </View>
      ) : <View />}

      {time ? (
          <View style={styles.row}>
              <Image style={styles.timerIcon} source={require('../../../assets/timer.png')} />
              <Text style={styles.footerText}>{time}</Text>
          </View>
      ) : <View />}
      </View>
    </TouchableOpacity>
  )
}

export default React.memo(Card);