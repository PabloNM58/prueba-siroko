import styles from "./QuizCode.module.scss";
import { useState } from "react";
import copyToClipboard from "../../../utils/copyToClipboard";
import generateCode from "../../../utils/generateCode";
import useOptionsContext from "../../../hooks/useOptionsContext";

export default function CopyButton() {
  const [codeCopied, setCodeCopied] = useState(false);
  const { selectedOptions } = useOptionsContext();
  const handleCopyClick = async () => {
    try {
      const code = generateCode(selectedOptions[0], selectedOptions[1]);
      await copyToClipboard(code);
      setCodeCopied(true);
      setTimeout(() => {
        setCodeCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Error al copiar el código:", error);
    }
  };
  return (
    <span
      className={`${styles.copyButton} ${!codeCopied && styles.copyReady}`}
      onClick={handleCopyClick}
    >
      {codeCopied ? "Código copiado" : "Copiar"}
    </span>
  );
}
