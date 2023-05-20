import styles from './About.module.scss';

export const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.silver_stone_img}></div>
      <div className={styles.silver_conus_img}></div>
      <div className={styles.about_text}>
        Ощутите всю мощь инструмента на основе искусственного интеллекта для создания вовлекающего и
        продающего контента за секунды для выдающихся маркетинговых результатов
      </div>
      <div className={styles.about_title}>О нас говорят</div>
      <div className={styles.about_btns}>
        <div className={styles.arrow_left_img}></div>
        <div className={styles.arrow_right_img}></div>
      </div>
      <div className={styles.feedbacks}>
        <div className={styles.feedback_block}>
          <div className={styles.feedback_author}>
            <div className={styles.feedback_author_avatar}></div>
            <div className={styles.author}>
              <div className={styles.author_name}>Андрей Миронов</div>
              <div className={styles.author_activity}>сфера деятельности</div>
            </div>
          </div>
          <div className={styles.feedback_text}>
            Я работаю в сфере SMM уже долгое время, и иногда бывает трудно придумывать новые идеи
            для контента. copywriter.ai вдохновляет меня на новые идеи для будущих проектов.
            Спасибо этому инструменту, я получил дополнительную мотивацию и возможность для
            творческой работы, а также увеличил производительность своей работы в целом.
          </div>
        </div>
        <div className={styles.feedback_block}>
          <div className={styles.feedback_author}>
            <div className={styles.feedback_author_avatar}></div>
            <div className={styles.author}>
              <div className={styles.author_name}>Андрей Миронов</div>
              <div className={styles.author_activity}>сфера деятельности</div>
            </div>
          </div>
          <div className={styles.feedback_text}>
            Я работаю в сфере SMM уже долгое время, и иногда бывает трудно придумывать новые идеи
            для контента. copywriter.ai вдохновляет меня на новые идеи для будущих проектов.
            Спасибо этому инструменту, я получил дополнительную мотивацию и возможность для
            творческой работы, а также увеличил производительность своей работы в целом.
          </div>
        </div>
        <div className={styles.feedback_block}>
          <div className={styles.feedback_author}>
            <div className={styles.feedback_author_avatar}></div>
            <div className={styles.author}>
              <div className={styles.author_name}>Андрей Миронов</div>
              <div className={styles.author_activity}>сфера деятельности</div>
            </div>
          </div>
          <div className={styles.feedback_text}>
            Я работаю в сфере SMM уже долгое время, и иногда бывает трудно придумывать новые идеи
            для контента. copywriter.ai вдохновляет меня на новые идеи для будущих проектов.
            Спасибо этому инструменту, я получил дополнительную мотивацию и возможность для
            творческой работы, а также увеличил производительность своей работы в целом.
          </div>
        </div>
      </div>
    </section>
  );
};
