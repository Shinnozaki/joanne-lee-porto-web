import React, { useState } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+62) 813 7193 1101",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "joanne133.lee@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Kota Jakarta Barat, 11470",
  },
];

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setIsLoading] = useState(false);

  console.log(process.env.NEXT_PUBLIC_SERVICE_ID)

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || name === "" || subject === "" || message === "") {
      toast.error("Please fill in all of the fields!");
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      from_subject: subject,
      message: message,
    };

    setIsLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_USER_ID,
      )
      .then((response) => {
        toast.success("Message sent successfully!");
        setEmail("");
        setMessage("");
        setName("");
        setSubject("");
        setIsLoading(false);
      })
      .catch((error) => {
        toast.error(error);
        setIsLoading(false);
        console.error(error);
      });
  };

  return (
    <>
    <div className="mt-28">

      <div className="border border-white/20 px-auto container"></div>
      <section className="pt-4 pb-12 xl:pb-20 xl:pt-20" id="contact">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
        >
          <div className="container mx-auto">
            <h1 className="mb-16 text-6xl font-extrabold">Contact Me</h1>
            <div className="flex flex-col xl:flex-row gap-[30px] ">
              <div className="xl:w-[54%] order-2 xl:order-none flex-1">
                <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                  <div className="grid grid-cols-1 gap-6">
                    <Input
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name"
                    />
                    <Input
                      type="email"
                      name="email"
                      value={email}
                      placeholder="Email address"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                      type="text"
                      name="subject"
                      value={subject}
                      placeholder="Subject"
                      onChange={(e) => setSubject(e.target.value)}
                    />
                    <Textarea
                      name="message"
                      value={message}
                      className="h-[200px]"
                      placeholder="Type your message here"
                      onChange={(e) => setMessage(e.target.value)}
                    />

                    <button
                      type="submit"
                      className="inline-flex justiy-center items-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-colors bg-accent text-primary hover:bg-accent-hover h-[48px] px-6 max-w-40"
                      onClick={handleSubmit}
                    >
                      {loading === true ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              </div>
              <div className="flex-1 flex xl:justify-center order-1 xl:order-none mb-8 xl:mb-0">
                <ul className="flex flex-col gap-10 ">
                  {info.map((item, index) => (
                    <li key={index} className="flex items-center gap-6 ">
                      <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                        <div className="text-[28px]  ">{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white/60">{item.title}</p>
                        <h3 className="text-xl ">{item.description}</h3>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
    </>
  );
};

export default Contact;
