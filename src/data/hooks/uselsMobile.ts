import { useMediaQuery, useTheme } from "@mui/material";

export default function useIksMobile(): boolean {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return isMobile;
}
