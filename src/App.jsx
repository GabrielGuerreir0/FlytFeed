import { Header } from "./components/Header";
import styles from "./App.module.css";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatar: "https://avatars.githubusercontent.com/u/136819754?v=4",
      name: "Gabriel Guerreiro",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galera👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portfólio. Dá uma conferida lá! Esse é um projeto super bacana que desenvolvi durante o NLW Return da Rocketseat. A experiência foi incrível e estou muito feliz com o resultado. O link está na minha bio/descrição! 👇",
      },
      { type: "link", content: "Me conta o que acharam nos comentários! 💬" },
    ],
    publishedAt: new Date("2025-09-11 16:00:00"),
  },
  {
    id: 2,
    author: {
      avatar: "https://avatars.githubusercontent.com/u/136819754?v=4",
      name: "Luiz Neto",
      role: "Web Tester",
    },
    content: [
      { type: "paragraph", content: "Fala galera👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portfólio. Dá uma conferida lá! Esse é um projeto super bacana que desenvolvi durante o NLW Return da Rocketseat. A experiência foi incrível e estou muito feliz com o resultado. O link está na minha bio/descrição! 👇",
      },
      { type: "link", content: "Me conta o que acharam nos comentários! 💬" },
    ],
    publishedAt: new Date("2025-09-11 16:00:00"),
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
