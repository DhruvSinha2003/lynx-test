import { useCallback, useEffect, useState } from "@lynx-js/react";
import type { TouchEvent } from "@lynx-js/types";

import "./App.css";
import coffee from "./assets/coffee.jpg";
import lisa from "./assets/lisa.gif";
import me from "./assets/me.jpg";
import wowow from "./assets/wow.mp4";
import Header from "./components/Header.jsx";

export function App() {
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
      <Header />
      <view bindtap={handleTap} auto-size>
        <image auto-size src={lisa} className="lisa" />
      </view>
      <scroll-view style="height: 50%; width: 100%"></scroll-view>
    </view>
  );
}
