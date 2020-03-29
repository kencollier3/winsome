import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RectButton, FlatList } from 'react-native-gesture-handler';
import level1 from '../data/level1.json';

export default function Level1Screen() {

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={level1}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => {
        return (
          <OptionButton
            icon={'ios-chatboxes'}
            label={`${index + 1}. ${item.question}`}
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
  const [isNotChecked, setChecked] = useState(true);
  const toggle = () => setChecked(!isNotChecked);

  return (
    <RectButton style={[isNotChecked ? styles.option : styles.checkedOption, isLastOption && styles.lastOption]}
      onPress={toggle}
    >
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons
            name={isNotChecked ? 'ios-chatboxes' : 'md-checkmark'}
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
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  checkedOption: {
    backgroundColor: '#F0EEEE',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
    marginRight: 25
  },
});
