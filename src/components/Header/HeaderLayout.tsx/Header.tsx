import styles from "./Header.module.scss";
import Title from "../Title/Title";
import InfoText from "../../common/Text/InfoText";
import StepChip from "../StepChip/StepChip";
import Logo from "../Logo/Logo";
import useStepContext from "../../../hooks/useStepContext";

export default function Header() {
  const { currentStep } = useStepContext();
  return (
    <header className={styles.header}>
      <Logo />
      <StepChip />
      <Title />
      {currentStep.headerSubtitle && (
        <InfoText text={currentStep.headerSubtitle} />
      )}
    </header>
  );
}
