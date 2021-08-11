import { useState } from "react";

import Button from "@material-ui/core/Button";
function About({ version }) {
  const [installPrompt, setInstallPrompt] = useState();

  window.addEventListener("beforeinstallprompt", (e) => {
    setInstallPrompt(e);
  });

  const promptInstall = async () => {
    console.log(installPrompt);
    if (installPrompt !== null) {
      installPrompt.prompt();
      const { outcome } = await installPrompt.userChoice;
      if (outcome === "accepted") {
        setInstallPrompt(null);
      }
    }
  };
  return (
    <div className="about">
      <h1>V {version}</h1>

      <ul className="aboutUl">
        <li>Your todos are saved locally so do not care about privacy 😁</li>
        <li>
          Clearing browser cache and similar activities will erase your
          previously entered todos (permanently 😈)
        </li>
        {
          installPrompt && (
          <li>
            <Button
              onClick={() => promptInstall()}
              variant="contained"
              color="primary"
            >
              Add to Home screen
            </Button>
            for better performance
          </li>
        )}
      </ul>
      <div className="madeUsing">
        <ul>
          Made Using
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/facebook/react"
            >
              Facebook/React{" "}
            </a>
          </li>
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://create-react-app.dev/"
            >
              Create-React-App
            </a>
          </li>
          <li>
            <a rel="noreferrer" target="_blank" href="https://material-ui.com/">
              Material-UI
            </a>
          </li>
          <li>
            <a rel="noreferrer" target="_blank" href="https://www.netlify.com/">
              Netlify
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
