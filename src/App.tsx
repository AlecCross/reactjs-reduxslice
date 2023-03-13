import './App.css';
import CardList from './CardList/CardList';
import Counter from './counter/Counter';
import LanguageSelector from './Language/LanguageSelector';
import Todo from './todo/Todo';

function App() {
  return <>
    <LanguageSelector />
    <Counter />
    <Todo />
    <CardList/>
  </>
}

export default App;
