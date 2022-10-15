import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import type { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';

import './Icon.styles.scss';

type Props = {
  name: IconName;
  type: IconPrefix;
  size?: number;
};

library.add(fas);
library.add(fab);

const Icon = ({ name, type, size = 1 }: Props): JSX.Element =>
  (
    <div
      className="icon"
      style={{
        fontSize: `${size}em`,
      }}  
    >
      <FontAwesomeIcon icon={[type, name]} />
    </div>
  );

export default Icon;
