import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RectButton,  FlatList } from 'react-native-gesture-handler';
import level1 from '../data/level1.json';

export default function Level1Screen() {
  const [color, setColor] = useState(styles.option.backgroundColor);
  const [textColor, setTextColor] = useState(styles.optionText);

return (
      <FlatList
       style={styles.container} 
       contentContainerStyle={styles.contentContainer}
       data={level1}
       showsVerticalScrollIndicator={false}
       renderItem={({item, index}) => {   
            return (
              <OptionButton
                      icon="ios-chatboxes"
                      label={`${index + 1}. ${item.question}`}
                      onPress={console.log(color)}
                      isLastOption
              />
              );     
            }}
            keyExtractor={(item, index) => index.toString()}
      >
      </FlatList>
  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton 
      style={[styles.option, isLastOption && styles.lastOption]} 
      onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons 
            name={icon} 
            size={22} 
            color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 10,
  },
  option: {
    backgroundColor: 'pink',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#D8F0FF',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 16,
    color: 'purple',
    alignSelf: 'auto',
    marginTop: 1,
    marginRight: 20
  },
});
