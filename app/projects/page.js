import Navbar from '../components/Navbar';
import ProjectsSelector from '../components/ProjectsSelector';

export default async function Projects() {
  const data = await fetch("https://api.github.com/gists/bc9b8dd8959b352699aa258a7924b729", {
    next: { revalidate: 10 },
  }).then(results => {
    return results.json();
  }).then(gistData => {
    return JSON.parse(gistData.files["resume.json"].content);
  })

  function compare( a, b ) {
    if ( a.status < b.status ) return 1
    if ( a.status > b.status ) return -1
    return 0
  }

  return (
    <main className="flex flex-col h-screen">
      <Navbar/>
      <ProjectsSelector projects={Object.values(data.projects).sort(compare)} works={Object.values(data.work).sort(compare)} />
    </main>
  );
}
