'use client'

import {createContext, useContext, useEffect, useState} from 'react';

const ChatContext = createContext();

const ChatProvider = ({children})=>{
    const [ chatId, setChatId ] = useState({});
    const [ loggedUser, setLoggedUser ] = useState({});
    // const [selectedChat, setSelectedChat] = useState();
    // const [chats, setChats] = useState([]);
    // const [notification, setNotification] = useState([]);

    // const navigate = useNavigate();
    
    // useEffect(()=>{
    //     const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    //     setUser(userInfo);
    //     if(!userInfo){
    //         navigate("/");
    //     }
    // },[navigate])

    return <ChatContext.Provider value = {{chatId, setChatId, loggedUser, setLoggedUser}} >{children}</ChatContext.Provider>;
};
export default ChatProvider;

export const ChatState= ()=>{
    return useContext(ChatContext);
}
