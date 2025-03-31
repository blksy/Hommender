import "@testing-library/jest-dom";
import { vi } from "vitest";
import { render, RenderOptions, cleanup } from "@testing-library/react";
import { afterEach } from "vitest";
import { AllTheProviders } from "./AllTheProviders";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Cleanup after each test
afterEach(() => {
  cleanup();
});

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export { customRender as render };
export { screen, fireEvent } from "@testing-library/react";
