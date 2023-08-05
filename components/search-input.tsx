"use client";

import useDebounce from "@/hooks/useDebounce";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import qs from "query-string";

interface SearchInputProps {}

const SearchInput: React.FC<SearchInputProps> = ({}) => {
  const router = useRouter();
  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce<string>(value, 500);

  useEffect(() => {
    const query = {
      title: debouncedValue,
    };

    const url = qs.stringifyUrl({
      url: "/search",
    });
  }, []);

  return (
    <div>
      <div></div>
    </div>
  );
};

export default SearchInput;
