import { useDispatch } from 'react-redux';

import { toggleTileActive } from '../redux/slices/boardSlice';

type Props = {
  enabled: boolean;
  position: {
    x: number;
    y: number;
  };
}

const Tile = ({ enabled, position }: Props): JSX.Element => {
  const dispatch = useDispatch();

  const handleToggleActive = () => {
    dispatch(toggleTileActive(position));
  }

  return (
    <div
      style={{
        width: '32px',
        height: '32px',
        backgroundColor: enabled ? '#282828' : '#dedede',
        cursor: 'pointer',
      }}
      onClick={handleToggleActive}
    />
  );
}

export default Tile;
