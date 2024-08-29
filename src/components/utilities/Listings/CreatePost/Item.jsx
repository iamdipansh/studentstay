'use client'
import React, { useState, useEffect } from 'react'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Crete_Round } from 'next/font/google'
import axios from 'axios'



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
const RATING = {
    id: "rating",
    name: "rating",
    options: [
        { value: "Excellent", label: "Excellent" },
        { value: "Good", label: "Good" },
        { value: "Average", label: "Average" },
    ],
};

const Item = () => {
    const [price, setprice] = useState();
    const [appartment, setAppartment] = useState();
    const [address, setAddress] = useState();
    const [available_in, setAvailable_in] = useState();
    const [property_for, setProperty_for] = useState();
    const [furnishing, setFurnishing] = useState();
    const [parking, setParking] = useState();
    const [rating, setRating] = useState();
    const [picse, setPicse] = useState([]);

    const user = JSON.parse(localStorage.getItem('userInfo'))

    const postDetails = (pics) => {
        // console.log(pics)
        for (let p in pics) {
            // console.log(pics[p].type)
            // console.log(pics[p])

            // if (pics[p] === undefined) {
            //     alert("Please Select a Image")
            //     return;
            // }

            if (pics[p].type === "image/jpeg" || pics[p].type === "image/png") {
                const data = new FormData();
                data.append("file", pics[p]);
                data.append("cloud_name", "dipansh");
                data.append("upload_preset", "studentstay");

                fetch("https://api.cloudinary.com/v1_1/dipansh/image/upload",
                    {
                        method: "Post",
                        body: data,
                        mode: 'cors'
                    })
                    .then((res) => res.json())
                    .then((data) => {
                        const url = data.url;
                        console.log(url)
                        setPicse(prev => [url, ...prev]);

                    })
                    .catch((err) => {
                        console.log(err);
                    })
            }
            // else {
            //     alert("Please Select a valid Image type (png, jpeg, jpg)")
            //     return;
            // }

        }

    }

    async function createPost() {
        const data = {
            postedBy: user.id,
            address: address,
            appartment_type: appartment,
            frunishing: furnishing,
            property_for: property_for,
            available_within: available_in,
            price: price,
            parking: parking,
            picse: picse,
            rating: rating

        }
        const config = {
            headers: {
                'Content-type': "application/json",
                Authorization: `Bearer ${user.token}`
            }
        }
        const response = await axios.post('/api/posts', data, config)
    }


    return (
        <>
            <Dialog className="overflow-scroll">
                <DialogTrigger asChild>
                    <Button variant="ghost" >Create Post</Button>
                </DialogTrigger>
                <DialogContent className="w-full">
                    <DialogHeader>
                        <DialogTitle>Create a Listing</DialogTitle>
                        <DialogDescription>
                            Make a Post of your appartment to advertise it
                        </DialogDescription>
                    </DialogHeader>

                    <div className=''>
                        <Accordion type="multiple" collapsible="true" className=''>

                            <AccordionItem value="price">
                                <AccordionTrigger>Price</AccordionTrigger>
                                <AccordionContent>
                                    <div>
                                        <input type="text" onChange={e => setprice(e.target.value)} value={price} className='w-full outline-none' placeholder='Enter Rent Amount' />
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="address">
                                <AccordionTrigger>Address</AccordionTrigger>
                                <AccordionContent>
                                    <div>
                                        <input type="text" onChange={e => setAddress(e.target.value)} value={address} className='w-full outline-none' placeholder='Enter Address' />
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="appartment">
                                <AccordionTrigger>Type of Appartment</AccordionTrigger>
                                <AccordionContent>
                                    <ul>
                                        {APPARTMENT_FILTERS.options.map((option, optionIndx) => (
                                            <li key={option.value} className='flex items-center'>
                                                <input
                                                    type='radio'
                                                    id={option.value}
                                                    value={option.value}
                                                    checked={appartment === option.value}
                                                    name={"appartment"}
                                                    onChange={(e) => setAppartment(e.target.value)}
                                                    className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                                />
                                                <label
                                                    htmlFor={option.value}
                                                    className='ml-3 text-sm text-gray-600'>
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
                                            <li key={option.value} className='flex items-center'>
                                                <input
                                                    type='radio'
                                                    id={option.value}
                                                    value={option.value}
                                                    checked={available_in === option.value}
                                                    name={"available_in"}
                                                    onChange={(e) => setAvailable_in(e.target.value)}
                                                    className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                                />
                                                <label
                                                    htmlFor={option.value}
                                                    className='ml-3 text-sm text-gray-600'>
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
                                            <li key={option.value} className='flex items-center'>
                                                <input
                                                    type='radio'
                                                    id={option.value}
                                                    value={option.value}
                                                    checked={property_for === option.value}
                                                    name={"property_for"}
                                                    onChange={(e) => setProperty_for(e.target.value)}
                                                    className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                                />
                                                <label
                                                    htmlFor={option.value}
                                                    className='ml-3 text-sm text-gray-600'>
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
                                            <li key={option.value} className='flex items-center'>
                                                <input
                                                    type='radio'
                                                    id={option.value}
                                                    value={option.value}
                                                    checked={parking === option.value}
                                                    name={"parking"}
                                                    onChange={(e) => setParking(e.target.value)}
                                                    className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                                />
                                                <label
                                                    htmlFor={option.value}
                                                    className='ml-3 text-sm text-gray-600'>
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
                                            <li key={option.value} className='flex items-center'>
                                                <input
                                                    type='radio'
                                                    id={option.value}
                                                    value={option.value}
                                                    checked={furnishing === option.value}
                                                    name={"furnishing"}
                                                    onChange={(e) => setFurnishing(e.target.value)}
                                                    className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                                />
                                                <label
                                                    htmlFor={option.value}
                                                    className='ml-3 text-sm text-gray-600'>
                                                    {option.label}
                                                </label>
                                            </li>
                                        ))}
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="photo">
                                <AccordionTrigger>Photo of Property</AccordionTrigger>
                                <AccordionContent>
                                    <input className='w-full' type="file" accept='image' multiple name="photo" id="photo" onChange={(e) => postDetails(e.target.files)} />
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="rating">
                                <AccordionTrigger>Rate the Property</AccordionTrigger>
                                <AccordionContent>
                                <ul className='flex gap-2'>
                                        {RATING.options.map((option, optionIndx) => (
                                            <li key={option.value} className='flex items-center'>
                                                <input
                                                    type='radio'
                                                    id={option.value}
                                                    value={option.value}
                                                    checked={rating === option.value}
                                                    name={"rating"}
                                                    onChange={(e) => setRating(e.target.value)}
                                                    className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                                />
                                                <label
                                                    htmlFor={option.value}
                                                    className='ml-3 text-sm text-gray-600'>
                                                    {option.label}
                                                </label>
                                            </li>
                                        ))}
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    <DialogFooter>
                        <Button type="submit" onClick={createPost}>Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

        </>
    )
}

export default Item