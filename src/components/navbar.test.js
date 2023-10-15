import { screen, render } from "@testing-library/react";
import { expect } from "vitest";
import Navbar from "./navbar";

describe("Navbar", () => {
    it("renders Navbar", () => {
        render(<Navbar />);
        expect(screen.getByText("Beranda")).toBeInTheDocument();
        expect(screen.getByText("Tentang")).toBeInTheDocument();
        expect(screen.getByText("Kontak")).toBeInTheDocument();
    })
}) 