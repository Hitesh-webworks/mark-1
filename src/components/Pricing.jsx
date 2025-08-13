export default function Pricing() {
  const plans = [
    { name: "Basic", price: "₹4,999", features: ["1-Page Website", "Responsive Design", "Contact Form"] },
    { name: "Standard", price: "₹9,999", features: ["Multi-Page Website", "Online Admission Form", "SEO Setup"] },
    { name: "Premium", price: "₹14,999", features: ["Custom Design", "Event Management", "Full SEO & Support"] }
  ]

  return (
    <section id="pricing" className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold text-blue-600 mb-10">Pricing</h2>
      <div className="grid md:grid-cols-3 gap-8 px-6">
        {plans.map((p, i) => (
          <div key={i} className="border rounded-lg p-6 shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">{p.name}</h3>
            <p className="text-blue-600 text-xl font-bold mb-4">{p.price}</p>
            <ul className="mb-4">
              {p.features.map((f, j) => <li key={j} className="text-gray-600">• {f}</li>)}
            </ul>
            <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Choose Plan
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
