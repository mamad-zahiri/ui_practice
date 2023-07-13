// import rocktesdabURL from "./assets/img/rocketdab.png?url"

import { getImageUrl } from "../utils"

const Main = () => {
    return (
        <>
            <main className="mx-auto max-w-5xl">
                {/* hero section: start */}
                <section
                    id="hero"
                    className="widescreen:section-fit-height tallscreen:section-fit-height mb-10 flex scroll-mt-20 flex-col-reverse justify-center gap-x-8 overflow-visible p-12 sm:flex-row"
                >
                    <article className="mt-16 flex flex-col justify-center sm:mt-0 sm:w-2/5 md:w-1/2">
                        <h2 className="max-w-md text-center text-4xl font-bold text-slate-800 dark:text-slate-50 sm:text-left sm:text-5xl">
                            We Boldly Go{" "}
                            <span className="text-sky-700 dark:text-blue-300">Where No Rocket</span>{" "}
                            Has Gone Before...
                        </h2>
                        <p className="mt-4 max-w-md text-center text-2xl text-slate-700 dark:text-slate-400 sm:text-left">
                            We&apos;re building rockets for next century today. From the moon to
                            Mars, Jupiter and beyond...
                        </p>
                        <p className="mt-4 max-w-md text-center text-2xl text-slate-700 dark:text-slate-400 sm:text-left">
                            Think Acme Rocktes.
                        </p>
                    </article>
                    <div className="flex flex-col items-center justify-center sm:w-3/5 md:w-1/2">
                        <img
                            src={getImageUrl("rocketdab.png")}
                            alt="rocketdab"
                            className="h-auto w-full drop-shadow-[5px_5px_25px_rgba(150,150,150,1)] dark:drop-shadow-[5px_5px_25px_rgba(20,20,20,1)]"
                        />
                    </div>
                </section>
                {/* hero section: end */}

                <hr className="mx-auto h-0.5 w-1/2 bg-slate-500 dark:bg-slate-300" />

                {/* out rockets: start */}
                <section id="rockets" className="mb-10 scroll-mt-14 p-12">
                    <h2 className="mb-12 max-w-full text-center text-4xl font-bold text-slate-800 dark:text-slate-50 sm:text-5xl">
                        Our Rockets
                    </h2>
                    <ul className="flex list-none flex-col items-center justify-evenly gap-8 sm:flex-row">
                        <li className="flex w-5/6 flex-col items-center justify-center rounded-3xl border border-solid border-slate-400 px-2 py-4 shadow-lg shadow-slate-300 backdrop-saturate-200 transition-all duration-300 hover:scale-105 dark:bg-slate-900 dark:bg-opacity-60 dark:shadow-md  dark:shadow-slate-700 dark:backdrop-saturate-200 sm:w-5/6">
                            <img
                                src={getImageUrl("rocketman.png")}
                                className="mb-6 w-1/2"
                                alt="rocketman"
                            />
                            <h3 className="text-center text-3xl font-bold text-slate-800 dark:text-slate-200">
                                Explorer
                            </h3>
                            <p className="mt-4 hidden text-center text-lg text-slate-600 dark:text-slate-500 sm:block">
                                $
                            </p>

                            <p className="mt-4 block text-center text-lg text-slate-600 dark:text-slate-500 sm:hidden">
                                Affordable Exploration
                            </p>
                        </li>

                        <li className="flex w-5/6 flex-col items-center justify-center rounded-3xl border border-solid border-slate-400 px-2 py-4 shadow-lg shadow-slate-300 backdrop-saturate-200 transition-all duration-300 hover:scale-105 dark:bg-slate-900 dark:bg-opacity-60 dark:shadow-md  dark:shadow-slate-700 dark:backdrop-saturate-200 sm:w-5/6">
                            <img
                                src={getImageUrl("rocketride.png")}
                                className="mb-6 w-1/2"
                                alt="adventurer"
                            />
                            <h3 className="text-center text-3xl font-bold text-slate-800 dark:text-slate-200">
                                Adventurer
                            </h3>
                            <p className="mt-4 hidden text-center text-lg text-slate-600 dark:text-slate-500 sm:block">
                                $$
                            </p>

                            <p className="mt-4 block text-center text-lg text-slate-600 dark:text-slate-500 sm:hidden">
                                Best Selling Rocket
                            </p>
                        </li>

                        <li className="flex w-5/6 flex-col items-center justify-center rounded-3xl border border-solid border-slate-400 px-2 py-4 shadow-lg shadow-slate-300 backdrop-saturate-200 transition-all duration-300 hover:scale-105 dark:bg-slate-900 dark:bg-opacity-60 dark:shadow-md  dark:shadow-slate-700 dark:backdrop-saturate-200 sm:w-5/6">
                            <img
                                src={getImageUrl("rocketlaunch.png")}
                                className="mb-6 w-1/2"
                                alt="infinity"
                            />
                            <h3 className="text-center text-3xl font-bold text-slate-800 dark:text-slate-200">
                                Infinity
                            </h3>
                            <p className="mt-4 hidden text-center text-lg text-slate-600 dark:text-slate-500 sm:block">
                                $$$
                            </p>

                            <p className="mt-4 block text-center text-lg text-slate-600 dark:text-slate-500 sm:hidden">
                                Luxury Starship
                            </p>
                        </li>
                    </ul>
                </section>
                {/* out rockets: end */}

                <hr className="mx-auto h-0.5 w-1/2 bg-slate-500 dark:bg-slate-300" />

                {/* testimonials: start */}
                <section id="testimonials" className="mb-10 scroll-mt-14 p-12">
                    <h2 className="mb-12 max-w-full text-center text-4xl font-bold text-slate-800 dark:text-slate-50 sm:text-5xl">
                        Testimonials
                    </h2>
                    <figure className="my-12">
                        <blockquote className="relative rounded-3xl bg-white px-9 py-7 shadow-md dark:bg-gray-900 sm:px-11 sm:py-9">
                            <p className="text-left text-lg text-gray-600 transition-all before:absolute before:left-2 before:top-2 before:transform before:font-[roboto] before:text-6xl before:text-gray-400 before:content-['\201C'] after:absolute after:-bottom-3 after:right-2 after:translate-y-4 after:transform after:font-[roboto] after:text-6xl after:text-gray-400 after:content-['\201D'] hover:text-gray-800 dark:text-slate-400 dark:hover:text-slate-300 sm:text-xl">
                                Acme has always been there for me. Their Explorer rocket is the best
                                rocket I&apos;ve ever flown. I&apos;ve been to the moon and back and
                                I can&apos;t wait to go again.
                            </p>
                        </blockquote>
                        <figcaption className="text-md mt-2 pr-8 text-right italic text-slate-500 dark:text-slate-400 sm:text-lg ">
                            &#8212; Wile E. Coyote, Genius
                        </figcaption>
                    </figure>

                    <figure className="my-12">
                        <blockquote className="relative rounded-3xl bg-white px-9 py-7 shadow-md dark:bg-gray-900 sm:px-11 sm:py-9">
                            <p className="text-left text-lg text-gray-600 transition-all before:absolute before:left-2 before:top-2 before:transform before:font-[roboto] before:text-6xl before:text-gray-400 before:content-['\201C'] after:absolute after:-bottom-3 after:right-2 after:translate-y-4 after:transform after:font-[roboto] after:text-6xl after:text-gray-400 after:content-['\201D'] hover:text-gray-800 dark:text-slate-400 dark:hover:text-slate-300 sm:text-xl">
                                The Acme Adventurer Rocket has thwarted my Illudium Q-36 Explosive
                                Space Modulator on several occasions.{" "}
                                <span className="italic">This makes me very, very angry!</span>{" "}
                                Nevertheless, K-9 and I have awarded Acme the Martian contract for
                                space exploration rockets based on Acme&apos;s quality and sturdy
                                designs.
                            </p>
                        </blockquote>
                        <figcaption className="text-md mt-2 pr-8 text-right italic text-slate-500 dark:text-slate-400 sm:text-lg ">
                            &#8212; Marvin the Martian & K-9
                        </figcaption>
                    </figure>

                    <figure className="my-12">
                        <blockquote className="relative rounded-3xl bg-white px-9 py-7 shadow-md dark:bg-gray-900 sm:px-11 sm:py-9">
                            <p className="text-left text-lg text-gray-600 transition-all before:absolute before:left-2 before:top-2 before:transform before:font-[roboto] before:text-6xl before:text-gray-400 before:content-['\201C'] after:absolute after:-bottom-3 after:right-2 after:translate-y-4 after:transform after:font-[roboto] after:text-6xl after:text-gray-400 after:content-['\201D'] hover:text-gray-800 dark:text-slate-400 dark:hover:text-slate-300 sm:text-xl">
                                I knew I not only wanted &#8212;{" "}
                                <span className="italic">I needed</span> &#8212; Acme&apos;s
                                Infinity Rocket for my mission in space. Acme delivered in one day!
                                Nothing says <q className="italic">Take me to your leader</q> like
                                Acme&apos;s Infinity Rocket! 💯
                            </p>
                        </blockquote>
                        <figcaption className="text-md mt-2 pr-8 text-right italic text-slate-500 dark:text-slate-400 sm:text-lg ">
                            &#8212; Buzz Lightyear, Space Ranger
                        </figcaption>
                    </figure>
                </section>
                {/* testimonials: end */}

                <hr className="mx-auto h-0.5 w-1/2 bg-slate-500 dark:bg-slate-300" />

                {/* contact us: start */}
                <section id="contact" className="mb-10 scroll-mt-14 p-12">
                    <h2 className="mb-12 max-w-full text-center text-4xl font-bold text-slate-800 dark:text-slate-50 sm:text-5xl">
                        Contact Us
                    </h2>
                    <form
                        action=""
                        method=""
                        className="mx-auto flex max-w-4xl flex-col gap-4 justify-self-start text-2xl sm:text-3xl"
                    >
                        <label
                            className="ml-4 mt-5 font-bold text-slate-800 dark:text-slate-50"
                            htmlFor="subject"
                        >
                            Subject:
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="Subject"
                            minLength={3}
                            maxLength={80}
                            className="w-full rounded-xl border border-solid border-slate-700 p-3 text-xl text-slate-900 focus:outline-none dark:border-none dark:bg-gray-900 dark:text-slate-50 dark:shadow-md dark:shadow-slate-900 sm:text-2xl"
                            required
                        />

                        <label
                            className="ml-4 mt-5 font-bold text-slate-800 dark:text-slate-50"
                            htmlFor="message"
                        >
                            Message:
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            minLength={3}
                            placeholder="Your Message ..."
                            className="w-full rounded-xl border border-solid border-slate-700 p-3 text-xl text-slate-900 focus:outline-none dark:border-none dark:bg-gray-900 dark:text-slate-50 dark:shadow-md dark:shadow-slate-900 sm:text-2xl"
                            rows={10}
                            required
                        />

                        <button className="w-48 self-end rounded-xl border border-slate-700 bg-teal-700 p-4 text-xl text-white hover:bg-teal-600 dark:border-none dark:shadow-md dark:shadow-slate-800">
                            Submit
                        </button>
                    </form>
                </section>
                {/* contact us: end */}
            </main>

            {/* footer: start */}
            <footer id="footer" className="text-md bg-teal-700 text-white sm:text-lg">
                <section className="max-x-4xl mx-auto flex flex-col justify-between p-4 sm:flex-row sm:p-8">
                    <address className="text-md sm:text-lg">
                        <h2>Acme Rocket-Powered Products, Inc.</h2>
                        123 Astro Way
                        <br />
                        Faifield, New Jersey 1235-6789
                        <br />
                        Email: <a href="mailto:contact@acmerockets.com">contact@acmerockets.com</a>
                        <br />
                        Phone: <a href="tel:+12223334455">+1 222 333 4455</a>
                    </address>

                    <nav className="hidden flex-col gap-2 sm:flex" aria-label="footer">
                        <a
                            href="#rockets"
                            className="before:relative before:-left-4 before:top-4 before:block before:h-2 before:w-2 before:rotate-45 before:transform before:border-r-2 before:border-t-2 before:content-[''] hover:opacity-80"
                        >
                            Our Rockets
                        </a>
                        <a
                            href="#testimonials"
                            className="before:relative before:-left-4 before:top-4 before:block before:h-2 before:w-2 before:rotate-45 before:transform before:border-r-2 before:border-t-2 before:content-[''] hover:opacity-80"
                        >
                            Testimonials
                        </a>
                        <a
                            href="#contact"
                            className="before:relative before:-left-4 before:top-4 before:block before:h-2 before:w-2 before:rotate-45 before:transform before:border-r-2 before:border-t-2 before:content-[''] hover:opacity-80"
                        >
                            Contact Us
                        </a>
                    </nav>

                    <div className="mt-8 flex flex-col text-center sm:gap-2">
                        <p className="">
                            Copyright &copy; <span>{new Date().getFullYear()}</span>
                        </p>
                        <p>All Rights Reserved.</p>
                    </div>
                </section>
            </footer>
            {/* footer: end */}
        </>
    )
}

export default Main
