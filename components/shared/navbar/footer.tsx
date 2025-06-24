import React from 'react';
import Container from '../container';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { Icon } from '@/components/ui';
import Link from 'next/link';
import ContactSection from '@/components/home/contact';

function Footer() {
  return (
    <div>
      <ContactSection />

      <footer className="bg-primary text-white py-20 mt-12 sm:mt-16">
        <Container>
          <div className="flex items-center justify-between">
            <div>
              <Image
                src="/logo.png"
                alt="logo"
                width={100}
                height={100}
              />
            </div>
            <div className="max-w-xl">
              <span>
                <span className="text-[#00C2FF] font-bold">
                  Meeting Days:
                </span>{' '}
                2nd and 4th Sundays of every month at the St. Thomas
                Aquinas Parish Hall, Legon after the 9am mass
              </span>
            </div>
          </div>

          <Separator className="opacity-30 my-10" />

          <div className="flex items-center justify-between">
            <div>
              <p>
                Copyright © 2025 Society of St. Vincent de Paul, Legon
                Conference. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link href={''}>
                <Icon name="Facebook" fill="#fff" />
              </Link>
              <Link href={''}>
                <Icon name="Twitter" fill="#fff" />
              </Link>
              <Link href={''}>
                <Icon name="Linkedin" fill="#fff" />
              </Link>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
