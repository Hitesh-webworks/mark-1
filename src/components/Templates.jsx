export default function Templates() {
  const templates = [
    { name: "School Classic", img: "/template-images/school-classic.jpg" },
    { name: "Modern Coaching", img: "/template-images/modern-coaching.jpg" },
    { name: "Academic Pro", img: "/template-images/academic-pro.jpg" }
  ]

  return (
    <section id="templates" className="py-16 bg-blue-50 text-center">
      <h2 className="text-3xl font-bold text-blue-600 mb-10">Our Templates</h2>
      <div className="grid md:grid-cols-3 gap-8 px-6">
        {templates.map((t, i) => (
          <div key={i} className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
            <img src={t.img} alt={t.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-3">{t.name}</h3>
              <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                View Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
