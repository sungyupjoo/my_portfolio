import Link from "next/link";

import { FaGithub, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/sungyupjoo" },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/sungyupjoo",
  },
];

interface SocialsType {
  containerStyles: string;
  iconStyles: string;
}

const Socials: React.FC<SocialsType> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
