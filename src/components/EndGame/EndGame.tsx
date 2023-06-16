import React, { SetStateAction } from 'react';
import styles from './EndGame.module.css'

interface EndGameProps {
    score : number
    setStep : React.Dispatch<SetStateAction<number>>
    setScore : React.Dispatch<SetStateAction<number>>
}




const EndGame : React.FC<EndGameProps> = ({score,setStep, setScore}) => {

    const restartGame = () => {
        setStep(0)
        setScore(0)
    }



    return (
        <div className={styles.container}>
            <img className={styles.img} src={require('../../static/img/happy.png')} alt="" />
            <div className={styles.score}>Your Score : {score} </div>
            <div className={styles.againBtn} onClick={() => {restartGame()}}>Try Again</div>
        </div>
    );
};

export default EndGame;