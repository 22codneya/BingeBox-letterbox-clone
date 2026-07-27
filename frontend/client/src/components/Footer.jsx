import {
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <footer className="footer footer-vertical lg:footer-horizontal footer-center bg-base-200 text-base-content px-10 py-12 gap-8">
        <div className="flex flex-col items-center gap-2">
  <h2 className="text-3xl font-bold text-primary">
    🎬 BINGE BOX
  </h2>

  <p className="text-sm opacity-70">
    Track. Rate. Discover.
  </p>
</div>
  <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Terms</a>
    <a className="link link-hover">Help</a>
  </nav>
    <nav>
  <div className="flex gap-6">
    <a
      href="https://instagram.com/yourusername"
      target="_blank"
      rel="noopener noreferrer" //security
      className="hover:text-primary transition-colors"
    >
     <FaInstagram size={24} />
    </a>

    <a
      href="mailto:your@email.com"
      className="hover:text-primary transition-colors"
    >
     <MdEmail size={24} />
    </a>

    <a
      href="https://x.com/yourusername"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-primary transition-colors"
    >
      <FaXTwitter size={24} />
    </a>

    <a
      href="https://youtube.com/@yourchannel"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-primary transition-colors"
    >
     <FaYoutube size={24} />
    </a>
  </div>
</nav>
   {/* Copyright */}
      <aside className="text-center">
        <p className="text-sm opacity-70">
          © {new Date().getFullYear()} BingeBox • Discover • Rate • Watch
        </p>
      </aside>
</footer>
  );
};

export default Footer;