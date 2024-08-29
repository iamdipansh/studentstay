import { NextRequest, NextResponse } from "next/server";
import { tokenverification } from "./lib/tokenVerification";
import { headers } from "next/headers";

export function middleware(request) {
    // let token;
    // const authorization = headers().get('Authorization');
    // ;
    // console.log(authorization);
    // if (authorization) {
    //     token = authorization.split(" ")[1]
    //     userId = tokenverification(token)
    //     console.log(userId);
    // }
    // else{
    //     console.log("nothing")
    // }

}