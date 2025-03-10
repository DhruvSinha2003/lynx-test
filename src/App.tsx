import { useCallback, useEffect, useState } from "@lynx-js/react";
import "./App.css";
import coffee from "./assets/coffee.jpg";
import lisa from "./assets/lisa.gif";
import me from "./assets/me.jpg";
import wowow from "./assets/wow.mp4";
import Header from "./components/Header.jsx";

export function App() {
  useEffect(() => {
    console.log("Video source:", wowow);
  }, []);
  return (
    <view className="body">
      <Header />
      <image auto-size src={lisa} className="lisa" />
    </view>
  );
}
