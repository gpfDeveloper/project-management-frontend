import { Box, TextField, Autocomplete, Typography } from '@mui/material';
import ProjectAvatar from 'components/project/setting/ProjectAvatar';
import { FunctionComponent } from 'react';
import { ProjectProps } from 'types/types';

type Props = {
  project: ProjectProps | null;
  options: ProjectProps[];
  onSelect: (
    event: React.SyntheticEvent<Element, Event>,
    value: ProjectProps | null
  ) => void;
  error?: boolean;
};

const ProjectSelector: FunctionComponent<Props> = ({
  project,
  options,
  onSelect,
  error,
}) => {
  return (
    <Box sx={{ position: 'relative' }}>
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: 13,
          mb: 0.2,
          color: error ? 'error.main' : 'inherit',
        }}
      >
        Project *
      </Typography>
      {project && (
        <Box sx={{ position: 'absolute', left: 10, bottom: 2, zIndex: 2 }}>
          <ProjectAvatar name={project.avatar} />
        </Box>
      )}
      <Autocomplete
        fullWidth
        onChange={onSelect}
        value={project}
        options={options}
        size="small"
        getOptionLabel={(option) => option.name}
        renderOption={(props, option) => (
          <Box component="li" {...props}>
            <ProjectAvatar name={option.avatar} />
            <Box sx={{ ml: 2 }}>
              <Typography>{option.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {option.type}
              </Typography>
            </Box>
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            error={error}
            variant="filled"
            {...params}
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password', // disable autocomplete and autofill
              style: { paddingLeft: project ? 40 : 'initial' },
            }}
          />
        )}
      />
    </Box>
  );
};

export default ProjectSelector;
