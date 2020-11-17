 
import React, { useState } from 'react';
import { fetchQuizQuestions } from './API';
// Components
import QuestionCard from './components/QuestionCard';
import Timer from './components/Timer';
// types
import { QuestionsState, Difficulty } from './API';
// Styles 
import { GlobalStyle, Wrapper, Header } from './App.styles';

import Logo from './Images/logo/logo_transparent.png';


export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

class Player{
  name: string;
  score: number;
  time: number;
  
  constructor (name: string, score: number, time: number){
    this.name = name;
    this.score = score;
    this.time = time;
  }
};

const TOTAL_QUESTIONS = 10;

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [gameStart, setGameStart] = useState(false);
  

  const startTrivia = async () => {
    setGameStart(true);
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const endTrivia = async () => {
    setGameStart(false);
    setLoading(false);
    setGameOver(true);
    setQuestions([]);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      // User's answer
      const answer = e.currentTarget.value;
      // Check answer against correct answer
      const correct = questions[number].correct_answer === answer;
      // Add score if answer is correct
      if (correct) setScore((prev) => prev + 1);
      // Save the answer in the array for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    // Move on to the next question if not the last question
    const nextQ = number + 1;

    if (nextQ === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQ);
    }
  };

  return (
    <>
    <GlobalStyle/>
      <Wrapper>
        <img src={Logo} alt='Logo'/>
        <h1>REACT QUIZ</h1>
        {(gameOver || userAnswers.length === TOTAL_QUESTIONS)? (
          <button className='start' onClick={startTrivia}>
            Start
          </button>
        ) :
          <button className='end' onClick={endTrivia}>
            End
          </button>}
        {!gameOver?
          userAnswers.length < TOTAL_QUESTIONS? 
            <p className='score'>Score: {score}</p> 
            :
            <p className='final-score'>Final Score: {score}</p>  
       : null}
        {userAnswers.length === TOTAL_QUESTIONS? (
          <div>
            <form>
              <label> Name </label>
              <input></input>
              <button>
                Submit
              </button>
            </form>
          </div>
        ) : null}
        {loading ? <p>Loading Questions...</p> : null}
        {!loading && !gameOver && (
          <QuestionCard
            questionNr={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!loading && !gameOver &&  (
        <Timer gameStart={gameStart} gameOver ={gameOver}/>
        )}
        {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
          <button className='next' onClick={nextQuestion}>
            Next Question
          </button>
        ) : null}
      </Wrapper>
    </>
  );
};

export default App;
