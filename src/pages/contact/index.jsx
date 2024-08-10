import React from "react";
import { useState } from "react";

const Contact = () => {
  const [person, setPerson] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  console.log("name:", { person });
  console.log("email:", { email });
  console.log("subject:", { subject });
  console.log("message:", { message });
  return (
    <div className="w-[643px] flex flex-col m-auto my-[50px] gap-10">
      <h1 className="text-[32px]">
        <strong>Contact Us</strong>
      </h1>

      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam
      </span>
      <div className="flex w-[643px] justify-between m-auto">
        <div className="w-[294px] h-[133px] gap-5 border border-solid border-gray-200 py-5 px-5 rounded-md">
          <h1><strong>Address</strong></h1>
          <span>1328 Oak Ridge Drive, Saint Louis, Missouri</span>
        </div>
        <div className="w-[294px] h-[133px] gap-5 border border-solid border-gray-200 py-5 px-5 rounded-md">
          <h1><strong>Contact</strong></h1>
          <ul>
            <li>313-332-8662</li>
            <li>info@email.com</li>
          </ul>
        </div>
      </div>
      <div className="w-[643px] h-[440px] bg-gray-100 m-auto rounded-lg flex flex-col gap-5 ">
        <h2 className="ml-[50px] mt-5"><strong>Leave a message</strong></h2>
        <form className="flex flex-wrap gap-10 justify-evenly">
          <input type="text" required defaultValue="Your name" value={person} className="text-gray-400 h-[40px] rounded-md w-[225px] p-5 border border-solid border-gray-500" onChange={(e)=>setPerson(e.target.value)}/>
          <input type="text" required defaultValue="Your email" value={email} className="text-gray-400 h-[40px] rounded-md w-[225px] p-5 border border-solid border-gray-500" onChange={(e)=>setEmail(e.target.value)} />
          <input type="text" required defaultValue="Subject" value={subject} className="w-[540px] text-gray-400 h-[40px] rounded-md p-5 border border-solid border-gray-500"onChange={(e)=>setSubject(e.target.value)}/>
          <input type="text" required defaultValue="Leave a message" value={message} className="w-[540px] h-[134px] text-gray-400 rounded-md p-5 text-start border border-solid border-gray-500" onChange={(e)=>setMessage(e.target.value)}/>
        </form>
        <button className="w-[130px] h-[40px] bg-blue-500 border-none rounded-md  text-white ml-[55px]">Send a message</button>
      </div>
    </div>
  );
  
};

export default Contact;
