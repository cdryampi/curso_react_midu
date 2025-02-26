/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export function TwitterFollowCard({
  formattedUserName,
  userName,
  name,
  isFollowing,
}) {
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/twitter/${userName}`}
          alt={name}
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span>{formattedUserName}</span>
        </div>
      </header>
      <aside>
        <button className="tw-followCard-follow">Seguir</button>
      </aside>
    </article>
  );
}
