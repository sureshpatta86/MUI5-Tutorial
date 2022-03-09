import React, { useState } from "react";
import { InputAdornment, Stack, TextField } from "@mui/material";

export const MuiTextField = (_event: any) => {
  const [errorValue, setErrorValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Small Secondary" size="small" color="secondary" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" required />
        <TextField
          label="Error"
          error={!errorValue}
          helperText={!errorValue ? "Please Enter the value" : ""}
          onChange={(e) => setErrorValue(e.target.value)}
        />
        <TextField label="Full Name" helperText="Please Enter Full Name" />
        <TextField
          label="Password"
          type="password"
          helperText="Do not share your password with anyone"
        />
        <TextField label="Disabled" disabled />
        <TextField label="Read Only" inputProps={{ readOnly: true }} />
        <Stack direction="row" spacing={2}>
          <TextField
            label="Amount"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
          <TextField
            label="Weight"
            InputProps={{
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};
