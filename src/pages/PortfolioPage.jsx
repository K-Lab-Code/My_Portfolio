
export default function PortfolioPage() {
  function click1(){location.assign('https://my-weather-app-uieh.onrender.com/');}
  function click2(){location.assign('https://github.com/K-Lab-Code/Vehicle-Creator-and-Picker');}
  function click3(){location.assign('https://github.com/K-Lab-Code/Employee_Manager_CMS');}
  function click4(){location.assign('https://github.com/K-Lab-Code/My-Readme-Template-Generator/blob/main/README.md');}
  function click5(){location.assign('https://cdysrl.github.io/petcare-tracker/');}
  return (
    <section class="page-section" id="work">
      <h2>Portfolio</h2>
      <div class="flex-container">
        <section class="flex-item My-Weather-App" onClick={click1}>
          <div><h3>My Weather App <a href="https://github.com/K-Lab-Code/My-Weather-App"><img src='./src/images/github_icon.png' width="45" height="45" class='round'/></a></h3></div>
        </section>
        <section class="flex-item Vehicle-Creator-and-Picker" onClick={click2}>
          <div><h3>Vehicle Creator and Picker <a href="https://github.com/K-Lab-Code/Vehicle-Creator-and-Picker"><img src='./src/images/github_icon.png' width="45" height="45" class='round'/></a></h3></div>
        </section>
        <section class="flex-item Employee-Manager-CMS" onClick={click3}>
          <div><h3>Employee Manager CMS <a href="https://github.com/K-Lab-Code/Employee_Manager_CMS"><img src='./src/images/github_icon.png' width="45" height="45" class='round'/></a></h3></div>
        </section>
        <section class="flex-item My-Readme-Template-Generator" onClick={click4}>

          <div><h3>My Readme Template Generator <a href="https://github.com/K-Lab-Code/My-Readme-Template-Generator"><img src='./src/images/github_icon.png' width="45" height="45" class='round'/></a></h3></div>
        </section>
        <section class="flex-item Petcare-Tracker" onClick={click5}>
          <div><h3>Petcare Tracker <a href="https://github.com/cdysrl/petcare-tracker"><img src='./src/images/github_icon.png' width="45" height="45" class='round'/></a></h3></div>
        </section>
      </div>
    </section>
  );
}
