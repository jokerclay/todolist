/*
* 创建我们自己的 component
*/

// 导入 NoteList
import NoteList from './components/NoteList';

const App = () =>{
    // 返回一段文字，确认应用跑得起来
    // return <p>hello world </p>
    return <div className = "container">
        {/*render NoteList*/}
        <NoteList />
    </div>
}
// 导出 App
export default App;