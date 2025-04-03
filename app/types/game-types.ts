export type Choice = 'rock' | 'paper' | 'scissors';

export interface PickContainerProps {
  type: Choice;
  onPress?: () => void;
  style?: any;
  isWinner?: boolean;
}

export interface ChoiceDisplayProps {
  type: 'my-choice' | 'computer-choice';
  choice?: Choice | null;
  isWinner?: boolean;
}

export interface WinLoseTieProps {
  result: 'YOU WIN' | 'YOU LOSE' | "IT'S A TIE" | null;
  onPlayAgain: () => void;
  visible: boolean;
}

export interface ScoreboardProps {
  score: number;
}

export interface RulesModalProps {
  visible: boolean;
  onClose: () => void;
}
