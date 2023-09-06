import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import "./footer.scss";
import { FloatButton } from "antd";
import ArrowUpwardSharpIcon from "@mui/icons-material/ArrowUpwardSharp";

const Footer = () => {
  return (
    <div className="footer">
      <span>© Elearn - 2023. All rights reserved</span>
      <FloatButton.BackTop
        shape="square"
        icon={<ArrowUpwardSharpIcon className="pr-1" />}
        visibilityHeight={25}
      />
    </div>
  );
};

export default Footer;
