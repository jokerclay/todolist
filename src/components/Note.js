/*
*  待办事项的基本结构
*/

// 导入图标
import {MdDeleteForever} from "react-icons/md";

const Note = ()=>{


    // 返回 一个 div class 为 note, 这个 div 中 包含  span 文本内容  div时间  div 删除图标
    return(
        <div className = "note">
            {/*文本内容*/}
            <span>hello 这是我的第一个笔待办事项</span>
            {/*文本底部内容*/}
            <div className="note-footer">
                {/*时间*/}
                 <small>2021/5/20</small>
                {/*删除图标，从 react-icons 中导入删除图标*/}
                <MdDeleteForever className="delete-icon"  size = "1.3rem" />
            </div>
        </div>
    )
}
export default Note;