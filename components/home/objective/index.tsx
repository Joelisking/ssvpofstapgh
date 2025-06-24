import Container from '@/components/shared/container';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';

export const Objective = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#012956] via-[#013FB1] to-[#3F87FF] py-12 sm:py-16 lg:py-20 text-white">
      <div className="absolute inset-0 z-0 opacity-10">
        {/* You can add a background pattern here if needed */}
      </div>
      <Container className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-24">
        {/* Left Side */}
        <div className="z-10 flex flex-col justify-center w-full lg:w-auto">
          <p className="mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg font-semibold text-yellow-400">
            &quot;No act of charity is foreign to the society.&quot;
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight hidden lg:block">
            Our Main
            <br />
            Objective
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight lg:hidden">
            Our Main Objective
          </h2>
        </div>

        {/* Right Side */}
        <div className="z-10 gap-4 sm:gap-6 grid grid-cols-1 sm:grid-cols-2 w-full lg:w-auto">
          <div className="rounded-xl sm:rounded-2xl bg-card bg-opacity-25 px-4 sm:px-6 py-6 sm:py-8 lg:py-10 shadow-lg">
            <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl lg:text-2xl font-bold">
              Our Vision
            </h3>
            <p className="text-sm sm:text-base text-gray-300">
              To be recognised as a global organisation which promotes
              the integral dignity of people in need.
            </p>
          </div>
          <div className="rounded-xl sm:rounded-2xl bg-card-foreground px-4 sm:px-6 py-6 sm:py-8 lg:py-10 shadow-lg">
            <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl lg:text-2xl font-bold">
              Our Mission
            </h3>
            <p className="text-sm sm:text-base text-gray-300">
              A network of friends who seek personal holiness through
              service to those in need and in defence of social
              justice.
            </p>
          </div>
          <div className="rounded-xl sm:rounded-2xl bg-card bg-opacity-25 px-4 sm:px-6 py-6 sm:py-8 lg:py-10 shadow-lg sm:col-span-2">
            <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl lg:text-2xl font-bold">
              Our Values
            </h3>
            <p className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-300">
              Respect and love of neighbour, joy through mission,
              personal contact with those in need, humility and
              empathy.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button className="bg-card-foreground text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
                Who we are
                <MoveRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button className="bg-card-foreground text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
                What we do
                <MoveRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Objective;
