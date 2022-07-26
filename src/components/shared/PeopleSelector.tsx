import { Box, TextField, Autocomplete, Typography } from '@mui/material';
import { FunctionComponent } from 'react';
import { People } from 'types/types';
import StringAvatar from './StringAvatar';

type Props = {
  people: People | null;
  options: People[];
  onSelect: (
    event: React.SyntheticEvent<Element, Event>,
    value: People | null
  ) => void;
  label: string;
  error?: boolean;
};

const PeopleSelector: FunctionComponent<Props> = ({
  people,
  options,
  onSelect,
  label,
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
        {label}
      </Typography>
      {people && (
        <Box sx={{ position: 'absolute', left: 10, bottom: 2, zIndex: 2 }}>
          <StringAvatar
            height={30}
            width={30}
            name={people?.name || 'Unassigned'}
          />
        </Box>
      )}
      <Autocomplete
        fullWidth
        onChange={onSelect}
        value={people}
        options={options}
        size="small"
        getOptionLabel={(option) => option.name}
        renderOption={(props, option) => (
          <Box component="li" {...props}>
            <StringAvatar name={option.name} />
            <Box sx={{ ml: 2 }}>
              <Typography>{option.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {option.email}
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
              style: { paddingLeft: people ? 40 : 'initial' },
            }}
          />
        )}
      />
    </Box>
  );
};

export default PeopleSelector;
