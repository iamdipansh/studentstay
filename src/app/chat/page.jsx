"use client"
import { ChatState } from "@/context/contextProvider"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import socket from '@/socket'
import { Chat } from "@/components/chat"

import axios from "axios"
import Navbar from "@/components/utilities/Navbar"
import { Input } from "@/components/ui/input"

const Page = () => {

  const [selectedChat, setSelectedChat] = useState()
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [chats, setChats] = useState([])
  const [chatId, setChatId] = useState()

  async function fetchChats() {
    const loggedinUser = JSON.parse(localStorage.getItem('userInfo'))
    const Id = loggedinUser.id

    const config = {
      headers: {
        Authorization: `Bearer ${loggedinUser.token}`
      },
    }
    const response = await axios.get(`api/chat/${Id}`,config)
    setChats(response.data)
  }

  useEffect(() => {

    socket.on("recive_message", (msg) => {
      setMessages((prevM) => [...prevM, {content: msg}]);
    });

    fetchChats()

  }, [])

  useEffect(()=>{
    fetchMessage()
    console.log("running")
  },[selectedChat])


  const fetchMessage = async () =>{
    const {data} = await axios.get(`api/chat/singleChat/${chatId}`)
    setMessages(data)
    console.log(data)
    
  }

  const selectchat = (i) =>{
    setSelectedChat(i.users[1].name)
    setChatId(i._id)
    socket.emit('room', i._id)

  }

  const sendMessage = () => {
    const loggedinUser = JSON.parse(localStorage.getItem('userInfo'))
    const Id = loggedinUser.id

    const config = {
        headers: {
            "Content-type": "application/json"
        },
    }
    const data = axios.post('api/messaging/', {
        sender : Id,
        content: inputValue,
        chat : chatId,
    }, config)

    socket.emit("send_message", inputValue);

    setInputValue("");
  };

  return (
    <>
      <div className="mx-24">
        <Navbar />
      </div>
      <div className=" mx-8 mt-4  rounded-lg min-h-[650px] flex ">
        <div className="basis-1/3 border rounded-lg m-2 h-[650px]">
          <div className="flex gap-2 m-4 p-4 border-b font-semibold">
            My Chats
          </div>
          <div>
            {chats.map((i, inddx)=>(<p key={inddx} className="m-3 border rounded-xl px-3 py-4 bg-blue-100 " onClick={()=>selectchat(i)}> {i.users[1].name} </p>))}
          </div>
        </div>
        <div className="basis-2/3 border rounded-lg m-2 flex flex-col ">
          <div className="flex gap-2 m-3 p-3 border-b items-center">
            <Avatar className=''>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {selectedChat? (selectedChat): ""}
          </div>
          <div className="">
            <div className="h-[450px] overflow-scroll">
              <ul className='p-3'>
                { messages.length > 0 ? (messages.map((msg, index) => (
                <li className="px-4 py-2 mt-2 border rounded-3xl w-fit bg-green-100" key={index}>{msg.content}</li> ))) : ""
                }
              </ul>
            </div>
            <div className="border-t border-gray-20 p-4">
              <div className="flex items-center gap-3">
                <Input className="flex-1" placeholder="Type your message..." onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
                <Button variant='secondary' onClick={sendMessage}>Send</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Chat/> */}
    </>

  )
}

export default Page