"use client"
import { Electrolize, Lato } from 'next/font/google'

const electrolize = Electrolize({ weight: ["400"], display: "swap", subsets: ["latin"] });
const lato = Lato({ weight: ["400"], subsets: ['latin'], display: "swap" });

const innovation: {title: string, body: string}[] = [
    {
        title: "Alternating Current", 
        body: "This is one of his first ever inventions that caused a stir at the 1893 Worlds Fair in Chicago. The resulting conclusion from Edison and Tesla`s argument on the distribution and production of electricity was provided. The argument could be summarized in relation to cost and safety factors. It was determined that the DC current produced by Edison was costly over long distances and it also produced sparks from the commutator. Edison and his proponents used various approaches to oppose Tesla`s Alternative Current as a solution. Edison tried to prove by going as far as electrocuting animals to prove his point. That said, Tesla responded by showing that AC was safe by shooting current through his body to produce light. This argument is regarded by most as the culmination of well over a decade of wrangles in terms of patents, corrupt deals and stolen ideas. Despite it all, this proves that the system developed by Tesla is effective at providing power in the modern era."
    },
    {
        title: "Modern Lighting", 
        body: "While Tesla did not invent light itself, he is responsible for the innovations that have been crucial in how it’s distributed and produced. He came up with fluorescent bulbs in his lab 40 years before they became a standard in the consumer market. More so, at the world`s fair, he used glass tubes by customizing them into the names of famous scientists, to create neon signs."
    },
    {
        title: "X-rays", 
        body: "Ionizing radio and electromagnetic technologies were common on research during early in the 1800s. However, Nikola Tesla went in depth by studying everything up until the Kirlian photography. This resource has the ability to observe life force, which is now common in medical diagnostics. It was a transformative piece of technology which Tesla was key in it`s development. Similar to many of his inventions, the inspiration for X-rays came from his belief that everything we need, is around us at all times."
    },
    {
        title: "Radio", 
        body: "It’s important to note that the Guglielmo Marconi is initially credited to be the inventor of the original radio technology. However, the Supreme Court denied his patent in 1943, when it was determined that Tesla originally built the radio years before. In particular, Radio signals occur naturally and require a transmitter and receiver to be used. This is a technique that Tesla demonstrated at a presentation in 1892 before the National Electric Light Association. Five years later, Tesla made a patent application. However, in 1904, the patents were overturned with the U.S patent office determining that Marconi was the original owner. This was mainly due to the backing that Marconi had and the state, which was afraid of paying royalties to Tesla"
    },
    {
        title: "Remote Control", 
        body: "This particular invention was a natural development from the radio. The demonstration of this technology occurred in 1898 and it comprised of several huge batteries. Also, the demonstration included large radio controlled switches, a rudder, running light and a boat propeller. Although this technology remained dormant for a long time, it has played an important role in modern day society."
    },
    {
        title: "Electric Motor", 
        body: "One of his greatest inventions has finally become popular by the car that brandishes his name. Although the technical aspects are beyond the scope of this summary, it is important to note that the invention of the motor was one Tesla`s exceptional inventions. In fact, the development of this motor could have helped in reducing the world`s dependency on oil. That said, this invention was compromised by the economic crisis in 1930 and the following world wars. All things considered, this technology has revolutionized the world in many ways."
    },
    {
        title: "Robotics", 
        body: "With his exceptional prowess in scientific concepts, Nikola Tesla came up with the idea that all people are inspired by external impulses. In fact, according to him, every thought and act, was inspired by external stimuli. As a result, he came up with the concept of robotics. That said, an aspect of humanity was still present, with Tesla claiming the human replicas have limitations including growth and procreation. Nevertheless, Tesla worked with all his information to come up with practical solutions. Some of his visions for the future including robotic companions, use of sensors, autonomous systems and intelligent vehicles."
    },
    {
        title: "Lasers", 
        body: "Tesla is also believed to have played a major role in the invention of the laser. Lasers have played an important role in various medical procedures such as surgery. Besides that, the laser has also been key in the development of digital media. That said, his invention of the laser is a classical example of crossing into the worlds of science fiction. The main paradox here being that laser energy can be beneficial for the society and potentially dangerous at the same time. Lasers are still evolving and most techniques are based on the research by Tesla."
    },
    {
        title: "Wireless Communications and Limitless Free Energy", 
        body: "These two technologies are directly linked and they can have a significant impact in our daily lives. J.P Morgan gave Tesla the funding to develop a technology that would leverage the occurrence of natural frequencies in the universe to transmit data. This includes a broad range of information that could be communicated including voice messages, text and images. This represented the world’s first communication resources, but it also showed that there was a worldwide technology that could be used to connect the entire world."
    },
]

const Innovation = () => {
    return (
        <section className="box pt-8 lg:pt-24">
            <h2 className='text-2xl md:text-4xl font-bold' style={electrolize.style}>Tesla&apos;s Inventions</h2>
            <h3 className='text-xl md:text-2xl text-slate-800 mt-2' style={lato.style}>How Tesla’s inventions changed the world forever…</h3>

            <div className='mt-6'>
                {innovation.map((elm,i) => {
                    return ( <div className='mb-4' key={`innovation_${i}`}>
                        <h3 className='text-xl font-bold' style={electrolize.style}>{elm.title}</h3>
                        <article className='mt-2 text-sm text-gray-700'>{elm.body}</article>
                    </div>)
                })}
            </div>
        </section>
    )
}

export default Innovation