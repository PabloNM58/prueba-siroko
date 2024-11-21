import styles from "./InfoText.module.scss";

interface Props {
  text: string;
}
export default function InfoText({ text }: Props) {
  return <p className={styles.text}>{text}</p>;
}
