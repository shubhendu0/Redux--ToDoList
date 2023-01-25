import './App.css';
import { Todo } from './components/todo'

function App() {
  return (
    <>
      <div className="App">
        <div className='todo'>         
          <Todo/>
        </div>
      </div>
    </>
  );
}

export default App;