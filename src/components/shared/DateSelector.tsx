import { FunctionComponent } from 'react';
import { TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

type Props = {
  date: Date | null;
  onChange: (date: Date | null) => void;
  label: string;
};

const DateSelector: FunctionComponent<Props> = ({ date, onChange, label }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={label}
        value={date}
        onChange={onChange}
        renderInput={(params) => (
          <TextField {...params} variant="filled" size="small" />
        )}
      />
    </LocalizationProvider>
  );
};

export default DateSelector;
