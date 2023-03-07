import { useSelector } from 'react-redux';
import './App.css';
import UsersComponent from './components/UsersComponent'
import TodoComponent from './components/TodoComponent'

function App() {
  const userList = useSelector((state) => state.userReducer.userList)
  const todoList = useSelector((state) => state.todoReducer.data)

  return (
    <div className="App">
      <header className="App-header1">
        <h1> Header data </h1>
      </header>
      <UsersComponent users={userList} />
      <TodoComponent todos={todoList} />
    </div>
  );
}

export default App;
