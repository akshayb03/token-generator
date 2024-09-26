import React, { useState } from "react";
import TokenDisplay from "../components/TokenDisplay";
import TokenForm from "../components/TokenForm";
import { home } from "../utils/constants";

function HomeScreen() {
  const [tokens, setTokens] = useState({ blueTokens: [], redTokens: [] });
  const [isVertical, setIsVertical] = useState(false);

  const handleGenerate = (formValues) => {
    const {
      blueCount,
      bluePrefix,
      bluePerRow,
      redCount,
      redPrefix,
      redPerRow,
    } = formValues;

    var blueTokens = [];
    for (var i = 0; i < blueCount; i++) {
      blueTokens.push({
        token: bluePrefix + (i + 1),
        perRow: bluePerRow,
      });
    }
    var redTokens = [];
    for (var j = 0; j < redCount; j++) {
      redTokens.push({
        token: redPrefix + (j + 1),
        perRow: redPerRow,
      });
    }

    setTokens({ blueTokens, redTokens });
    if (bluePerRow > 8 || redPerRow > 8) {
      setIsVertical(true);
    } else {
      setIsVertical(false);
    }
  };

  const handleClear = () => {
    setTokens({ blueTokens: [], redTokens: [] });
  };

  return (
    <div
      style={{
        padding: "40px",
        display: "flex",
        flexDirection: isVertical ? "column" : "row",
      }}
    >
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
        }}
      >
        <h1 style={{ marginBottom: 62 }}>{home.HEADING}</h1>
        <TokenForm onGenerate={handleGenerate} onClear={handleClear} />
      </div>
      <TokenDisplay tokens={tokens} />
    </div>
  );
}

export default HomeScreen;
