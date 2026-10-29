"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const LetsTalkPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const email = "ashfaqurrashid1@gmail.com";
  const phone = "+8801978232355";
  const whatsapp = "8801978232355";

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Opens the visitor's email application with the message.
    const mailtoLink =
      `mailto:${email}` +
      `?subject=${encodeURIComponent(formData.subject)}` +
      `&body=${encodeURIComponent(
        `Name: ${formData.name}\n` +
          `Email: ${formData.email}\n\n` +
          `Message:\n${formData.message}`
      )}`;

    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <main className="relative min-h-screen overflow-hidden pb-20 pt-32">
      {/* Background decoration */}
      <div className="pointer-events-none absolute right-0 top-24 h-72 w-72 rounded-full bg-accent/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 left-0 h-72 w-72 rounded-full bg-brand/[0.06] blur-3xl" />

      <section className="container-wide relative">
        {/* Page heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            Get in touch
          </span>

          <h1 className="mt-6 text-4xl font-black tracking-[-.05em] text-title sm:text-6xl">
            Let&apos;s build something{" "}
            <span className="gradient-text">great together.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-body sm:text-lg">
            Have a project idea, internship opportunity, or
            collaboration in mind? Send me a message. I&apos;d love
            to hear from you.
          </p>
        </div>

        {/* Main content */}
        <div className="mx-auto mt-14 grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact information */}
          <aside className="rounded-3xl border border-line bg-navy p-7 sm:p-9">
            <h2 className="text-2xl font-extrabold text-title">
              Contact information
            </h2>

            <p className="mt-3 text-sm leading-7 text-muted">
              Prefer to contact me directly? Choose your preferred
              method below.
            </p>

            <div className="mt-9 space-y-6">
              <a
                href={`mailto:${email}`}
                className="flex items-start gap-4 text-body transition hover:text-brand"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Mail size={20} />
                </span>

                <span className="min-w-0">
                  <span className="block text-sm text-muted">
                    Email
                  </span>
                  <span className="mt-1 block break-words text-sm font-semibold">
                    {email}
                  </span>
                </span>
              </a>

              <a
                href={`tel:${phone}`}
                className="flex items-start gap-4 text-body transition hover:text-brand"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Phone size={20} />
                </span>

                <span>
                  <span className="block text-sm text-muted">
                    Phone
                  </span>
                  <span className="mt-1 block text-sm font-semibold">
                    {phone}
                  </span>
                </span>
              </a>

              <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 text-body transition hover:text-brand"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-success/10 text-success">
                  <MessageCircle size={20} />
                </span>

                <span>
                  <span className="block text-sm text-muted">
                    WhatsApp
                  </span>
                  <span className="mt-1 block text-sm font-semibold">
                    Start a conversation
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <MapPin size={20} />
                </span>

                <span>
                  <span className="block text-sm text-muted">
                    Location
                  </span>
                  <span className="mt-1 block text-sm font-semibold text-body">
                    Chittagong, Bangladesh
                  </span>
                </span>
              </div>
            </div>

            <div className="mt-10 border-t border-line pt-6">
              <p className="text-sm font-semibold text-body">
                Open to opportunities
              </p>
              <p className="mt-2 text-sm leading-6 text-muted">
                Web development projects, internships, and
                meaningful collaborations.
              </p>
            </div>
          </aside>

          {/* Contact form */}
          <section className="rounded-3xl border border-line bg-card p-7 sm:p-9">
            <h2 className="text-2xl font-extrabold text-title">
              Send me a message
            </h2>

            <p className="mt-2 text-sm leading-6 text-muted">
              Fill out the form below to get in touch.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-bold text-body"
                  >
                    Your name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="field"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-bold text-body"
                  >
                    Email address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="field"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-bold text-body"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Project inquiry / Internship / Collaboration"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="field"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-bold text-body"
                >
                  Your message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me a little about what you have in mind..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="field resize-y"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full sm:w-auto"
              >
                Send message
                <Send size={16} />
              </button>

              {submitted && (
                <p
                  role="status"
                  className="flex items-start gap-2 text-sm leading-6 text-success"
                >
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                  Your email application should open with your message.
                  Please send the email there to complete delivery.
                </p>
              )}
            </form>
          </section>
        </div>

        {/* Back to portfolio */}
        <div className="mt-10 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-muted transition hover:text-brand"
          >
            Back to portfolio
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default LetsTalkPage;
