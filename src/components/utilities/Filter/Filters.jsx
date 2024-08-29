"use client";
import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button"


const PRICE_FILTERS = {
  id: "price",
  name: "Price",
  options: [
    { value: "5k", label: "Under 5k" },
    { value: "8k", label: "Under 8k" },
    { value: "10k", label: "Under 10k" },
    { value: "11k", label: "Above 10k" },
  ],
};
const APPARTMENT_FILTERS = {
  id: "appartment",
  name: "appartment",
  options: [
    { value: "1 Bhk", label: "1 BHK" },
    { value: "2 Bhk", label: "2 BHK" },
    { value: "1 Rk", label: "1 RK" },
    { value: "Single Room", label: "Single Room" },
    { value: "Hostel", label: "Hostel" },
    { value: "PG", label: "PG" },
  ],
};
const AVAILABLE_IN_FILTERS = {
  id: "available_in",
  name: "available_in",
  options: [
    { value: "4 Days", label: "4 Days" },
    { value: "1 Week", label: "1 Week" },
    { value: "2 Week", label: "2 Week" },
    { value: "1 Month", label: "1 Month" },
    { value: "2 Month", label: "2 month" },
  ],
};
const PROPERTY_FOR_FILTERS = {
  id: "property_for",
  name: "property_for",
  options: [
    { value: "Boys", label: "Boys" },
    { value: "Girls", label: "Girls" },
    { value: "Independent", label: "Independent" },
  ],
};
const FURNISHING_FILTERS = {
  id: "furnishing",
  name: "furnishing",
  options: [
    { value: "Full Furnished", label: "Full Furnished" },
    { value: "Semifurnished", label: "Semifurnished" },
    { value: "Unfurnished", label: "Unfurnished" },
  ],
};
const PARKING_FILTERS = {
  id: "parking",
  name: "parking",
  options: [
    { value: "No parking", label: "No Parking" },
    { value: "Bikes", label: "Bikes" },
    { value: "Cars", label: "Cars" },
  ],
};

const Filters = ({ handleSearch }) => {
  const [price, setprice] = useState([]);
  const [appartment, setAppartment] = useState([]);
  const [available_in, setAvailable_in] = useState([]);
  const [property_for, setProperty_for] = useState([]);
  const [furnishing, setFurnishing] = useState([]);
  const [parking, setParking] = useState([]);

  const data = {
    appartment: appartment,
    price: price,
    available_in: available_in,
    property_for: property_for,
    furnishing: furnishing,
    parking: parking,
  }
  useEffect(() => {

    const timerId = setTimeout(() => {
      handleSearch(data);
    }, 500)

    return () => {
      clearTimeout(timerId);
    };
  }, [appartment, price, available_in, property_for, furnishing, parking]);

  function clearFilter() {
    setprice([])
    setAppartment([])
    setAvailable_in([])
    setProperty_for([])
    setFurnishing([])
    setParking([])
  }

  function applyPriceFilter(e) {
    if (price.includes(e)) {
      const d = price.filter((v) => v !== e)
      setprice(prev => prev = [...d])
    }
    else {
      setprice(prev => [e, ...prev])
    }
  }
  function applyAppartmentFilter(e) {
    if (appartment.includes(e)) {
      const d = appartment.filter((v) => v !== e)
      setAppartment(prev => prev = [...d])
    }
    else {
      setAppartment(prev => [e, ...prev])
    }
  }
  function applyAvailable_inFilter(e) {
    if (available_in.includes(e)) {
      const d = available_in.filter((v) => v !== e)
      setAvailable_in(prev => prev = [...d])
    }
    else {
      setAvailable_in(prev => [e, ...prev])
    }
  }
  function applyProperty_forFilter(e) {
    if (property_for.includes(e)) {
      const d = property_for.filter((v) => v !== e)
      setProperty_for(prev => prev = [...d])
    }
    else {
      setProperty_for(prev => [e, ...prev])
    }
  }
  function applyFurnishingFilter(e) {
    if (furnishing.includes(e)) {
      const d = furnishing.filter((v) => v !== e)
      setFurnishing(prev => prev = [...d])
    }
    else {
      setFurnishing(prev => [e, ...prev])
    }
  }
  function applyParkingFilter(e) {
    if (parking.includes(e)) {
      const d = parking.filter((v) => v !== e)
      setParking(prev => prev = [...d])
    }
    else {
      setParking(prev => [e, ...prev])
    }
  }

  return (
    <div className="basis-1/4 border border-[#e0e0e0] rounded-2xl">
      <div className="flex items-center justify-between px-4 py-4">
        <h1>Applied Filters</h1>
        <h1><Button variant={"outline"} onClick={clearFilter}>Clear Filters</Button></h1>
      </div>
      <div className="px-4 h-full">
        <Accordion type="multiple" collapsible="true" className="">

          <AccordionItem value="price">
            <AccordionTrigger>Price</AccordionTrigger>
            <AccordionContent>
              <ul>
                {PRICE_FILTERS.options.map((option, optionIndx) => (
                  <li key={option.value} className="flex items-center">
                    <input
                      type="checkbox"
                      id={option.value}
                      value={option.value}
                      checked={price.includes(option.value)}
                      onChange={(e) => { applyPriceFilter(e.target.value) }}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                      htmlFor={option.value}
                      className="ml-3 text-sm text-gray-600"
                    >
                      {option.label}
                    </label>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="appartment">
            <AccordionTrigger>Type of Appartment</AccordionTrigger>
            <AccordionContent>
              <ul>
                {APPARTMENT_FILTERS.options.map((option, optionIndx) => (
                  <li key={option.value} className="flex items-center">
                    <input
                      type="checkbox"
                      id={option.value}
                      value={option.value}
                      checked={appartment.includes(option.value)}
                      onChange={(e) => { applyAppartmentFilter(e.target.value) }}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label htmlFor={option.value} className="ml-3 text-sm text-gray-600">
                      {option.label}
                    </label>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="available_in">
            <AccordionTrigger>Available Within</AccordionTrigger>
            <AccordionContent>
              <ul>
                {AVAILABLE_IN_FILTERS.options.map((option, optionIndx) => (
                  <li key={option.value} className="flex items-center">
                    <input
                      type="checkbox"
                      id={option.value}
                      value={option.value}
                      checked={available_in.includes(option.value)}
                      onChange={(e) => { applyAvailable_inFilter(e.target.value) }}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                      htmlFor={option.value}
                      className="ml-3 text-sm text-gray-600"
                    >
                      {option.label}
                    </label>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="property_for">
            <AccordionTrigger>Property For</AccordionTrigger>
            <AccordionContent>
              <ul>
                {PROPERTY_FOR_FILTERS.options.map((option, optionIndx) => (
                  <li key={option.value} className="flex items-center">
                    <input
                      type="checkbox"
                      id={option.value}
                      value={option.value}
                      checked={property_for.includes(option.value)}
                      onChange={(e) => { applyProperty_forFilter(e.target.value) }}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                      htmlFor={option.value}
                      className="ml-3 text-sm text-gray-600"
                    >
                      {option.label}
                    </label>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="furnishing">
            <AccordionTrigger>Furnishing</AccordionTrigger>
            <AccordionContent>
              <ul>
                {FURNISHING_FILTERS.options.map((option, optionIndx) => (
                  <li key={option.value} className="flex items-center">
                    <input
                      type="checkbox"
                      id={option.value}
                      value={option.value}
                      checked={furnishing.includes(option.value)}
                      onChange={(e) => { applyFurnishingFilter(e.target.value) }}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                      htmlFor={option.value}
                      className="ml-3 text-sm text-gray-600"
                    >
                      {option.label}
                    </label>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="parking">
            <AccordionTrigger>Parking</AccordionTrigger>
            <AccordionContent>
              <ul>
                {PARKING_FILTERS.options.map((option, optionIndx) => (
                  <li key={option.value} className="flex items-center">
                    <input
                      type="checkbox"
                      id={option.value}
                      value={option.value}
                      checked={parking.includes(option.value)}
                      onChange={(e) => { applyParkingFilter(e.target.value) }}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                      htmlFor={option.value}
                      className="ml-3 text-sm text-gray-600"
                    >
                      {option.label}
                    </label>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </div>
    </div>
  );
};

export default Filters;
