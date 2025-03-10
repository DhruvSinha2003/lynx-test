import { useCallback, useEffect, useState } from "@lynx-js/react";
import "./App.css";
import coffee from "./assets/coffee.jpg";
import lisa from "./assets/lisa.gif";
import me from "./assets/me.jpg";
import wow from "./assets/wow.mp4";

export function App() {
  return (
    <view className="body">
      <text className="heading">Hello World</text>
      <image auto-size style="width:100px;" src={coffee} className="coffee" />
      <image auto-size style="width:100px;" src={lisa} className="lisa" />
      <image auto-size style="width:100px;" src={me} className="me" />
      <video
        auto-size
        style={{ width: "100px" }}
        src={wow}
        className="wow"
        controls
        loop
      />
    </view>
  );
}
