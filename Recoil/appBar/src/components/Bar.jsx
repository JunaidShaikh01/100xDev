import React from "react";
import "./Bar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBriefcase,
  faBell,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

import { useRecoilValue } from "recoil";
import { notifications, totalNotificationSelector } from "../atoms/atom";
export default function Bar() {
  const networkCount = useRecoilValue(notifications);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);
  return (
    <div className="bg-white py-2 px-4 flex rounded-lg shadow-lg">
      <div className="py-1 pr-2 pl-4 h-20 w-20 mainBtnDiv">
        <button className="btn">
          <FontAwesomeIcon
            className="w-12 h-12 shadow-lg text-slate-700 "
            icon={faHouse}
          />
        </button>
        {networkCount.messaging >= 1 ? (
          <div className="redIcon">
            {networkCount.messaging >= 100 ? "99+": networkCount.messaging}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="py-1 px-2 h-20 w-20 mainBtnDiv">
        <button>
          <FontAwesomeIcon
            className="w-12 h-12 shadow-lg text-slate-700 "
            icon={faUsers}
          />
        </button>
        {networkCount.network >= 1 ? (
          <div className="redIcon">
            {networkCount.network >= 100 ? "99+" : networkCount.network}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="py-1 px-2 h-20 w-20 mainBtnDiv">
        <button>
          <FontAwesomeIcon
            className="w-12 h-12 shadow-lg text-slate-700"
            icon={faBriefcase}
          />
        </button>
        {networkCount.jobs >= 1 ? (
          <div className="redIcon">
            {networkCount.jobs >= 100 ? "99+" : networkCount.jobs}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="py-1 px-2 h-20 w-20 mainBtnDiv">
        <button>
          <FontAwesomeIcon
            className="w-12 h-12 shadow-lg text-slate-700"
            icon={faBell}
          />
        </button>
        {networkCount.notifications >= 1 ? (
          <div className="redIcon">
            {networkCount.notifications >= 100
              ? "99+"
              : networkCount.notifications}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="py-1 pl-2 h-20 w-20 mainBtnDiv">
        <button>
          <FontAwesomeIcon
            className="w-12 h-12 shadow-lg text-slate-700"
            icon={faUser}
          />
        </button>
        {totalNotificationCount >= 1 ? (
          <div className="redIcon">
            {totalNotificationCount >= 100 ? "99+" : totalNotificationCount}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
