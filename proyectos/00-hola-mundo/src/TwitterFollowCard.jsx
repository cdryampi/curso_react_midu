/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
export function TwitterFollowCard({ children, userName, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClass = isFollowing
    ? "tw-followCard-following"
    : "tw-followCard-follow";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/twitter/${userName}`}
          alt={children}
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span>@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClass} onClick={handleClick}>
          <span className="tw-followCard-Follow">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
