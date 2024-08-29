import { NextResponse } from 'next/server'
import connectMongoDB from '@/lib/db'
import Post from '@/lib/model/post'
import User from '@/lib/model/user'


// export async function GET() {
    // const data = await request.json()
//     return NextResponse.json({ success: true })
// }
connectMongoDB();

export async function POST(request) {
    
    
    const data = await request.json()
    const { appartment, price, available_in, property_for, furnishing, parking } = data;
    let queryObject = {};

    if (appartment.length > 0) {
        queryObject.appartment_type = { $in: appartment };
    }
    if (price.length > 0) {
        queryObject.price = { $in: price };
    }
    if (available_in.length > 0) {
        queryObject.available_within = { $in: available_in };
    }
    if (property_for.length > 0) {
        queryObject.property_for = { $in: property_for };
    }
    if (furnishing.length > 0) {
        queryObject.furnishing = { $in: furnishing };
    }
    if (parking.length > 0) {
        queryObject.parking = { $in: parking };
    }
    //const queryObject = {
    // address: {$in:},
    // appartment_type: {$in: appartment },
    // frunishing: {$in: furnishing},
    // property_for: {$in: property_for},
    // available_within: {$in: available_in},
    // price: {$in: price},
    // parking: {$in: parking},
    // }
    const item = await Post.find(queryObject).populate('postedBy', '-password')
    // console.log(item);
    return NextResponse.json(item)

}