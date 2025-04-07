import type React from 'react';
import { Modal, View, Text, TouchableOpacity, Image } from 'react-native';
import tw from '../lib/tailwind';
import type { RulesModalProps } from '../types/game-types';
import Close from '../assets/icon-close.svg';
import Rules from '../assets/image-rules.svg';

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
            <Text style={tw`text-dark-text text-3xl font-barlowBold`}>RULES</Text>
            <TouchableOpacity onPress={onClose}>
              <Close width={24} height={24} />
            </TouchableOpacity>
          </View>

          <View style={tw`items-center justify-center mb-6`}>
            <Rules />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default RulesModal;
