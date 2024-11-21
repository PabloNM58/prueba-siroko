import { ReactNode, SetStateAction } from "react";

export type StepConfig = {
  stepId: number;
  stepChipText: string;
  headerTitle: string;
  formTitle: string;
  formContent: () => ReactNode;
  formButtonText: string;
  isActive: boolean;
  quizOptions?: string[];
  headerSubtitle?: string;
  codeInstructions?: string;
};

export interface StepContextProps {
  children: ReactNode;
}

export type StepContextType = {
  currentStep: StepConfig;
  setStepConfig: Dispatch<SetStateAction<StepConfig[]>>;
  handleNextStep: () => void;
};

export interface OptionsSelectedProps {
  children: ReactNode;
}

export type OptionsSelectedType = {
  selectedOptions: string[];
  setSelectedOptions: Dispatch<SetStateAction<string[]>>;
  handleSelection: (number, string) => void;
};
