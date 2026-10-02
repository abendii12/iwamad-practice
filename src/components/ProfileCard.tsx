import { useState } from "react";
import SkillBadge from "./SkillBadge";
import type { Skill } from "./SkillBadge";

type ProfileCardProps = {
  name: string;
  bio: string;
  email: string;
  githubUrl: string;
  avatarUrl?: string;
  skills: Skill[];
};

function ProfileCard({
  name,
  bio,
  email,
  githubUrl,
  avatarUrl,
  skills,
}: ProfileCardProps) {
  const [liked, setLiked] = useState<boolean>(false);

  return (
    <div className={liked ? "card liked" : "card"}>
      {avatarUrl && (
        <img className="avatar" src={avatarUrl} alt="Profile avatar" />
      )}
      <div className="card-text">
        <h2 className="name">{name}</h2>
        <p className="bio">{bio}</p>

        {skills.length > 0 ? (
          <ul className="skills">
            {skills.map((skill) => (
              <SkillBadge key={skill.id} skill={skill} />
            ))}
          </ul>
        ) : (
          <p>No skills added yet</p>
        )}

        <div className="links">
          <a href={`mailto:${email}`}>Email</a>
          <a href={githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <button className="like-btn" onClick={() => setLiked(!liked)}>
            {liked ? "❤️ Liked" : "🤍 Like"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;