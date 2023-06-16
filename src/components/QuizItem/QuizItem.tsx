import React, {useEffect, useState} from 'react';
import styles from './QuizItem.module.css'
import { QuizSingle } from '../Quiz/Quiz';


interface QuizItemProps {
    quiz : QuizSingle
    step : number
    setStep : React.Dispatch<React.SetStateAction<number>>
    setScore : React.Dispatch<React.SetStateAction<number>>
    score : number
        
    
    
    
}


const QuizItem : React.FC<QuizItemProps> = ({quiz,step,setStep,setScore,score}) => {

    const [variants, setVariant] = useState<string[]>([])
    const [currentAnswer , setCurrentAnswer] = useState<string>('')

    useEffect(() => {
        createVariants(quiz.correctAnswer,quiz.incorrectAnswers)
    },[step])

    const createVariants = (correctAnswer : string, incorrectAnswers : string[]) => {
        setCurrentAnswer(correctAnswer)
        const variants = [...incorrectAnswers,correctAnswer]
        setVariant(shuffle(variants))

    }


    const shuffle = (variants : string[]) : string[] => {
        const shuffleVariants = variants.sort(() => Math.random() - 0.5);
        return shuffleVariants
    }

    
    const OnVariantClick = (variant : string) => {
        if (variant === currentAnswer) {
            setScore(score + 1)
            setStep(step + 1)
        }

        else {
            setStep(step + 1)
        }
        
    }



    return (
        <div className={styles.content}>
                <div className={styles.lineContainer}>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.quizContainer}>
                    <h3 className={styles.questionText}>{quiz.question.text}</h3>
                    <div className={styles.variantsContainer}>
                        {variants.map((variant,i) => (
                            <div key={i} className={styles.variantText} onClick={() => {OnVariantClick(variant)}}>{variant}</div>
                        ))}
                    </div>
                </div>
            </div>
    );
};

export default QuizItem;