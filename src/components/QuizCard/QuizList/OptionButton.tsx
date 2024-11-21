import styles from "./QuizList.module.scss";

interface OptionButtonProps {
  value: string;
  isSelected: boolean;
  onSelect: (value: string) => void;
}

export default function OptionButton({
  value,
  isSelected,
  onSelect,
}: OptionButtonProps) {
  return (
    <div
      className={`${styles.optionButton} ${isSelected ? styles.selected : ""}`}
      onClick={() => onSelect(value)}
    >
      <div className={styles.circle}>
        {isSelected && <div className={styles.innerCircle} />}
      </div>
      <span>{value}</span>
    </div>
  );
}
