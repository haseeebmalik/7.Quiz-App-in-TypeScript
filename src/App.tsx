import React, { useEffect, useState } from "react";
import "./App.css";
import { getQuizDetails } from "./services/quiz-services";
import { QuizType } from "./Types/quiz_types";
import QuestionCard from "./components/QuestionCard";
import Home from "./components/home";
import Loading from "./components/loading";
import AppBar1 from "./components/AppBar";
import SwDev from "./swDev";

function App() {
  let [quiz, setQuiz] = useState<QuizType[]>([]);
  let [currentStep, setCurrentStep] = useState(0);
  let [score, setScore] = useState(0);
  let [showResult, setShowResult] = useState(false);
  let [a, seta] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const questions: QuizType[] = await getQuizDetails(5, "easy");
      setQuiz(questions);
    }
    fetchData();
  }, []);

  function setA(arg: boolean) {
    seta(arg);
  }

  const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) => {
    e.preventDefault();

    const currentQuestion: QuizType = quiz[currentStep];

    console.log(
      "correct And: " +
        currentQuestion.correct_answer +
        "--user Selection:" +
        userAns
    );

    if (userAns === currentQuestion.correct_answer) {
      setScore(++score);
    }

    if (currentStep !== quiz.length - 1) setCurrentStep(++currentStep);
    else {
      setShowResult(true);
    }
  };

  if (a === false) {
    return (
      <div>
        <Home A={setA} />
        <SwDev />
      </div>
    );
  }
  if (!quiz.length)
    return (
      <div>
        <Loading />
        <SwDev />
      </div>
    );

  return (
    <div>
      <AppBar1 />
      <br />
      <br />
      <QuestionCard
        options={quiz[currentStep].option}
        question={quiz[currentStep].question}
        callback={handleSubmit}
        currentStep={currentStep}
        showResult={showResult}
        score={score}
      />
    </div>
  );
}

export default App;
