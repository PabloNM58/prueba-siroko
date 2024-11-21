import styles from "./QuizTitle.module.scss";
import useStepContext from "../../../hooks/useStepContext";

export default function QuizTitle() {
  const { currentStep } = useStepContext();
  return <p className={styles.title}>{currentStep.formTitle.toUpperCase()}</p>;
}
