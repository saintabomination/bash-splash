export type BoardType = boolean[][];

export type TileType = {
  enabled: boolean;
  position: {
    x: number;
    y: number;
  }
};
