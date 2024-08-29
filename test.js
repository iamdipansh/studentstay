const data = [
    {

      address: 'Khandwa Naka, Indore',
      appartment_type: '1 Rk',
      frunishing: 'Unfurnished',
      property_for: 'Both',
      available_within: '1 Month',
      price: 6200,
      parking: 'Bike',
      __v: 0
    },
    {

      appartment_type: '1 Bhk',
      frunishing: 'Full Furnished',
      property_for: 'Boys',
      available_within: '4 Days',
      price: 1000,
      parking: 'No parking',
      __v: 0
    }
]

// data.map((item)=>{
//     console.log(item)
// })
let email = "20bit115@ietdavv.edu.in";

let domainIndex = email.indexOf(".edu.in");
if (domainIndex !== -1) {
    let slicedString = email.substring(domainIndex); // Adding 7 to skip ".edu.in"
    console.log(slicedString, "your email is verifyed"); // Output: in
} else {
    console.log("String '.edu.in' not found.");
}


useEffect(() => {

  const handleThrottledEvent = () => {
    console.log('Throttled event:', inputValue);
  };
  
  const delay = 1000; // 1 second
  const timerId = setTimeout(() => {
    handleThrottledEvent();
  }, delay);
  
  return () => {
    clearTimeout(timerId);
  };
}, [inputValue]); // Re-run effect whenever inputValue changes


const handleChange = (event) => {
  setInputValue(event.target.value);
};



// <h1 className="text-center my-6 font-bold text-blue-950-400 text-2xl drop-shadow">StudentStay</h1>
//       <div className="mx-12 flex h-[600px] justify-center  p-2 ">
//         <div id="chats" className=" p-2 w-[600px] border-2 rounded-lg drop-shadow-2xl flex flex-col justify-between">
//           <div className="flex justify-start items-center border-b-2 gap-3  py-2 ">
//             <Avatar>
//               <AvatarImage src="https://github.com/shadcn.png" />
//               <AvatarFallback>CN</AvatarFallback>
//             </Avatar>
//             <p>{name}</p>
//           </div>
//           <div className='border rounded-md w-full overflow-scroll h-[450px]'>
//             <ul className='p-3'>
//                     {messages.map((msg, index) => (
//                         <li key={index}>{msg}</li>
//                     ))}
//                 </ul>
//           </div>

//           <div className="flex justify-between rounded-md">
//             <input className="h-10 w-full rounded-md bg-lime-100" type="text" value={inputValue}
//               onChange={(e) => setInputValue(e.target.value)} />
//             <Button variant={'default'} onClick={sendMessage} >Send</Button>
//           </div>
//         </div>
//       </div>