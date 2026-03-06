import Image from "next/image";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import type { ContactInfoPanel as ContactInfoPanelProps } from "@/app/types/contact";

const socialIconMap = {
  facebook: FaFacebook,
  instagram: FaInstagram,
  youtube: FaYoutube,
  twitter: FaXTwitter,
};

export default function ContactInfoPanel({
  title,
  backgroundImage,
  emailLabel,
  email,
  phoneLabel,
  phone,
  socialLabel,
  socialLinks,
  scheduleLabel,
  schedule,
}: ContactInfoPanelProps) {
  return (
    <div className="relative flex flex-col justify-evenly h-full min-h-[520px] rounded-2xl overflow-hidden p-8 md:p-10">
      <Image
        src={backgroundImage}
        alt="Igreja Getsêmani"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/65" />

      {/* Title */}
      <div className="relative z-10">
        <h2 className="text-white font-bold text-2xl md:text-4xl leading-snug max-w-xs">
          {title}
        </h2>
      </div>

      {/* Info cards grid */}
      <div className="relative z-10 grid grid-cols-2 gap-3 mt-8">
        {/* Email */}
        <div className="border border-white/40 rounded-xl p-4 bg-black/20 backdrop-blur-sm">
          <p className="text-white/70 text-[10px] font-semibold uppercase tracking-wider mb-1">
            {emailLabel}
          </p>
          <a
            href={`mailto:${email}`}
            className="text-white text-xs hover:underline break-all"
          >
            {email}
          </a>
        </div>

        {/* Phone */}
        <div className="border border-white/40 rounded-xl p-4 bg-black/20 backdrop-blur-sm">
          <p className="text-white/70 text-[10px] font-semibold uppercase tracking-wider mb-1">
            {phoneLabel}
          </p>
          <a
            href={`tel:${phone.replace(/\D/g, "")}`}
            className="text-white text-xs hover:underline"
          >
            {phone}
          </a>
        </div>

        {/* Social Media */}
        <div className="border border-white/40 rounded-xl p-4 bg-black/20 backdrop-blur-sm">
          <p className="text-white/70 text-[10px] font-semibold uppercase tracking-wider mb-2">
            {socialLabel}
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = socialIconMap[link.platform];
              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary transition-colors"
                  aria-label={link.platform}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Schedule */}
        <div className="border border-white/40 rounded-xl p-4 bg-black/20 backdrop-blur-sm">
          <p className="text-white/70 text-[10px] font-semibold uppercase tracking-wider mb-1">
            {scheduleLabel}
          </p>
          <p className="text-white text-xs whitespace-pre-line">{schedule}</p>
        </div>
      </div>
    </div>
  );
}
