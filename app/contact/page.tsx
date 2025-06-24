import ContactCards from '@/components/contact/contact-cards';
import Form from '@/components/contact/Form';
import Container from '@/components/shared/container';
import Image from 'next/image';
import React from 'react';

function Contact() {
  return (
    <main>
      <section>
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full lg:w-2/5 order-2 lg:order-1">
              <Image
                src={'/contact.png'}
                alt="contact"
                width={1000}
                height={1000}
                className="w-full h-auto"
              />
            </div>
            <div className="w-full lg:w-3/5 order-1 lg:order-2">
              <Form />
            </div>
          </div>

          <ContactCards />
        </Container>
      </section>
    </main>
  );
}

export default Contact;
