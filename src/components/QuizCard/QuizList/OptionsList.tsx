import styles from "./QuizList.module.scss";
import OptionButton from "./OptionButton";
import useStepContext from "../../../hooks/useStepContext";

interface OptionListProps {
  selectedValue: string | null;
  onChange: (value: string) => void;
}

export default function OptionList({
  selectedValue,
  onChange,
}: OptionListProps) {
  const { currentStep } = useStepContext();

  return (
    <div className={styles.optionList}>
      {currentStep?.quizOptions?.map((option) => (
        <OptionButton
          key={option}
          value={option}
          isSelected={selectedValue === option}
          onSelect={onChange}
        />
      ))}
    </div>
  );
}
