import type React from 'react';
import { View, Text } from 'react-native';
import tw from '../lib/tailwind';
import type { ChoiceDisplayProps } from '../types/game-types';
import PickContainer from './PickContainer';

const ChoiceDisplay: React.FC<ChoiceDisplayProps> = ({
  type,
  choice,
  isWinner,
}) => {
  return (
    <View style={tw`items-center justify-center`}>
      <Text style={tw`text-white text-lg font-bold tracking-wider mb-6 font-barlow`}>
        {type === 'my-choice' ? 'YOU PICKED' : 'THE HOUSE PICKED'}
      </Text>

      {choice ? (
        <PickContainer type={choice} isWinner={isWinner} />
      ) : (
        <View style={tw`w-32 h-32 rounded-full bg-[#192845] opacity-50`} />
      )}
    </View>
  );
};

export default ChoiceDisplay;
