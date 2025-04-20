import type React from 'react';
import { View, Text } from 'react-native';
import tw from '../lib/tailwind';
import type { ScoreboardProps } from '../types/game-types';
import Logo from '../assets/logo.svg';

const Scoreboard: React.FC<ScoreboardProps> = ({ score }) => {
  return (
    <View
      style={tw`w-full mb-12 flex-row justify-between items-center p-3 border-[3px] border-slate-500 rounded-xl`}
    >
      <View style={tw`ml-2 w-32`}>
        <Logo style={tw`w-16 h-16`}/>
      </View>

      <View
        style={tw`bg-white p-3 rounded-md w-20 h-18 items-center justify-center`}
      >
        <Text style={tw`text-sm font-bold tracking-wider font-barlow`}>
          SCORE
        </Text>
        <Text style={tw`text-dark-text text-4xl font-bold -mb-1 font-barlowBold`}>{score}</Text>
      </View>
    </View>
  );
};

export default Scoreboard;
