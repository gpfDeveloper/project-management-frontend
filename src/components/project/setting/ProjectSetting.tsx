import { Box, MenuItem, TextField } from '@mui/material';
import { useProject } from 'contexts/project-context';
import { FunctionComponent, useState } from 'react';
import { ProjectType } from 'types/types';

const ProjectTypes: ProjectType[] = ['Software', 'Business'];

const ProjectSetting: FunctionComponent = () => {
  const { currentProject: project } = useProject();
  const [name, setName] = useState(project!.name);
  const [url, setUrl] = useState(project!.URL);
  const [type, setType] = useState(project!.type);
  const [avatar, setAvatar] = useState(project!.avatar);
  const [description, setDescription] = useState({
    text: project!.description,
  });
  const [isPrivate, setIsPrivate] = useState(project!.isPrivate);

  console.log(project);
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ width: 600 }}>
        <Box
          sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: 300 }}
        >
          <TextField
            value={name}
            label="name *"
            onChange={(e) => setName(e.target.value)}
            size="small"
            variant="filled"
            placeholder="name *"
            inputProps={{ maxLength: 80 }}
            error={!name}
          />
          <TextField
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            label="URL"
            size="small"
            variant="filled"
            placeholder="URL"
            inputProps={{ maxLength: 255 }}
          />
          <TextField
            value={type}
            onChange={(e) => setType(e.target.value as ProjectType)}
            size="small"
            select
            variant="filled"
            label="Project type"
          >
            {ProjectTypes.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectSetting;
