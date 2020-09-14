import React from "react";
import { Box } from "rebass";

export default () => (
  <Box
    sx={{
      display: "grid",
      gridGap: 3,
      gridTemplateColumns: "repeat(auto-fit, minmax(128px, 1fr))",
    }}
  >
    <div>column #1</div>
    <div>column #2</div>
    <div>column #3</div>
  </Box>
);

