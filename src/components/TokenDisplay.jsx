import React from "react";
import { Box } from "@mui/material";
import Token from "./Token";

function TokenDisplay({ tokens }) {
  const { blueTokens, redTokens } = tokens;
  console.log("bluetokens", blueTokens, redTokens);

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
