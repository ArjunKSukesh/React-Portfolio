import { useState } from "react";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";


export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');



  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = "service_qjwmggp";
    const templateId = "template_b3a44gm";
    const publicKey = "AGoHkjUNttBIRfqKD";

    console.log(name);
    console.log(email);
    console.log(message);

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Arjun K",
      message: message
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setName('');
        setEmail('');
        setMessage('');
      },
        (error) => {
          console.log('FAILED...', error);
        },
      );
  }

  const buttonDisable = name.trim() === "" || email.trim() === "" || message.trim() === ""
  return <motion.div
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: -100 }}
    transition={{ duration: 1.5 }}
    className="border-b border-neutral-900 pb-20 flex flex-col justify-center items-center">
    <h2
      className="text-center text-4xl my-20">Get in Touch</h2>
    <div className="lg:w-1/3 ">
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-4 ">
        <input type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-3 rounded-lg focus:outline-none text-white text-lg bg-zinc-900 border border-white w-full "

        />
        <input type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 rounded-lg focus:outline-none text-white text-lg bg-zinc-900 border border-white  w-full"
        />
        <textarea
          cols={30}
          rows={5}
          placeholder="Enter Your Message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="p-3 rounded-lg focus:outline-none text-white text-lg bg-zinc-900 border border-white w-full "
        >
        </textarea>
        <button
          type="submit"
          disabled={buttonDisable}
          className={` text-white font-semibold text-lg uppercase w-full hover:cursor-pointer p-3 rounded-lg bg-green-600 ${buttonDisable ? " hover:opacity-80 hover:bg-gray-500" : " hover:opacity-90"} `}>Send Email</button>
      </form>
    </div>

  </motion.div>

}
