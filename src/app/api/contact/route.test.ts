import { describe, it, expect } from "@jest/globals";
import { POST } from "./route";

describe("Contact API Route", () => {
    it("sends emails successfully", async () => {
        process.env.GMAIL_USER = "test@gmail.com";
        process.env.GMAIL_PASS = "password";

        const mockRequest = {
            formData: async () => new Map([
                ["name", "John Doe"],
                ["email", "john@example.com"],
                ["phone", "1234567890"],
                ["service", "Web Development"],
                ["projectDetails", "Build a portfolio website"],
            ]),
        } as unknown as Request;

        const mockResponse = await POST(mockRequest);
        expect(mockResponse.status).toBe(200);
        expect(await mockResponse.json()).toEqual({ message: "Message sent successfully" });
    });

    it("returns an error if environment variables are missing", async () => {
        delete process.env.GMAIL_USER;
        delete process.env.GMAIL_PASS;

        const mockRequest = {
            formData: async () => new Map([
                ["name", "John Doe"],
                ["email", "john@example.com"],
                ["phone", "1234567890"],
                ["service", "Web Development"],
                ["projectDetails", "Build a portfolio website"],
            ]),
        } as unknown as Request;

        const mockResponse = await POST(mockRequest);
        expect(mockResponse.status).toBe(500);
        expect(await mockResponse.json()).toEqual({ message: "Server configuration error." });
    });
});

// Removed the custom expect function as Jest's expect is now used.
