import Navbar from '../components/Navbar';
import ProjectsSelector from '../components/ProjectsSelector';

export default async function Projects() {
  const data = await fetch("https://gist.githubusercontent.com/serapagranchose/bc9b8dd8959b352699aa258a7924b729/raw/e40b98bf9fc5a42a4df9baec46a3bbf24302eda0/resume.json", {
    next: { revalidate: 10 },
  }).then(results => {
    return results.json();
  })

  return (
    <>
      <Navbar/>
      <main className="pt-28 flex flex-row h-screen">
        <ProjectsSelector projects={data.projects} />
      </main>
    </>
  );
}
