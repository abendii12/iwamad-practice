import LikeButton from "./LikeButton";
import Card from "./ui/Card";

type ProfileCardProps = {
  name: string;
  bio: string;
  email: string;
  githubUrl: string;
  avatarUrl?: string;
};

function ProfileCard({ name, bio, email, githubUrl, avatarUrl }: ProfileCardProps) {
  return (
    <Card>
      {avatarUrl && <img className="avatar" src={avatarUrl} alt="Profile avatar" />}
      <div className="card-text">
        <h2 className="name">{name}</h2>
        <p className="bio">{bio}</p>
        <div className="links">
          <a href={`mailto:${email}`}>Email</a>
          <a href={githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
        <LikeButton />
      </div>
    </Card>
  );
}

export default ProfileCard;