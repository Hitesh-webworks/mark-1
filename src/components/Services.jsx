export default function Services() {
  const services = [
    { title: "Responsive Design", desc: "Websites that work on all devices." },
    { title: "Online Admission Forms", desc: "Easy-to-use forms for students." },
    { title: "Events & Notices", desc: "Keep parents updated in real time." },
    { title: "SEO Optimization", desc: "Get found on Google easily." }
  ]

  return (
    <section id="services" className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold text-blue-600 mb-10">What We Can Provide</h2>
      <div className="grid md:grid-cols-4 gap-8 px-6">
        {services.map((s, i) => (
          <div key={i} className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
