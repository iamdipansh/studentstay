"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { toast } from "sonner"

export default function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyed, setVerifyed] = useState(false);

  const router = useRouter();

  function isVerifyed(e) {

      let domainIndex = e.indexOf(".edu.in");

      if (domainIndex !== -1) {
        setVerifyed(true)
        alert("Email is verifiyed with .edu.in domain")
      }
      else{
        alert("Email is not verifiyed with .edu.in domain")
      }
  }

  const handleEmail =(e)=>{
    const email = e.target.value;
    setEmail(email)
    isVerifyed(email)
  }


  const createAccount = async () => {

    const response = await fetch('/api/auth/signup', {
      method: "POST",
      body: JSON.stringify({ name, email, password, verifyed }),
      headers: {
        "Content-type": "application/json",
      }
    })

    const data = await response.json()
    if (data) {
      alert("New user Created")
      router.push("/auth/login")
    }
  }

  return (
    <div className="  flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Card className="mx-auto max-w-sm p-3">
        <CardHeader>
          <CardTitle className="text-xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid  gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">Name</Label>
                <Input id="first-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Max" required />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={email}
                onChange={handleEmail}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <Button type="submit" onClick={createAccount} className="w-full">
              Create an account
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/auth/login" className="underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>

  )
}
