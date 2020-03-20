import { useLinking } from '@react-navigation/native';
import { Linking } from 'expo';

export default function(containerRef) {
  return useLinking(containerRef, {
    prefixes: [Linking.makeUrl('/')],
    config: {
      Root: {
        path: 'root',
        screens: {
          Level1: 'level1',
          Level2: 'level2',
          Settings: 'settings',
          Level3: 'level3',
          Level4: 'level4',
          Level5: 'level5',
        },
      },
    },
  });
}
