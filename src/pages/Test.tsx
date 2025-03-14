import { useNavigate } from "react-router";
import "../App.css";
import { useTheme } from "../ThemeContext.jsx";

export default function Test() {
  const navigate = useNavigate();
  const { bg } = useTheme();

  return (
    <view className="body" style={{ backgroundColor: bg }}>
      <view className="scroll-container">
        <scroll-view style="height: 100%; width: 100%">
          <text className="heading" bindtap={() => navigate("/")} auto-size>
            Return to Home
          </text>
          <text className="heading" bindtap={() => navigate("/")} auto-size>
            Return to Home
          </text>
          <text className="heading" bindtap={() => navigate("/")} auto-size>
            Return to Home
          </text>
          <text className="heading" bindtap={() => navigate("/")} auto-size>
            Return to Home
          </text>
          <text className="heading" bindtap={() => navigate("/")} auto-size>
            Return to Home
          </text>
          <text className="heading" bindtap={() => navigate("/")} auto-size>
            Return to Home
          </text>
          <text className="heading" bindtap={() => navigate("/")} auto-size>
            Return to Home
          </text>
        </scroll-view>
      </view>
    </view>
  );
}
