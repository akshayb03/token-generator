import React, { useState } from "react";
import { Stack, TextField, Button } from "@mui/material";

function TokenForm({ onGenerate, onClear }) {
  const [formValues, setFormValues] = useState({
    blueCount: "",
    bluePrefix: "",
    bluePerRow: "",
    redCount: "",
    redPrefix: "",
    redPerRow: "",
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleGenerate = () => {
    onGenerate(formValues);
  };

  return (
    <Stack spacing={2}>
      <TextField
        label="Number of Blue Tokens"
        name="blueCount"
        type="number"
        value={formValues.blueCount}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Prefix for Blue Tokens"
        name="bluePrefix"
        value={formValues.bluePrefix}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Blue Tokens Per Row"
        name="bluePerRow"
        type="number"
        value={formValues.bluePerRow}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Number of Red Tokens"
        name="redCount"
        type="number"
        value={formValues.redCount}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Prefix for Red Tokens"
        name="redPrefix"
        value={formValues.redPrefix}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Red Tokens Per Row"
        name="redPerRow"
        type="number"
        value={formValues.redPerRow}
        onChange={handleChange}
        fullWidth
      />
      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={handleGenerate}>
          Generate
        </Button>
        <Button variant="outlined" onClick={onClear}>
          Clear
        </Button>
      </Stack>
    </Stack>
  );
}

export default TokenForm;
