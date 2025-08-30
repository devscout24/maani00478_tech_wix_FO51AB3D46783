import { Outlet } from "react-router";
// import { LiveChatWidget } from "@livechat/widget-react";

export default function Layouts() {
  return (
    <main className="section-container overflow-hidden">
      <Outlet />

      <div>
        {/* <LiveChatWidget
          license="19277597"
          visibility="maximized"
        /> */}
      </div>
    </main>
  );
}
