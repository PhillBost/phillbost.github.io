import PortfolioItem from "./portfolio-item"
import portfolioProjects from "../data/portfolio-projects"

function Portfolio(){
    return (
        <div>
            <h3 class="grid grid-cols-1 text-2xl text-center w-full pb-4">
                Projects 
                <p class="text-lg">Some stuff I've worked on.</p>
                <p class="text-sm">To see my public repos, view&nbsp;

                    <a class=" underline" href="https://github.com/PhillBost">my github</a>

                </p>
            </h3>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0" >
                {portfolioProjects.map((project) => (
                    <PortfolioItem
                        key={project.name}
                        projectsrc={project.image}
                        projectdesc={project.description}
                    />
                ))}

            </div>
        </div>
    )
}


export default Portfolio;
