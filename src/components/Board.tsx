import Tile from './Tile';

type Props = {
  width?: number;
  height?: number;
};

const Board = ({ width = 8, height = 8 }: Props): JSX.Element =>
  (
    <div>
      {[...Array(height)].map((_, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
          }}
        >
          {[...Array(width)].map((_, index) => (
            <Tile key={index} />
          ))} 
        </div>
      ))}
    </div>
  );

export default Board;
