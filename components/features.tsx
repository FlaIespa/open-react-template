import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.png";
import { MdOutlineSyncAlt } from "react-icons/md";
import { FaAward } from "react-icons/fa6";
import { IoMdTrendingUp } from "react-icons/io";
import { IoVolumeMuteSharp } from "react-icons/io5";
import { GiFunnel } from "react-icons/gi";
import { GiThreeFriends } from "react-icons/gi";


export default function Features() {
  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                {/* Advanced Controls */}
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Why Choose Us?
            </h2>
            <p className="text-lg text-indigo-200/65">
              Where quality advice meets real reciprocity: help others, help
              yourself
            </p>
          </div>
          <div className="flex justify-center pb-4 md:pb-12" data-aos="fade-up">
            <Image
              className="max-w-none"
              src={FeaturesImage}
              width={1104}
              height={384}
              alt="Features"
            />
          </div>
          {/* Items */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            <article>
              <span className="mb-8">
                <MdOutlineSyncAlt color="#6366F1" size={26} />
              </span>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200 mt-4">
                Real Reciprocity
              </h3>
              <p className="text-indigo-200/65">
                Give and get feedback—it’s a balanced exchange.
              </p>
            </article>
            <article>
              <span className="mb-8">
                <FaAward color="#6366F1" size={26} />
              </span>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200 mt-4">
                Early Access Perks
              </h3>
              <p className="text-indigo-200/65">
                Join us now and get first dibs on posting your ideas and
                questions.
              </p>
            </article>
            <article>
              <span className="mb-8">
                <IoMdTrendingUp color="#6366F1" size={26} />
              </span>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200 mt-4">
                Grow Together
              </h3>
              <p className="text-indigo-200/65">
                A trusted community of startup leaders all working toward
                success.
              </p>
            </article>
            <article>
              <span className="mb-8">
                <IoVolumeMuteSharp color="#6366F1" size={26} />
              </span>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200 mt-4">
                No Noise, Just Value
              </h3>
              <p className="text-indigo-200/65">
                Every piece of feedback counts, with no upvotes or fluff.
              </p>
            </article>
            <article>
              <span className="mb-8">
                <GiFunnel color="#6366F1" size={26} />
              </span>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200 mt-4">
                Quality Over Quantity
              </h3>
              <p className="text-indigo-200/65">
                We’re focused on thoughtful, in-depth feedback rather than a
                flood of surface-level responses.
              </p>
            </article>
            <article>
              <span className="mb-8">
                <GiThreeFriends color="#6366F1" size={26} />
              </span>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200 mt-4">
                Build Lasting Connections
              </h3>
              <p className="text-indigo-200/65">
                Join a vibrant community where you can connect online and meet
                founders in person, expanding your network beyond the screen.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
