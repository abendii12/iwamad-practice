import SkillBadge from "../components/SkillBadge";
import { skills } from "../data/skills";

function SkillsPage() {
  return (
    <section>
      <h2>Skills</h2>
      {skills.length > 0 ? (
        <ul className="skills">
          {skills.map((skill) => (
            <SkillBadge key={skill.id} skill={skill} />
          ))}
        </ul>
      ) : (
        <p>No skills added yet</p>
      )}
    </section>
  );
}

export default SkillsPage;