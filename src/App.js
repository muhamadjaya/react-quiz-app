import React, { useState } from "react";

export default function App() {
  const questions = [
    {
      questionText: "Ada berapakah jumlah rukun islam?",
      answerOptions: [
        { answerText: "Ada 2", isCorrect: false },
        { answerText: "Ada 3", isCorrect: false },
        { answerText: "Ada 4", isCorrect: false },
        { answerText: "Ada 5", isCorrect: true },
      ],
    },
    {
      questionText: "Hukum melaksanakan puasa di bulan Ramadhan adalah?",
      answerOptions: [
        { answerText: "Sunnah", isCorrect: false },
        { answerText: "Wajib", isCorrect: true },
        { answerText: "Mubah", isCorrect: false },
        { answerText: "Makruh", isCorrect: false },
      ],
    },
    {
      questionText: "Pada tangal berapakah malam diturunkannya Al-Qur'an?",
      answerOptions: [
        { answerText: "17 Ramadhan", isCorrect: true },
        { answerText: "19 Ramadhan", isCorrect: false },
        { answerText: "10 Ramadhan", isCorrect: false },
        { answerText: "21 Ramadhan", isCorrect: false },
      ],
    },
    {
      questionText: "Ada berapakah jumlah surat dalam Al-Qur'an?",
      answerOptions: [
        { answerText: "110 Surah", isCorrect: false },
        { answerText: "111 Surah", isCorrect: false },
        { answerText: "113 Surah", isCorrect: false },
        { answerText: "114 Surah", isCorrect: true },
      ],
    },
    {
      questionText: "Kitab Al-Qur'an diturunkan pada nabi?",
      answerOptions: [
        { answerText: "Nabi Ibrahim as.", isCorrect: false },
        { answerText: "Nabi Musa as.", isCorrect: false },
        { answerText: "Nabi Isa as.", isCorrect: false },
        { answerText: "Nabi Muhammad saw.", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <>
      <div className="header-section">
        <h1 className="text-header">Quis Ramadhan</h1>
      </div>
      <div className="app">
        {/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
        {showScore ? (
          <div className="score-section">
            Kamu berhasil menjawab {score} pertanyaan dengan benar dari{" "}
            {questions.length} pertanyaan
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Pertanyaan {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map(
                (answerOption, answerOptionIdx) => (
                  <button
                    key={answerOptionIdx}
                    onClick={() =>
                      handleAnswerButtonClick(answerOption.isCorrect)
                    }
                  >
                    {answerOption.answerText}
                  </button>
                )
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}
