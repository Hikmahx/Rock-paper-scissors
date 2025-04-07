import type React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from '../lib/tailwind';
import type { WinLoseTieProps } from '../types/game-types';

const WinLoseTie: React.FC<WinLoseTieProps> = ({
  result,
  onPlayAgain,
  visible,
}) => {
  if (!visible) return null;

  return (
    <View
      style={tw`absolute left-0 right-0 items-center justify-center bottom-[-40]`}
    >
      <Text style={tw`text-white text-5xl font-bold mb-6 font-barlow`}>{result}</Text>

      <TouchableOpacity
        style={tw`bg-white py-3 px-14 rounded-lg`}
        onPress={onPlayAgain}
      >
        <Text style={tw`text-dark-text text-lg font-bold tracking-wider font-barlow`}>
          PLAY AGAIN
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default WinLoseTie;
