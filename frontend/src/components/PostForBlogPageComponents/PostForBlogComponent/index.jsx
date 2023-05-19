
import { useState, createRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from '../../../axios.js';
import { SpinLoader } from '../LoaderComponent';
import styles from './PostForBlog.module.scss';
import { HISTORY_ICON, SAVED_ICON, SAVE_ICON, X_ICON, SAVEALL_ICON, COPY_ICON, COPYPARAG_ICON, POST_ICON } from './assets/index.jsx';

import { useEffect } from "react";
import { useDispatch, useSelector} from 'react-redux';
import { fetchAuthMe, selectIsAuth, selectUserData } from "../../../redux/slices/auth";
import { SavedPostForBlog } from '../SavedPostForBlogComponent/index.jsx';


export const PostForBlog = () => {

	const [userId, setUserId] = useState(null);

	const dispatch = useDispatch();
	 useEffect(() =>  {
		dispatch(fetchAuthMe()).then((data=>{
			console.log("fetchAuthMe", data.payload.userData.fullName)
			setUserId(data.payload.userData._id)
		}));
	}, []);
	
	// const userData = useSelector(selectUserData);
	// console.log("user", userData)


	const initialMessages = [
		{
		  who: "user",
		  message: "Привет!",
		},
	  ];

    const additionalTextInputRef = createRef();

	const checkBoxTranslateRef = createRef();
	const checkBoxImproveRef = createRef();
	const radioMakelongerRef = createRef();
	const radioMakeshorterRef = createRef();

	const themeRef = createRef();
	const companyRef = createRef();
	const contextRef = createRef();
	const purposeRef = createRef();
	const toneRef = createRef();


	const[isLoader, setIsLoader] = useState(false)
	const [response, setResponse] = useState('');
	const [splitedResponse, setSplitedResponse] = useState([]);
	const [messages, setMessages] = useState(initialMessages);
	const [isShowSavedResults, setIsShowSavedResults] = useState(false);
	const [type, setType] = useState(null);
	const [template, setTemplate] = useState()

	const [searchParams] = useSearchParams();
	const templateName = searchParams.get('template'); 

	useEffect(()=>{
		getTemplate()
	},[])

	const getTemplate =()=>{
		axios
			.post(`http://localhost:8000/chat/gettemplate`, {template:templateName})
			.then((res) => {
			
				setTemplate(res.data)
				return res.data
			}).then((data)=>{
				if(data){
					fillFieldsFromTemplate(data)
				}
			})
			.catch((err) => {
			console.error(err);
			});
	}


	
	const createMessage = () => {
		return `
		Напиши
		${template.title} 
		${themeRef.current.value} 
		"${companyRef.current.value}"
		${contextRef.current.value} 
		${purposeRef.current.value} 
		в ${toneRef.current.value} тональности` 
	}

	const fillFieldsFromTemplate = (data) => {
		console.log("data.context.join('\n')", data.context.join('\n\n'))
		themeRef.current.value=data.theme
		companyRef.current.value=data.company
		contextRef.current.value=data.context.join('\n\n')
		purposeRef.current.value=data.target
	
		
	}

	const clearAllFields = () => {
		themeRef.current.value=''
		companyRef.current.value=''
		contextRef.current.value=''
		purposeRef.current.value=''

		
		additionalTextInputRef.current.value=''

		checkBoxTranslateRef.current.checked=false
		checkBoxImproveRef.current.checked=false
		radioMakelongerRef.current.checked=false
		radioMakeshorterRef.current.checked=false
	}

	const clearAdditionalFields = () => {
		additionalTextInputRef.current.value=''
		checkBoxTranslateRef.current.checked=false
		checkBoxImproveRef.current.checked=false
		radioMakelongerRef.current.checked=false
		radioMakeshorterRef.current.checked=false
	}

	const handelSplitedResponse =(data)=>{
		let splitData = data.split(/(?:\r?\n)+/);
		splitData = splitData.map(item => item.trim())
		splitData = splitData.filter(item => item.length > 0)
		setSplitedResponse(splitData)
	}

	const showSavedResults = (type) => {
		if(type===null){
			setIsShowSavedResults(false)
			return
		}		
		setIsShowSavedResults(true)
		setType(type)
	}

	const saveResult = () => {
		const post = response.trim()
		if(response.length > 0){
			axios
			.post(`http://localhost:8000/chat/saveresult`, { category:"postforblog", type:"post",response: post, userId })
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
			console.error(err);
			});
		}
	}

	const copyResult =()=>{
		  navigator.clipboard.writeText(response).then(function() {
			console.log('Текст скопирован в буфер обмена');
		  }, function(err) {
			console.error('Ошибка при копировании текста в буфер обмена: ', err);
		  });
	}

	const copyParagraph =(paragraph)=>{
		navigator.clipboard.writeText(paragraph).then(function() {
		  console.log('Параграф скопирован в буфер обмена');
		}, function(err) {
		  console.error('Ошибка при копировании параграфа в буфер обмена: ', err);
		});
  }

	const delParagraph = (index) => {
		  console.log("index", index)
		  const newSplitedResponse = splitedResponse.filter((_, i) =>i !== index);
		  console.log("newSplitedResponse", newSplitedResponse)
		  setSplitedResponse(newSplitedResponse)

		  const newResponse = newSplitedResponse.join('\n')
		  setResponse(newResponse)
	}

	const saveParagraph = (paragraph) => {
		if(response.length > 0){
			axios
			.post(`http://localhost:8000/chat/saveresult`, { category:"postforblog", type:"fragment", response: paragraph, userId })
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
			console.error(err);
			});
		}
	}

	


	const generationResult = (param) => {
		setIsLoader(true)
		let message = ''
		if(param ==='regenerate'){
			message = additionalTextInputRef.current.value
			message += checkBoxTranslateRef.current.checked ? checkBoxTranslateRef.current.value : ''
			message += checkBoxImproveRef.current.checked ? checkBoxImproveRef.current.value :''
			message += radioMakelongerRef.current.checked ? radioMakelongerRef.current.value:''
			message += radioMakeshorterRef.current.checked ? radioMakeshorterRef.current.value:''
		} else {
			message = createMessage()
		}

		console.log(message)
		const newMessages = [
		...messages,
		{ message: message, who: "user" },
	  ];
	  setMessages(newMessages);
	  axios
		.post(`http://localhost:8000/chat`, { newMessages })
		.then((res) => {
			setIsLoader(false)
			console.log(res.data);
			setResponse(res.data);
			handelSplitedResponse(res.data)
			console.log("setSplitedResponse", splitedResponse);
			const newMessages = [
				...messages,
				{ message: res.data.trim(), who: "assistant" },
			];
	  setMessages(newMessages);
		})
		.catch((err) => {
		  console.error(err);
		});
	};
	

  return (
	<>
	<div className={styles.content}>
		<div className={styles.generate_form}>
			<div className={styles.input_frame}>
				<div className={styles.input_list}>
					<div className={styles.input_block}>
						<div className={styles.input_block_label}>
							<span className={styles.input_block_label_text}>Тема</span>
							<span className={styles.input_block_label_limit}>14/80</span>
						</div>
						<input ref={themeRef} type='text' className={styles.input_text} placeholder='помидоры'/>
					</div>
				</div>
				<div className={styles.input_list}>
					<div className={styles.input_block}>
						<div className={styles.input_block_label}>
							<span className={styles.input_block_label_text}>Имя компании</span>
							<span className={styles.input_block_label_limit}>14/80</span>
						</div>
						<input ref={companyRef} type='text' className={styles.input_text} placeholder='Овощи и Фрукты'/>
					</div>
				</div>
				<div className={styles.input_list}>
					<div className={styles.input_block}>
						<div className={styles.input_block_label}>
							<span className={styles.input_block_label_text}>Контекст</span>
							<span className={styles.input_block_label_limit}>14/80</span>
						</div>
						<textarea rows="10" cols="50" ref={contextRef} type='text' className={styles.input_textarea} placeholder='свежие, вкусные, сочные, недорого, с доставкой'/>
					</div>
				</div>
				<div className={styles.input_list}>
					<div className={styles.input_block}>
						<div className={styles.input_block_label}>
							<span className={styles.input_block_label_text}>Цель</span>
							<span className={styles.input_block_label_limit}>14/80</span>
						</div>
						<input ref={purposeRef} type='text' className={styles.input_text} placeholder='рекламы и продажи'/>
					</div>
				</div>
				<div className={styles.input_list}>
					<div className={styles.input_block}>
						<div className={styles.input_block_label}>
							<span className={styles.input_block_label_text}>Пожалуйста, выберите тон</span>
							<span className={styles.input_block_label_limit}>14/80</span>
						</div>
						<select ref={toneRef} className={styles.input_text}>
							<option value="дружественной">Дружественный</option>
							<option value="роскошной">Роскошный</option>
							<option value="спокойной">Спокойный</option>
							<option value="профессиональной">Профессиональный</option>
							<option value="приключенческой">Приключенческий</option>
							<option value="писательской">Писательский</option>
							<option value="остроумной">Остроумный</option>
						</select>
					</div>
				</div>
			</div>

			<div className={styles.control_bar}>
				<input onClick={clearAllFields} type='button' className={styles.clear_btn} value='Сбросить все'/>
				<input onClick={()=>generationResult('generate')} type='button' className={styles.generate_btn} value='Генерация'/>
			</div>
		</div>

		<div className={styles.result_form}>
			<div className={styles.result_form_bar}>
				<div className={styles.result_form_bar_frame}>
					<div onClick={()=>showSavedResults(null)} className={styles.result_form_bar_history_btn+" "+styles.btn_cursor_pointer}>
						<img src={POST_ICON} width='24px' className={styles.post_img} alt='Пост'/>
						<div className="result-form-bar-history-title">Пост</div>
					</div>
					<div onClick={()=>showSavedResults('post')} className={styles.result_form_bar_history_btn+" "+styles.btn_cursor_pointer}>
						<img src={HISTORY_ICON} width='24px' className={styles.history_img} alt='Сохраненные посты'/>
						<div className="result-form-bar-history-title">Сохраненные посты</div>
					</div>
					<div onClick={()=>showSavedResults('fragment')} className={styles.result_form_bar_saved_btn+" "+styles.btn_cursor_pointer}>
						<img src={SAVED_ICON} width='24px'className={styles.saved_img} alt='Сохраненные фрагменты'/>
						<div className="result-form-bar-saved-title">Сохраненные фрагменты</div>
					</div>
				</div>
			</div>

			{
				!isShowSavedResults ? 
			
				<>
			<div className={styles.result_form_show_result}>
				<div className={styles.result_form_bar_frame}>
					<div onClick={saveResult} className={styles.result_form_bar_history_btn+" "+styles.btn_cursor_pointer}>
						<img src={SAVEALL_ICON} width='24px' className={styles.savedall_img} alt='Сохранить все'/>
						<div className="result-form-bar-history-title">Сохранить пост</div>
					</div>
					<div onClick={copyResult} className={styles.result_form_bar_history_btn+" "+styles.btn_cursor_pointer}>
						<img src={COPY_ICON} width='24px' className={styles.copy_img} alt='Скопировать все'/>
						<div className="result-form-bar-history-title">Скопировать пост</div>
					</div>
				</div>
			{/* <input onClick={saveResult} type='button' className={styles.save_btn} value='Сохранить все'/> */}
			{/* {
				isLoader ? 
				<SpinLoader/> :
				<textarea value={response} className={styles.result_form_textarea} rows="20" cols="75" readOnly placeholder='Текст о том, что тут будет происходить магия генерации'/>
			} */}
				<div className={styles.result_form_textarea}>
				{
					splitedResponse.map((paragraph, index) => (
						
						<div key={"paragraph_"+index} style={{display:'flex'}} >
							<div className={styles.paragraph_block}>
								{paragraph}
							</div>
							<div style={{display:'block', marginLeft:'10px'}}>
								<img id={"delBtn_" + index}   onClick={()=>delParagraph(index)} key={"delBtn_" + index} src={X_ICON} width='16px' className={styles.x_img+" "+styles.btn_cursor_pointer} alt='Удалить'/>
								<img id={"saveBtn_" + index}  onClick={()=>saveParagraph(paragraph)} key={"saveBtn_" + index} src={SAVE_ICON} width='16px' className={styles.save_img+" "+styles.btn_cursor_pointer} alt='Сохранить'/>
								<img id={"copyBtn_" + index}  onClick={()=>copyParagraph(paragraph)} key={"copyBtn_" + index} src={COPYPARAG_ICON} width='16px' className={styles.copy_img+" "+styles.btn_cursor_pointer} alt='Скопировать'/>
							</div>
						</div>
						))
				}
				</div>
				</div>
				<div className={styles.control_btn_elements}>
					<input ref={checkBoxTranslateRef} value=' переведи текст на английский' type='checkbox' id="translate" name="translate" className={styles.translate_btn}/> <label htmlFor="translate">Перевести</label>
					<input ref={checkBoxImproveRef} value=' улучши этот текст' type='checkbox' id="improve" name="improve" className={styles.improve_btn}/><label htmlFor="improve">Улучшить</label>
					{/* <input ref={checkBoxMakelongerRef} value=' добавь больше слов в этот текст' type='checkbox' id="makelonger" name="makelonger" className={styles.makelonger_btn}/><label htmlFor="makelonger">Больше</label>
					<input ref={checkBoxMakeshorterRef} value=' сократи немного слов из этого текста' type='checkbox' id="makeshorter" name="makeshorter" className={styles.makeshorter_btn}/><label htmlFor="makeshorter">Короче</label>
				 */}
					<fieldset className={styles.control_element} id="group1">
						<input ref={radioMakelongerRef} value=' добавь больше слов в этот текст'  type="radio" id="makelonger" name="more_or_less_text"/><label htmlFor="makelonger">Больше</label>
						<input ref={radioMakeshorterRef} value=' сократи немного слов из этого текста' type="radio" id="makeshorter" name="more_or_less_text"/><label htmlFor="makeshorter">Меньше</label>
					</fieldset>
				
				</div>
			<div className={styles.result_form_show_result}>
			<div className={styles.input_block}>
				<div className={styles.input_block_label}>
					<span className={styles.input_block_label_text}>Задать дополнительные требования к результату</span>
					<span className={styles.input_block_label_limit}>14/80</span>
				</div>
				<input ref={additionalTextInputRef} type='text' className={styles.input_text} placeholder='А теперь добавь туда немного романтики...'/>
				<div className={styles.control_bar}>
					<input onClick={clearAdditionalFields} type='button' className={styles.clear_btn} value='Очистить'/>
					<input disabled={!response} onClick={()=>generationResult('regenerate')} type='button' className={styles.generate_btn} value='Регенерация'/>
				</div>
			</div>
		</div>
		</>
		 :

		<SavedPostForBlog userId={userId} type={type}/>
	}
	</div>
	</div>
	  </>
  );
};
