// This is a static page mocking an "About Us" section for our fake user data
export default function AboutMePage() {
  return (
    <section className="page-section" id="aboutMe">
      <h2>About Me</h2>
      <div>
        <img src='./src/images/Me.jpg' id='Me' width='150' height='150'/>
        <br />
        <br />
        <p>My name is Kalab Smith, and I am enthusiastic about embarking on a career in the computer programming industry. Although I am relatively new to the professional scene, I am a quick learner and bring with me years of programming experience as a hobbyist. Over the years, I have completed several courses, including a Career and Technical Education (CTE) course on Java, an online Python course with Codecademy, and a web development bootcamp through the University of Utah.</p>
        <p>In addition to my programming skills, I have over seven years of experience in the horticulture industry and hold a Bachelor's degree in Botany with a minor in Zoology. This background provides me with unique insights into the agricultural sector, which can be highly beneficial for coding projects tailored to clients in this industry. My experience has also instilled in me the value of hard work and the importance of collaboration in accomplishing large-scale projects.</p>
      </div>
    </section>

  );
}
