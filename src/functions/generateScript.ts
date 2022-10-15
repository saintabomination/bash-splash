import type { BoardType } from '../typings/boardTypings';

export const generateScript = (board: BoardType, newLine: boolean): string => {
  let output: string = '#!/bin/bash\n\n';

  board.forEach(row => {
    let rowOutput: string = '';
    row.forEach(column => {
      rowOutput += column ? '\u2588\u2588' : '  ';
    });
    output += `echo '${rowOutput}';\n`;
  });
  if (newLine) output += 'echo \'\';';

  return output;
}
