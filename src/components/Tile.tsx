import { useState } from 'react';

const Tile = (): JSX.Element => {
  const [enabled, setEnabled] = useState<boolean>(false);
  
  return (
    <div
      style={{
        width: '32px',
        height: '32px',
        backgroundColor: enabled ? '#282828' : '#dedede',
      }}
      onClick={() => setEnabled(!enabled)}
    />
  );
}

export default Tile;
