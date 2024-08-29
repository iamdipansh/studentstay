import { NextResponse } from 'next/server'
import connectMongoDB from '@/lib/db'
import Chat from '@/lib/model/chat'

export async function POST(req) {
    connectMongoDB();
    const data = await req.json();
    const {users} = data;

    const isChat = await Chat.findOne({
        users: { $all: users, $size: users.length }
    }).populate('users')

    if(isChat !== null ){
        console.log("isChat")
        // console.log(isChat)
        return  NextResponse.json(isChat)
    }
    else{
        const newChat = await Chat.create(data);
        const newchat = await Chat.findOne({_id : newChat._id}).populate('users')
        return  NextResponse.json(newchat)
    }
    
}