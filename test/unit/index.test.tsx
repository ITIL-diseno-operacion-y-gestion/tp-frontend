import { Example } from "@/components/example";

import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

test("Example", () => {
  expect(true).toBeTruthy();
});

test("Example", () => {
  render(<Example />);
  expect(screen.getByText("Example")).toBeDefined();
});

test("Fetch", async () => {
  const response = await fetch("https://example.com/user");
  const data = await response.json();
  expect(data).toEqual({
    id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
    firstName: "John",
    lastName: "Maverick",
  });
});
