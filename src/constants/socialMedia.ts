import { FaFacebookF, FaInstagram, FaTiktok, FaDiscord, FaGithub, FaFacebook, FaWhatsapp, FaLinkedin, FaYoutube } from "react-icons/fa";
import type { SocialMedia } from "@/types";

export const socialMediaList: SocialMedia[] = [
  {
    SocialMediaIcon: FaLinkedin,
    link: "https://www.linkedin.com/in/gianzra/",
  },
  {
    SocialMediaIcon: FaYoutube,
    link: "https://www.youtube.com/channel/UCnCu66k-CV7LLkeYILRW1Yw",
  },
  {
    SocialMediaIcon: FaFacebookF,
    link: "https://www.facebook.com/gianzraa/",
  },
  {
    SocialMediaIcon: FaInstagram,
    link: "https://www.instagram.com/gianzra",
  },
  {
    SocialMediaIcon: FaTiktok,
    link: "https://tiktok.com/@gianzra",
  },
  {
    SocialMediaIcon: FaGithub,
    link: "https://github.com/gianzra",
  },
  {
    SocialMediaIcon: FaDiscord,
    link: "https://discord.com/users/289621480638119947",
  },
];

export const sharedSocialMediaList: SocialMedia[] = [
  {
    SocialMediaIcon: FaFacebook,
    link: `https://www.facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_BASE_URL}`,
  },
  {
    SocialMediaIcon: FaInstagram,
    link: `https://www.instagram.com/?url=${process.env.NEXT_PUBLIC_BASE_URL}`,
  },
  {
    SocialMediaIcon: FaWhatsapp,
    link: `https://wa.me/?text=${process.env.NEXT_PUBLIC_BASE_URL}`,
  },
];
