import { Text as ThemeText } from "theme-ui";

const SubTitle = ({ children }) => (
  <ThemeText
    sx={{ fontFamily: "Fredericka the Great, cursive", fontSize: "40px" }}
    className="animated fadeInDown"
  >
    {children}
  </ThemeText>
);

export default SubTitle;
