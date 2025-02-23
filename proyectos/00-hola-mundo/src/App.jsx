import "./App.css";

export function App() {
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src="https://unavatar.io/github/midudev"
          alt="midu"
        />
        <div className="tw-followCard-info">
          <strong>Miguel Ángel Durán</strong>
          <span>@midudev</span>
        </div>
      </header>
      <aside>
        <button className="tw-followCard-follow">Seguir</button>
      </aside>
    </article>
  );
}
