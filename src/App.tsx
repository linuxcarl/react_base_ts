import { Counter } from './bases/Counter';
import { CounterBy } from './bases/CounterBy';
import { CounterEfect } from './bases/CounterEfect';
function App() {
  return (
    <>
      <Counter/>
     <CounterBy initialValue={0}/>
     <CounterEfect/>
    </>
  );
}

export default App;
