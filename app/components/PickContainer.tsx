import type React from 'react';
import { View, TouchableOpacity } from 'react-native';
import tw from '../lib/tailwind';
import { LinearGradient } from 'expo-linear-gradient';
import type { PickContainerProps } from '../types/game-types';

import RockIcon from '../assets/icon-rock.svg';
import PaperIcon from '../assets/icon-paper.svg';
import ScissorsIcon from '../assets/icon-scissors.svg';

const PickContainer: React.FC<PickContainerProps> = ({
  type,
  onPress,
  style,
  isWinner = false,
}) => {
  const getGradientColors = () => {
    switch (type) {
      case 'rock':
        return ['rgb(220, 46, 78)', 'rgb(221, 64, 93)'];
      case 'paper':
        return ['rgb(72, 101, 244)', 'rgb(86, 113, 245)'];
      case 'scissors':
        return ['rgb(236, 158, 14)', 'rgb(236, 169, 34)'];
      default:
        return ['#e6e6e6', '#e6e6e6'];
    }
  };

  const getShadowColor = () => {
    switch (type) {
      case 'rock':
        return 'rgba(174, 27, 55, 0.8)';
      case 'paper':
        return 'rgba(45, 27, 210, 0.8)';
      case 'scissors':
        return 'rgba(210, 125, 27, 0.8)';
      default:
        return 'rgba(0, 0, 0, 0.2)';
    }
  };

  const IconComponent = () => {
    switch (type) {
      case 'rock':
        return <RockIcon />;
      case 'paper':
        return <PaperIcon />;
      case 'scissors':
        return <ScissorsIcon />;
      default:
        return <RockIcon />;
    }
  };

  const containerStyle = [
    tw`w-32 h-32 rounded-full justify-center items-center`,
    style,
  ];

  const innerCircleStyle = tw`w-24 h-24 rounded-full bg-[#ececeb] justify-center items-center shadow-inner`;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={!onPress}
      style={tw`relative`}
    >
      {isWinner && (
        <View
          style={tw`absolute w-full h-full rounded-full opacity-30 bg-white -m-4`}
        />
      )}
      {isWinner && (
        <View
          style={tw`absolute w-[140%] h-[140%] rounded-full opacity-20 bg-white -m-8`}
        />
      )}
      {isWinner && (
        <View
          style={tw`absolute w-[180%] h-[180%] rounded-full opacity-10 bg-white -m-12`}
        />
      )}

      <LinearGradient colors={getGradientColors()} style={containerStyle}>
        <View
          style={[
            innerCircleStyle,
            {
              shadowColor: '#bec0d5',
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 1,
              shadowRadius: 0,
            },
          ]}
        >
          <IconComponent />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default PickContainer;
