import "./notecreator.css";
import sendIcon from './assets/send.svg';

export default function NoteCreator({postButtonHandler, noteBodyHandler, noteTitleHandler, noteTitleValue, noteBodyValue, colorChangeHandler, backgroundColorValue, inputColorVal}){

    return(
        <div className="noteBox"  style={{backgroundColor: backgroundColorValue}}>
            <div className="noteHeader"><input type="text" placeholder="Title..." class="note-title" onChange={noteTitleHandler} value={noteTitleValue}></input>
            <div className="buttonSection"><button className="buttonPost" onClick={postButtonHandler}>
            <img src={sendIcon} height="50rem" width="auto"></img>
            </button>
            <div className="colorBox">
            <label className="labelColor">Color:</label><input className="colorInput" type="color"onChange={colorChangeHandler} value={inputColorVal}></input></div>
            </div></div>
            <textarea rows="5" cols="50" className="note-body" placeholder="Take a note..." onChange={noteBodyHandler} value={noteBodyValue}></textarea>
        </div>
    );
}