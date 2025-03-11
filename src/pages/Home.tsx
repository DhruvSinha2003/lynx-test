import { useNavigate } from "react-router";
import "../App.css";
import { useTheme } from "../ThemeContext.jsx";

export default function Home() {
  const navigate = useNavigate();
  const { bg } = useTheme();

  return (
    <view className="body" style={{ backgroundColor: bg }}>
      <text className="heading" bindtap={() => navigate("/test")}>
        Go to Test
      </text>
    </view>
  );
}
