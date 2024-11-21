import styles from "./QuizLayout.module.scss";
import QuizButton from "../QuizButton/QuizButton";
import QuizTitle from "../QuizTitle/QuizTitle";
import useStepContext from "../../../hooks/useStepContext";

export default function QuizLayout() {
  const { currentStep } = useStepContext();

  return (
    <div className={styles.card}>
      <QuizTitle />
      {currentStep.formContent()}
      <QuizButton />
    </div>
  );
}
