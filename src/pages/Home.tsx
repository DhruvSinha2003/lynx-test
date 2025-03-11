import { useNavigate } from "react-router";

import "../App.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <view className="body" style={{ backgroundColor: "#121212" }}>
      <text className="heading" bindtap={() => navigate("/test")}>
        Go to Test
      </text>{" "}
    </view>
  );
}
