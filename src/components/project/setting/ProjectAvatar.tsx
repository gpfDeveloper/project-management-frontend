import { FunctionComponent } from 'react';
import { ProjectAvatarName } from 'types/types';
import RocketIcon from '@mui/icons-material/Rocket';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import BugReportIcon from '@mui/icons-material/BugReport';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CastleIcon from '@mui/icons-material/Castle';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CellTowerIcon from '@mui/icons-material/CellTower';

type Props = {
  name: ProjectAvatarName;
  size?: 'large' | 'small' | 'inherit' | 'medium' | undefined;
};

const ProjectAvatar: FunctionComponent<Props> = ({ name, size }) => {
  let icon = <RocketIcon fontSize={size} color="primary" />;
  switch (name) {
    case 'Airplane':
      icon = <AirplanemodeActiveIcon fontSize={size} color="primary" />;
      break;
    case 'Bug':
      icon = <BugReportIcon fontSize={size} color="primary" />;
      break;
    case 'Camera':
      icon = <CameraAltIcon fontSize={size} color="primary" />;
      break;
    case 'Castle':
      icon = <CastleIcon fontSize={size} color="primary" />;
      break;
    case 'Snow':
      icon = <AcUnitIcon fontSize={size} color="primary" />;
      break;
    case 'Tower':
      icon = <CellTowerIcon fontSize={size} color="primary" />;
      break;
  }
  return icon;
};

export default ProjectAvatar;
