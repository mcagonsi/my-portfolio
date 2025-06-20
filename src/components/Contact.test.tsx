import { render, screen, fireEvent } from "@testing-library/react";
import Contact from "./Contact";
import "@testing-library/jest-dom";

describe("Contact Component", () => {
    it("renders the contact form", () => {
        render(<Contact />);
        expect(screen.getByPlaceholderText("Full Name")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Email Address")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Phone Number")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Service of Interest")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Project Details")).toBeInTheDocument();
    });

    it("shows a success modal on successful form submission", async () => {
        render(<Contact />);

        fireEvent.change(screen.getByPlaceholderText("Full Name"), { target: { value: "John Doe" } });
        fireEvent.change(screen.getByPlaceholderText("Email Address"), { target: { value: "john@example.com" } });
        fireEvent.change(screen.getByPlaceholderText("Phone Number"), { target: { value: "1234567890" } });
        fireEvent.change(screen.getByPlaceholderText("Service of Interest"), { target: { value: "Web Development" } });
        fireEvent.change(screen.getByPlaceholderText("Project Details"), { target: { value: "Build a portfolio website" } });

        fireEvent.click(screen.getByText("Send"));

        expect(await screen.findByText("Thank You!")).toBeInTheDocument();
    });

    it("shows an error modal on failed form submission", async () => {
        global.fetch = jest.fn(() => Promise.reject("API is down")) as jest.Mock;

        render(<Contact />);

        fireEvent.change(screen.getByPlaceholderText("Full Name"), { target: { value: "John Doe" } });
        fireEvent.change(screen.getByPlaceholderText("Email Address"), { target: { value: "john@example.com" } });
        fireEvent.change(screen.getByPlaceholderText("Phone Number"), { target: { value: "1234567890" } });
        fireEvent.change(screen.getByPlaceholderText("Service of Interest"), { target: { value: "Web Development" } });
        fireEvent.change(screen.getByPlaceholderText("Project Details"), { target: { value: "Build a portfolio website" } });

        fireEvent.click(screen.getByText("Send"));

        expect(await screen.findByText("Failed to send your message. Please try again later.")).toBeInTheDocument();
    });
});