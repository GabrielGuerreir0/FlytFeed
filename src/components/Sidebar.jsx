import { Avatar } from "./Avatar";
import style from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <asside className={style.sidebar}>
      <img
        className={style.cover}
        src="https://images.unsplash.com/photo-1525373698358-041e3a460346?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500"
      />
      <div className={style.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/136819754?v=4" />
        <strong>Gabriel Guerreiro</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">Editar seu perfil</a>
      </footer>
    </asside>
  );
}
