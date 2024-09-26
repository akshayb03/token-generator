import React from "react";
import { Box, Stack, Paper } from "@mui/material";

function TokenDisplay({ tokens }) {
  const { blueTokens, redTokens } = tokens;

  if (!blueTokens || !redTokens) {
    return;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItem: "center",
        minWidth: "50%",
        padding: 16,
      }}
    >
      <Box mt={4}>
        {blueTokens.length > 0 && (
          <Token
            tokens={blueTokens}
            perRow={parseInt(blueTokens[0]?.perRow || 1)}
            bgColor={"rgb(0, 0, 255, 0.8)"}
          />
        )}

        {redTokens.length > 0 && (
          <Token
            tokens={redTokens}
            perRow={parseInt(redTokens[0]?.perRow || 1)}
            bgColor={"rgb(255, 0, 0.8)"}
          />
        )}
      </Box>
    </div>
  );
}
export default TokenDisplay;

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
