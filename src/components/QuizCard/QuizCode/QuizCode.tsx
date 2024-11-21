import styles from "./QuizCode.module.scss";
import useOptionsContext from "../../../hooks/useOptionsContext";
import useStepContext from "../../../hooks/useStepContext";
import generateCode from "../../../utils/generateCode";
import InfoText from "../../common/Text/InfoText";
import TimeCounter from "../../TimeCounter/TimeCounter";
import CopyButton from "./CopyButton";

export default function QuizCode() {
  const { currentStep } = useStepContext();
  const { selectedOptions } = useOptionsContext();
  return (
    <>
      <div className={styles.codeContainer}>
        <span className={styles.code}>
          {generateCode(selectedOptions[0], selectedOptions[1])}
        </span>
        <CopyButton />
      </div>
      {currentStep.codeInstructions && (
        <InfoText text={currentStep.codeInstructions} />
      )}
      <TimeCounter />
    </>
  );
}
