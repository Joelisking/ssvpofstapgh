import React from 'react';
import Container from '@/components/shared/container';
import { Button } from '@/components/ui';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@/components/ui';

function PaystackComingSoon() {
  return (
    <main className="">
      <Container className="pt-32 sm:pt-40 pb-12 sm:pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-6xl font-bold text-primary mb-6">
              Coming Soon
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto">
              We&apos;re working hard to bring you secure online
              payments through Paystack
            </p>
          </div>

          {/* Paystack Logo */}
          <div className="mb-12">
            <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg inline-block">
              <Image
                src="/donate/paystack.png"
                alt="Paystack"
                width={300}
                height={150}
                className="w-64 sm:w-80 h-auto object-contain"
              />
            </div>
          </div>

          {/* Features */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon
                  name="Shield"
                  className="w-6 h-6 text-green-600"
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">
                Secure Payments
              </h3>
              <p className="text-gray-600">
                Bank-level security for all transactions
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">
                Instant Processing
              </h3>
              <p className="text-gray-600">
                Real-time payment confirmation
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon
                  name="Smartphone"
                  className="w-6 h-6 text-purple-600"
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">
                Multiple Options
              </h3>
              <p className="text-gray-600">
                Cards, mobile money, and bank transfers
              </p>
            </div>
          </div> */}

          {/* Progress Bar */}
          {/* <div className="mb-12">
            <div className="bg-white rounded-full p-2 shadow-md max-w-md mx-auto">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full w-3/4 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Development Progress: 75%
            </p>
          </div> */}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/donate">
              <Button variant="outline" size="lg">
                <Icon name="ArrowLeft" className="w-5 h-5 mr-2" />
                Back to Donate
              </Button>
            </Link>
          </div>

          {/* Footer Note */}
          <div className="mt-12 p-6 bg-gray-50 rounded-xl shadow-md">
            <p className="text-gray-600">
              <Icon
                name="Info"
                className="w-5 h-5 inline mr-2 text-blue-500"
              />
              In the meantime, you can still donate using our other
              payment methods
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}

export default PaystackComingSoon;
