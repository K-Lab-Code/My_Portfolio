import Project from '../components/Project.jsx';

export default function PortfolioPage() {

  return (
    <section className="page-section" id="work">
      <h2>Portfolio</h2>
      <div className="flex-container">
       <Project click='https://my-weather-app-uieh.onrender.com/' classNames="My-Weather-App" referenceLink="https://github.com/K-Lab-Code/My-Weather-App" name='My Weather App'/>
       <Project click='https://github.com/K-Lab-Code/Vehicle-Creator-and-Picker' classNames="Vehicle-Creator-and-Picker" referenceLink="https://github.com/K-Lab-Code/Vehicle-Creator-and-Picker" name='Vehicle Creator and Picker'/>
       <Project click='https://github.com/K-Lab-Code/Employee_Manager_CMS' classNames="Employee-Manager-CMS" referenceLink="https://github.com/K-Lab-Code/Employee_Manager_CMS" name='Employee-Manager-CMS'/>
       <Project click='https://github.com/K-Lab-Code/My-Readme-Template-Generator/blob/main/README.md' classNames="My-Readme-Template-Generator" referenceLink="https://github.com/K-Lab-Code/My-Readme-Template-Generator" name='My Readme Template Generator'/>
       <Project click='https://cdysrl.github.io/petcare-tracker/' classNames="Petcare-Tracker" referenceLink="https://github.com/cdysrl/petcare-tracker" name='Petcare Tracker'/>
       <Project click='https://k-lab-code.github.io/prework-study-guide' classNames="Prework-Study-Guide" referenceLink="https://github.com/K-Lab-Code/prework-study-guide" name='Prework Study Guide'/>
      </div>
    </section>
  );
}
