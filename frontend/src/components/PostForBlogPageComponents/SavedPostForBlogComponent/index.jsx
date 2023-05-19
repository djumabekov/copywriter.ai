import React from 'react';
import { useEffect, useState } from 'react';
import axios from '../../../axios.js';
import styles from './SavedPostForBlog.module.scss';
import { X_ICON, COPY_ICON, COPYPARAG_ICON } from './assets/index.jsx';


export const SavedPostForBlog = ({userId, type}) => {

const [savedPosts, setSavedPosts] = useState([])
const [posts, setPosts] = useState()
const [deletedPostId, setDeletedPostId] = useState()

const handleResponse = (data)=>{
	const posts = data.map(item=>item.response)
	setPosts(posts)
	console.log("posts", posts)
}

useEffect(()=>{
	axios
	.post(`http://localhost:8000/chat/getsavedresults`, { userId, category:"postforblog", type })
	.then((res) => {
		console.log(res.data);
		setSavedPosts(res.data)
		handleResponse(res.data)
	})
	.catch((err) => {
	console.error(err);
	});
}, [deletedPostId, userId, type])

const copyResult =()=>{
	navigator.clipboard.writeText(posts.join('\n')).then(function() {
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

const delParagraph = (id) => {
  console.log("id", id)
	axios
	.delete(`http://localhost:8000/chat/delfromsavedresults/${id}`)
	.then((res) => {
		console.log("res.result", res.data);
		if(res.data === 1){
			setDeletedPostId(id)
		}
	})
	.catch((err) => {
	console.error(err);
  });
}


	return (
		<div className={styles.result_form}>
			<div className={styles.result_form_show_result}>
				<div className={styles.result_form_bar_frame}>
					<div onClick={copyResult} className={styles.result_form_bar_history_btn+" "+styles.btn_cursor_pointer}>
						<img src={COPY_ICON} width='24px' className={styles.copy_img} alt='Скопировать все'/>
						<div className="result-form-bar-history-title">Скопировать все</div>
					</div>
				</div>

				<div className={styles.result_form_textarea}>
				{
					savedPosts.map((post, index) => (
						
						<div key={"post_"+index} style={{display:'flex'}} >
							<div className={styles.paragraph_block}>
								{post.response}
							</div>
							<div style={{display:'block', marginLeft:'10px'}}>
								<img id={"delBtn_" + index}   onClick={()=>delParagraph(post._id)} key={"delBtn_" + index} src={X_ICON} width='16px' className={styles.x_img+" "+styles.btn_cursor_pointer} alt='Удалить'/>
								<img id={"copyBtn_" + index}  onClick={()=>copyParagraph(post.response)} key={"copyBtn_" + index} src={COPYPARAG_ICON} width='16px' className={styles.copy_img+" "+styles.btn_cursor_pointer} alt='Скопировать'/>
							</div>
						</div>
						))
				}
				</div>
				</div>
			</div>
	)
}