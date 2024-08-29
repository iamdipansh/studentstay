'use client'
import { useState, useEffect, use } from 'react';
import socket from '@/socket'
import axios from 'axios';

const Chat = ({chatId}) => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const loggedinUser = JSON.parse(localStorage.getItem('userInfo'))
    const loggedinUserId = loggedinUser.id

    useEffect(() => {

        socket.on("recive_message", (msg) => {
            console.log(msg);
            setMessages((prevM) => [...prevM, msg]);
            console.log(messages)
        });

        return () => {
            // socket.emit('disconnect')
        };
    },[]);


    const sendMessage = () => {
        const config = {
            headers: {
                "Content-type": "application/json"
            },
        }
        const data = axios.post('api/messaging/', {
            sender : loggedinUserId,
            content: inputValue,
            chat : chatId,
        }, config)

        socket.emit('room', chatId)
        
        socket.emit("send_message", inputValue);
        setInputValue("");
    };
    return (
        <>
            <div className='border rounded-md w-full overflow-scroll h-[450px]'>
                <ul className='p-3'>
                    {messages.map((msg, index) => (
                        <li key={index}>{msg}</li>
                    ))}
                </ul>
            </div>
            <div className='flex justify-between rounded-md'>

                <input className='h-10 w-full rounded-md bg-lime-100 border-2'
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button className='h-10 px-6 rounded-lg bg-lime-700' onClick={sendMessage}>Send</button>
            </div>
        </>
    )
}

export default Chat;