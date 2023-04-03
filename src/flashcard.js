import {useState} from 'react'


export default function FlashCard({questions}) {
	var className = "flashCard front"
	var question = questions[0]
	var front = question['front']
	var back = question['back']
	const [cardOnFront, flipCard] = useState(false)
	const [flashcardValue, changeFlashCardValue] = useState(front)
	const [flashcardCSS, changeFlashCardCSS] = useState("flashCard front")
	function onClickCard() {
		flipCard(!cardOnFront)
		if (cardOnFront){
			changeFlashCardValue(front)
			changeFlashCardCSS("flashCard front")
		}else{
			changeFlashCardValue(back)
			changeFlashCardCSS("flashCard back")
		}
	}
	


	return <>
	<div className={flashcardCSS}>{flashcardValue}</div>
	<br></br>
	<button onClick={onClickCard}>
		Flip!
	</button>
	</>
}