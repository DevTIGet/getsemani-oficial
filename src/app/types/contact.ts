export interface ContactSocialLink {
  platform: "facebook" | "instagram" | "youtube" | "twitter";
  url: string;
}

export interface ContactInfoPanel {
  title: string;
  backgroundImage: string;
  emailLabel: string;
  email: string;
  phoneLabel: string;
  phone: string;
  socialLabel: string;
  socialLinks: ContactSocialLink[];
  scheduleLabel: string;
  schedule: string;
}

export interface PrayerRequestCategory {
  label: string;
  href: string;
}

export interface ContactFormPanel {
  title: string;
  prayerRequests: PrayerRequestCategory[];
  submitButtonLabel: string;
}

export interface ContactPageData {
  infoPanel: ContactInfoPanel;
  formPanel: ContactFormPanel;
}
