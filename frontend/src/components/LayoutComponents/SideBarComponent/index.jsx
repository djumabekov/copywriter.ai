import { Link } from 'react-router-dom';
import { useEffect } from "react";
import styles from './SideBar.module.scss';
import { useDispatch, useSelector} from 'react-redux';
import { fetchAuthMe, selectIsAuth } from "../../../redux/slices/auth";
import { setCurrentDashboard, setActiveSidebarLink, selectCurrentSidebarLink } from "../../../redux/slices/ui";


export const SideBar = () => {


const dispatch = useDispatch();
useEffect(() => {
	dispatch(fetchAuthMe());
	setDashboard("Дашборд", "", 1)
}, []);

const isAuth = useSelector(selectIsAuth);
const activeSidebarLink = useSelector(selectCurrentSidebarLink);
const userName = window.localStorage.getItem('userName');
	
const setDashboard = (title, descr, activeLink) => {
	dispatch(setCurrentDashboard({title, descr}))
	dispatch(setActiveSidebarLink(activeLink))
}

  return (
	<section className={styles.sidebar}>
		<div to="/" className={styles.sidebar_logo}><Link to="/">Copywriter.ai</Link></div>
		<div className={styles.sidebar_menu}>
			<Link onClick={()=>{setDashboard("Дашборд", "", 1)}} to="/rubrics">
				<div className={styles.menu_item + " " + (activeSidebarLink === 1 && styles.active_menu_item)}>
					<div className={styles.home_ico + " " + (activeSidebarLink === 1 && styles.invert_ico)} ></div>
					<div className={styles.item_text}>Дашборд</div>
				</div>
			</Link>
			<Link onClick={()=>{setDashboard("Шаблоны", "", 2)}} to="/templates">
				<div className={styles.menu_item + " " + (activeSidebarLink === 2 && styles.active_menu_item)}>
					<div className={styles.templates_ico + " " + (activeSidebarLink === 2 && styles.invert_ico)}> </div>
					<div className={styles.item_text}>Шаблоны</div>
				</div>
			</Link >
			<Link onClick={()=>{setDashboard("Комьюнити", "", 3)}} to="/templates">
				<div className={styles.menu_item + " " + (activeSidebarLink === 3 && styles.active_menu_item)}>
					<div className={styles.community_ico + " " + (activeSidebarLink === 3 && styles.invert_ico)}> </div>
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
