import {useState} from 'react';

const AddNote = ({handleAddNote})=>{
    // 获取用户的输入
    const [noteText,setNoteText]=useState('');

    const handleChange = (event)=>{
        // console.log(event.target.value)
        setNoteText(event.target.value);

    }
    const handleSaveClick=()=>{
        if(noteText.trim().length > 0)
        {
            handleAddNote(noteText)
            setNoteText('')
        }
        else
        {

        }
    }
    return(
        <div className="note new">
            <textarea
                name=""
                id=""
                cols="10"
                rows="8"
                placeholder="请输入待办事项..."
                onChange={handleChange}
                value = {noteText}
            ></textarea>
            <div className="note-footer">
                <small>剩余200字</small>
                <button className="save" onClick = {handleSaveClick}>保存</button>
            </div>
        </div>
    )
};
export default AddNote;