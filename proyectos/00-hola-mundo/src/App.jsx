import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const formattedUserName = <span>@midudev</span>;

  return (
    <section className="tw-followCards">
      <TwitterFollowCard
        formattedUserName={formattedUserName}
        userName="midudev"
        name="Miguel Ángel Durán"
        isFollowing
      />
      <TwitterFollowCard
        formattedUserName={formattedUserName}
        userName="pheralb"
        name="pablo hernandez"
        isFollowing
      />
      <TwitterFollowCard
        formattedUserName={formattedUserName}
        userName="elonmusk"
        name="Elon Musk"
        isFollowing
      />
      <TwitterFollowCard
        formattedUserName={formattedUserName}
        userName="vxnder"
        name="vander berg"
        isFollowing={false}
      />
    </section>
  );
}
