import React from "react";
import TokenForm from "../components/TokenForm";

function HomeScreen() {
  const handleGenerate = (formValues) => {
    console.log("formValues", formValues);
  };

  const handleClear = () => {
    console.log("clear");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Token Generator</h1>
      <TokenForm onGenerate={handleGenerate} onClear={handleClear} />
    </div>
  );
}

export default HomeScreen;
