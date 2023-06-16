import React, { useState, useEffect } from 'react';
import styles from './Quiz.module.css'
import QuizItem from '../QuizItem/QuizItem';
import axios from 'axios';
import EndGame from '../EndGame/EndGame';




export interface QuizSingle {
    id: string
    correctAnswer: string
    incorrectAnswers: string[]
    question: {
        text: string
    }

}



const Quiz = () => {

    const [quizes, setQuizes] = useState<QuizSingle[]>([])
    const [isLoading, setLoading] = useState<boolean>(true)
    const [step, setStep] = useState<number>(0)
    const [score, setScore] = useState<number>(0)


    useEffect(() => {
        fetchQuizes()




    }, [])




    const fetchQuizes = async () => {
        setLoading(true)
        const response = await axios.get<QuizSingle[]>("https://the-trivia-api.com/v2/questions")
        setQuizes(response.data)
        setLoading(false)


    }

    

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.lineContainer}>
                    <div className={styles.line} style={{width : `${step * 100 / quizes.length}%`}}></div>
                </div>
                <div className={styles.quizContainer}>
                    {isLoading ? <></>
                        : quizes.length !== step ?
                            <QuizItem quiz={quizes[step]} step={step} setStep={setStep} setScore={setScore} score={score} /> :
                            <EndGame score={score} setStep={setStep} setScore={setScore}/>}
                </div>
            </div>

        </div>
    );
};

export default Quiz;