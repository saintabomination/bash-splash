import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Board from './components/Board';
import { generateBoardBase, resetBoard } from './redux/slices/boardSlice';
import { generateScript } from './functions/generateScript';

import type { RootState } from './redux/store';

const App = (): JSX.Element => {
  const newLineRef = useRef<HTMLInputElement | null>(null);
  const outputRef = useRef<HTMLTextAreaElement | null>(null);
  const { tiles } = useSelector((state: RootState) => state.board);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(generateBoardBase({
      width: 12,
      height: 8,
    }));
  }, [dispatch]);

  const handleGeneration = () => {
    if (!outputRef.current) return;
    const newLine: boolean = newLineRef?.current?.checked ?? false;
    outputRef.current.value = generateScript(tiles, newLine);
  }

  const handleReset = () => {
    dispatch(resetBoard());
  }

  return (
    <>
      <h1>Bash Splash</h1>
      <h2>Sizes</h2>
      <label htmlFor="width">Width:</label><br />
      <input type="number" name="width" /><br />
      <label htmlFor="height">Height:</label><br />
      <input type="number" name="height" /><br /><br />
      <button>Resize canvas</button><br /><br />
      <Board tiles={tiles} />
      <br />
      <label htmlFor="newline">New line:</label>
      <input type="checkbox" name="newline" ref={newLineRef} />
      <button onClick={handleGeneration}>Generate</button>
      <button onClick={handleReset}>Reset</button>
      <h2>Output</h2>
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
