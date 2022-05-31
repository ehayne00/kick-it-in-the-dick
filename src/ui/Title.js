import { Text as ThemeText } from "theme-ui";

const Title = ({ children }) => (
  <ThemeText
    sx={{ fontFamily: "Londrina Sketch, cursive", fontSize: "40px" }}
    className="animated fadeInDown"
  >
    {children}
  </ThemeText>
);

export default Title;
