import Board from './components/Board';

const App = (): JSX.Element =>
  (
    <>
      <h1>Bash Splash</h1>
      <Board width={12} height={8} />
      <br />
      <button>Generate</button><br /><br />
      <label htmlFor="output">Output:</label><br />
      <textarea
        name="output"
        cols={48}
        rows={16}
        style={{ resize: 'none' }}
        disabled
      ></textarea>
    </>
  );

export default App;
