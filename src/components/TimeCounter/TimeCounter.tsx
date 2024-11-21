import styles from "./TimeCounter.module.scss";
import { useEffect, useState } from "react";
import { MdAlarm } from "react-icons/md";
import formatTime from "../../utils/formatTime";
import TimeExpired from "./TimeExpired";

export default function TimeCounter() {
  const initialSeconds = 1200;
  const [timeLeft, setTimeLeft] = useState<number>(initialSeconds);

  const counterStyle = `${styles.counter} ${
    timeLeft > 0 ? styles.counterRun : styles.counterExpired
  }`;

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prevState) => prevState - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  return (
    <div className={counterStyle}>
      <span>
        <MdAlarm size={30} />
      </span>

      {timeLeft > 0 ? (
        <span className={`${styles.time} ${styles.timeRun}`}>
          {formatTime(timeLeft)}
        </span>
      ) : (
        <TimeExpired />
      )}
    </div>
  );
}
