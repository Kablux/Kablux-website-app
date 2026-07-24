"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Button from "../common/Button";

const socials = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/share/1B9idXtZ4x/",
    label: "Facebook",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/kablux_nigeria?igsh=MnU0YnlwODlmbXk0",
    label: "Instagram",
  },
  // { icon: Tiktok, href: "#", label: "Tiktok" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/kablux-nigeria/",
    label: "LinkedIn",
  },
];

const ContactMapForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("sent");
  };

  return (
    <section className="bg-tertiary">
      <div className="maxContainer px-5 py-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-xl border border-black/5"
          >
            <iframe
              title="Kablux location - Lagos"
              src="https://www.google.com/maps?q=Surulere%2C%20Lagos&output=embed"
              className="h-full min-h-[380px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-[32px] bg-white p-6 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.3)] md:p-8"
          >
            <div>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="rounded-full border border-black/10 px-4 py-3 font-sans w-full outline-none focus:border-[#ffbe18]"
              />
            </div>

            <div className="mt-4 grid ss:grid-cols-2 gap-4">
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone number"
                className="rounded-full border border-black/10 px-4 py-3 font-sans outline-none focus:border-[#ffbe18]"
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email address"
                required
                className="rounded-full border border-black/10 px-4 py-3 font-sans w-full outline-none focus:border-[#ffbe18]"
              />
            </div>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write us a message here"
              rows={5}
              required
              className="mt-4 w-full resize-none rounded-[35px] border border-black/10 px-4 py-3 font-sans outline-none focus:border-[#ffbe18]"
            />

            <Button className="mt-5 w-full rounded-full bg-[#ffbe18] py-3 text-black sm:w-auto sm:px-10">
              Send A Message
            </Button>

            {status === "sent" && (
              <p className="mt-3 font-poppins text-sm text-[#123524]">
                Thanks &mdash; we&apos;ll get back to you shortly.
              </p>
            )}
          </motion.form>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-col items-center gap-4"
        >
          <p className="font-poppins text-[18px] font-semibold text-black">
            Social Connect:
          </p>
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#141414] text-white transition-colors hover:bg-[#ffbe18] hover:text-black"
              >
                <social.icon className="h-4 w-4" strokeWidth={1.75} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMapForm;
