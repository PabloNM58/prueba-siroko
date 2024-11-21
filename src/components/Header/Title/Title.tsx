import styles from "./Title.module.scss";
import useStepContext from "../../../hooks/useStepContext";

export default function Title() {
  const { currentStep } = useStepContext();
  return (
    <p className={styles.title}>{currentStep.headerTitle.toUpperCase()}</p>
  );
}
