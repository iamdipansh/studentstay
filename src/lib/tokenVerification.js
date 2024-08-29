import jwt from 'jsonwebtoken'
import {jwtVerify} from 'jose'

const key = process.env.KEY

export function tokenverification(token){
   const userId =  jwtVerify(token,key)
   console.log('here')
   return userId;
}