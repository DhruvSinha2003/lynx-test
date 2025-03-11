import type { TouchEvent } from "@lynx-js/types";
import lisa from "../assets/lisa.gif";
import { useTheme } from "../ThemeContext.jsx";

const Header = () => {
  const { bg, toggleBg } = useTheme();

  function handleTap(e: TouchEvent) {
    toggleBg();
  }

  return (
    <view style={{ backgroundColor: bg, padding: "15px 0" }}>
      <view className="lisa-container" bindtap={handleTap}>
        <image auto-size src={lisa} className="lisa" />
      </view>
    </view>
  );
};

export default Header;
