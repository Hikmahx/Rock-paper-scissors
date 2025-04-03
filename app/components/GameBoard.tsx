import type React from 'react';
import { View } from 'react-native';
import tw from '../lib/tailwind';
import type { Choice } from '../types/game-types';
import PickContainer from './PickContainer';
import ChoiceDisplay from './ChoiceDisplay';
import WinLoseTie from './WinLoseTie';

interface GameBoardProps {
  gameState: 'choosing' | 'result';
  myChoice: Choice | null;
  computerChoice: Choice | null;
  result: 'YOU WIN' | 'YOU LOSE' | "IT'S A TIE" | null;
  onChoiceSelect: (choice: Choice) => void;
  onPlayAgain: () => void;
}

const GameBoard: React.FC<GameBoardProps> = ({
  gameState,
  myChoice,
  computerChoice,
  result,
  onChoiceSelect,
  onPlayAgain,
}) => {
  const isWinner = (choice: 'my-choice' | 'computer-choice') => {
    if (result === 'YOU WIN' && choice === 'my-choice') return true;
    if (result === 'YOU LOSE' && choice === 'computer-choice') return true;
    return false;
  };

  return (
    <View style={tw`flex-1 items-center justify-center relative`}>
      {gameState === 'choosing' ? (
        <View style={tw`relative w-full items-center justify-center`}>
          <View style={tw`w-72 h-72 items-center justify-center`}>
            {/* Triangle background would be an image in the background */}
            <View
              style={tw`absolute w-full h-full items-center justify-center`}
            >
              <View style={tw`w-64 h-64 items-center justify-center`}>
                {/* Paper - Top Left */}
                <View style={tw`absolute top-0 left-0`}>
                  <PickContainer
                    type='paper'
                    onPress={() => onChoiceSelect('paper')}
                  />
                </View>

                {/* Scissors - Top Right */}
                <View style={tw`absolute top-0 right-0`}>
                  <PickContainer
                    type='scissors'
                    onPress={() => onChoiceSelect('scissors')}
                  />
                </View>

                {/* Rock - Bottom Center */}
                <View style={tw`absolute bottom-0`}>
                  <PickContainer
                    type='rock'
                    onPress={() => onChoiceSelect('rock')}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      ) : (
        <View style={tw`w-full flex-row justify-between items-center px-4`}>
          <ChoiceDisplay
            type='my-choice'
            choice={myChoice}
            isWinner={isWinner('my-choice')}
          />

          <ChoiceDisplay
            type='computer-choice'
            choice={computerChoice}
            isWinner={isWinner('computer-choice')}
          />

          <WinLoseTie
            result={result}
            onPlayAgain={onPlayAgain}
            visible={result !== null}
          />
        </View>
      )}
    </View>
  );
};

export default GameBoard;
