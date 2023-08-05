"use client";

import Box from "@/components/box";
import { BounceLoader } from "react-spinners";

const Loading = () => {
  return (
    <Box className="h-full flex items-center justify-center gap-x-4">
      <BounceLoader color="#22c55e" size={24} />
      Loading...
    </Box>
  );
};

export default Loading;
