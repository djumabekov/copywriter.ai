import { Link } from 'react-router-dom';
import { useEffect } from "react";
import styles from './SideBar.module.scss';
import { useDispatch, useSelector} from 'react-redux';
import { fetchAuthMe, selectIsAuth } from "../../../redux/slices/auth";
import { setCurrentDashboard } from "../../../redux/slices/ui";


export const SideBar = () => {

const dispatch = useDispatch();
useEffect(() => {
	dispatch(fetchAuthMe());
	setDashboard("Дашборд", "")
}, []);

const isAuth = useSelector(selectIsAuth);
const userName = window.localStorage.getItem('userName');
	
const setDashboard = (title, descr) => {
	dispatch(setCurrentDashboard({title, descr}))
}

  return (
	<section className={styles.sidebar}>
		<div to="/" className={styles.sidebar_logo}><Link to="/">Copywriter.ai</Link></div>
		<div className={styles.sidebar_menu}>
			<Link onClick={()=>{setDashboard("Дашборд", "")}} to="/rubrics">
				<div className={styles.menu_item + " " + styles.active_menu_item}>
					<div className={styles.home_ico} ></div>
					<div className={styles.item_text}>Дашборд</div>
				</div>
			</Link>
			<Link onClick={()=>{setDashboard("Шаблоны", "")}} to="/templates">
				<div className={styles.menu_item}>
					<div className={styles.templates_ico}> </div>
					<div className={styles.item_text}>Шаблоны</div>
				</div>
			</Link >
			<Link onClick={()=>{setDashboard("Комьюнити", "")}} to="/templates">
				<div className={styles.menu_item}>
					<div className={styles.community_ico}> </div>
					<div className={styles.item_text}>Комьюнити</div>
				</div>
			</Link >
		</div>
		<div className={styles.sidebar_btn}>
			<div className={styles.document_ico}> </div>
			<div className={styles.btn_text}>Документ</div>
			<div className={styles.plus_ico} alt="+" />
		</div>
		<div className={styles.sidebar_btn}>
			<div className={styles.pro_ico}> </div>
			<div className={styles.btn_text}>Pro</div>
			<div className={styles.plus_ico}> </div>
		</div>
		<div className={styles.control_bar}>
			<div className={styles.control_bar_btn}>
				<div className={styles.story_ico}> </div>
				<div className={styles.btn_text}>История</div>
			</div>
			<div className={styles.control_bar_btn}>
				<div className={styles.saved_ico}> </div>
				<div className={styles.btn_text}>Сохраненное</div>
			</div>
		</div>

	{isAuth ? (<div className={styles.user_control}>
			<div className={styles.user_panel}>
				<div className={styles.user_avatar}> {userName[0].toUpperCase() + "" + userName[0].toUpperCase()} </div>
				<div className={styles.user_name}>{userName}</div>
			</div>
			<div className={styles.control_ico}> </div>
		</div>):(<></>)}
		
	</section>
  );
};
