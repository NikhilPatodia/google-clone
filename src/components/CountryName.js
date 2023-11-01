"use client"
import React, { useEffect, useState } from 'react'

const CountryName = () => {
    const [country, setCountry] = useState("United States")
    const getCountry = async()=>{
        const res = await fetch(`https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`);
        const data = await res.json();
        setCountry(data.country)
    }
    useEffect(() => {
       getCountry();
    }, [])
    
  return (
    <div>{country}</div>
  )
}

export default CountryName