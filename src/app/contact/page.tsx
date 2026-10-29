import React from "react";
import {
  Mail,
  Phone,
  MessageCircle,
  ArrowUpRight,
  MapPin,
} from "lucide-react";

const contactPage = () => {
  const email = "ashfaqurrashid1@gmail.com";
  const phone = "+8801978232355";
  const whatsapp = "8801978232355";

  const cards = [
    {
      href: `mailto:${email}`,
      label: "Email",
      value: email,
      cta: "Send an email",
      icon: Mail,
      tile: "bg-brand/10 text-brand",
      ctaClass: "text-brand",
    },
    {
      href: `tel:${phone.replace(/\s/g, "")}`,
      label: "Phone",
      value: phone,
      cta: "Call me",
      icon: Phone,
      tile: "bg-success/10 text-success",
      ctaClass: "text-success",
    },
    {
      href: `https://wa.me/${whatsapp}`,
      label: "WhatsApp",
      value: "Chat with me directly",
      cta: "Start a conversation",
      icon: MessageCircle,
      tile: "bg-accent/10 text-accent",
      ctaClass: "text-accent",
    },
  ];

  return (
    <main className="min-h-screen pb-20 pt-32">
      <section className="container-wide">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            Get in touch
          </span>

          <h1 className="mt-6 text-4xl font-black tracking-[-.05em] text-title sm:text-6xl">
            Let&apos;s connect and{" "}
            <span className="gradient-text">build something.</span>
          </h1>

          <p className="mt-5 text-base leading-7 text-body sm:text-lg">
            Have a project idea, collaboration opportunity, or question?
            Feel free to contact me. I&apos;d be happy to hear from you.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-3">
          {cards.map(({ href, label, value, cta, icon: Icon, tile, ctaClass }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group rounded-3xl border border-line bg-card p-6 transition hover:-translate-y-1 hover:border-brand/50 hover:shadow-soft"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${tile}`}>
                <Icon size={23} />
              </div>

              <h2 className="mt-5 text-lg font-extrabold text-title">{label}</h2>

              <p className="mt-2 break-words text-sm text-muted">
                {value}
              </p>

              <span className={`mt-5 inline-flex items-center gap-2 text-sm font-bold ${ctaClass}`}>
                {cta} <ArrowUpRight size={16} />
              </span>
            </a>
          ))}
        </div>

        {/* Location and availability */}
        <div className="mx-auto mt-8 max-w-4xl rounded-3xl border border-line bg-card p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-extrabold text-title">
                Open to opportunities
              </h2>

              <p className="mt-2 text-sm leading-6 text-body">
                Interested in web development projects, internships,
                collaborations, and learning opportunities.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2 text-sm font-semibold text-muted">
              <MapPin size={17} />
              Chittagong, Bangladesh
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default contactPage;
