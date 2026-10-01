import { Link } from "react-router";

function NotFoundPage() {
  return (
    <section>
      <h2>404 — Page not found</h2>
      <p>This page does not exist.</p>
      <Link to="/">Back to home</Link>
    </section>
  );
}

export default NotFoundPage;