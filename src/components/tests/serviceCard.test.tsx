import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, test } from "vitest";
import ServiceCard from "../ServiceCard";
import { ROUTES } from "../../router/routes";

describe("ServiceCard component", () => {
  const mockService = {
    id: "123",
    type_of_service: "plumbing",
    specialist_name: "John Doe",
    location: "New York",
    price: "300$",
    contact: "+48 123 456 789",
  };

  test("renders service information", () => {
    render(
      <BrowserRouter>
        <ServiceCard service={mockService} />
      </BrowserRouter>
    );
    expect(screen.getByText(mockService.specialist_name)).toBeInTheDocument();
    expect(
      screen.getByText(`Location: ${mockService.location}`)
    ).toBeInTheDocument();
    expect(screen.getByText(/Price:\s?300\$/)).toBeInTheDocument();
    expect(
      screen.getByText(`Contact: ${mockService.contact}`)
    ).toBeInTheDocument();
  });

  test("renders type of service inside a badge", () => {
    render(
      <BrowserRouter>
        <ServiceCard service={mockService} />
      </BrowserRouter>
    );

    expect(screen.getByText(mockService.type_of_service)).toBeInTheDocument();
  });

  test("renders link to service details", () => {
    render(
      <BrowserRouter>
        <ServiceCard service={mockService} />
      </BrowserRouter>
    );

    const detailsLink = screen.getByRole("link", { name: /View Details/i });
    expect(detailsLink).toBeInTheDocument();
    expect(detailsLink).toHaveAttribute(
      "href",
      ROUTES.SERVICE_DETAILS(mockService.id)
    );
  });
});
