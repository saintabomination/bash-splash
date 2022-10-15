type Props = {
  enabled?: boolean;
};

const Tile = ({ enabled = false }: Props): JSX.Element =>
  (
    <div
      style={{
        width: '32px',
        height: '32px',
        backgroundColor: enabled ? '#282828' : '#dedede',
      }}
    />
  );

export default Tile;
