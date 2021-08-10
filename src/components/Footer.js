import { Link } from "react-router-dom";

function Footer({ showAbout, toggleAbout }) {
  return (
    <footer className="footer">
      {showAbout ? (
        <Link
          style={{
            textDecoration: "none",
            color: "aliceblue",
            fontWeight: "bold",
            fontSize: "20px",
            width: "100%",
          }}
          onClick={() => toggleAbout(!showAbout)}
          to="/about"
        >
          ••••••• About •••••••
        </Link>
      ) : (
        <Link
          style={{
            textDecoration: "none",
            color: "aliceblue",
            fontWeight: "bold",
            fontSize: "20px",
            width: "100%",
          }}
          onClick={() => toggleAbout(!showAbout)}
          to="/"
        >
          ••••••• Go Back •••••••
        </Link>
      )}
    </footer>
  );
}

export default Footer;
