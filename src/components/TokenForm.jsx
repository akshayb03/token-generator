import React, { useState } from "react";
import { Stack, TextField, Button } from "@mui/material";
import { tokenForm } from "../utils/constants";

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
        label={tokenForm.BLUE_TOKEN_NUMBER}
        name="blueCount"
        type="number"
        value={formValues.blueCount}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label={tokenForm.BLUE_PREFIX}
        name="bluePrefix"
        value={formValues.bluePrefix}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label={tokenForm.BLUE_PER_ROW}
        name="bluePerRow"
        type="number"
        value={formValues.bluePerRow}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label={tokenForm.RED_TOKEN_NUMBER}
        name="redCount"
        type="number"
        value={formValues.redCount}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label={tokenForm.RED_PREFIX}
        name="redPrefix"
        value={formValues.redPrefix}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label={tokenForm.RED_PER_ROW}
        name="redPerRow"
        type="number"
        value={formValues.redPerRow}
        onChange={handleChange}
        fullWidth
      />
      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={handleGenerate}>
          {tokenForm.GENERATE_CTA}
        </Button>
        <Button variant="outlined" onClick={() => onClear(setFormValues)}>
          {tokenForm.CLEAR_CTA}
        </Button>
      </Stack>
    </Stack>
  );
}

export default TokenForm;
