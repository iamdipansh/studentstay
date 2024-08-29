import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { useRouter } from "next/navigation"
import { useState } from "react"
import axios from "axios"
import { ChatState } from '@/context/contextProvider'

const Mypost = ({ item }) => {

    const a = item.picse

    function createdAt(time) {
        const createdAtDate = new Date(time);
        const today = new Date();
        const diff = today - createdAtDate;
        const daysAgo = Math.floor(diff / (1000 * 60 * 60 * 24))
        return daysAgo;
    }
    async function booked(postId) {

        const loggedinUser = JSON.parse(localStorage.getItem('userInfo'))
        const anotherUserId = item.postedBy?._id
        const loggedinUserId = loggedinUser.id
        const users = [loggedinUserId, anotherUserId]

        const config = {
            headers: {
                "Content-type": "application/json"
            },
        }
        const chat = await axios.patch(`/api/posts/booked/${postId}`)

    }

    return (
        <div className='border mb-4  h-[290px] max-h-[290px] border-[#e0e0e0] rounded-xl hover:bg-[#FAFAFA] flex justify-between overflow-hidden'>
            <div className='basis-1/3' >
                <Carousel className="w-full h-full max-w-xs ml-2 mt-2">
                    <CarouselContent>
                        {a.map((url, index) => (
                            <CarouselItem key={index}>
                                <Card>
                                    <CardContent className="flex  items-center justify-center h-full relative">
                                        <img src={url} alt=""  className='overflow-hidden bg-cover rounded-lg' />
                                        <div className="py-2 text-center text-sm text-muted-foreground absolute bottom-0 text-white">
                                            {index+1} of {a.length}
                                        </div>
                                    </CardContent>

                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

            </div>

            <div className='basis-2/3  flex flex-col justify-between ' >
                <div className='flex ml-14 mr-3 pt-2 items-center justify-between'>
                    <h1>{item.address}, Indore, 402020</h1>
                    <h1 className="text-sm">{createdAt(item.createdAt) + "d ago"}</h1>
                </div>

                <div className=' grid grid-cols-2 mx-14 gap-2'>
                    <div className=' py-3 drop-shadow-lg border rounded-sm flex flex-col justify-center items-center'>
                        <h1>{item.appartment_type}</h1>
                        <p className='text-xs'>Type of Appartment</p>
                    </div>
                    <div className=' py-3 drop-shadow-lg border rounded-sm flex flex-col justify-center items-center'>
                        <h1>{item.frunishing}</h1>
                        <p className='text-xs'>Furnishing</p>
                    </div>
                    <div className=' py-3 drop-shadow-lg border rounded-sm flex flex-col justify-center items-center'>
                        <h1>{item.property_for}</h1>
                        <p className='text-xs'>Property for</p>
                    </div>
                    <div className=' py-3 drop-shadow-sm border rounded-sm flex flex-col justify-center items-center'>
                        <h1>{item.available_within}</h1>
                        <p className='text-xs'>Available in</p>
                    </div>
                </div>
                
                <div className=' mx-14 py-2 flex items-center justify-between'>
                    <h1 className='text-2xl font-bold'>₹{item.price}/m</h1>
                    <Button variant={'default'} disabled={false} onClick={() => booked(item._id)} >Booked</Button>

                </div>
            </div>
        </div>
    )
}

export default Mypost