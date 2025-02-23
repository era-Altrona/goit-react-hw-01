import styles from "./FriendList.module.css";
import FriendListItem from "./FriendListItem.jsx";

export default function FriendList({ friends }) {
  return (
    <ul className={styles.friends}>
      {friends.map(({ id, name, avatar, isOnline }) => (
        <li key={id}>
          <FriendListItem name={name} avatar={avatar} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
}
