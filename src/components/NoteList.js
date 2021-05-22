/*
*   待办事项的列表
*/

//导入从 Note.js 中导入 Note, 否则会报错 undefined
import Note from './Note'

const NoteList = () =>{

    // 返回一个 class 为 note-list 的 div
    return(
        <div className="notes-list">
        {/*    render a note component inside this div  */}
            <Note />
            <Note />
            <Note />
            <Note />
        </div>
    )
}
// 记得导出函数
export default NoteList;