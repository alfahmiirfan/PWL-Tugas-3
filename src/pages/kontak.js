import { useState } from "react"
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Kontak = () => {  

  const [name, setName] = useState("");
  const [pesan, setSaran] = useState("");
  const [count, setCount] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    setCount(count + 1);
    console.log("Nama:", name);
    console.log("Saran:", pesan);
  };
  return (
    <div className="form">
      <div className="w-[35%] p-5 rounded-lg min-h-[20rem]">
        <p className="text-xl font-bold mb-4">Kontak saya : </p>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="Nama">Input Nama</label>
          <input id="Nama" className="border-2 border-black rounded-md" type="text" value={name}
            onChange={(e) => setName(e.target.value)}/>
          <label htmlFor="Saran" className="mt-4">Pesan</label>
          <textarea className="border-2 border-black rounded-md" name="" id="Saran" cols="30" rows="5" value={pesan} onChange={(e) => setSaran(e.target.value)}></textarea>
        <button className="bg-blue-900 text-white px-4 py-2 rounded mt-5 mb-2 border-black" type="submit">Submit</button>
        </form>
         <div className="count">
           <p className="mb-4   text-center">Jumlah Pesan : {count}</p>
         </div>
      </div>
    </div>
  )
}

export default function Home () {
    return (
        <>
        <Navbar/>
        <Kontak/>
        <Footer/>
        </>
    );
}