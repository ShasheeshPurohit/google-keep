import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import NoteCreator from './components/NoteCreator';
import NoteTemplate from './components/NoteTemplate';

function App() {
  const [title,setTitle] = useState("");
  const [body, setBody] = useState("");
  const [postedNotes, setPostedNotes] = useState([]);
  const [noteTitleValue, setNoteTitleValue] = useState("");
  const [noteBodyValue, setNoteBodyValue] = useState("");
  const [noteColorVal, setNoteColorVal] = useState("");
  const [pinnedNotes, setPinnedNotes] = useState([]);



 
  

  function noteTitleHandler(event){
    setTitle(event)
    setNoteTitleValue(event)
  }
  

  function noteBodyHandler(event){
    setBody(event)
    setNoteBodyValue(event);
  }

  function postButtonHandler(){
    if(title === "" || body === ""){
      alert("Please enter a title or a message");
    }
    else{
      console.log(body)  
   let note = <NoteTemplate postedNoteTitle={title} postedNoteBody={body} bgColorVal={getColorVal()}/>
   setPostedNotes([...postedNotes, note])
   setNoteTitleValue("");
   setNoteBodyValue("");
   setTitle("");
   setBody("");
    }
    
   
  } 

  function colorChangeHandler(event){
    console.log(event)
    setNoteColorVal(event)
    getColorVal();

  }

  function getColorVal(){
    return noteColorVal;
  }

  function pinButtonHandler(index){
    console.log(index)
  }

  

  return (
    <div className="App">
      <h1 style={{color: getColorVal()}} className="main--heading">NoteLify</h1>
      <div className="noteMakerBox">
      <NoteCreator noteTitleHandler={event=>noteTitleHandler(event.target.value)} noteBodyHandler={event=>noteBodyHandler(event.target.value)} postButtonHandler={postButtonHandler} noteTitleValue={noteTitleValue} noteBodyValue={noteBodyValue} colorChangeHandler={event=>colorChangeHandler(event.target.value)} backgroundColorValue = {getColorVal()} inputColorVal={postedNotes.length === 0 ? "#5b0c5f" : getColorVal()}
    />
      </div>
      <div className="pinnedNotesSection">
      {
        pinnedNotes.map((item)=>{
          return(
            <div className="notePinnedBox">
              {item}
            </div>
          );
        })
      }
      </div>
      <div className="postedNotesSection">
      {
        postedNotes.map((item,index)=>{
          return(
            <div key={index} className="notePostedBox">
              {item}
            </div>
          );
        })
      }
  
      </div>
    </div>
  );
}

export default App;
