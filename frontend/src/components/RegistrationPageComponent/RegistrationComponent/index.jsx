import React from 'react';
import {Navigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';
import { fetchAuth, fetchRegister, selectIsAuth } from "../../../redux/slices/auth";

import { EYE_OFF_ICON, ARROW_UP_WHITE_ICON, REGFORM_IMG} from '../assets';
import styles from './Registration.module.scss';

export const Registration =()=>{
	const isAuth = useSelector(selectIsAuth);
	const dispatch = useDispatch();
	const {
		register, 
		handleSubmit, 
		formState:{errors, isValid}
	  } = useForm({
		defaulValues: {
		  fullName: '',
		  email: '',
		  password: ''
		},
		mode: 'onChange',
	  })

	  const onSubmit = async (values) => {
		console.log("values", values)
		const data = await dispatch(fetchRegister(values));
		console.log("data", data)
		if(!data.payload){
		  return alert('Не удалось зарегистрироваться');
		}
		if('token' in data.payload){
		  window.localStorage.setItem('token', data.payload.token);
		} 
	  };
	  if(isAuth) {
		return <Navigate to="/"/>
	  }

	return(
		<section className={styles.registration}>
			<div className={styles.content}>
				<div className={styles.registration_block}>
					<div className={styles.registration_form}>
						<div className={styles.form_title}>Введите ваши данные</div>
						<form onSubmit={handleSubmit(onSubmit)} className={styles.form} action="">
							<div className={styles.input_block}>
								<input  {...register('fullName', {required: 'Укажите полное имя'})}  className={styles.form_input} type='text' name="fullName" placeholder='Ваше имя' required/>
							</div>
							<div className={styles.input_block}>
								<input  {...register('email', {required: 'Укажите почту'})}  className={styles.form_input} type='email' name="email" placeholder='Ваша почта' required/>
							</div>
							<div className={styles.input_block}>
								<input {...register('password', {required: 'Укажите пароль'})}  className={styles.form_input} type='password' name="password" placeholder='Придумайте пароль' required/>
								<img className={styles.eye_off_icon} src={EYE_OFF_ICON} alt="Показать пароль" />
							</div>
							<input disabled={!isValid} type="submit" className={styles.submit_btn} value='Регистрация'/>
								{/* <img className={styles.arrow_up_white_icon} src={ARROW_UP_WHITE_ICON} alt="" /> */}
							
						</form>
					</div>
					<div className={styles.accept_rules_text}>
					Нажимая кнопку «Регистрация», вы соглашаетесь на обработку персональных данных
					</div>
				</div>
				<div className={styles.img_block}>
					<img className={styles.regform_img} src={REGFORM_IMG} alt="" />
				</div>
			</div>
		</section>
	)
}