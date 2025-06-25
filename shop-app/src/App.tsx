import { useState, type MouseEvent } from 'react';
import { Button } from './components/Button/Button';

function App() {
  const [counter, setCounter] = useState(0);

  const addCounter = (e: MouseEvent) => {
    setCounter(counter+1)
    console.log(e);
  };
  return (
    <>
      <Button onClick={addCounter}>{counter}</Button>
    </>
  );
}

export default App;
