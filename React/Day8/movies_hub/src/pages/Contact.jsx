
import { Form } from "react-router-dom";


export const contactData = async({request})=>{
  try {
    const response = await request.formData();
    console.log(response);
    console.log(response);
    const result = Object.fromEntries(response);  //to convert the formdata to a proper object
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}


export default function Contact() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <h1 className="text-5xl font-bold text-center mb-6">Contact Us 📩</h1>
      <p className="text-gray-300 text-center max-w-2xl mx-auto">
        Have any questions or feedback? Reach out to us!
      </p>


      <div className="mt-10 grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">Send Us a Message</h3>
          <Form method="POST" action="/contact">
            <input type="text" name="name" id="name" placeholder="Your Name" required className="w-full p-3 bg-gray-700 border border-gray-600 rounded mb-5" style={{marginBottom:'12px'}} />
            <input type="email" name="email" id="email" placeholder="Your Email" required className="w-full p-3 bg-gray-700 border border-gray-600 rounded mb-4" style={{marginBottom:'12px'}} />
            <textarea placeholder="Your Message" name="message" id="message" className="w-full p-3 bg-gray-700 border border-gray-600 rounded mb-4 h-32" required style={{marginBottom:'12px'}}></textarea>
            <button type="submit" className="w-full bg-red-500 hover:bg-red-600 p-3 rounded text-white">
              Send Message
            </button>
          </Form>
        </div>


        {/* Contact Details */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
          <p className="text-gray-300">📍 Location: Hollywood, CA, USA</p>
          <p className="text-gray-300 mt-2">📧 Email: support@moviehub.com</p>
          <p className="text-gray-300 mt-2">📞 Phone: +1 234 567 890</p>


          <div className="flex space-x-4 mt-6">
            <a href="#" className="hover:text-red-400">🔗 Facebook</a>
            <a href="#" className="hover:text-red-400">🔗 Twitter</a>
            <a href="#" className="hover:text-red-400">🔗 Instagram</a>
          </div>
        </div>
      </div>
    </section>
  );
}


