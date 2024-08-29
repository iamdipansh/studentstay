import { NextResponse } from 'next/server'
import connectMongoDB from '@/lib/db'
import Message from '@/lib/model/message'

connectMongoDB();
export async function POST(req) {
    
    const data = await req.json();
   const newMessage = await Message.create(data)
    return  NextResponse.json(newMessage)
    
}