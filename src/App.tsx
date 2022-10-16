import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Board from './components/Board';
import Icon from './components/Icon';
import Button from './components/Button';
import { generateBoardBase, resetBoard } from './redux/slices/boardSlice';
import { toggleDarkMode } from './redux/slices/uiSlice';
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
  const { darkModeActive } = useSelector((state: RootState) => state.ui);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(generateBoardBase({
      width: 12,
      height: 8,
    }));
  }, [dispatch]);

  const handleDarkModeToggle = () => {
    dispatch(toggleDarkMode());
  }

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
    <div className={`main-wrap${darkModeActive ? ' dark' : ''}`}>
      <h1>Bash Splash</h1>
      <Button handler={handleDarkModeToggle} text="Dark mode toggle" />
      <h2 className="icon-title">
        <Icon name="maximize" type="fas" size={0.8} />
        Sizes
      </h2>
      <form onSubmit={e => handleResize(e)}>
        <label htmlFor="width">Width:</label><br />
        <input type="number" name="width" ref={widthRef} required /><br />
        <label htmlFor="height">Height:</label><br />
        <input type="number" name="height" ref={heightRef} required /><br /><br />
        <Button text="Resize canvas" /><br /><br />
      </form>
      <Board tiles={tiles} />
      <h2 className="icon-title">
        <Icon name="gear" type="fas" size={0.8} />
        Options
      </h2>
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
      <Button handler={handleGeneration} text="Generate" />
      <Button handler={handleReset} text="Reset" />
      <h2 className="icon-title">
        <Icon name="file" type="fas" size={0.8} />
        Output
      </h2>
      <textarea
        name="output"
        cols={64}
        rows={16}
        style={{ resize: 'none' }}
        disabled
        ref={outputRef}
      ></textarea><br />
      <Button handler={handleClipboard} text="Copy to clipboard" />
    </div>
  );
}

export default App;
