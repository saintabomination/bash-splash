import type { BoardType } from '../typings/boardTypings';

export const generateScript = (board: BoardType): string => {
  let output: string = '#!/bin/bash\n\n';

  board.forEach(row => {
    let rowOutput: string = '';
    row.forEach(column => {
      rowOutput += column ? '\u2588\u2588' : '  ';
    });
    output += `echo -e '${rowOutput}';\n`;
  });

  return output;
}
