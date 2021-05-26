import {useState} from 'react';
import { nanoid } from 'nanoid';
import Search from './components/Search'
/*
* 创建我们自己的 component
*/

// 导入 NoteList
import NoteList from './components/NoteList';
const App = () =>{
    // useState hook
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

    const [searchText,setSearchText] = useState('');

    const addNote = (text)=>{
        // console.log(text);
        const date = new Date();
        const newNote ={
            id:nanoid,
            text: text,
            date: date.toLocaleString(),
        };
        const newNotes = [...notes,newNote];
        setNotes(newNotes)
    }
    const deleteNote = (id)=>{
        const newNotes= notes.filter((note)=>note.id !== id);
        setNotes(newNotes)
    }


    // 返回一段文字，确认应用跑得起来
    // return <p>hello world </p>
    return <div className = "container">
        <Search handleSearchNote={searchText} />
        {/*render NoteList*/}
        <NoteList
            notes={notes.filter(
                (note)=>note.text.toLowerCase().includes(searchText)
            )}
            handleAddNote={addNote}
            handleDeleteNote={deleteNote}
        />
    </div>
}
// 导出 App
export default App;