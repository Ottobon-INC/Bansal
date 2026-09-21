import SEO from '../../../components/seo/SEO';
import { MapPin, Phone, Mail, Clock, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "be39e75f-eb1e-4df9-9120-388bd47ce932",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: "New Contact Form Submission - Bansal Junior College",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <>
      <SEO
        title="Contact Bansal Classes Vizag | Address & Contact"
        description="Get in touch with Bansal Junior College Vizag. Find our campus location, phone number, and send us your inquiries for admissions."
        canonicalUrl="https://bansalclassesvizag.com/contact-us"
      />

      {/* Page Header */}
      <header className="bg-college-navy text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-college-gold rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">Contact Us</h1>
          <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
            Whether you're looking for more information about our programs, need assistance with admissions, or have questions about your academic journey, the Bansal Junior College team is here to guide you every step of the way.
          </p>
        </div>
      </header>

      <main className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          
          {/* Top Contact Info Cards with Large Icons */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center text-college-navy mb-6">
                <MapPin className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Our Location</h3>
              <a href="https://maps.app.goo.gl/3HSgEqCEVfjYzBAd8" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-college-navy transition-colors text-sm leading-relaxed">
                49-52-5, Sankara Matam Rd, Beside Karnataka Bank, Akkayapalem, Visakhapatnam 530016
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center text-college-navy mb-6">
                <Phone className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Phone Number</h3>
              <p className="text-gray-600 text-sm mb-2">Call us for immediate assistance.</p>
              <a href="tel:+918919116433" className="text-college-gold font-bold text-lg hover:text-yellow-600 transition-colors">
                +91-8919116433
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center text-college-navy mb-6">
                <Mail className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Email Address</h3>
              <p className="text-gray-600 text-sm mb-2">Drop us a line anytime!</p>
              <a href="mailto:bansalclassesvizag@gmail.com" className="text-college-navy hover:text-[#1D4ED8] transition-colors font-semibold">
                bansalclassesvizag<br/>@gmail.com
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center text-college-navy mb-6">
                <Clock className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Opening Hours</h3>
              <p className="text-gray-600 font-semibold mb-1">Monday – Saturday</p>
              <p className="text-gray-600">09:00 AM - 7:00 PM</p>
            </div>

          </div>

          {/* Form and Map Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-200">
            
            {/* Contact Form */}
            <div className="relative h-full flex flex-col justify-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-college-navy mb-4">Send us a Message</h2>
                <div className="w-20 h-1 bg-college-gold mb-8"></div>
                <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                  Looking for expert advice? Have questions about courses or fees? Fill out the form below and our counseling team will reach out to you directly!
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-600 mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] transition-colors bg-gray-50 focus:bg-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-600 mb-2">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] transition-colors bg-gray-50 focus:bg-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-600 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] transition-colors bg-gray-50 focus:bg-white resize-none"
                    placeholder="How can we help you achieve your dreams?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className="w-full md:w-auto bg-college-navy hover:bg-blue-900 text-white font-bold py-4 px-10 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 group text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <span>Sending...</span>
                      <Loader2 className="w-5 h-5 animate-spin" />
                    </>
                  ) : status === 'success' ? (
                    <>
                      <span>Message Sent!</span>
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                    </>
                  ) : (
                    <>
                      <span>Submit Message</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
                {status === 'error' && (
                  <p className="text-red-500 text-sm font-semibold">
                    Oops! Something went wrong. Please email us directly or try again later.
                  </p>
                )}
              </form>
            </div>

            {/* Map */}
            <div className="h-[500px] lg:h-full min-h-[500px] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <iframe 
                src="https://maps.google.com/maps?q=Bansal+Junior+College,+Sankara+Matam+Rd,+Santhipuram,+Visakhapatnam&t=m&z=15&output=embed&iwloc=near" 
                title="Bansal Junior College Vizag Location Map"
                className="w-full h-full"
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

        </div>
      </main>
    </>
  );
}
