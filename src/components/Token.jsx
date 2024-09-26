import { Paper, Stack } from "@mui/material";

const Token = ({ tokens, perRow, bgColor }) => {
  const rows = [];
  for (let i = 0; i < tokens.length; i += perRow) {
    rows.push(tokens.slice(i, i + perRow));
  }
  return rows.map((row, rowIndex) => (
    <Stack key={rowIndex} direction="row" spacing={2} mt={1}>
      {row.map((token, index) => (
        <Paper
          key={index}
          elevation={3}
          style={{
            padding: "10px",
            textAlign: "center",
            fontWeight: "bold",
            width: "100px",
            backgroundColor: bgColor,
          }}
        >
          {token.token}
        </Paper>
      ))}
    </Stack>
  ));
};

export default Token;
