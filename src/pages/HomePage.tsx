import ProfileCard from "../components/ProfileCard";

function HomePage() {
  return (
    <ProfileCard
      name="Aben Dilnaz"
      bio="I'm a IT management student passionate about web development and cloud computing. I enjoy building small projects that solve real problems and learning new frameworks along the way."
      email="aben.dilnazz06@gmail.com"
      githubUrl="https://github.com/abendii12"
      avatarUrl={`${import.meta.env.BASE_URL}photo.jpeg`}
    />
  );
}

export default HomePage;