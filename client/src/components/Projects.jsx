import { useQuery } from "@apollo/client";
import Spinner from "../components/Spinner";
import { GET_PROJECTS } from "../queries/projectQueries";
import Project from "./Project";

const Projects = () => {
  const { data, loading, error } = useQuery(GET_PROJECTS);

  if (loading) return <Spinner />;

  if (error) return <p>Error</p>;

  return (
    <>
      {data.projects.length > 0 ? (
        <div className="row">
          {data.projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>No Projects</p>
      )}
    </>
  );
};

export default Projects;
