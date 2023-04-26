
import { useState } from 'react';
import axios from '../../../axios.js';
import { SpinLoader } from '../LoaderComponent';

export const PostForBlog = () => {
	const initialMessages = [
		{
		  who: "user",
		  message: "Привет!",
		},
	  ];

	const[isLoader, setIsLoader] = useState(false)
	const [theme, setTheme] = useState('');
	const [company, setCompany] = useState('');
	const [context, setContext] = useState('');
	const [purpose, setPurpose] = useState('');
	const [tone, setTone] = useState('');

	const [additionalReq, setAdditionalReq] = useState('');
	const [response, setResponse] = useState('');
	const [messages, setMessages] = useState(initialMessages);

	const createMessage = () => {
		return `Напиши пост для блога 
		по теме ${theme} 
		для компании "${company}"
		в контексте ${context} 
		с целью ${purpose} 
		в ${tone} тональности` 
	}

	const clearFields = () => {
		setTheme('')
		setCompany('')
		setContext('')
		setPurpose('')
		setTone('')
	}
	const generationResult = (param) => {
		setIsLoader(true)
		const message = param === 'regenerate' ? additionalReq : createMessage()
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
			const newMessages = [
				...messages,
				{ message: res.data.trim(), who: "bot" },
			];
	  setMessages(newMessages);
		})
		.catch((err) => {
		  console.error(err);
		});
	};
	

  return (
	<>
	<div className='content'>
		<div className='generate-form'>
			<div className='input-frame'>
				<div className='input-list'>
					<div className='input-block'>
						<div className='input-block-label'>
							<span className='input-block-label-text'>Тема</span>
							<span className='input-block-label-limit'>14/80</span>
						</div>
						<input value={theme} onChange={(e) => setTheme(e.target.value)} type='text' className='input-text' placeholder='помидоры'/>
					</div>
				</div>
				<div className='input-list'>
					<div className='input-block'>
						<div className='input-block-label'>
							<span className='input-block-label-text'>Имя компании</span>
							<span className='input-block-label-limit'>14/80</span>
						</div>
						<input value={company} onChange={(e) => setCompany(e.target.value)} type='text' className='input-text' placeholder='Овощи и Фрукты'/>
					</div>
				</div>
				<div className='input-list'>
					<div className='input-block'>
						<div className='input-block-label'>
							<span className='input-block-label-text'>Контекст</span>
							<span className='input-block-label-limit'>14/80</span>
						</div>
						<input value={context} onChange={(e) => setContext(e.target.value)} type='text' className='input-text' placeholder='свежие, вкусные, сочные, недорого, с доставкой'/>
					</div>
				</div>
				<div className='input-list'>
					<div className='input-block'>
						<div className='input-block-label'>
							<span className='input-block-label-text'>Цель</span>
							<span className='input-block-label-limit'>14/80</span>
						</div>
						<input value={purpose} onChange={(e) => setPurpose(e.target.value)} type='text' className='input-text' placeholder='рекламы и продажи'/>
					</div>
				</div>
				<div className='input-list'>
					<div className='input-block'>
						<div className='input-block-label'>
							<span className='input-block-label-text'>Пожалуйста, выберите тон</span>
							<span className='input-block-label-limit'>14/80</span>
						</div>
						<select value={tone} onChange={(e) => setTone(e.target.value)} className='input-text'>
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

			<div className='control-bar'>
				<input onClick={clearFields} type='button' className='clear-btn' value='Очистить все'/>
				<input onClick={()=>generationResult('generate')} type='button' className='generate-btn' value='Генерация'/>
			</div>
		</div>

		<div className='result-form'>
			<div className='result-form-bar'>
				<div className='result-form-bar-frame'>
					<div className='result-form-bar-history-btn'>
						<div className="history-img"></div>
						<div className="result-form-bar-history-title">История</div>
					</div>
					<div className='result-form-bar-saved-btn'>
						<div className="saved-img"></div>
						<div className="result-form-bar-saved-title">Сохраненное</div>
					</div>
				</div>
			</div>
			<div className='result-form-show-result'>
			{
				isLoader ? 
				<SpinLoader/> :
				<textarea value={response} className='result-form-textarea' rows="20" cols="75" readOnly placeholder='Текст о том, что тут будет происходить магия генерации'/>
			}
				</div>
			<div className='result-form-show-result'>
			<div className='input-block'>
				<div className='input-block-label'>
					<span className='input-block-label-text'>Задать дополнительные требования к результату</span>
					<span className='input-block-label-limit'>14/80</span>
				</div>
				<input value={additionalReq} onChange={(e) => setAdditionalReq(e.target.value)} type='text' className='input-text' placeholder='А теперь добавь туда немного романтики...'/>
				<div className='control-bar'>
					<input onClick={()=>setAdditionalReq('')} type='button' className='clear-btn' value='Очистить'/>
					<input disabled={!response} onClick={()=>generationResult('regenerate')} type='button' className='generate-btn' value='Регенерация'/>
				</div>
			</div>
		</div>
		</div>
	</div>
	  </>
  );
};
