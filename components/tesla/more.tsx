import { Electrolize, Lato } from 'next/font/google'

const electrolize = Electrolize({ weight: ["400"], display: "swap", subsets: ["latin"] });
const lato = Lato({ weight: ["400"], subsets: ['latin'], display: "swap" });

const More = () => {
    return (
        <section className="box py-8 lg:py-24">
            <h2 className='text-2xl md:text-4xl font-bold' style={electrolize.style}>Learn more</h2>

            <div className='bg-gradient-to-r from-gray-200 to-slate-200 p-2 mt-2 rounded-md'>
                <h3 className='text-xl md:text-2xl text-slate-800 mt-8 mb-4 text-center' style={lato.style}>Tragic story of Nikola Tesla</h3>
                <iframe className='aspect-video rounded-md overflow-hidden' width="100%" src="https://www.youtube.com/embed/FeUA-0G1p5k?si=F3HXT4kR0hdhj1tW" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                <div className='my-10 mx-2 md:mx-8'>
                    <details className='bg-white p-4 rounded-sm'>
                        <summary className='text-lg cursor-pointer' style={lato.style}>Nikola Tesla Quotes</summary>
                        <ul className='text-sm text-gray-800 mt-4 list-inside list-disc ' style={lato.style}>
                            <li className='italic mt-2'>“If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.”</li>
                            <li className='italic mt-2'>“I don&apos;t care that they stole my idea . I care that they don&apos;t have any of their own”</li>
                            <li className='italic mt-2'>“Be alone, that is the secret of invention; be alone, that is when ideas are born.”</li>
                            <li className='italic mt-2'>“My brain is only a receiver, in the Universe there is a core from which we obtain knowledge, strength and inspiration. I have not penetrated into the secrets of this core, but I know that it exists.”</li>
                            <li className='italic mt-2'>“The present is theirs; the future, for which I really worked, is mine.”</li>
                            <li className='italic mt-2'>“If your hate could be turned into electricity, it would light up the whole world.”</li>
                            <li className='italic mt-2'>“One must be sane to think clearly, but one can think deeply and be quite insane.”</li>
                            <li className='italic mt-2'>“Let the future tell the truth, and evaluate each one according to his work and accomplishments. The present is theirs; the future, for which I have really worked, is mine”</li>
                        </ul>
                    </details>
                </div>
            </div>
        </section>
    )
}

export default More