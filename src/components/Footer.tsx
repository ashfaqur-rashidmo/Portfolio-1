import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const CURRENT_YEAR = 2026;

const Footer = () => {
  return (
    <footer className="border-t border-line bg-navy/50 py-8">
      <div className="container-wide flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-muted">
          © {CURRENT_YEAR} MD. Ashfaqur Rashid. Built with Next.js &amp; TypeScript.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/ashfaqur-rashidmo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted transition hover:text-brand"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/ashfaqrashid"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition hover:text-brand"
          >
            <FaLinkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
