import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

function LoadingSpinner() {
  return (
    <div style={{ position: "absolute", left: "47%", top: "35%" }}>
      <ClipLoader
        color={"#0d6efd"}
        loading={true}
        size={100}
        aria-label="Loading Spinner"
      />
    </div>
  );
}

export default LoadingSpinner;
