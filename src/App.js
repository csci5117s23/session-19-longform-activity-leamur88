import './App.css';
import FlashCard from './flashcard';
function App() {
  const QUESTIONS = [{front: "question1", back:"answer1"},
                    {front: "question2", back:"answer2"},
                    {front: "question3", back:"answer3"},]

  return (
    <div className="App">
		<h1>FlashCards!</h1>
		<FlashCard questions={QUESTIONS} />
     

    </div>
  );
}

export default App;
