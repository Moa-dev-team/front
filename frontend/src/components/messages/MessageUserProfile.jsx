import React from "react";
import styles from "./MessageUserProfile.module.css";
import profile from "../../assets/images/profile.png"

export default function MessageUserProfile({
  profileImage,
  username,
  job,
  count,
  isSelected,
}) {
  return (
    <React.Fragment>
      <div className={`${styles.box} ${isSelected && styles.isSelected}`}>
        <img
        // profileImage 가 있다면 src에 prifileImage 를 넣는다.
          src={profile}
          alt="userprofile"
          className={styles.image}
        />
        <div className={styles.userData}>
            <p className={styles.username}>{username}</p>
            <p className={styles.job}>{job}</p>
        </div>
        <div className={styles.messageStatusBox}>
            <button>asd</button>
        </div>
      </div>
    </React.Fragment>
  );
}
