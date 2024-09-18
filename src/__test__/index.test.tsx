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
