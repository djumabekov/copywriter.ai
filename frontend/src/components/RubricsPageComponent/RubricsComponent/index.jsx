import { Link } from 'react-router-dom';
import styles from './Rubrics.module.scss';

import { useSelector, useDispatch} from 'react-redux';
import { selectDashboards, setCurrentDashboard} from "../../../redux/slices/ui";

export const Rubrics = () => {
	const {RUBRICS, PRO } = useSelector(selectDashboards);
	
	const dispatch = useDispatch();
	
	const setDashboard = (title, descr) => {
		dispatch(setCurrentDashboard({title, descr}))
	}
	return (
	  <>
		<div className={styles.rubrics}>
			<div className={styles.rubrics_grid}>
				{
				RUBRICS.map((rubric, index)=>(
					<Link onClick={()=>{setDashboard(rubric.title, rubric.text)}} key={index} className={styles.rubric_link} to={`project?dashboard=${rubric.link}&template=freestyle`}>
					<div key={index} className={styles.grid_block}>
						<img className={styles.grid_block_edit_icon} src={rubric.icon} alt={rubric.alter} />
						<div className={styles.grid_block_title}>{rubric.title}</div>
						<div className={styles.grid_block_text}>{rubric.text}</div>
					</div>
					</Link>
				))
				}
				<Link onClick={()=>{setDashboard(PRO.title, PRO.text)}} key={PRO.link} className={styles.rubric_link} to={`project?dashboard=${PRO.link}&template=freestyle`}>
				<div className={styles.grid_block + " " + styles.pro_bg}>
						<img className={styles.grid_block_edit_icon+ " " + styles.pro_icon} src={PRO.icon} alt={PRO.alter} />
						<div className={styles.grid_block_title + " " + styles.pro_color}>{PRO.title}</div>
						<div className={styles.grid_block_text + " " + styles.pro_color}>{PRO.text}</div>
				</div>
				</Link>
			</div>
			
		</div>
	  </>
	);
  };