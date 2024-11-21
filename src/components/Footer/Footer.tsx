import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <p>2016-2021 Siroko Solutions S.L.</p>
        <p>
          Todos los derechos reservados.{" "}
          <a href="https://www.siroko.com/es/i/legal" target="_blank">
            Ver bases
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
