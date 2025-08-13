import AnimatedSection from "./AnimatedSection"

export default function Hero() {
  return (
    <section className="bg-blue-50 min-h-screen flex flex-col justify-center items-center text-center px-6">
      <AnimatedSection>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-700 mb-6 leading-tight">
            Modern Websites for Schools & Coaching Centers
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            We help educational institutes build responsive, user-friendly, and engaging websites that
            attract students and improve communication.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
          >
            Request a Website
          </a>
        </div>
      </AnimatedSection>
    </section>
  )
}
