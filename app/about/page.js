import Navbar from '../components/Navbar';
import Link from 'next/link'

export default async function About() {
  const data = await fetch("https://api.github.com/gists/bc9b8dd8959b352699aa258a7924b729", {
    next: { revalidate: 10 },
  }).then(results => {
    return results.json();
  }).then(gistData => {
    return JSON.parse(gistData.files["resume.json"].content);
  })

  return (
    <main className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-col lg:flex-row p-2 pb-16 lg:pb-0 w-full flex-grow overflow-y-auto">
        <div className="w-full lg:w-2/3 lg:flex-grow lg:overflow-y-auto lg:scrollbar-hide lg:scrollbar lg:scrollbar-thumb-sky-700 lg:scrollbar-track-transparent">
          <h2 className="text-2xl">WHO I AM</h2>
          <p>
            HI! I&#39;M SÉRAPHIN PERROT ; FULL STACK DEVELOPER.<br />
          </p>
          <p className="pt-2">
            MY PASSION FOR COMPUTER DEVELOPMENT AND PIXEL ART GOES BACK TO WHEN I WAS A KID, THANKS TO MY FAMILY;<br />
            MY GRANDFATHER WAS A PROFESSOR OF INDUSTRIAL AUTOMATION AND TECHNOLOGY, AND MY MOM HAD OLD CONSOLES THAT I PLAYED ON (TOO) OFTEN, LIKE THE ICONIC GAMEBOY.<br />
            GROWING UP IN THE 2000S, NOSTALGIC FOR MY PARENTS AND COMPUTERS, I WITNESSED THE EXPONENTIAL EVOLUTION OF TECHNOLOGY UP CLOSE, AND THIS HAD A PROFOUND EFFECT ON ME AS A HUMAN BEING.<br />
            I WAS SOON DRAWN TO COMPUTER DEVELOPMENT, DEVELOPING MY OWN GAMES FROM THE AGE OF 9.<br />
          </p>
          <p className="pt-2">
            I&#39;M CONSTANTLY ON THE LOOKOUT FOR NEW TECHNOLOGIES, BECAUSE I&#39;M A CURIOUS PERSON.<br />
          </p>

          <h2 className="text-2xl pt-6">EDUCATION</h2>
          <p>
            NATURALLY I WANTED TO MOVE INTO INFORMATIC AS SOON AS POSSIBLE, SO I DECIDED TO TAKE A SCIENCE OF TECHNOLOGY DEVELOPMENT MAJORING IN INFORMATION AND DIGITAL SYSTEMS AT THE LYCÉE ANDRÉE MALRAUX IN BÉTHUNE.<br />
            THE VERY THEORETICAL SCHOOL SYSTEM WAS NOT SUITED TO LEARNING TECHNOLOGY TO ME, IT'S CONSTANTLY EVOLVING RAPIDLY, MAKING THE LESSONS AND TECHNOLOGIES STUDIED QUICKLY OBSOLETE.<br />
          </p>
          <p className="pt-2">
            I THEN WENT TO EPITECH LILLE FOR 5 YEARS IN TOTAL TO DO A BACHELOR PLUS A MASTER&#39;S DEGREE IN COMPUTER ENGINEERING.<br />
            EPITECH TAUGHT ME HOW TO LEARN, HOW TO FACE UP THE FEARS THAT PREVENTED ME FROM LEARNING,<br />
            TAUGHT ME THAT IT&#39;S NORMAL TO BE A BEGINNER, THE TRICK IS TO RISE TO THE CHALLENGE, NO MATTER HOW DIFFICULT IT IS, OR HOW LITTLE GUIDANCE OR DOCUMENTATION YOU HAVE. IMPROVISE. ADAPT. OVERCOME.<br />
          </p>
          <p className="pt-2">
            DURING MY FIRST YEAR OF MASTER I STUDIED ONE YEAR ABROAD IN THE UNIVERSITY OF INHA, SOUTH KOREA ; MAJORING IN SOFTWARE ENGINEERING<br />
          </p>

          <h2 className="text-2xl pt-6">HOBBIES</h2>
          <p>
            SINCE I SPEND MOST OF MY DAYS DEVELOPING IN FRONT OF A SCREEN, WHEN I WANT TO CLEAR MY HEAD I LIKE TO REPAIR AND USE OLD ANALOG EQUIPMENT.<br />
            AN OLD POLAROID, A RADIO CASSETTE OR EVEN A MOPED, ANYTHING GOES. I LIKE TO UNDERSTAND HOW THINGS WORKS.<br />
          </p>
          <p className="pt-2">
            IN TERMS OF SPORTS, I GO TO THE GYM EVERY MON. WED. FRI. AND I SKATEBOARD ON SAT.<br />
          </p>
          <p className="pt-2">
            I WRITE IN MY DIARY TO KEEP LOGS OF MY DAYS AND I READ BOOKS BEFORE SLEEPING.<br />
            I PLAY MUSIC AND CARD GAMES LIKE &#34;MAGIC: THE GATHERING&#34;.<br />
          </p>

          <h2 className="text-2xl pt-6">LANGUAGES</h2>
          <p>
            I HAVE ALWAYS LOVED MUSIC AND SINCE I WAS LITTLE MY DAYS WERE PUNCTUATED WITH ENGLISH MUSIC.<br />
            WITH THE EMERGENCE OF SOCIAL NETWORKING AND MY PASSION FOR IT, I QUICKLY REALIZED THAT MASTERING ENGLISH HAD TO BE ONE OF MY STRONG POINTS.<br />
            I WAS ABLE TO PASS A TOEIC EQUIVALENT AT EPITECH WITH A SCORE OF 795, WHICH ENABLED ME TO GO TO SOUTH KOREA AND MEET MANY INTERNATIONAL CONNECTIONS, SUCH AS MY SPANISH PARTNER.<br />
          </p>
          <p className="pt-2">
            I STUDIED SPANISH FROM SECONDARY SCHOOL TO HIGH SCHOOL FOR 5 YEARS, I ESTIMATE MY LEVEL AT B1 BUT I INTEND TO IMPROVE IN THE FUTURE FOR THE ONE I LOVE.<br />
          </p>
          <p className="pt-2">
            I STUDIED KOREAN WHEN I WAS THERE FOR ONE YEAR BUT I JUST KNOW THE BASICS.
          </p>
        </div>
        <div className="w-full lg:w-1/3 h-fit">
          <div className="mt-6 lg:mt-0 p-2 border-4">
            <h2 className="text-2xl">SOCIALS</h2>
            <p className="truncate">
              <Link
                className={"hover:underline w-full"}
                href={"https://www.linkedin.com/in/serapagranchose/"}
                target="_blank"
                aria-disabled={"https://www.linkedin.com/in/serapagranchose/"}
              >LINKEDIN</Link>
              {" "}
              <Link
                className={"hover:underline"}
                href={"https://github.com/serapagranchose/"}
                target="_blank"
                aria-disabled={"https://github.com/serapagranchose/"}
              >GITHUB</Link>
              {" "}
              <Link
                className={"hover:underline"}
                href={"mailto:seraphin.perrot@gmail.com"}
                target="_blank"
                aria-disabled={"mailto:seraphin.perrot@gmail.com"}
              >EMAIL</Link>
              {" "}
              <Link
                className={"hover:underline"}
                href={"https://www.instagram.com/serapagranchose/"}
                target="_blank"
                aria-disabled={"https://www.instagram.com/serapagranchose/"}
              >INSTAGRAM</Link>
            </p>
          </div>
          <div className="mt-2 p-2 border-4">
            <h2 className="text-2xl">CONFIGS</h2>
            <div className="flex justify-between">
              {data?.config.map((config, index) => {
                return (
                  <div key={index} className="truncate">
                    <p className="truncate">NAME: {config?.name.toUpperCase()}<br /></p>
                    <p className="truncate">TYPE: {config?.type.toUpperCase()}<br /></p>
                    <p className="truncate">OS: {config?.OS.toUpperCase()}<br /></p>
                    <p className="truncate">DISK: {config?.Disk.toUpperCase()}<br /></p>
                    <p className="truncate">MEM: {config?.Memory.toUpperCase()}<br /></p>
                    <p className="truncate">CPU: {config?.CPU.toUpperCase()}<br /></p>
                    <p className="truncate">GPU: {config?.GPU.toUpperCase()}<br /></p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
