import type React from 'react';
import { Modal, View, Text, TouchableOpacity, Image } from 'react-native';
import tw from '../lib/tailwind';
import type { RulesModalProps } from '../types/game-types';

const RulesModal: React.FC<RulesModalProps> = ({ visible, onClose }) => {
  return (
    <Modal
      animationType='fade'
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View
        style={tw`flex-1 justify-center items-center bg-black bg-opacity-50`}
      >
        <View style={tw`bg-white w-[90%] max-w-md rounded-xl p-6`}>
          <View style={tw`flex-row justify-between items-center mb-6`}>
            <Text style={tw`text-dark-text text-3xl font-bold`}>RULES</Text>
            <TouchableOpacity onPress={onClose}>
              <Image
                source={require('../assets/icon-close.svg')}
                style={tw`w-5 h-5`}
              />
            </TouchableOpacity>
          </View>

          <View style={tw`items-center justify-center mb-6`}>
            <Image
              source={require('../assets/image-rules.svg')}
              style={tw`w-64 h-64`}
              resizeMode='contain'
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default RulesModal;
