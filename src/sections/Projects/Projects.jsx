import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import Ecell from '../../assets/Ecell.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/QureshiSohelShafique/Voting-App"
          h3="Voting App"
          p="BackEnd Voting App using NodeJS"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/QureshiSohelShafique/Ecommerce-Furniture-Web"
          h3="Hekto"
          p="Ecommerce-Furniture-Website"
        />
        <ProjectCard
          src={Ecell}
          link="https://github.com/QureshiSohelShafique/Entrepreneurship-Cell-Website"
          h3="E-Cell UCER Naini"
          p="Entrepreneurship-Cell-Website"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/QureshiSohelShafique/React-Projects"
          h3="React Projects"
          p="frontend Projects"
        />
      </div>
    </section>
  );
}

export default Projects;
