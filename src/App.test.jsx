import { afterEach, vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import sanityClient from "./client";

import App from "./App";

describe("<App />", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should render the heading", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: "Bradley Blogs" }),
    ).toBeInTheDocument();
  });

  it("should fetch blog posts", () => {
    const spy = vi.spyOn(sanityClient, "fetch");

    render(<App />);

    expect(spy).toHaveBeenCalledTimes(1);

    expect(spy).toHaveBeenCalledWith('*[_type == "post"]');
  });
});
