import { NextResponse } from 'next/server'
import connectMongoDB from '@/lib/db'
import Post from '@/lib/model/post'

connectMongoDB();

export async function PATCH(req, { params }) {
    const postId = params.postId;
    console.log(postId)
    const i = await Post.findById(postId)
    const value = i.booked

    const data = await Post.findByIdAndUpdate(postId,
        { booked: !value },
        { new: true })

    return NextResponse.json(data)
}