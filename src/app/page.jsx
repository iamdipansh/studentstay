'use client'
import Navbar from '@/components/utilities/Navbar';
import Filters from '@/components/utilities/Filter/Filters';
import Products from '@/components/utilities/Listings/Product';
import Hero from '@/components/utilities/Hero';
import { Toaster } from "@/components/ui/sonner"
import axios from 'axios';
import { useState } from 'react'

export default function Home() {
  const [data, setData] = useState([])
  const handleSearch = async (filter) => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json"
        },
      }
      const data = await axios.post("/api/filters", filter, config);
      const d = data.data
      setData(d)
    } catch (error) {
      alert(error);
    }

  }
  return (
    <section className='mx-24'>
      <Toaster position="top-center" />
      <Navbar />
      <Hero />
      <div className='w-full h-[800px] flex gap-2 rounded-3xl'>
        <Filters handleSearch={handleSearch} />
        <Products data={data} />
      </div>

      {/* <footer className="bg-gray-50 mt-3">
        <div className="mx-auto max-w-screen-xl px-2 py-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-teal-600 sm:justify-start font-bold text-xl">
              StudentStay
            </div>
            <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
              Copyright &copy; 2024. All rights reserved.
            </p>
          </div>
        </div>
      </footer> */}
    </section>
  );
}
