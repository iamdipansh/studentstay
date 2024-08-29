import { NextResponse } from 'next/server'
import connectMongoDB from '@/lib/db'
import Message from '@/lib/model/message'

connectMongoDB();

export async function GET(req, {params}){
    
    const chatId = params.chatId;
    // console.log(chatId)
    try {
        const d = await Message.find({chat : chatId}).populate("chat")
        // console.log(d)
        return  NextResponse.json(d)
    } catch (error) {
        console.log(error)
    }
    return  NextResponse.json({status : 200})
}