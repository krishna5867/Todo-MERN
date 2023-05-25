import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Dashboard from './component/Dashboard';
import Form from './component/Form';
import Todo from './component/Todo';
import Search from './component/Search';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Dashboard />}></Route>
                    <Route path="/add-student" element={<Form />}></Route>
                    <Route path="/add-todo/:id" element={<Todo />}></Route>
                    <Route path="/searchStudent/:query" element={<Search />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
