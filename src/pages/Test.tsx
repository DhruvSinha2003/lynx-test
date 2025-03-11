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
      <view bindtap={() => navigate("/")} auto-size>
        <button>Return to Home</button>
      </view>
      <view bindtap={handleTap} auto-size>
        <image auto-size src={lisa} className="lisa" />
      </view>
      <scroll-view style="height: 50%; width: 100%"></scroll-view>
    </view>
  );
}
