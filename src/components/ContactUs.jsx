/* eslint-disable no-unused-vars */
import { motion } from "motion/react";
import InteractiveButton from "./InteractiveButton.jsx";
import CustomTitle from "./CustomTitle.jsx";
import { contactData } from "./data/config";
import { useState } from "react";
import axios from "axios";

export default function ContactUs() {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      message: "",
    })
    const handleEmailClick = async () => {
        try {
            const messageHtml = `
            <html>
              <body>
                <h2>Formulario de contacto Web CAVR</h2>
                <p>Nombre: ${formData.name}</p>
                <p>Correo electrónico: ${formData.email}</p>
                <p>Teléfono: ${formData.phone}</p>
                <p>Mensaje: ${formData.message}</p>
              </body>
            </html>
          `;
          const response = await axios.post('http://localhost:3000/send-email', {
            name: formData.name,
            from: formData.email,
            subject: 'Formulario de contacto Web CAVR',
            phone: formData.phone,
            text: messageHtml,
          });
          console.log(response.data);
          alert('Correo electrónico enviado con éxito!',response.data);
        } catch (error) {
          console.error(error);
          alert('Error al enviar el correo electrónico',error);
        }
      };
    
    const handleChange = (event) => {
        event.preventDefault();
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
  return (
    <section className="relative mt-40" id="contact">
        <CustomTitle><span>¡Trabajemos!</span></CustomTitle>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-8 p-2 lg:p-16 mt-20">
            <header
                className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda]
                via-[#785ae4] to-primary opacity-20 blur-[100px] left-10 top-0 hidden md:block"
            ></header>
            <header
                className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda]
                via-[#785ae4] to-primary opacity-20 blur-[100px] right-10 bottom-0 hidden md:block"
            ></header>
            <section>
                {contactData.map((data) => (
                    <motion.article
                        key={data.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="mb-20"
                        >
                            <div className="bg-black z-20 md:w-11/12 w-full text-white rounded-xl">
                                <div className="border border-primary bg-[#ffffff29] rounded-xl p-3 flex items-center">
                                    <img src={data.icon} alt={data.title} width={64} height={64} />
                                    <div className="ml-5">
                                        <h3 className="text-xl font-semibold">{data.title}</h3>
                                        <p className="text-xs">{data.description}</p>
                                    </div>
                                </div>
                            </div>
                    </motion.article>
                ))}
            </section>
            <motion.article
                transition={{ duration: 0.5, delay: 0.6 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <form action=""  className="space-y-6">
                    <section className="mx-auto rounded-lg max-w-lg">
                        <div className="grid grid-cols-1 gap-4 text-white">
                            <label htmlFor="name" className="block border-b">
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Tu Nombre"
                                className="appearance-none bg-transparent border-none w-full py-2 px-3 leading-tight focus:outline-none text-lg font-medium"/>
                            </label>
                            <label htmlFor="email" className="block border-b">
                                <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Tu Email"
                                className="appearance-none bg-transparent border-none w-full py-2 px-3 leading-tight focus:outline-none text-lg font-medium"/>
                            </label>
                            <label htmlFor="phone" className="block border-b">
                                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Tu Telefono"
                                className="appearance-none bg-transparent border-none w-full py-2 px-3 leading-tight focus:outline-none text-lg font-medium"/>
                            </label>
                            <label htmlFor="message" className="block border-b">
                                <textarea rows={4} id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="Tu Mensaje"
                                className="appearance-none bg-transparent border-none w-full py-2 px-3 leading-tight focus:outline-none text-lg font-medium"/>
                            </label>
                            <div className="text-center">
                                <InteractiveButton text="Enviar Mensaje" to={""} cb={handleEmailClick} className="w-full" />
                            </div>
                        </div>
                    </section>
                </form>
            </motion.article>
        </section>
    </section>
  );
}
