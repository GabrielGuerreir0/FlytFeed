import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";
export function Comment({ content, onDeleteComment }) {
  function handleDeleteComment() {
    onDeleteComment(content);
  }
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/136819754?v=4"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gabriel Guerreiro</strong>
              <time
                title="08 de Novembro as 17:31h"
                dateTime="2025-08-11 17:31:30"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              🗑️
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button className={styles.likeButton}>
            👍 Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
