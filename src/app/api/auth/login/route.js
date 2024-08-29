import {NextResponse} from 'next/server'
import connectMongoDB from '@/lib/db'
import Users from '@/lib/model/user'
import { tokenGeneration } from '@/lib/tokenGeneration';

connectMongoDB();
export async function POST(request){
    
    const data = await request.json()
    const U = await Users.findOne(data)
    if(U){
        const response = {
            id : U.id,
            name: U.name,
            email: U.email,
            password: U.password,
            verifyed: U.verifyed,
            token: tokenGeneration(U.id)    
        }
       return  NextResponse.json(response);
    }
    return NextResponse.json({error: "user does not exist"}); 
}