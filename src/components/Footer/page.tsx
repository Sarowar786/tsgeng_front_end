import Image from "next/image";
import Link from "next/link";
import { Linkedin, Twitter, Facebook, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">

        {/* Top Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo + Description */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Fleet Quote"
              width={160}
              height={40}
              className="mb-4"
            />

            <p className="text-sm leading-relaxed mb-6">
              AI-powered fleet vehicle quote generation for dealerships and
              commercial buyers. Professional, fast, and accurate.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              <div className="bg-gray-800 hover:bg-primary transition p-2 rounded-md cursor-pointer">
                <Linkedin size={16} className="text-primary" />
              </div>
              <div className="bg-gray-800 hover:bg-primary transition p-2 rounded-md cursor-pointer">
                <Twitter size={16} className="text-primary"/>
              </div>
              <div className="bg-gray-800 hover:bg-primary transition p-2 rounded-md cursor-pointer">
                <Facebook size={16} className="text-primary"/>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className=" font-semibold mb-5 text-sm tracking-wide">
              QUICK LINKS
            </h3>

            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-white">Home</Link></li>
              <li><Link href="#" className="hover:text-white">About Us</Link></li>
              <li><Link href="#" className="hover:text-white">Services</Link></li>
              <li><Link href="#" className="hover:text-white">Blog</Link></li>
              <li><Link href="#" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className=" font-semibold mb-5 text-sm tracking-wide">
              SERVICES
            </h3>

            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-white">Fleet Quote Generation</Link></li>
              <li><Link href="#" className="hover:text-white">Vehicle Upfitting</Link></li>
              <li><Link href="#" className="hover:text-white">Fleet Consulting</Link></li>
              <li><Link href="#" className="hover:text-white">Lease & Finance</Link></li>
              <li><Link href="#" className="hover:text-white">Maintenance Programs</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className=" font-semibold mb-5 text-sm tracking-wide">
              CONTACT
            </h3>

            <div className="space-y-4 text-sm">

              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-1" />
                <p>
                  1200 Fleet Drive, Suite 400 <br />
                  Dallas, TX 75201
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                <p>(800) 555-1234</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                <p>fleet@fleetquoteai.com</p>
              </div>

            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">

          <p>© 2026 FleetQuoteAI. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
            <Link href="#" className="hover:text-white">Cookie Policy</Link>
          </div>

        </div>
      </div>
    </footer>
  );
}