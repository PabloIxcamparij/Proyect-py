import { useProjects } from '../hooks/useProjects';

export default function Home() {
  const { projects, loading } = useProjects();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="text-lg text-gray-400">Loading projects...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="dark:bg-secondary-bg rounded-xl shadow-lg p-6 flex flex-col gap-4 border border-gray-800"
          >
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <img
                src={project.image}
                alt={project.name}
                className="w-full md:w-48 h-32 object-cover rounded-lg border border-gray-700"
              />
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-1">{project.name}</h2>
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-700 text-white mr-2 mb-2">
                  {project.category}
                </span>
              
                <p className="mb-2">{project.description}</p>
                <div className="text-xs text-gray-400 flex flex-wrap gap-4 mb-2">
                  <span>Created: {project.created}</span>
                  <span>Creator: {project.creator}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-gray-700 text-white text-xs px-2 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
