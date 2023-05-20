import { Link } from 'react-router-dom';
import styles from './Templates.module.scss';

import { useSelector, useDispatch} from 'react-redux';
import {selectTemplates, setCurrentDashboard} from "../../../redux/slices/ui";

export const Templates = () => {

	const  TEMPLATES  = useSelector(selectTemplates);
	const dispatch = useDispatch();
	
	const setDashboard = (title, descr) => {
		dispatch(setCurrentDashboard({title, descr}))
	}

	return (
	  <>
		<div className={styles.templates}>
			<div className={styles.templates_grid}>
				{
				TEMPLATES.map((rubric, index)=>(
					<Link  onClick={()=>{setDashboard(rubric.title, rubric.text)}} key={index} className={styles.template_link} to={`../rubrics/project?dashboard=${rubric.link}&template=${rubric.template}`}>
					<div key={index} className={styles.grid_block}>
						<img className={styles.grid_block_edit_icon} src={rubric.icon} alt={rubric.alter} />
						<div className={styles.grid_block_title}>{rubric.title}</div>
						<div className={styles.grid_block_text}>{rubric.text}</div>
					</div>
					</Link>
				))
				}
				
			</div>
			
		</div>
	  </>
	);
  };