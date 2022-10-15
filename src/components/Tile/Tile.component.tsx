import { useDispatch } from 'react-redux';

import { toggleTileActive } from '../../redux/slices/boardSlice';

import type { TileType } from '../../typings/boardTypings';

import './Tile.styles.scss';

const Tile = ({ enabled, position }: TileType): JSX.Element => {
  const dispatch = useDispatch();

  const handleToggleActive = () => {
    dispatch(toggleTileActive(position));
  }

  return (
    <div
      className="tile"
      style={{
        backgroundColor: enabled ? '#282828' : '#dedede',
      }}
      onClick={handleToggleActive}
    />
  );
}

export default Tile;
