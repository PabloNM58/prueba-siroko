import { useContext } from "react";
import { OptionsSelectedContext } from "../context/OptionsSelectedContext";

export default function useOptionsContext() {
  const context = useContext(OptionsSelectedContext);
  if (!context) {
    throw new Error(
      "useOptionsContext debe utilizarse dentro de un OptionsSelectedProvider"
    );
  }
  return context;
}
