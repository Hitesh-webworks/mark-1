export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-blue-50 text-center">
      <h2 className="text-3xl font-bold text-blue-600 mb-10">Contact Us</h2>
      <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow">
        <input type="text" placeholder="Name" className="w-full p-3 border mb-4 rounded" />
        <input type="email" placeholder="Email" className="w-full p-3 border mb-4 rounded" />
        <textarea placeholder="Message" className="w-full p-3 border mb-4 rounded"></textarea>
        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>
    </section>
  )
}
