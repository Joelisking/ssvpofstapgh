import Container from '@/components/shared/container';
import Image from 'next/image';
import React from 'react';

function LogoExplanation() {
  return (
    <section className="mt-32">
      <Container className="bg-secondary rounded-2xl">
        <div className="p-4 sm:p-8">
          <div className="flex items-center gap-4 mb-6">
            <Image
              src="/logo.png"
              alt="Logo"
              width={80}
              height={80}
              className="rounded-full"
            />
            <h2 className="text-3xl md:text-4xl text-primary font-semibold">
              Logo Explanation
            </h2>
          </div>

          <div className="font-light">
            <ul className="list-disc list-inside">
              <li>
                The fish is the symbol of Christianity and, in this
                case, represents the Society of Saint Vincent de Paul
              </li>
              <li>
                The eye of the fish is the watchful eye of God seeking
                to help the poor among us
              </li>
              <li>
                The crossing at the tail or the tie-knot represents
                unity and oneness among members and also the union
                with the poor
              </li>
              <li>
                The circle around the logo signifies the worldwide
                nature of SSVP
              </li>
              <li>
                The words serviens in spe mean ‘to serve in hope’; the
                hope that comes from Our Lord Jesus Christ
              </li>
            </ul>

            <p className="mt-4">
              Annual Report: which encompasses all activities
              including financial statement is presented annually to
              the Conference and a certified copy submitted to the
              Spiritual Director. Current Spiritual Director: Rev. Fr.
              William Abaiku Apprey, Chaplain of STAP, UG Legon.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default LogoExplanation;
