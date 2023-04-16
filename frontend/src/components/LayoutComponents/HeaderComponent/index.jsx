import styles from './Header.module.scss';

export const Header = () => {
  return (
	<section className={styles.header}>
		<div className={styles.help_btn}>
			<div className={styles.help_btn_text}>Помощь</div>
			<div className={styles.help_btn_ico} ></div>
		</div>
	</section>
  );
};
