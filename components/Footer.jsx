import Image from "next/image";
import Link from "next/link";

import React from "react";
import { FaInstagram } from "react-icons/fa";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#1E2538]">
        <div className="container py-12">
          <div className=" flex flex-col gap-6 lg:gap-9">
            <Image
              src="/assets/homepage/footer-logo.png"
              alt="footer logo"
              width={800}
              height={95}
              className="mx-auto"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 h-full">
              <div className="flex flex-col gap-2 lg:gap-4  p-6 lg:p-10 rounded-2xl bg-[#4B5160]">
                <h4 className="pb-1 lg:pb-3 mb-1 lg:mb-3 border-b-1 border-white uppercase font-semibold text-xl lg:text-2xl text-white">
                  CONTACT 24/7
                </h4>
                <Link
                  href={"tel:(813)922-0228"}
                  className="text-base lg:text-lg font-medium text-white hover:text-[#ED1B24] duration-500"
                >
                  (813) 922-0228
                </Link>
                <Link
                  href={"tel:(727)955-1922"}
                  className="text-base lg:text-lg font-medium text-white hover:text-[#ED1B24] duration-500"
                >
                  (727) 955-1922
                </Link>
                <Link
                  href="/contact"
                  className="text-base lg:text-lg font-medium text-white hover:text-[#ED1B24] duration-500"
                >
                  MESSAGE US
                </Link>
                <Link
                  href="#"
                  className="text-base lg:text-lg font-medium text-white hover:text-[#ED1B24] duration-500 uppercase"
                >
                  3114 N. BOULEVARD TAMPA, FL 33603
                </Link>
                <Link
                  href="#"
                  className="text-base lg:text-lg font-medium text-white hover:text-[#ED1B24] duration-500 uppercase"
                >
                  801 W. Bay Dr., Suite 229, Largo, FL 33770 <br/> (Satellite Office -
                    By Appointment)
                </Link>
              </div>
              <div className="flex flex-col gap-2 lg:gap-4  p-6 lg:p-10 rounded-2xl bg-[#4B5160]">
                <h4 className="pb-1 lg:pb-3 mb-1 lg:mb-3 border-b-1 border-white uppercase font-semibold text-xl lg:text-2xl text-white">
                  BROWSE
                </h4>

                <Link
                  href="/about-our-firm"
                  className="text-base lg:text-lg font-medium text-white hover:text-[#ED1B24] duration-500"
                >
                  ABOUT THE FIRM
                </Link>
                {/* <Link
                  href="#"
                  className="text-base lg:text-lg font-medium text-white hover:text-[#ED1B24] duration-500"
                >
                  OUR RESULTS
                </Link> */}
                <Link
                  href="/testimonials"
                  className="text-base lg:text-lg font-medium text-white hover:text-[#ED1B24] duration-500"
                >
                  REVIEWS
                </Link>
                <Link
                  href="/contact"
                  className="text-base lg:text-lg font-medium text-white hover:text-[#ED1B24] duration-500"
                >
                  DO YOU HAVE A CASE?
                </Link>
                <p
                  // href="/career"
                  className="text-base lg:text-lg font-medium text-white hover:text-[#ED1B24] duration-500"
                >
                  EMPLOYMENT
                </p>
              </div>
              <div className="flex flex-col gap-2 lg:gap-4  p-6 lg:p-10 rounded-2xl bg-[#4B5160]">
                <h4 className="pb-1 lg:pb-3 mb-1 lg:mb-3 border-b-1 border-white uppercase font-semibold text-xl lg:text-2xl text-white">
                  AREAS OF PRACTICE
                </h4>
                <p
                  // href={`/areas-of-practice/tampa-bay-personal-injury-lawyer`}
                  className="text-base lg:text-lg font-medium text-white hover:text-[#ED1B24] duration-500 uppercase"
                >
                  Auto Accidents
                </p>
                <p
                  // href="/areas-of-practice/tampa-bay-auto-accidents-lawyer"
                  className="text-base lg:text-lg font-medium text-white hover:text-[#ED1B24] duration-500 uppercase"
                >
                  Premises Liability
                </p>
                <p
                  // href="/areas-of-practice/slip-fall-personal-injury-litigation"
                  className="text-base lg:text-lg font-medium text-white hover:text-[#ED1B24] duration-500 uppercase"
                >
                  General Negligence
                </p>
                <p
                  // href="/areas-of-practice/medical-malpractice-personal-injury-litigation"
                  className="text-base lg:text-lg font-medium text-white hover:text-[#ED1B24] duration-500 uppercase"
                >
                  Wrongful Death
                </p>
                <p
                  // href="/areas-of-practice/premises-liability-personal-injury-litigation"
                  className="text-base lg:text-lg font-medium text-white hover:text-[#ED1B24] duration-500 uppercase"
                >
                  Medical Malpractice
                </p>

                <p
                  // href="/areas-of-practice/dog-bites-personal-injury-litigation"
                  className="text-base lg:text-lg font-medium text-white hover:text-[#ED1B24] duration-500 uppercase"
                >
                  Nursing Home Abuse
                </p>

                <p
                  // href="/areas-of-practice/dog-bites-personal-injury-litigation"
                  className="text-base lg:text-lg font-medium text-white hover:text-[#ED1B24] duration-500 uppercase"
                >
                  Workers’ Compensation
                </p>

                <p
                  // href="/areas-of-practice/dog-bites-personal-injury-litigation"
                  className="text-base lg:text-lg font-medium text-white hover:text-[#ED1B24] duration-500 uppercase"
                >
                  Product Liability
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 lg:gap-4  p-6 lg:p-10 rounded-2xl bg-[#4B5160]">
              <h4 className="pb-1 lg:pb-3 mb-1 lg:mb-3 border-b-1 border-white uppercase font-semibold text-xl lg:text-2xl text-white">
                Legal Notice
              </h4>
              <p className="font-medium text-sm text-white">
                The hiring of a lawyer is an important decision that should not
                be based solely on advertisements. Before you decide, ask us to
                send you free written information about our qualifications and
                experience. This web site is designed for general information
                only. The Information presented on this site should not be
                construed to be legal advice nor the formation of a
                lawyer/client relationship.
              </p>
              <p className="font-medium text-sm text-white">
                These Sites are not intended to be a source for legal advice,
                and thus you should not rely on any information provided on the
                Sites as such. You should not consider the information provided
                on the Sites to be an invitation for an attorney-client
                relationship, and should always seek the advice of competent
                counsel. The materials on the Sites have been prepared by Carter
                Injury Law, PA for general informational purposes only, may not
                reflect current legal developments, and do not constitute legal
                advice. The Materials offered on the Sites or other linked sites
                and receipt thereof is not intended to create, nor does or will
                it create, a lawyer-client relationship with Carter Injury Law,
                PA. Any opinions expressed through the Materials on the Sites
                are the opinions of the particular author and may not reflect
                the opinions of Carter Injury Law, PA or any individual
                attorney. Although we strive to keep the Materials on the Sites
                relevant and useful, laws are often changing, and we cannot
                guarantee that all of the Materials are complete, accurate or
                current. Carter Injury Law, PA expressly disclaim all
                responsibility and liability for any actions taken or not taken
                on the basis of any of the content on the Sites. Some photos on
                the Sites are of models and not of clients or firm personnel and
                may be simulations of actual scenes.
              </p>
              <p className="font-medium text-sm text-white">
                Any testimonials or endorsements contained on the Sites do not
                constitute a guarantee, warranty or prediction regarding the
                outcome of your legal matter. Prior results do not guarantee or
                predict a similar outcome. Every case is different and must be
                judged on its own merits. Results depend upon a variety of
                factors unique to each representation.
              </p>
            </div>
            <div className=" flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-2 lg:gap-4">
              <p className="flex flex-wrap gap-3 text-white justify-center lg:justify-start text-sm 2xl:text-lg">
                <span>
                  <span>© {new Date().getFullYear()}</span> CarterInjuryLaw.com
                </span>
                <span>|</span>
                <span>All Rights Reserved</span>
              </p>
              <div className="flex flex-wrap gap-3 text-white justify-center items-center lg:justify-start text-sm 2xl:text-lg">
                <Link
                  href="/privacy-policy"
                  className="hover:text-[#EC1D21] duration-300"
                >
                  Disclaimer
                </Link>
                <span>|</span>
                <Link
                  href="/privacy-policy"
                  className="hover:text-[#EC1D21] duration-300"
                >
                  Privacy Policy
                </Link>
                <span>|</span>
                <Link
                  href="/terms-of-service"
                  className="hover:text-[#EC1D21] duration-300"
                >
                  Terms Of Service
                </Link>
                <span>|</span>
                <Link
                  href="/cookie-policy"
                  className="hover:text-[#EC1D21] duration-300"
                >
                  Cookie Policy
                </Link>
              </div>
              <div className="text-white flex gap-2 mt-4 md:mt-0">
                <Link
                  href="https://www.facebook.com/CarterInjuryLaw/"
                  target="_blank"
                  className="inline-block p-2 rounded bg-[#EC1D21] hover:bg-white hover:text-[#EC1D21] duration-300"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/carter-injury-law/"
                  target="_blank"
                  className="inline-block p-2 rounded bg-[#EC1D21] hover:bg-white hover:text-[#EC1D21] duration-300"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  href="https://x.com/CarterInjuryLaw"
                  target="_blank"
                  className="inline-block p-2 rounded bg-[#EC1D21] hover:bg-white hover:text-[#EC1D21] duration-300"
                >
                  <FaTwitter />
                </Link>
                <Link
                  href="https://www.instagram.com/carterinjurylaw/"
                  target="_blank"
                  className="inline-block p-2 rounded bg-[#EC1D21] hover:bg-white hover:text-[#EC1D21] duration-300"
                >
                  <FaInstagram />
                </Link>
                <Link
                  href="https://www.youtube.com/@CarterInjuryLaw"
                  target="_blank"
                  className="inline-block p-2 rounded bg-[#EC1D21] hover:bg-white hover:text-[#EC1D21] duration-300"
                >
                  <FaYoutube />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
