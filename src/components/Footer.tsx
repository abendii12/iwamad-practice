type FooterProps = {
  owner: string;
  year: number;
};

function Footer({ owner, year }: FooterProps) {
  return (
    <footer>
      <p>&copy; {year} {owner}.</p>
    </footer>
  );
}

export default Footer;