import { useEffect, useState } from "react";
import "./timer.css";

const Timer = () => {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  const deadline = "April, 25, 2024";

  const getTime = (deadline: any) => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer">
      <div className="counter days">
        <span className="label">Days</span>
        <span>{days < 10 ? "0" + days : days}</span>
      </div>
      <div className="counter hours">
        <span className="label">Hours</span>
        <span>{hours < 10 ? "0" + hours : hours}</span>
      </div>
      <div className="counter minutes">
        <span className="label">Minutes</span>
        <span>{minutes < 10 ? "0" + minutes : minutes}</span>
      </div>
      <div className="counter sseconds">
        <span className="label">Seconds</span>
        <span>{seconds < 10 ? "0" + seconds : seconds}</span>
      </div>
    </div>
  );
};

export default Timer;
