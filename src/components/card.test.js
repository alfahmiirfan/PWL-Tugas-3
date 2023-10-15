import { screen, render } from "@testing-library/react";
import { expect } from "vitest";
import Card from "./card";

describe("Card", () => {
    it("renders Card", () => {
        render(<Card />);
        expect(screen.getByText("Beranda")).toBeInTheDocument();
        expect(screen.getByText("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ")).toBeInTheDocument();
    })
}) 