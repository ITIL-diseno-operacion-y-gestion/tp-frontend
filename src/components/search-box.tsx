"use client";

import { Route } from "next";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Search } from "lucide-react";
import { useDebouncedCallback } from "use-debounce";

export function SearchBox() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("q", term);
    } else {
      params.delete("q");
    }
    replace(`${pathname as Route}?${params.toString()}`, { scroll: false });
  }, 500);

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Buscar..."
        className="rounded border border-gray-300 px-3 py-2"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("q")?.toString()}
      />
      <Search className="absolute right-2 top-2 size-6 text-gray-500" />
    </div>
  );
}
