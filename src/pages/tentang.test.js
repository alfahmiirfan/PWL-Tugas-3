import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import Tentang from "./tentang";
describe("Tentang", () => {
    it("renders Tentang", () => {
        render(<Tentang />);
        expect(screen.getByText("Beranda")).toBeInTheDocument();
        expect(screen.getByText("Tentang")).toBeInTheDocument();
        expect(screen.getByText("Kontak")).toBeInTheDocument();
        expect(screen.getByText("Get your the best joke here")).toBeInTheDocument();
        expect(screen.getByText("Tugas 3 - Pemrograman Web Lanjut")).toBeInTheDocument();
        expect(screen.getByText("© 2023 Alfahmi Irfan™. All Rights Reserved.")).toBeInTheDocument();
    })
})