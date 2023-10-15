import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useState } from "react";
import axios from "axios";


const Tentang = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const fetchData = () => {
      setLoading(true);
      axios.get('https://api.api-ninjas.com/v1/jokes?limit=1',{
        headers: { 'X-Api-Key': 'fgwpGHK2FWuwvWy/oPd16g==p7mJapZFPvuxu1sn'}
      })
        .then((response) => {
          setData(response.data[0]);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data: ', error);
          setLoading(false);
        });
    };
    return (
        <div className="joke">
          <div className="card bg-primary w-[580px] h-[341px] p-10">
            <div className="text-center">What do you call man whitout a body and a nose ? -Nobody Knows </div>
            <div className="head text-[40px] font-bold text-center text-srBlack2">Get your the best joke here</div>
            <button className="bg-blue-900 px-4 py-2 block mx-auto rounded mt-2 mb-2" onClick={fetchData} disabled={loading} >Get It !</button>
            <div className="text mt-2 text-center text-srBlack text-[20px]">{data.joke}</div>
          </div>
      </div>
    )
}

export default function Home () {
    return (
        <>
        <Navbar/>
        <Tentang/>
        <Footer/>
        </>
    );
}