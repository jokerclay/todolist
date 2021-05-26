import {useState} from 'react';
import { nanoid } from 'nanoid';


/*
* 创建我们自己的 component
*/
// 导入 NoteList
import NoteList from './components/NoteList';



const App = () =>{
    const [notes,setNotes] = useState([
        {
            id:nanoid(),
            text:"我的第一个待办事项",
            date:"2020/5/26"
        },
        {
            id:nanoid(),
            text:"我的第二个待办事项",
            date:"2020/5/26"
        },
        {
            id:nanoid(),
            text:"我的第三个待办事项",
            date:"2020/5/26"
        },
        {
            id:nanoid(),
            text:"我的第四个待办事项",
            date:"2020/5/26"
        },
        {
            id:nanoid(),
            text:"这是我的新的待办事项",
            date:"2020/5/26"
        },
    ]);
    // 返回一段文字，确认应用跑得起来
    // return <p>hello world </p>
    return <div className = "container">
        {/*render NoteList*/}
        <NoteList notes={notes} />
    </div>
}
// 导出 App
export default App;