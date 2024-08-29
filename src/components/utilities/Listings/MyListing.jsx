"use client"
import { useState, useEffect, use } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import axios from "axios"
import Mypost from "./mypost"

const MyListing = () => {
    const [post, setPost] = useState([])

    const getListing = async ()=> {
        const loggedinUser = JSON.parse(localStorage.getItem('userInfo'))
        const userId = loggedinUser.id

        const config = {
            headers: {
              Authorization: `Bearer ${loggedinUser.token}`
            },
          }
        const response = await axios.get(`/api/posts/${userId}`, config)
        setPost(response.data)
    }

    // useEffect(()=>{
    //     getListing()
    // },[])
    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="ghost" onClick={getListing} >My Listings</Button>
                </DialogTrigger>
                <DialogContent className="w-[900px]">
                    <div className='flex flex-col'>
                        {post.map((item, index)=>(
                            <Mypost key={index} item={item}/>
                        ))}
                    </div>
                </DialogContent>
            </Dialog>
        </>

    )
}

export default MyListing