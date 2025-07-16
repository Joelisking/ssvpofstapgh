import React from 'react';
import Container from '../shared/container';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '../ui';

function PaymentMethods() {
  return (
    <section className="mt-32 sm:mt-40">
      <Container>
        <div className="bg-[#F8FAFC] rounded-2xl p-4 sm:p-6 md:p-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-primary">
            Payment Methods
          </h1>

          {/* Card 1 */}
          <div className="mt-8 bg-white p-8 sm:p-12 md:p-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 rounded-2xl">
            <div className="bg-[#F8FAFC] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl duration-200 flex flex-col h-full">
              <div className="h-48 flex items-center justify-center bg-white">
                <Image
                  src="/donate/mtn-momo.png"
                  alt="MTN Momo"
                  width={668}
                  height={294}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-center">
                <h2 className="text-sm text-gray-500">
                  MTN Momo Number
                </h2>
                <p className="font-semibold text-lg">0595649826</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#F8FAFC] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl duration-200 flex flex-col h-full">
              <div className="h-48 flex items-center justify-center bg-white">
                <Image
                  src="/donate/boa.jpg"
                  alt="Bank of Africa"
                  width={668}
                  height={294}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-center">
                <h2 className="text-sm text-gray-500">
                  Bank of Africa
                </h2>
                <p className="font-semibold text-lg">02956050005</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#F8FAFC] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl duration-200 flex flex-col h-full">
              <div className="h-48 flex items-center justify-center bg-white">
                <Image
                  src="/donate/paystack.png"
                  alt="Paystack"
                  width={668}
                  height={294}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="p-4">
                <h2 className="text-sm text-gray-500">
                  Pay directly through
                </h2>
                <div className="flex-1 flex flex-row justify-between items-center">
                  <p className="font-semibold text-lg">Paystack</p>
                  <Link href="/donate/paystack">
                    <Icon name="MoveRight" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default PaymentMethods;
