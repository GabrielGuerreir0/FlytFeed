import styles from "./Post.module.css";
export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/136819754?v=4"
          />
          <div className={styles.authorInfo}>
            <strong>Gabriel Guerreiro</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="08 de Novembro as 17:31h" dateTime="2025-08-11 17:31:30">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galera👋</p>
        <p>
          Acabei de subir mais um projeto no meu portfólio. Dá uma conferida lá!
          Esse é um projeto super bacana que desenvolvi durante o NLW Return da
          Rocketseat. A experiência foi incrível e estou muito feliz com o
          resultado. O link está na minha bio/descrição! 👇
        </p>
        <p>
          <a href="">Me conta o que acharam nos comentários! 💬 </a>
        </p>
        <p>
          <a href="">#NLW </a> <a href="">#NLWReturn </a>{" "}
          <a href="">#Rocketseat </a> <a href="">#DesenvolvimentoWeb </a>{" "}
          <a href="">#Portfolio</a> <a href="">#ProjetoNovo </a>{" "}
          <a href="">#Coding </a> <a href="">#Programação</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>
    </article>
  );
}
