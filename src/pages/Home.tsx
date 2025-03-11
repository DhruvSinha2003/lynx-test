import { useNavigate } from "react-router";

import "../App.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <view className="body" style={{ backgroundColor: "#121212" }}>
      <view bindtap={() => navigate("/test")} auto-size>
        <button>Go to Test</button>
      </view>
    </view>
  );
}
