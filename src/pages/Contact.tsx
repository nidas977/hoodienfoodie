
import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { useEffect } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [validationErrors, setValidationErrors] = useState<{[key: string]: string}>({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const errors: {[key: string]: string} = {};
    
    if (!name.trim()) errors.name = "Name is required";
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!validateEmail(email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!message.trim()) errors.message = "Message is required";
    
    setValidationErrors(errors);
    
    if (Object.keys(errors).length === 0) {
      // In a real app, you would send this to a server
      // For now, just show a success message and redirect to WhatsApp
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Open WhatsApp with a predefined message
      const whatsappMessage = `Hi, my name is ${name}. ${message}`;
      window.open(`https://wa.me/0403959785?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
      
      // Reset form
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark py-16 px-4">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Contact <span className="text-brand-blue">Us</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have questions or want to book our food truck for your event? Get in touch with us!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="order-2 md:order-1">
            <div className="bg-[#1a1a1a] rounded-lg p-6 shadow-xl h-full">
              <h2 className="text-xl font-semibold mb-6 text-white">Get In Touch</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-brand-blue mb-2">WhatsApp / Phone</h3>
                  <p className="text-gray-300">0403 959 785</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-brand-blue mb-2">Email</h3>
                  <p className="text-gray-300">info@hoodieandfoodie.com.au</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-brand-blue mb-2">Food Truck Location</h3>
                  <p className="text-gray-300 mb-2">
                    Our truck moves throughout Sydney. Follow us on Instagram for daily location updates!
                  </p>
                  <a 
                    href="https://www.instagram.com/hoodieandfoodie" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-brand-blue hover:underline"
                  >
                    @hoodieandfoodie
                  </a>
                </div>
                
                <div>
                  <h3 className="font-medium text-brand-blue mb-2">Hours</h3>
                  <ul className="text-gray-300 space-y-1">
                    <li>Monday - Friday: 11am - 9pm</li>
                    <li>Saturday: 12pm - 10pm</li>
                    <li>Sunday: 12pm - 8pm</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-medium text-brand-blue mb-2">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.instagram.com/hoodieandfoodie" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-300 hover:text-brand-blue transition-colors"
                  >
                    Instagram
                  </a>
                  <a 
                    href="https://www.facebook.com/hoodieandfoodie" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-300 hover:text-brand-blue transition-colors"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="order-1 md:order-2">
            <div className="bg-[#1a1a1a] rounded-lg p-6 shadow-xl">
              <h2 className="text-xl font-semibold mb-6 text-white">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#262626] text-white rounded-md px-4 py-2 border border-gray-700 focus:border-brand-blue focus:outline-none"
                    placeholder="Your Name"
                  />
                  {validationErrors.name && (
                    <p className="mt-1 text-red-500 text-sm">{validationErrors.name}</p>
                  )}
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#262626] text-white rounded-md px-4 py-2 border border-gray-700 focus:border-brand-blue focus:outline-none"
                    placeholder="Your Email"
                  />
                  {validationErrors.email && (
                    <p className="mt-1 text-red-500 text-sm">{validationErrors.email}</p>
                  )}
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#262626] text-white rounded-md px-4 py-2 border border-gray-700 focus:border-brand-blue focus:outline-none"
                    placeholder="Your Message"
                    rows={5}
                  ></textarea>
                  {validationErrors.message && (
                    <p className="mt-1 text-red-500 text-sm">{validationErrors.message}</p>
                  )}
                </div>
                
                <div className="text-center">
                  <Button 
                    type="submit"
                    className="bg-brand-blue hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-full text-lg w-full"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        {/* Map */}
        <div className="mt-12">
          <div className="bg-[#1a1a1a] rounded-lg p-6 shadow-xl">
            <h2 className="text-xl font-semibold mb-6 text-white">Today's Location</h2>
            <div className="aspect-video rounded-md overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.6270259765936!2d151.20181827633773!3d-33.875109471881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3ee605a0c3%3A0x5017d681632ccc0!2sCircular%20Quay%2C%20Sydney%20NSW%202000!5e0!3m2!1sen!2sau!4v1682152912999!5m2!1sen!2sau" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <p className="mt-4 text-gray-300">
              Today we're at Circular Quay from 11am - 8pm. Come say hi!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
