import styles from "./Timecounter.module.scss";
import { config } from "../../config/stepConfig";
import useStepContext from "../../hooks/useStepContext";

export default function TimeExpired() {
  const { setStepConfig } = useStepContext();

  const resetInitialState = () => {
    setStepConfig(config);
  };
  return (
    <div className={`${styles.time} ${styles.timeExpired}`}>
      <span>Código caducado. </span>
      <span className={styles.restart} onClick={resetInitialState}>
        Reiniciar
      </span>
      .
    </div>
  );
}
