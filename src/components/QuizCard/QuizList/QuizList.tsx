import { useEffect, useState } from "react";
import OptionList from "./OptionsList";
import useOptionsContext from "../../../hooks/useOptionsContext";
import useStepContext from "../../../hooks/useStepContext";

export default function QuizList() {
  const { currentStep } = useStepContext();
  const { handleSelection } = useOptionsContext();
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  useEffect(() => {
    if (currentStep?.quizOptions?.[0]) {
      setSelectedValue(currentStep.quizOptions[0]);
    }
  }, [currentStep]);

  const handleChange = (value: string) => {
    setSelectedValue(value);
    handleSelection(currentStep.stepId, value);
  };

  return (
    <OptionList
      selectedValue={selectedValue}
      onChange={(value) => handleChange(value)}
    />
  );
}
