import { fireEvent, render, screen } from "@testing-library/react";
import { expect } from "vitest";
import Kontak from "./kontak";
describe("Kontak", () => {
    it("renders Kontak", () => {
        render(<Kontak />);
        expect(screen.getByText("Selamat Datang di Beranda")).toBeInTheDocument();
        expect(screen.getByText("Tentang")).toBeInTheDocument();
        expect(screen.getByText("Kontak")).toBeInTheDocument();
        expect(screen.getByText("Tugas 3 - Pemrograman Web Lanjut")).toBeInTheDocument();
        expect(screen.getByText("© 2023 Alfahmi Irfan™. All Rights Reserved.")).toBeInTheDocument();
        expect(screen.getByText("Jumlah Pesan : 0")).toBeInTheDocument();
        expect(screen.getByText("Jumlah Pesan : 1")).toBeInTheDocument();
        fireEvent.click(screen.getByRole("button"));
    })
})