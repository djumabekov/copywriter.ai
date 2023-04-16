import styles from './SideBar.module.scss';

export const SideBar = () => {
  return (
	<section className={styles.sidebar}>
		<div className={styles.sidebar_logo}>Copywriter.ai</div>
		<div className={styles.sidebar_menu}>
			<div className={styles.menu_item + " " + styles.active_menu_item}>
				<div className={styles.home_ico} ></div>
				<div className={styles.item_text}>Дашборд</div>
			</div>
			<div className={styles.menu_item}>
				<div className={styles.templates_ico}> </div>
				<div className={styles.item_text}>Шаблоны</div>
			</div>
			<div className={styles.menu_item}>
				<div className={styles.community_ico}> </div>
				<div className={styles.item_text}>Комьюнити</div>
			</div>
			<div className={styles.menu_item}>
				<div className={styles.templates_ico}> </div>
				<div className={styles.item_text}>Шаблоны</div>
			</div>
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

		<div className={styles.user_control}>
			<div className={styles.user_panel}>
				<div className={styles.user_avatar}> GG </div>
				<div className={styles.user_name}>Грег Грегор</div>
			</div>
			<div className={styles.control_ico}> </div>
		</div>
	</section>
  );
};
