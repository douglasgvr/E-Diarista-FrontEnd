import { Container, ListItem, ListItemAvatar } from "@mui/material";
import {
  AvatarStyled,
  GradientBackground,
  ListDivider,
  ListItemTextStyled,
  ListStyle,
  SectionTitle,
} from "./_advantages.styled";
import React from "react";

const Advantages = () => {
  const advantagesList = [
    {
      icon: "twf-woman",
      title: "Diversidade",
      description: "São mais de 5.000 profissionais esperando por você!",
    },
    {
      icon: "twf-certificate",
      title: "Confilidade",
      description: "Todos os profissionais são verificados",
    },
    {
      icon: "twf-search-2",
      title: "Rastreabilidade",
      description: "Você pode acessar todo o histporico do(a) profissional",
    },
    {
      icon: "twf-frame-broken",
      title: "Segurança",
      description: "Seguro sobre qualquer possivel dano",
    },
    {
      icon: "twf-payment",
      title: "Controle",
      description:
        "O pagamento é realizado somente quando o(a) Profissional esta na sua casa",
    },
    {
      icon: "twf-broom-bucket",
      title: "Experiência",
      description: "Mais de 50.000 diárias reallzadas",
    },
  ];
  return (
    <GradientBackground>
      <Container>
        <SectionTitle>Por que usar o E-Diarista</SectionTitle>
        <ListStyle>
          {advantagesList.map((item, index) => {
            return (
              <React.Fragment key={item.icon}>
                {index !== 0 && <ListDivider />}
                <ListItem>
                  <ListItemAvatar>
                    <AvatarStyled>
                      <i className={item.icon} />
                    </AvatarStyled>
                  </ListItemAvatar>
                  <ListItemTextStyled
                    primary={item.title}
                    secondary={item.description}
                  />
                </ListItem>
              </React.Fragment>
            );
          })}
        </ListStyle>
      </Container>
    </GradientBackground>
  );
};

export default Advantages;
