import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material';
import { FunctionComponent } from 'react';
import { ProjectAvatarName } from 'types/types';
import ProjectAvatar from './ProjectAvatar';

type Props = {
  open: boolean;
  onSelect: (name: ProjectAvatarName) => void;
  onClose: () => void;
};

const Avatars: ProjectAvatarName[] = [
  'Rocket',
  'Snow',
  'Bug',
  'Airplane',
  'Camera',
  'Castle',
  'Tower',
];

type AvatarIconProps = {
  name: ProjectAvatarName;
  onClick: () => void;
};

const AvatarIcon: FunctionComponent<AvatarIconProps> = ({ name, onClick }) => {
  return (
    <IconButton onClick={onClick}>
      <ProjectAvatar size="large" name={name} />
    </IconButton>
  );
};

const ProjectAvatarDialog: FunctionComponent<Props> = ({
  open,
  onSelect,
  onClose,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Click to edit this avatar</DialogTitle>
      <DialogContent sx={{ display: 'flex', gap: 4 }}>
        {Avatars.map((item) => (
          <AvatarIcon
            key={item}
            name={item}
            onClick={onSelect.bind(null, item)}
          />
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProjectAvatarDialog;
