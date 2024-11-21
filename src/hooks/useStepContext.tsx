import { useContext } from "react";
import { StepContext } from "../context/StepContext";

export default function useStepContext() {
  const context = useContext(StepContext);
  if (!context) {
    throw new Error("useStepContext debe utilizarse dentro de un StepProvider");
  }
  return context;
}
