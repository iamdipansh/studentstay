import { NextResponse } from 'next/server'
import connectMongoDB from '@/lib/db'
import Post from '@/lib/model/post'

connectMongoDB();

export async function GET(req, {params}) {
    const Id = params.userId;
    console.log(Id)
const data = await Post.find({postedBy : Id})
console.log("data")
return  NextResponse.json(data)
}