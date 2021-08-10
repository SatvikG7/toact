function About({ version }) {
    return (
        <div className="about">
            <h1>V {version}</h1>
            <ul className="aboutUl">
                <li>Your todos are saved locally so do not care about privacy 😁</li>
                <li>Clearing browser cache and similar activities will erase your previously entered todos (permanently 😈)</li>
                <li>Add this site to Home screen using menu for better performance</li>
                <li>ProTip 😎: You can double click/tap on todo to toggle its importance</li>
            </ul>
            <div className="madeUsing">
                <ul>
                    Made Using
                    <li><a rel="noreferrer" target="_blank" href="https://github.com/facebook/react">Facebook/React </a></li>
                    <li><a rel="noreferrer" target="_blank" href="https://create-react-app.dev/">Create-React-App</a></li>
                    <li><a rel="noreferrer" target="_blank" href="https://material-ui.com/">Material-UI</a></li>
                    <li><a rel="noreferrer" target="_blank" href="https://www.netlify.com/">Netlify</a></li>
                </ul>
            </div>
        </div>
    )
}

export default About
