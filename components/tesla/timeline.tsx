"use client"
import { Electrolize, Lato } from 'next/font/google'
import { ReactNode } from "react"
import { FaRegHospital, FaPen, FaRegLightbulb, FaHammer } from 'react-icons/fa'
import { MdLocalHospital, MdSchool, MdFlashOn, MdWifiTethering } from 'react-icons/md'
import { ImBook } from 'react-icons/im'
import { GiTeslaCoil, GiCoffin } from 'react-icons/gi'

type tl = {
    year: string,
    icon: ReactNode,
    data: string,
    title: string
}

const timeline: tl[] = [
    {
        year: '1859',
        icon: <FaRegHospital/>,
        data: 'Nikola Tesla is believed to have been born at midnight. During his birth, lightning struck during a summer storm. Born to a Serbian Family in Smiljan, Tesla was nicknamed `Child of the Storm`, by his aunt. That said, his mother replied to that comment by calling him `Child of the light`. He was born based on the conventional Slavonic rites, and his birth records show he was born on July 28th. Tesla was the fourth child in a family of five children. The family comprised of three sisters including Marica, Angelina, Milka and his old brother who was known as Dane. Dane died when Tesla was still at a tender age. Tesla attended his early education in 1861 in Smiljan, where he acquired various skills including arithmetic and he also mastered the German Language. The following year, Nikola Tesla moved to a place known as Gospic. Here, his father played the role of a Parish Pastor.',
        title: 'Nikola Tesla is born'
    },
    {
        year: '1870',
        title: "Tesla's Brush With Death",
        icon: <MdLocalHospital/>,
        data: "Nikola Tesla moved to a place known as Karlovac to complete his high school. Three years later, he went back to Smiljan and shortly after his arrival; he contracted cholera. He was in hospital for close to one year, and he faced near-death circumstances."
    },
    {
        year: "1875",
        title: "Tesla Enrolls In College",
        icon: <ImBook/>,
        data: "In 1875, Tesla enrolled to a Polytechnic based on a military scholarship. He was a disciplined student and achieved the highest grades possible while passing various exams. More so, he also started a cultural club and received a letter of commendation from the dean of the Technical Department. During his second year, he got into an argument with one his professors over the functionality of the Gramme dynamo."
    },
    {
        year: "1880",
        title: "Tesla Moves To Prague To Study Philosophy",
        icon: <FaPen/>,
        data: "Tesla’s uncle collected money to help him relocate to Prague to finish his studies. He arrived late to enroll for classes, and his lack of competence in Greek and Czech meant that he did not qualify for the classes he wanted to take. Instead, he took up classes in Philosophy at the university, though he did not receive grades for the courses."
    },
    {
        year: "1881",
        title: "Tesla Begins His Career As Chief Electrical Engineer",
        icon: <MdSchool/>,
        data: "In 1881, he moved to Budapest in Hungary, to work for a telegraph company. Upon arriving, he noticed that the Budapest Telephone Exchange company was not in operation, so he worked at draftsman in another company. A few months later, the BTS Company was in operation, and he was given the position of chief electrical engineer. During his tenure, he introduced various operation upswings which improved the performance of the company."
    },
    {
        year: "1882",
        title: "Tesla Goes To Work For Edison",
        icon: <FaRegLightbulb/>,
        data: "In 1882, he found another job in Paris with a company referred to as the Continental Edison Company. He began working in a new industry by installing indoor lighting resources. His company had several divisions, and he worked in the section of the company that was responsible for lighting systems. At this company, he improved his electrical engineering prowess. The management team noticed his abilities and soon introduced him as part of the team that would produce dynamos and motors. Following this, Tesla moved to New York in the USA. In 1884, one of his managers from Paris was relocated to the US to manage a company where he worked. During, this time, Tesla started a manufacturing division that was found in New York and sought for Tesla to be relocated to the country as well. In the same year, Tesla was relocated to the USA and started working immediately."
    },
    {
        year: "1885",
        title: "Tesla Submits Some Of His First Patents",
        icon: <FaHammer/>,
        data: "In March 1885, he met with an attorney known as Lemuel Serrel, to help in the submission of various patents. Serrel introduced Tesla to various businessmen, including Benjamin Vail and Robert Lane. They agreed to help finance a new light production company under Tesla Name. Tesla worked to acquire the patents for the company including developing an enhanced DC motor. His solutions gained attention from the mass media who sought his solutions."
    },
    {
        year: "1887",
        title: "Tesla Re-imagines The Electric Motor",
        icon: <MdFlashOn/>,
        data: "In 1887, Tesla came up with an induction motor that was operated by alternating current, a form of power that was becoming common in Europe and the USA. This type of power provided various benefits, especially in long-distance power transmission. In particular, the motor was operated by a polyphase current, which produced a rotating magnetic field to operate the motor. This innovative electric motor was patented in May 1988, and it comprised of a basic self-starting design that did not require the use of commutators. As a result, this reduced the occurrence of sparking the high maintenance that was associated with replacing mechanical brushes"
    },
    {
        year: "1890",
        title: "Tesla Begins His Work On Wireless Power Transmission",
        icon: <MdWifiTethering/>,
        data: "After 1890, Tesla researched various approaches to transmitting power by inductive and capacitive coupling. This was through the use of AC voltages that were produced by his famous `Tesla coil.` He tried in many ways to come up with a wireless lighting system that was based on near field and capacitative coupling. He even performed various public demonstrations, where he would light up Geissler tubes to impress his audience. Tesla also spent close to well over a decade trying to come up with new solutions for lighting."
    },
    {
        year: "1891",
        title: "Tesla Patents The Tesla Coil",
        icon: <GiTeslaCoil/>,
        data: "In mid 1891, at the age of 35, he became a naturalized citizen of the US. In the same year, he also patented his famous Tesla Coil."
    },
    {
        year: "1943",
        title: "Tesla's Death",
        icon: <GiCoffin/>,
        data: "In early 1943, at age 86, Tesla died in a Hotel Room in New York. He died alone, and his body was found by a maid who ignored a do not disturb sign on Tesla’s room. The assistant medical professional evaluated the body and determined the cause of death was related to coronary complications. A few days after the FBI ordered for the acquisition of his belongings, John G Trump was called in to evaluate his works. Trump was a well known electrical engineer who worked for the state, which was held in custody. Following a three day investigation, a Trumps report concluded that was nothing that would demonstrate a hazard in unfriendly circumstances."
    },

]

const electrolize = Electrolize({ weight: ["400"], display: "swap", subsets: ["latin"] });
const lato = Lato({ weight: ["400"], subsets: ['latin'], display: "swap" });



const Timeline = () => {
  return (
    <section className='box pt-8 lg:pt-24'>
      <h2 className='text-2xl md:text-4xl font-bold' style={electrolize.style}>Nikola Tesla Timeline</h2>
      <h3 className='text-xl md:text-2xl text-slate-800 mt-2' style={lato.style}>A timeline of important events, achievements, setbacks and triumphs.</h3>

      {timeline.map((elm, i) => {
        return (
          <div key={`timeline_${i}`} className='w-full flex flex-col md:flex-row mt-8'>
            <div className='h-full flex flex-row md:flex-col justify-between items-start w-full md:w-32'>
              <div className='border-4 border-gray-300 text-3xl p-2 text-gray-500 rounded-full ml-0 md:ml-4  '>
                {elm.icon}
              </div>
              <h4 className='text-4xl mt-3' style={electrolize.style}>{elm.year}</h4>
            </div>

            <div className={`w-full p-4 rounded-md border-l-[6px] border  mt-4 md:mt-0 ml-0 md:ml-4 ${i%2 == 0 ? 'bg-white border-slate-200' : 'bg-gray-100 border-slate-300'}`}>
              <h4 className='text-lg md:text-xl text-slate-800 font-semibold'>{elm.title}</h4>
              <article className='mt-4 text-sm text-slate-700' style={lato.style}>
                {elm.data}
              </article>
            </div>
          </div>
        )
      })}

    </section>
  )
}

export default Timeline