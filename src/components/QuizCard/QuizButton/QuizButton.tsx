import styles from "./QuizButton.module.scss";
import useStepContext from "../../../hooks/useStepContext";
import { MdArrowRightAlt } from "react-icons/md";

export default function QuizButton() {
  const { currentStep, handleNextStep } = useStepContext();
  return (
    <button className={styles.quizButton} onClick={handleNextStep}>
      <span className={styles.text}>{currentStep.formButtonText}</span>
      <MdArrowRightAlt size={30} />
    </button>
  );
}
