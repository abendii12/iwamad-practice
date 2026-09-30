import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import Footer from "./components/Footer";
import type { Skill } from "./components/SkillBadge";
import "./style.css";

const skills: Skill[] = [
  { id: 1, label: "HTML" },
  { id: 2, label: "CSS" },
  { id: 3, label: "JavaScript" },
  { id: 4, label: "React" },
];

function App() {
  return (
    <>
      <Header title="My Portfolio" />
      <main>
        <ProfileCard
          name="Aben Dilnaz"
          bio="I'm a IT management student passionate about web development and cloud computing. I enjoy building small projects that solve real problems and learning new frameworks along the way."
          email="aben.dilnazz06@gmail.com"
          githubUrl="https://github.com/abendii12"
          avatarUrl="/photo.jpeg"
          skills={skills}
        />
      </main>
      <Footer owner="Aben Dilnaz" year={2026} />
    </>
  );
}

export default App;