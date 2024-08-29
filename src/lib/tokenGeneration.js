import jwt from 'jsonwebtoken'
const key = process.env.KEY

export function tokenGeneration(id){
    const key = process.env.KEY
    const token = jwt.sign({id},key)
    return token;
  }
  