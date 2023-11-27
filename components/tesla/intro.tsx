import { Lato } from "next/font/google"

const lato = Lato({weight: ["400"], subsets: ['latin'], display: "swap"});

const Intro = () => {
  return (
    <section id="intro" className="box pt-8 lg:pt-24">
      <div>
        <h2 className="text-xl md:text-2xl text-slate-800" style={lato.style}>Tribute to the Genius of Electricity</h2>
        <article className="mt-4 text-slate-700" style={lato.style} >
          Nikola Tesla, a brilliant inventor and visionary, left an indelible mark on the world through his groundbreaking contributions to the field of electrical engineering. His innovative ideas and inventions have revolutionized the way we harness and use electricity, laying the foundation for modern technology as we know it. In this tribute page, we will delve into the life, achievements, and enduring legacy of the man often referred to as the <span className="bg-slate-200/70 text-black px-2 py-1 rounded-xl">father of the electric age</span> Join us as we explore the extraordinary journey of Nikola Tesla, a pioneer who illuminated the world with his genius.
        </article>
      </div>
    </section>
  )
}

export default Intro