import { getFormattedTime } from './timeFunctions';

import type { BoardType } from '../typings/boardTypings';

export const generateScript = (board: BoardType, newLine: boolean, outputColor: string): string => {
  let output: string = '#!/bin/bash\n\n';
  const colorString: string = `\\033[${outputColor}m`;
  const noColorString: string = '\\033[0m';

  output += `# Generated on ${getFormattedTime()}\n`;
  output += '# https://website.com/\n\n';

  output += `COLOR='${colorString}'\n`;
  output += `NC='${noColorString}'\n`;

  board.forEach(row => {
    let rowOutput: string = '';
    row.forEach(column => {
      rowOutput += column ? '\u2588\u2588' : '  ';
    });
    output += `\necho -e "\${COLOR}${rowOutput}\${NC}"`;
  });
  if (newLine) output += '\necho \'\'';

  return output;
}
