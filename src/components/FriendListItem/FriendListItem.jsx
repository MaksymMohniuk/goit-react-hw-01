import clsx from "clsx";
import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.friendListItem}>
      <img src={avatar} alt="Avatar" className={styles.avatar} />
      <div>
        <p className={styles.name}>{name}</p>
        <p
          className={clsx(styles.status, {
            [styles.online]: isOnline,
            [styles.offline]: !isOnline,
          })}
        >
          {isOnline ? (
            <span className={styles.textGreen}>Online</span>
          ) : (
            <span className={styles.textRed}>Offline</span>
          )}
        </p>
      </div>
    </li>
  );
};

export default FriendListItem;
