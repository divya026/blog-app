import Link from "next/link";
import Image from "next/image";
import styles from "./comments.module.css";

const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <div className={styles.title}>Comments</div>
      {status == "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comment..."
            className={styles.input}
          ></textarea>
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login"> Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              className={styles.image}
              height={50}
              width={50}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Divya Dewangan</span>
              <div className={styles.date}>11.11.2024</div>
            </div>
          </div>
          <p className={styles.desc}>
            Tucked into the rugged cliffs of Italy’s Cinque Terre, Vernazza
            whispers stories of the sea with every crashing wave. This
            picturesque village, crowned with a medieval watchtower, clings
            boldly to the rock as if guarding centuries of secrets. With
            terracotta rooftops basking in the sun and turquoise waters
            stretching to the horizon, it’s a place where past and present blend
            into pure Mediterranean magic. From hidden alleys to vibrant harbor
            life, every corner invites you to slow down—and simply feel.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              alt=""
              src="/p1.jpeg"
              className={styles.image}
              height={50}
              width={50}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Divya Dewangan</span>
              <span className={styles.date}>11.11.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Tucked into the rugged cliffs of Italy’s Cinque Terre, Vernazza
            whispers stories of the sea with every crashing wave. This
            picturesque village, crowned with a medieval watchtower, clings
            boldly to the rock as if guarding centuries of secrets. With
            terracotta rooftops basking in the sun and turquoise waters
            stretching to the horizon, it’s a place where past and present blend
            into pure Mediterranean magic. From hidden alleys to vibrant harbor
            life, every corner invites you to slow down—and simply feel.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              className={styles.image}
              height={50}
              width={50}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Divya Dewangan</span>
              <span className={styles.date}>11.11.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Tucked into the rugged cliffs of Italy’s Cinque Terre, Vernazza
            whispers stories of the sea with every crashing wave. This
            picturesque village, crowned with a medieval watchtower, clings
            boldly to the rock as if guarding centuries of secrets. With
            terracotta rooftops basking in the sun and turquoise waters
            stretching to the horizon, it’s a place where past and present blend
            into pure Mediterranean magic. From hidden alleys to vibrant harbor
            life, every corner invites you to slow down—and simply feel.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              className={styles.image}
              height={50}
              width={50}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Divya Dewangan</span>
              <span className={styles.date}>11.11.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Tucked into the rugged cliffs of Italy’s Cinque Terre, Vernazza
            whispers stories of the sea with every crashing wave. This
            picturesque village, crowned with a medieval watchtower, clings
            boldly to the rock as if guarding centuries of secrets. With
            terracotta rooftops basking in the sun and turquoise waters
            stretching to the horizon, it’s a place where past and present blend
            into pure Mediterranean magic. From hidden alleys to vibrant harbor
            life, every corner invites you to slow down—and simply feel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
