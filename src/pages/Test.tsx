import { useState } from "@lynx-js/react";
import type { TouchEvent } from "@lynx-js/types";
import { useNavigate } from "react-router";

import "../App.css";
import lisa from "../assets/lisa.gif";

export default function Test() {
  const navigate = useNavigate();

  const [bg, setBg] = useState("#121212");
  function handleTap(e: TouchEvent) {
    if (bg === "#121212") {
      setBg("#232323");
    } else {
      setBg("#121212");
    }
  }
  return (
    <view className="body" style={{ backgroundColor: bg }}>
      <view bindtap={handleTap} auto-size>
        <image auto-size src={lisa} className="lisa" />
      </view>
      <scroll-view style="height: 50%; width: 100%">
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
  );
}
