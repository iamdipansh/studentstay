"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { ChatState } from "@/context/contextProvider"
import axios from "axios"

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const {setLoggedUser} = ChatState();


    const login = async () => {
        const config = {
            headers: {
                "Content-type": "application/json"
            },
        }
        const response = await axios.post('/api/auth/login', { email, password }, config)


        const data = response.data
        console.log(data)
        if (data) {
            alert("Login Successful")
            setLoggedUser(data)
            localStorage.setItem('userInfo', JSON.stringify(data));
            router.push("/")
        }

    }

    return (
        <div className="  flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Card className="mx-auto min-w-[400px] p-3">
                <CardHeader>
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription>
                        Enter your email and password 
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                                {/* <Link href="#" className="ml-auto inline-block text-sm underline">
                                    Forgot your password?
                                </Link> */}
                            </div>
                            <Input id="password" type="password" onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <Button type="submit" onClick={login} className="w-full">
                            Login
                        </Button>
                    </div>
                    <div className="mt-4 text-center text-sm">
                        Don&apos;t have an account?{" "}
                        <Link href="/auth/signup" className="underline">
                            Sign up
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>

    )
}
