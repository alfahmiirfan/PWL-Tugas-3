import { screen, render } from "@testing-library/react";
import { expect } from "vitest";
import Footer from "./footer";

describe("Footer", () => {
    it("renders Footer", () => {
        render(<Footer />);
        expect(screen.getByText("Beranda")).toBeInTheDocument();
        expect(screen.getByText("Tentang")).toBeInTheDocument();
        expect(screen.getByText("Kontak")).toBeInTheDocument();
        expect(screen.getByText("Tugas 3 - Pemrograman Web Lanjut")).toBeInTheDocument();
        expect(screen.getByText("© 2023 Alfahmi Irfan™. All Rights Reserved.")).toBeInTheDocument();
    })
}) 