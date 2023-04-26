import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';
import {MENU_LOGO_ICON, CLOSE_X_ICON, ARROW_UP_BLUE_ICON} from './assets/'

export const Menu = ({handleShowMenuBtnClick}) => {

return (
<div className={styles.menu}>
		<div className={styles.menu_top}>
			<img src={MENU_LOGO_ICON} className={styles.menu_logo} alt='Logo'/>
			<img onClick={handleShowMenuBtnClick} src={CLOSE_X_ICON} className={styles.menu_close_btn} alt='Close'/>
		</div>
		<div className={styles.menu_links}>
			<Link to="/rubrics" className={styles.menu_link}>ИИ</Link>
			<Link to="#" className={styles.menu_link}>МАРКЕТИНГ</Link>
			<Link to="#" className={styles.menu_link}>КОНТАКТЫ</Link>
			<Link to="#" className={styles.menu_link}>ЦЕНЫ</Link>
			<Link to="#" className={styles.menu_link}>АГЕНСТВО</Link>
		</div>
		<div className={styles.menu_langs_btn}>
			<div className={styles.menu_langs_btn_text}>Eng</div>
		</div>
		<div className={styles.menu_btn + " " + styles.menu_enter_btn_width}>
			<span className={styles.menu_btn_name}>Вход</span>
			<div className={styles.menu_btn_square}>
				<img src={ARROW_UP_BLUE_ICON} className={styles.menu_btn_img} alt='Arrow up'/>
			</div>
		</div>
		<div className={styles.menu_btn + " " + styles.menu_free_consult_btn_width}>
			<span className={styles.menu_btn_name}>Бесплатная консультация
			</span>
			<div className={styles.menu_btn_square}>
				<div className={styles.menu_btn_img}></div>
			</div>
		</div>
	</div>
)
}