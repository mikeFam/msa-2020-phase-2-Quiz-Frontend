import React, { useState, useEffect }from 'react';

import { Wrapper } from './Timer.style';

const calculateTimer = (timeInSecond: number) :Array<number|string> => {
    // The function calculateTimer takes in a number input 'timeInSecond' and output 
    // an array of type number 
    const hours = Math.floor(timeInSecond / 3600);
    const minutes = Math.floor((timeInSecond - (hours * 3600)) / 60);
    const seconds = timeInSecond - (hours * 3600) - (minutes * 60);

    const hoursFormat = hours < 10? `0${hours}` : hours; 
    const minutesFormat = hours < 10? `0${minutes}` : minutes; 
    const secondsFormat = hours < 10? `0${seconds}` : seconds; 
    return [
        hoursFormat,
        minutesFormat,
        secondsFormat
    ];
}

type Props = {
    gameStart : boolean
    gameOver : boolean
};

const Timer: React.FC<Props> = ({gameStart}) => {

    const [timeInSeconds, setTimeInSeconds] = useState<number>(0);
    const [intervalId, setIntervalId] = useState<number>(0);
    const [timerArray, setTimerArray] = useState<Array<number|string>>([]);

    const handleGameStart = () => {
        const interval:any = setInterval(() => {
            setTimeInSeconds((previousState:number) => previousState + 1);
        }, 1000);
        setIntervalId(interval);
    }

    useEffect (() => {
        const timeArray = calculateTimer(timeInSeconds);
        setTimerArray(timeArray);
    }, [timeInSeconds]);

    console.log(timerArray)

    return (
    <Wrapper>
        <section className="time-container">
            <p className="timer-text">{timerArray[0]}</p>
            <span>:</span>
            <p className="timer-text">{timerArray[1]}</p>
            <span>:</span>
            <p className="timer-text">{timerArray[2]}</p>
        </section>

    </Wrapper>
    )
};   


export default Timer;