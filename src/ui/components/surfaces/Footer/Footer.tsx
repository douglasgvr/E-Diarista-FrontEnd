import { Box, List, Typography } from "@mui/material";
import {
  AppList,
  FooterContainer,
  FooterGrid,
  FooterListItem,
  FooterSocialList,
  FooterTitle,
  SocialButton,
  SocialContainer,
} from "./Footer.styled";
import Link from "ui/components/navigation/Link/Link";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        <div>
          <FooterTitle>Menu</FooterTitle>
          <List>
            <FooterListItem>
              <Link
                href="/encontrar-diarista"
                mui={{ color: "inherit", variant: "body2" }}
              >
                Encontrar um(a) diarista
              </Link>
            </FooterListItem>
          </List>
          <List>
            <FooterListItem>
              <Link href="/" mui={{ color: "inherit", variant: "body2" }}>
                Seja um(a) diarista
              </Link>
            </FooterListItem>
          </List>
          <List>
            <FooterListItem>
              <Link href="/" mui={{ color: "inherit", variant: "body2" }}>
                Por que usar o E-Diarista
              </Link>
            </FooterListItem>
          </List>
          <List>
            <FooterListItem>
              <Link href="/" mui={{ color: "inherit", variant: "body2" }}>
                Principais Dúvidas
              </Link>
            </FooterListItem>
          </List>
        </div>
        <Box sx={{ maxWidth: "400px" }}>
          <FooterTitle>Quem somos</FooterTitle>
          <Typography variant="body2" sx={{ mt: 2 }}>
            E-diarista te ajuda a encontrar um profissional perfeito para
            realizar a limpeza da sua casa. Garantimos o(a) melhor profissional
            com total segurançaepraticidade! São milhares de clientes
            sastifeitos por o país
          </Typography>
        </Box>
        <SocialContainer>
          <div>
            <FooterTitle>Baixe nossos aplicativos</FooterTitle>
            <AppList>
              <li>
                <a
                  href="https://apps.apple.com/br/app/treinaweb/id1322729447"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <img src="/img/logos/app-store.png" alt={"AppStore"} />
                </a>
              </li>
              <li>
                <a
                  href="https://apps.apple.com/br/app/treinaweb/id1322729447"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <img
                    src="/img/logos/google-play.png"
                    alt={"Google PlayStory"}
                  />
                </a>
              </li>
            </AppList>
          </div>
          <div>
            <FooterTitle>Redes Sociais</FooterTitle>
            <FooterTitle>
              <FooterSocialList>
                <FooterListItem>
                  <SocialButton href="/">
                    <i className="twf-facebook-f" />
                  </SocialButton>
                </FooterListItem>
                <FooterListItem>
                  <SocialButton href="/">
                    <i className="twf-instagram" />
                  </SocialButton>
                </FooterListItem>
                <FooterListItem>
                  <SocialButton href="/">
                    <i className="twf-youtube" />
                  </SocialButton>
                </FooterListItem>
              </FooterSocialList>
            </FooterTitle>
          </div>
        </SocialContainer>
      </FooterGrid>
    </FooterContainer>
  );
};

export default Footer;
