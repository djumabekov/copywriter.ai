import styles from './HeaderContent.module.scss';

export const HeaderContent = () => {
  return (
    <>
      <div className={styles.header_content}>
        <div className={styles.slogan}>
          <div className={styles.text}>Тот случай, когда</div>
          <div className={styles.text}>
            {' '}
            <div className={styles.right_row_img}></div>скорость и качество
          </div>
          <div className={styles.text}>идут в одной упаковке</div>
        </div>
        <div className={styles.descr}>
          <div className={styles.text}>
            <div className={styles.arrow_up_blue_img}></div>Контент для соцсетей х10 быстрее
          </div>
          <div className={styles.text}>
            <div className={styles.arrow_up_blue_img}></div>Твой SMM специалист за $15 в месяц
          </div>
          <div className={styles.text}>
            <div className={styles.arrow_up_blue_img}></div>Кратный рост твоего блога и бизнеса
          </div>
        </div>
      </div>
      <div className={styles.image_block}></div>
    </>
  );
};
