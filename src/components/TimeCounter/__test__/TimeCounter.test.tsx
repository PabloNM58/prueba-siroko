import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import TimeCounter from "../TimeCounter";
import { vi } from "vitest";

describe("TimeCounter Component", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllTimers();
  });

  it("renders the initial time correctly", () => {
    render(<TimeCounter />);
    expect(screen.getByText("20:00")).toBeInTheDocument();
  });

  it("counts down correctly", () => {
    render(<TimeCounter />);

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(screen.getByText("19:59")).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(59000);
    });

    expect(screen.getByText("19:00")).toBeInTheDocument();
  });

  it("cleans up the interval on unmount", () => {
    const { unmount } = render(<TimeCounter />);

    unmount();

    expect(vi.getTimerCount()).toBe(0);
  });
});
