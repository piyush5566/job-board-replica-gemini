
import React from 'react';
import Header from '@/components/Header';
import NewFooter from '@/components/NewFooter';
import ContactHero from '@/components/ContactHero';
import ContactForm from '@/components/ContactForm';
import ContactInfoCard from '@/components/ContactInfoCard';
import { MapPin, Mail, Phone } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />
      <main className="flex-grow">
        <ContactHero />
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16 text-slate-800">
              Contact For Any Query
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 md:mb-16">
              <ContactInfoCard
                icon={<MapPin size={24} className="text-primary" />}
                text="Rashtrapati Bhavan, President's Estate, New Delhi, Delhi 110004, India"
              />
              <ContactInfoCard
                icon={<Mail size={24} className="text-primary" />}
                text="plccodes756@gmail.com"
                href="mailto:plccodes756@gmail.com"
              />
              <ContactInfoCard
                icon={<Phone size={24} className="text-primary" />}
                text="+91 7853289122"
                href="tel:+917853289122"
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.826080563838!2d77.19963331507907!3d28.60802898242907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d35f348790bff%3A0x426f4596273f3a5a!2sRashtrapati%20Bhavan%2C%20President's%20Estate%2C%20New%20Delhi%2C%20Delhi%20110004!5e0!3m2!1sen!2sin!4v1716091851909!5m2!1sen!2sin"
                  width="100%"
                  height="480" // Adjusted height to better match form
                  style={{ border:0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <NewFooter />
    </div>
  );
};

export default ContactPage;

