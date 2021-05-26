/*
*  待办事项的基本结构
*/

// 导入图标
import {MdDeleteForever} from "react-icons/md";

//{id,text,date} 要放到 {} 中
const Note = ({id,text,date,handleDeleteNote})=>{


    // 返回 一个 div class 为 note, 这个 div 中 包含  span 文本内容  div时间  div 删除图标
    return(
        <div className = "note">
            {/*文本内容*/}
            <span>{text}</span>
            {/*文本底部内容*/}
            <div className="note-footer">
                {/*时间*/}
                 <small>{date}</small>
                {/*删除图标，从 react-icons 中导入删除图标*/}
                <MdDeleteForever className="delete-icon"  size = "1.3rem" onClick={()=>handleDeleteNote(id)}/>
            </div>
        </div>
    )
}
export default Note;