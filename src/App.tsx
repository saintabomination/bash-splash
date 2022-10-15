import { useRef } from 'react';

import Board from './components/Board';
import { generateScript } from './functions/generateScript';

const App = (): JSX.Element => {
  const outputRef = useRef<HTMLTextAreaElement | null>(null);

  const handleGeneration = () => {
    if (!outputRef.current) return;
    outputRef.current.value = generateScript();
  }

  return (
    <>
      <h1>Bash Splash</h1>
      <Board width={12} height={8} />
      <br />
      <button onClick={handleGeneration}>Generate</button><br /><br />
      <label htmlFor="output">Output:</label><br />
      <textarea
        name="output"
        cols={48}
        rows={16}
        style={{ resize: 'none' }}
        disabled
        ref={outputRef}
      ></textarea>
    </>
  );
}

export default App;
