import pushPinIcon from './assets/push-pin.svg';
import './noteTemplate.css';

export default function NoteTemplate({postedNoteTitle, postedNoteBody, bgColorVal, pinButtonHandler}){
    return(
        <div style={{backgroundColor: bgColorVal}}>
        <div className="noteTemplate" >
            <div className="note-header">
            <h1>{postedNoteTitle}</h1>
            <button onClick={pinButtonHandler} className="pinIcon"><img src={pushPinIcon} height="40rem" /></button>
            </div>
            
            <hr></hr>
            <p>{postedNoteBody}</p>
        </div>
        </div>
    );
}