import { createContext, useState } from "react";
import { config } from "../config/stepConfig";
import { StepContextProps, StepContextType } from "../types";

export const StepContext = createContext<StepContextType | null>(null);

export const StepProvider = ({ children }: StepContextProps) => {
  const [stepConfig, setStepConfig] = useState(config);
  const currentStepIndex = stepConfig.findIndex((step) => step.isActive);
  const currentStep = stepConfig[currentStepIndex];

  const handleNextStep = () => {
    if (currentStep.stepId > 2) {
      window.open("https://www.siroko.com/", "_blank");
    } else {
      setStepConfig((prevState) =>
        prevState.map((step, index) => ({
          ...step,
          isActive: currentStepIndex + 1 === index,
        }))
      );
    }
  };

  return (
    <StepContext.Provider
      value={{ currentStep, handleNextStep, setStepConfig }}
    >
      {children}
    </StepContext.Provider>
  );
};
