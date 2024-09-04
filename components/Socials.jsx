import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const sosmed = [
  {
    icon: <FaGithub />,
    path: "https://github.com/Shinnozaki",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/joanne-lee-780653252/",
  },
  {
    icon: <FaWhatsapp />,
    path: "https://api.whatsapp.com/send?phone=6281371931101",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {sosmed.map((social, index) => (
        <a href={social.path} key={social.path} className={iconStyles} target="_blank">
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default Socials;
