import {
  Container,
  Divider,
  IconButton,
  MenuItem,
  MenuList,
  Toolbar,
} from "@mui/material";
import {
  ButtonsContainer,
  HeaderAppBar,
  HeaderDrawer,
  HeaderLogo,
} from "./Header.styled";
import Link from "ui/components/navigation/Link/Link";
import RoundedButton from "ui/components/inputs/RoundedButton/RoundedButton";
import { useState } from "react";
import useIksMobile from "data/hooks/uselsMobile";

const Header: React.FC = () => {
  const isMobile = useIksMobile();
  return isMobile ? <HeaderMobile /> : <HeaderDesktop />;
};

export default Header;

const HeaderDesktop: React.FC = () => {
  return (
    <HeaderAppBar>
      <Toolbar component={Container}>
        <Link href="/">
          <HeaderLogo src="/img/logos/logo.svg" alt="e-diarista" />
        </Link>

        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <ButtonsContainer>
          <Link
            Component={RoundedButton}
            mui={{ variant: "contained", color: "primary" }}
            href="/cadastro/diarista"
          >
            Seja um(a) diarista
          </Link>
          <Link href="/login" Component={RoundedButton}>
            Login
          </Link>
        </ButtonsContainer>
      </Toolbar>
    </HeaderAppBar>
  );
};

const HeaderMobile: React.FC = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  return (
    <HeaderAppBar>
      <Toolbar component={Container}>
        <IconButton
          edge={"start"}
          color={"inherit"}
          onClick={() => setDrawerOpen(true)}
        >
          <i className="twf-bars" />
        </IconButton>
        <Link href="/">
          <HeaderLogo src="/img/logos/logo.svg" alt="e-diarista" />
        </Link>
        <HeaderDrawer
          open={isDrawerOpen}
          onClose={() => setDrawerOpen(false)}
          onClick={() => setDrawerOpen(false)}
        >
          <MenuList>
            <Link href="/login" Component={MenuItem}>
              Login
            </Link>
            <Divider />
            <Link href="/cadastro/ediarista" Component={MenuItem}>
              Seja um(a) diarista
            </Link>
          </MenuList>
        </HeaderDrawer>
      </Toolbar>
    </HeaderAppBar>
  );
};
