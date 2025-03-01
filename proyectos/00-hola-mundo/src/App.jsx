import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
const users = [
  { userName: "miduDev", name: "Miguel Ángel Durán" },
  { userName: "pheralb", name: "Pablo Hernández" },
  { userName: "dawntraoz", name: "David", isFollowing: true },
  { userName: "jgferreiro", name: "Javier" },
  { userName: "sergiodxa", name: "Sergio" },
  { userName: "d4ve_dev", name: "David" },
  { userName: "jgferreiro", name: "Javier" },
  { userName: "sergiodxa", name: "Sergio" },
  { userName: "d4ve_dev", name: "David", isFollowing: true },
];

export function App() {
  return (
    <section className="tw-followCards">
      {users.map((user, index) => {
        return (
          <TwitterFollowCard
            key={user.userName + index}
            userName={user.userName}
            initialIsFollowing={user.isFollowing}
          >
            {user.name}
          </TwitterFollowCard>
        );
      })}
    </section>
  );
}
