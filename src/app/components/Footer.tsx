"use client";

import Link from "next/link";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { Logo } from "@/app/components/Navbar/Logo";
import type {
  FooterAddress,
  FooterPhone,
  FooterSection,
} from "@/app/types/footer";
import type { SocialMedia } from "@/app/types/social";

type FooterProps = {
  address: FooterAddress;
  phones: FooterPhone[];
  sections: FooterSection[];
  socialMedia: SocialMedia[];
  copyright: string;
};

export default function Footer({
  address,
  phones,
  sections,
  socialMedia,
  copyright,
}: FooterProps) {
  const socialIcons = {
    instagram: FaInstagram,
    youtube: FaYoutube,
    twitter: FaXTwitter,
  };

  return (
    <footer className="bg-primary-blue text-white">
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo e Endereço */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Logo theme="dark" size="w-30 h-20" />
            </Link>
            <div className="text-sm space-y-1">
              <p className="font-semibold">Endereço:</p>
              <p>{address.street}</p>
              <p>
                {address.neighborhood}, {address.city}
              </p>
            </div>
            <div className="text-sm space-y-1 mt-6">
              <p className="font-semibold">Telefones Úteis:</p>
              {phones.map((phone, idx) => (
                <p key={idx}>
                  {phone.label}: {phone.number}
                </p>
              ))}
            </div>
          </div>

          {/* Seções de links */}
          {sections.map((section, idx) => (
            <div key={idx}>
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.href}
                      className="hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Redes Sociais */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Redes Sociais</h3>
            <ul className="space-y-3 text-sm">
              {socialMedia.map((social, idx) => {
                const Icon = socialIcons[social.platform];
                return (
                  <li key={idx}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      <Icon className="h-5 w-5" />
                      <span>{social.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20">
        <div className="container max-w-7xl mx-auto px-4 py-6">
          <p className="text-sm text-center text-white/70">{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
