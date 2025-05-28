import styles from "../styles/BentoCard.module.css";
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';

const BentoCard = () => {
  return (
    <section className={styles.sectiongrid}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={`${styles.item} ${styles["item-1"]}`}>
            <div>
              <h2 className={styles["project-title"]}>SortLify</h2>
              <p className={styles["project-tech"]}>Python / CustomTinker</p>
            </div>
            <div className={styles["project-number"]}>01</div>
            <div className={styles["project-date"]}>- 2024 DEC</div>
            <a href="#" className={styles["arrow-link"]}>
              <ArrowOutwardRoundedIcon />
            </a>
          </div>
          <div className={`${styles.item} ${styles["item-2"]}`}>
            <div>
              <h2 className={styles["project-title"]}>Invoice Generator</h2>
              <p className={styles["project-tech"]}>React / JavaScript</p>
            </div>
            <div className={styles["project-number"]}>02</div>
            <div className={styles["project-date"]}>- 2024 DEC</div>
            <a href="#" className={styles["arrow-link"]}>
              <ArrowOutwardRoundedIcon />
            </a>
          </div>
          <div className={`${styles.item} ${styles["item-3"]}`}>
            <div>
              <h2 className={styles["project-title"]}>8pointeight Studios</h2>
              <p className={styles["project-tech"]}>React / JavaScript</p>
            </div>
            <div className={styles["project-number"]}>03</div>
            <div className={styles["project-date"]}>- 2024 DEC</div>
            <a href="#" className={styles["arrow-link"]}>
              <ArrowOutwardRoundedIcon />
            </a>
          </div>
          <div className={`${styles.item} ${styles["item-4"]}`}>
            <div>
              <h2 className={styles["project-title"]}>YatiyanaCinnamon</h2>
              <p className={styles["project-tech"]}>Wordpress / Elementor</p>
            </div>
            <div className={styles["project-number"]}>04</div>
            <div className={styles["project-date"]}>- 2024 DEC</div>
            <a href="#" className={styles["arrow-link"]}>
              <ArrowOutwardRoundedIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoCard;
