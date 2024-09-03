import { SectionContainerHeaderTitle } from "../components/layout/SectionContainerHeaderTitle/SectionContainerHeaderTitle";
import { SectionContainer } from "../components/layout/SectionContainer/SectionContainer";

import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";


export const SectionContact: React.FC = () => {
  
  const emailRef = useRef<HTMLInputElement>();
  const nameRef = useRef<HTMLInputElement>();
  const messageRef = useRef<HTMLTextAreaElement>();

  const publicKey = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY;

  const [sendingMail, isSendingMail] = useState(false);
  
  useEffect(() => emailjs.init(publicKey), []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    const serviceId = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID;
    
    if (!emailRef.current?.value || !nameRef.current?.value || !messageRef.current?.value) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      isSendingMail(true);
      
      await emailjs.send(serviceId, templateId, {
        from_name: nameRef.current?.value,
        from_email: emailRef.current?.value,
        message: messageRef.current?.value,
      });

      alert("Email successfully sent!");

    } catch (error) {
      alert("Oops... something went wrong. Please try again later.\n" + error);
      console.log(error);
    } finally {
      isSendingMail(false);

      emailRef.current!.value = "";
      nameRef.current!.value = "";
      messageRef.current!.value = "";
    }
  };

  return (
    <SectionContainer id="contact">
      <SectionContainerHeaderTitle
        title="Contact"
        description="— Let's get in touch. No matter if you just want to chat. Mail me or check below."
      />

      <form
        className="flex flex-col gap-4 bg-blue-400 p-16 dark:rounded-t-2xl"
        onSubmit={handleSubmit}
      >
        <input
          className="p-2 rounded-md bg-zinc-800 text-white focus:outline focus:outline-1 focus:outline-white"
          type="text"
          name="name"
          autoComplete="on"
          ref={nameRef as React.RefObject<HTMLInputElement>}
          placeholder="Your name"
        />

        <input
          className="p-2 rounded-md bg-zinc-800 text-white focus:outline focus:outline-1 focus:outline-white"
          type="email"
          name="email"
          autoComplete="on"
          ref={emailRef as React.RefObject<HTMLInputElement>}
          placeholder="Your email"
        />

        <textarea
          className=" min-h-[10rem] max-h-[20rem] p-2 rounded-md text-white bg-zinc-800 focus:outline focus:outline-1 focus:outline-white"
          ref={messageRef as React.RefObject<HTMLTextAreaElement>}
          name="message"
          placeholder="Your feelings..."

        />

        <button
          className="flex place-items-center place-content-center gap-2 max-w-[50%] bg-zinc-700 p-2 rounded-md text-zinc-200 font-bold transition-all duration-300 hover:bg-zinc-600 hover:text-zinc-300"
          disabled={sendingMail}
        >
          
          <AiOutlineLoading3Quarters className={`${sendingMail ? "block" : "hidden"} animate-spin text-2xl`} />
          
          Send now
        </button>
      </form>
    </SectionContainer>
  );
};


