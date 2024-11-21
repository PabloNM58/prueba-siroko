import { createContext, useEffect, useState } from "react";
import { config } from "../config/stepConfig";
import { OptionsSelectedProps, OptionsSelectedType } from "../types";

export const OptionsSelectedContext = createContext<OptionsSelectedType | null>(
  null
);

export const OptionsSelectedProvider = ({ children }: OptionsSelectedProps) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  useEffect(() => {
    if (config[0].quizOptions && config[1].quizOptions)
      setSelectedOptions([config[0].quizOptions[0], config[1].quizOptions[0]]);
  }, []);

  const handleSelection = (stepId: number, value: string) => {
    setSelectedOptions((prevState) => {
      const newOptions = [...prevState];
      newOptions[stepId - 1] = value;
      return newOptions;
    });
  };
  return (
    <OptionsSelectedContext.Provider
      value={{ selectedOptions, setSelectedOptions, handleSelection }}
    >
      {children}
    </OptionsSelectedContext.Provider>
  );
};
