import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function SuccessAlert() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="success">This item was successfully added to your cart </Alert>
    </Stack>
  );
}
