import Project from '../components/Project.jsx';

export default function PortfolioPage() {

  return (
    <section className="page-section" id="work">
      <h2>Portfolio</h2>
      <div className="flex-container">
      <Project click='https://symbol-sense.onrender.com/' classNames="Symbol-Sense" referenceLink="https://github.com/K-Lab-Code/Symbol-Sense" name="Symbol Sense"/>
      <Project click='https://github.com/K-Lab-Code/API-Social-Network' classNames="API-Social-Network" referenceLink="https://github.com/K-Lab-Code/API-Social-Network" name="API Social Network"/>
      <Project click='https://book-search-engine-hcck.onrender.com' classNames="Book-Search-Network" referenceLink="https://github.com/K-Lab-Code/Book-Search_Engine" name="Book Search Network"/>
      <Project click='https://moon-watchers.onrender.com/' classNames="Moon-Watchers" referenceLink="https://github.com/K-Lab-Code/Moon-Watchers" name="Moon Watchers"/>
      <Project click='https://kanban-jwt-application.onrender.com' classNames="Kanban-JWT-Application" referenceLink="https://github.com/K-Lab-Code/Kanban_JWT_Application" name="Kanban JWT Application"/>
      <Project click='https://candidate-search-earj.onrender.com' classNames="Candidate-Search" referenceLink="https://github.com/K-Lab-Code/Candidate_Search" name="Candidate Search"/>

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
