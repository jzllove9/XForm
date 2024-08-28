import { useEffect } from 'react';
import {
  Slider, FormControl, FormLabel, FormHelperText, FormControlLabel,
} from '@mui/material';
import { observer } from 'mobx-react';

export default observer(({
  path = '',
  $$store = null,
}) => {
  const {
    label,
    disabled,
    helperText,
    errorMsg,
    ...componentProps
  } = $$store.context(path);

  console.log('~~~ Slider', path);

  const value = $$store.getValue(path);

  useEffect(() => {
    $$store.linkage(path);
  }, [value]);

  return (
    <FormControl fullWidth error={!!errorMsg}>
      <FormLabel disabled={disabled}>{label}</FormLabel>
      <Slider
        value={value}
        disabled={disabled}
        onChange={(e, v) => {
          $$store.setValue(path, v);
          $$store.validate(path);
        }}
        {...componentProps}
      />
      <FormHelperText>{errorMsg || helperText}</FormHelperText>
    </FormControl>
  );
});
