import styles from "./StepChip.module.scss";
import useStepContext from "../../../hooks/useStepContext";

export default function StepChip() {
  const { currentStep } = useStepContext();
  return (
    <p className={styles.stepIndicator}>
      {currentStep.stepChipText.toUpperCase()}
    </p>
  );
}
