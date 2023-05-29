import { Box, Text, UnstyledButton, Flex } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandInstagram,
} from "@tabler/icons";
import Logo from ".././assets/Logo/logo.png";
import "./Footer.css";
import { Group, Avatar, createStyles } from "@mantine/core";
import { IconPhoneCall, IconAt } from '@tabler/icons-react';
import {ContactUS} from '../../data'

const useStyles = createStyles((theme) => ({
  root:{
    padding:"1rem",
    margin:"1rem",

  },

  icon: {
    color:  theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

function Contact({ avatar, name, title, phone, email }) {
  const { classes } = useStyles();
  return (
    <div>
      <Group className={classes.root} noWrap>
        {/* <Avatar src={avatar} size={94} radius="md" /> */}
        <div>
          <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
            {title}
          </Text>

          <Text style={{color:"white"}} fz="lg" fw={500} className={classes.name}>
            {name}
          </Text>

          <Group noWrap spacing={10} mt={3}>
            <IconAt stroke={1.5} size="1rem" className={classes.icon} />
            <Text fz="xs" c="dimmed">
              {email}
            </Text>
          </Group>

          <Group noWrap spacing={10} mt={5}>
            <IconPhoneCall stroke={1.5} size="1rem" className={classes.icon} />
            <Text fz="xs" c="dimmed">
              {phone}
            </Text>
          </Group>
        </div>
      </Group>
    </div>
  );
}

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div style={{ marginTop: "5rem" }}>
      <footer>
        <div className="footer">
         
          <div className="row">
          <div className="Logo">
            <img src={Logo} className="LogoImg" alt="Logo" />
            <Text style={{ fontSize: "30px", color: "white" }}>GJCEI</Text>
          </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Contact
                name="Coordinator GJCEI"
                email="cordinator.gjcei@gmail.com"
                phone="+91883732222"
              />
            </div>
            <div className="social-icons">
              <a href="https://www.instagram.com/gjcei_gndu/">
                <IconBrandInstagram style={{ fontSize: "35px" }} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100070405665356">
                <IconBrandFacebook style={{ fontSize: "35px" }} />
              </a>
              <a href="https://twitter.com/GJCEI1">
                <IconBrandTwitter style={{ fontSize: "35px" }} />
              </a>
            </div>
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d849.2287436253484!2d74.8226315!3d31.6361783!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39196524044e0c05%3A0xd8dfd2fb2fa3406c!2sGuru%20Nanak%20Dev%20University%20Museum!5e0!3m2!1sen!2sin!4v1685039646211!5m2!1sen!2sin"
            style={{
              padding: "0.5rem",
              width: "19rem",
              height: "300",
              border: "0",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          
          </div>
        
       
        </div>
        <div style={{textAlign:"center"}} className="row">GJCEI Copyright © 2023</div>
      </footer>
    </div>
  );
};

export default Footer;
