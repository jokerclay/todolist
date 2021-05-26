/*
*   待办事项的列表
*/

//导入从 Note.js 中导入 Note, 否则会报错 undefined
import Note from './Note'

import AddNote from "./AddNote";
const NoteList = ({notes,handleAddNote,handleDeleteNote}) =>{

    // 返回一个 class 为 note-list 的 div
    return(
        <div className="notes-list">
            {notes.map((note)=>

                (
                    <Note
                        id={note.id}
                        text={note.text}
                        date={note.date}
                        handleDeleteNote={handleDeleteNote}
                    />
                )

            )}
        {/*    render a note component inside this div  */}
        {/*    <Note />*/}
        {/*    <Note />*/}
        {/*    <Note />*/}
        {/*    <Note />*/}
            <AddNote  handleAddNote={handleAddNote} />
        </div>
    )
}
// 记得导出函数
export default NoteList;