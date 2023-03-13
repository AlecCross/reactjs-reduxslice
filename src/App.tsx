import './App.css';
import Counter from './counter/Counter';
import LanguageSelector from './Language/LanguageSelector';
import Todo from './todo/Todo';

function App() {
  return <>
    <LanguageSelector />
    <Counter />
    <Todo />
  </>
}

export default App;
