type Props = {
  width?: number;
  height?: number;
};

const Board = ({ width = 8, height = 8 }: Props): JSX.Element =>
  (
    <div>
      {[...Array(height)].map((value: undefined, index) => (
        <div key={index}>
          {[...Array(width)].map((value: undefined, index) => (
            <button key={index}>O</button>
          ))} 
        </div>
      ))}
    </div>
  );

export default Board;
