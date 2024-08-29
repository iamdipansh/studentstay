
import { NextResponse } from 'next/server'
import connectMongoDB from '@/lib/db'
import Chat from '@/lib/model/chat'
import User from '@/lib/model/user'

connectMongoDB();

export async function GET(req, { params }) {
    
    const Id = params.Id;
    // console.log(Id)
    try {
           const d = await Chat.find({ users: Id }).populate("users")
        //    .populate('users')
        // console.log(d)
            // const d =  User.populate(result, 'users');
            return NextResponse.json(d)

        
        // .then( async(result)=>{ 
        // const d = await User.populate(result, 'users');
        // return NextResponse.json(d)
        // })

        //    return  NextResponse.json(d) 

    } catch (error) {
        console.log(error)
    }
    return NextResponse.json({ status: 200 })
}