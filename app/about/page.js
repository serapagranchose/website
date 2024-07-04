import Navbar from '../components/Navbar';

export default async function About() {
  const revalidatedData = await fetch("https://gist.githubusercontent.com/serapagranchose/bc9b8dd8959b352699aa258a7924b729/raw/e40b98bf9fc5a42a4df9baec46a3bbf24302eda0/resume.json", {
    next: { revalidate: 10 },
  }).then(results => {
    return results.json();
  })

  return (
    <>
      <Navbar/>
      <main className="pt-28 p-2 flex flex-row min-h-screen justify-between">
        <div>
          <h2 className="text-2xl">WHO I AM</h2>
          <p>
            HI! I'M SÉRAPHIN "OMG6WINGEDSNAKE" PERROT - FULL STACK DEVELOPER, PIXEL ARTIST.<br/>
          </p>
          <p className="pt-2">
            MY PASSION FOR COMPUTER DEVELOPMENT AND PIXEL ART GOES BACK TO WHEN I WAS A KID, THANKS TO MY FAMILY;<br/>
            MY GRANDFATHER WAS A PROFESSOR OF INDUSTRIAL AUTOMATION AND TECHNOLOGY, AND MY MOM HAD OLD CONSOLES THAT I PLAYED ON (TOO) OFTEN, LIKE THE ICONIC GAMEBOY.<br/>
          </p>
          <p className="pt-2">
            GROWING UP IN THE 2000S, NOSTALGIC FOR MY PARENTS AND COMPUTERS, I WITNESSED THE EXPONENTIAL EVOLUTION OF TECHNOLOGY UP CLOSE, AND THIS HAD A PROFOUND EFFECT ON ME AS A HUMAN BEING.<br/>
            I WAS SOON DRAWN TO COMPUTER DEVELOPMENT, DEVELOPING MY OWN GAMES FROM THE AGE OF 9.<br/>
            I'M CONSTANTLY ON THE LOOKOUT FOR NEW TECHNOLOGIES, BECAUSE I'M A CURIOUS PERSON.<br/>
          </p>
          <h2 className="text-2xl pt-6">EDUCATION</h2>
          <p>
            NATURALLY, I DECIDED TO TAKE A SCIENCE OF TECHNOLOGY AND SUSTAINABLE DEVELOPMENT MAJORING IN INFORMATION AND DIGITAL SYSTEMS AT THE LYCÉE ANDRÉE MALRAUX IN BÉTHUNE.<br/>
            SEEING THAT THE VERY THEORETICAL SCHOOL SYSTEM WAS NOT SUITED TO LEARNING TECHNOLOGY, WHICH WAS EVOLVING VERY RAPIDLY, MAKING THE LESSONS AND TECHNOLOGIES STUDIED QUICKLY OBSOLETE,<br/>
            I THEN WENT TO EPITECH LILLE TO DO A MASTER'S DEGREE IN COMPUTER ENGINEERING.
          </p>
        </div>
      </main>
    </>
  );
}
