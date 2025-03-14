import {
  Button,
  Flex,
  Text,
} from "@/once-ui/components";
import styles from "./Footer.module.scss";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaBehance,
  FaEnvelope,
} from "react-icons/fa";

const social = [
  {
    name: "GitHub",
    icon: <FaGithub className="text-lg"/>,
    link: "https://github.com/mo7amed7amedenho",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin className="text-lg"/>,
    link: "https://www.linkedin.com/in/mohamed-hamed-04967a270/",
  },
  {
    name: "Facebook",
    icon: <FaFacebook className="text-lg"/>,
    link: "https://www.facebook.com/mo7amed7amedenho",
  },
  {
    name: "Instagram",
    icon: <FaInstagram className="text-lg"/>,
    link: "https://www.instagram.com/m.7amedenho/",
  },
  {
    name: "Behance",
    icon: <FaBehance className="text-lg"/>,
    link: "https://www.behance.net/mo7amedenho",
  },
  { name: "Email", icon: <FaEnvelope />, link: "mailto:7amedenho@gmail.com" },
];
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Flex
      as="footer"
      position="relative"
      fillWidth
      padding="8"
      horizontal="center"
      mobileDirection="column"
    >
      <Flex
        className={styles.mobile}
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        gap="16"
        horizontal="space-between"
        vertical="center"
      >
        <Text variant="body-default-s" onBackground="neutral-strong">
          <Text onBackground="neutral-weak">© {currentYear} /</Text>
          <Text paddingX="4">Hamedenho</Text>
        </Text>
        <Flex gap="16">
          {social.length > 0 && (
            <Flex
              className={styles.blockAlign}
              paddingBottom="8"
              gap="4"
              wrap
              horizontal="center"
              fitWidth
            >
              {social.map(
                (item) =>
                  item.link && (
                    <Button
                      key={item.name}
                      href={item.link}
                      size="s"
                      variant="secondary"
                      target="_blank"
                      className="flex items-center"
                    >
                      {item.icon}
                    </Button>
                  )
              )}
            </Flex>
          )}
        </Flex>
      </Flex>
      <Flex height="80" show="s"></Flex>
    </Flex>
  );
};
