import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, test } from "vitest";
import ClientCard from "../ClientCard";
import { ROUTES } from "../../router/routes";

describe("ClientCard component", () => {
  const mockClient = {
    id: "123",
    profilePic: "",
    full_name: "John Doe",
    address: "123 Main Street",
    phone: "+48 123 456 789",
  };

  test("renders client information", () => {
    render(
      <BrowserRouter>
        <ClientCard client={mockClient} />
      </BrowserRouter>
    );
    expect(screen.getByText(mockClient.full_name)).toBeInTheDocument();
    expect(
      screen.getByText(`Address: ${mockClient.address}`)
    ).toBeInTheDocument();
    expect(screen.getByText(`Phone: ${mockClient.phone}`)).toBeInTheDocument();
  });

  test("renders default profile picture", () => {
    render(
      <BrowserRouter>
        <ClientCard client={mockClient} />
      </BrowserRouter>
    );

    const profileImage = screen.getByRole("img");
    expect(profileImage).toBeInTheDocument();
    expect(profileImage).toHaveAttribute(
      "src",
      expect.stringContaining("Profile.def.jpg")
    );
  });

  test("renders a link to client profile", () => {
    render(
      <BrowserRouter>
        <ClientCard client={mockClient} />
      </BrowserRouter>
    );

    const link = screen.getByRole("link", { name: /View Profile/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", ROUTES.CLIENT_DETAILS(mockClient.id));
  });
});
