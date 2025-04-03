'use client';

import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import tw from './lib/tailwind';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { Choice } from './types/game-types';
import Scoreboard from './components/Scoreboard';
import GameBoard from './components/GameBoard';
import RulesModal from './components/RulesModal';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [score, setScore] = useState<number>(12);
  const [myChoice, setMyChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const [result, setResult] = useState<
    'YOU WIN' | 'YOU LOSE' | "IT'S A TIE" | null
  >(null);
  const [showRules, setShowRules] = useState<boolean>(false);
  const [gameState, setGameState] = useState<'choosing' | 'result'>('choosing');

  useEffect(() => {
    loadScore();
  }, []);

  const loadScore = async () => {
    try {
      const savedScore = await AsyncStorage.getItem('score');
      if (savedScore !== null) {
        setScore(Number.parseInt(savedScore));
      }
    } catch (error) {
      console.error('Error loading score:', error);
    }
  };

  const saveScore = async (newScore: number) => {
    try {
      await AsyncStorage.setItem('score', newScore.toString());
    } catch (error) {
      console.error('Error saving score:', error);
    }
  };

  const handleChoice = (choice: Choice) => {
    const computerRandomChoice = getRandomChoice();
    setMyChoice(choice);
    setComputerChoice(computerRandomChoice);
    setGameState('result');

    setTimeout(() => {
      const gameResult = determineWinner(choice, computerRandomChoice);
      setResult(gameResult);
      updateScore(gameResult);
    }, 1500);
  };

  const getRandomChoice = (): Choice => {
    const choices: Choice[] = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  };

  const determineWinner = (
    playerChoice: Choice,
    computerChoice: Choice
  ): 'YOU WIN' | 'YOU LOSE' | "IT'S A TIE" => {
    if (playerChoice === computerChoice) {
      return "IT'S A TIE";
    }

    if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return 'YOU WIN';
    }

    return 'YOU LOSE';
  };

  const updateScore = (gameResult: 'YOU WIN' | 'YOU LOSE' | "IT'S A TIE") => {
    let newScore = score;

    if (gameResult === 'YOU WIN') {
      newScore += 1;
    } else if (gameResult === 'YOU LOSE') {
      newScore -= 1;
    }

    setScore(newScore);
    saveScore(newScore);
  };

  const resetGame = () => {
    setMyChoice(null);
    setComputerChoice(null);
    setResult(null);
    setGameState('choosing');
  };

  return (
    <LinearGradient
      colors={['rgb(31, 55, 86)', 'rgb(20, 21, 57)']}
      style={tw`flex-1`}
    >
      <StatusBar style='light' />
      <SafeAreaView style={tw`flex-1`}>
        <View style={tw`flex-1 px-6 py-12`}>
          <Scoreboard score={score} />

          <GameBoard
            gameState={gameState}
            myChoice={myChoice}
            computerChoice={computerChoice}
            result={result}
            onChoiceSelect={handleChoice}
            onPlayAgain={resetGame}
          />

          <View style={tw`mt-auto items-center mb-8`}>
            <TouchableOpacity
              style={tw`border border-header-outline rounded-lg py-3 px-10`}
              onPress={() => setShowRules(true)}
            >
              <Text style={tw`text-white text-lg font-bold tracking-widest`}>
                RULES
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <RulesModal visible={showRules} onClose={() => setShowRules(false)} />
      </SafeAreaView>
    </LinearGradient>
  );
}
