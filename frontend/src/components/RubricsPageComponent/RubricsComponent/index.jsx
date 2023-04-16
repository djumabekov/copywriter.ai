import { Link } from 'react-router-dom';
import styles from './Rubrics.module.scss';

import { RUBRICS, PRO } from './data';

export const Rubrics = () => {
	return (
	  <>
		<div className={styles.rubrics}>
			<div className={styles.rubrics_grid}>
				{
				RUBRICS.map((rubric, index)=>(
					<Link className={styles.rubric_link} to={rubric.link}>
					<div key={index} className={styles.grid_block}>
						<img className={styles.grid_block_edit_icon} src={rubric.icon} alt={rubric.alter} />
						<div className={styles.grid_block_title}>{rubric.title}</div>
						<div className={styles.grid_block_text}>{rubric.text}</div>
					</div>
					</Link>
				))
				}
				<div className={styles.grid_block + " " + styles.pro_bg}>
						<img className={styles.grid_block_edit_icon+ " " + styles.pro_icon} src={PRO.icon} alt={PRO.alter} />
						<div className={styles.grid_block_title + " " + styles.pro_color}>{PRO.title}</div>
						<div className={styles.grid_block_text + " " + styles.pro_color}>{PRO.text}</div>
				</div>
			</div>
			
		</div>
	  </>
	);
  };