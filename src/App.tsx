import { Counter } from './bases/Counter';
import { CounterBy } from './bases/CounterBy';

function App() {
  return (
    <>
      <Counter/>
     <CounterBy initialValue={0}/>
    </>
  );
}

export default App;
