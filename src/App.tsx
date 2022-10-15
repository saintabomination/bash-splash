import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Board from './components/Board';
import { generateBoardBase, resetBoard } from './redux/slices/boardSlice';
import { generateScript } from './functions/generateScript';

import type { RootState } from './redux/store';

const App = (): JSX.Element => {
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
    outputRef.current.value = generateScript();
  }

  const handleReset = () => {
    dispatch(resetBoard());
  }

  return (
    <>
      <h1>Bash Splash</h1>
      <Board tiles={tiles} />
      <br />
      <button onClick={handleGeneration}>Generate</button>
      <button onClick={handleReset}>Reset</button><br /><br />
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
