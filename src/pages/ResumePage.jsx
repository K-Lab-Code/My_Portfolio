// This is a static page mocking an "About Us" section for our fake user data
export default function ResumePage() {
  return (
    <section className="page-section" id="resume">
      <h2>Resume</h2>
      <div>
        <h3>Download <a href='./images/Resume.pdf' download="Resume">Resume</a></h3>
        <h3>Front End Proficiencies</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Typescript</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <h3>Back End Proficiencies</h3>
        <ul>
          <li>Node js</li>
          <li>Express js</li>
          <li>Api</li>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
          <li>Apollo GraphQL</li>
        </ul>
        <h3>Other Proficiencies</h3>
        <ul>
          <li>Git</li>
          <li>GitHub</li>
          <li>Python</li>
          <li>Java</li>
          <li>CircleCI</li>
          <li>Render</li>
          <li>Netlify</li>
          <li>Microsoft Word</li>
          <li>Microsoft Powerpoint</li>
          <li>Microsoft Excel</li>
          <li>Code Testing</li>
          <li>Game Maker</li>
          
        </ul>
        </div>
    </section>
  );
}
