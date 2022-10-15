type Props = {
  width?: number;
  height?: number;
};

const Board = ({ width = 8, height = 8 }: Props): JSX.Element =>
  (
    <div>
      {[...Array(height)].map((_, index) => (
        <div key={index}>
          {[...Array(width)].map((_, index) => (
            <button key={index}>O</button>
          ))} 
        </div>
      ))}
    </div>
  );

export default Board;
