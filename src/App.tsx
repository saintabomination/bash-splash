import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Board from './components/Board';
import { generateBoardBase, resetBoard } from './redux/slices/boardSlice';
import { generateScript } from './functions/generateScript';

import type { FormEvent } from 'react';

import type { RootState } from './redux/store';

const App = (): JSX.Element => {
  const widthRef = useRef<HTMLInputElement | null>(null);
  const heightRef = useRef<HTMLInputElement | null>(null);
  const newLineRef = useRef<HTMLInputElement | null>(null);
  const colorRef = useRef<HTMLSelectElement | null>(null);
  const outputRef = useRef<HTMLTextAreaElement | null>(null);
  const { tiles } = useSelector((state: RootState) => state.board);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(generateBoardBase({
      width: 12,
      height: 8,
    }));
  }, [dispatch]);

  const handleResize = (e: FormEvent) => {
    e.preventDefault();
    if (!widthRef.current || !heightRef.current) return;
    if (Number(widthRef.current.value) <= 0 || Number(heightRef.current.value) <= 0) return;

    dispatch(generateBoardBase({
      width: Number(widthRef.current.value),
      height: Number(heightRef.current.value),
    }));
  }

  const handleGeneration = () => {
    if (!outputRef.current) return;
    const newLine: boolean = newLineRef?.current?.checked ?? false;
    const color: string = colorRef?.current?.value ?? '1;37';
    outputRef.current.value = generateScript(tiles, newLine, color);
  }

  const handleReset = () => {
    dispatch(resetBoard());
  }

  const handleClipboard = () => {
    if (!outputRef.current || !outputRef.current.value) return;
    navigator.clipboard.writeText(outputRef.current.value);
  }

  return (
    <>
      <h1>Bash Splash</h1>
      <h2>Sizes</h2>
      <form onSubmit={e => handleResize(e)}>
        <label htmlFor="width">Width:</label><br />
        <input type="number" name="width" ref={widthRef} required /><br />
        <label htmlFor="height">Height:</label><br />
        <input type="number" name="height" ref={heightRef} required /><br /><br />
        <button>Resize canvas</button><br /><br />
      </form>
      <Board tiles={tiles} />
      <h2>Options</h2>
      <label htmlFor="newline">New line:</label>
      <input type="checkbox" name="newline" ref={newLineRef} /><br />
      <label htmlFor="color">Color:</label>
      <select name="color" ref={colorRef}>
        <option value="0;30">Black</option>
        <option value="0;31">Red</option>
        <option value="0;32">Green</option>
        <option value="0;33">Orange</option>
        <option value="0;34">Blue</option>
        <option value="0;35">Purple</option>
        <option value="0;36">Cyan</option>
        <option value="1;33">Yellow</option>
        <option value="1;37">White</option>
      </select><br /><br />
      <button onClick={handleGeneration}>Generate</button>
      <button onClick={handleReset}>Reset</button>
      <h2>Output</h2>
      <textarea
        name="output"
        cols={64}
        rows={16}
        style={{ resize: 'none' }}
        disabled
        ref={outputRef}
      ></textarea><br />
      <button onClick={handleClipboard}>Copy to clipboard</button>
    </>
  );
}

export default App;
