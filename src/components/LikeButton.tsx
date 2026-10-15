import { useLikes } from "../context/LikesContext";
import Button from "./ui/Button";

function LikeButton() {
  const { likes, addLike } = useLikes();

  return (
    <Button
      variant="secondary"
      className="like-btn"
      aria-label={`Like (${likes} likes)`}
      onClick={addLike}
    >
      {likes > 0 ? "❤️" : "🤍"} Like {likes}
    </Button>
  );
}

export default LikeButton;