import styles from './Header.module.scss';
import { useSelector} from 'react-redux';
import { selectCurrentDashboard } from "../../../redux/slices/ui";

export const Header = () => {

	const {title, descr } = useSelector(selectCurrentDashboard);

  return (
	<section className={styles.header}>
		
		<div className={styles.rubric}>
			<div className={styles.header_title}>
				{title}
				<img src="" alt="" />
			</div>
			<div className={styles.header_descr}>
			{descr}
			</div>
		</div>
		
		<div className={styles.help_btn}>
			<div className={styles.help_btn_text}>Помощь</div>
			<div className={styles.help_btn_ico} ></div>
		</div>
	</section>
  );
};
