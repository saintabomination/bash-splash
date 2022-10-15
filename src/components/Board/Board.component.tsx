import Tile from '../Tile';

import type { BoardType } from '../../typings/boardTypings';

import './Board.styles.scss';

type Props = {
  tiles: BoardType;
};

const Board = ({ tiles }: Props): JSX.Element => {
  return (
    <div className="board">
      {tiles && tiles.length > 0 && tiles.map((row, rowIndex) => (
        <div
          className="row"
          key={rowIndex}
        >
          {row && row.length > 0 && row.map((column, columnIndex) => (
            <Tile
              key={columnIndex}
              enabled={column} 
              position={{
                x: columnIndex,
                y: rowIndex,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;
