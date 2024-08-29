import { NextResponse } from 'next/server'
import connectMongoDB from '@/lib/db'
import Post from '@/lib/model/post'

connectMongoDB();

// export async function GET(req, {params}) {
//     const Id = params.Id;
//     console.log(Id)
// const data = await Post.find({postedBy : Id})
// console.log("data")
// return  NextResponse.json(data)
// }


// Creating Listing

export async function POST(req) {
    
    const data = await req.json();
    const { postedBy, address, appartment_type, frunishing, property_for, available_within, price, parking, picse, rating } = data;

    const post = await new Post({
        postedBy,
        address,
        appartment_type,
        frunishing,
        property_for,
        available_within,
        price,
        parking,
        picse: picse,
        rating
    })

    post.save();
        // .then(savedPost => {
        //     console.log('Post saved successfully:', savedPost);
        // })
        // .catch(err => {
        //     console.error('Error saving post:', err);
        // });


    return new NextResponse("Data sent")

}