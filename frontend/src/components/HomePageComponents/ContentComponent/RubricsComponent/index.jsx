import { Link } from "react-router-dom";
import { useSelector} from 'react-redux';
import { selectDashboards} from "../../../../redux/slices/ui";
import styles from './Rubrics.module.scss';

export const Rubrics = () => {
  const {RUBRICS, PRO } = useSelector(selectDashboards);

  return (
    <section className={styles.rubrics}>
      <div className={styles.text}>Рубрики</div>
      <div className={styles.grid}>

        {
          RUBRICS.map((rubric, index)=>(
          <div key={"rubric_"+index} className={styles.grid_block}>
          <div className={styles.rubric_name}>
            <div className={styles.rubric_title}>{rubric.title}</div>
            <img src={rubric.icon} className={styles.edit_img} alt={rubric.alt}/>
          </div>
          <div className={styles.descr}>
          {rubric.text}
          </div>
          <div className={styles.link}>
            <Link to={`rubrics/project?dashboard=${rubric.link}&template=freestyle`} className={styles.link_name}>
              Попробовать бесплатно
            </Link>
            <div className={styles.arrow_up_blue_img}></div>
          </div>
        </div>
        ))
        }
        
        <div className={styles.doubleblock}>
          <div className={styles.title}>
            <div className={styles.pro_img}></div>
            {PRO.title}
          </div>
          <div className={styles.descr}>{PRO.text}</div>

          <div className={styles.link}>
            <Link to={`rubrics/project?dashboard=${PRO.link}&template=freestyle`} className={styles.link_name}>
              Попробовать
            </Link>
            <div className={styles.arrow_left_white_img}></div>
          </div>
        </div> 
      </div>
    </section>
  );
};
