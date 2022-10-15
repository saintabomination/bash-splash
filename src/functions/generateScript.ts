import { getFormattedTime } from './timeFunctions';

import type { BoardType } from '../typings/boardTypings';

export const generateScript = (board: BoardType, newLine: boolean): string => {
  let output: string = '#!/bin/bash\n\n';
  const colorString: string = '\\033[0;31m';
  const noColorString: string = '\\033[0m';

  output += `# Generated on ${getFormattedTime()}\n`;
  output += '# https://website.com/\n\n';

  output += `COLOR='${colorString}'\n`;
  output += `NC='${noColorString}'\n\n`;

  board.forEach(row => {
    let rowOutput: string = '';
    row.forEach(column => {
      rowOutput += column ? '\u2588\u2588' : '  ';
    });
    output += `echo -e "\${COLOR}${rowOutput}\${NC}"\n`;
  });
  if (newLine) output += 'echo \'\'';

  return output;
}
