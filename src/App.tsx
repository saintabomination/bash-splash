import Board from './components/Board';

const App = (): JSX.Element =>
  (
    <>
      <h1>Bash Splash</h1>
      <Board width={12} height={8} />
    </>
  );

export default App;
