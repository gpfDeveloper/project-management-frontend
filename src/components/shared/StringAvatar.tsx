import { Avatar } from '@mui/material';
import { FunctionComponent } from 'react';
function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name: string, width?: number, height?: number) {
  const names = name.split(' ');
  let children = names[0][0];
  if (names.length > 1) {
    children = `${names[0][0]}${names[1][0]}`;
  }
  return {
    sx: {
      bgcolor: stringToColor(name),
      width,
      height,
    },
    children,
  };
}

type Props = {
  name: string;
  width?: number;
  height?: number;
};
const StringAvatar: FunctionComponent<Props> = ({ name, width, height }) => {
  const props = stringAvatar(name, width, height);
  return <Avatar {...props} />;
};

export default StringAvatar;
