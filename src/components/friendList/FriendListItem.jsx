import styles from "./FriendList.module.css";

export default function FrientListItem({ avatar, name, isOnline }) {
  return (
    <div className={styles.card}>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
      <p
        className={`${styles.stats} ${
          isOnline ? styles.online : styles.offline
        }`}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
