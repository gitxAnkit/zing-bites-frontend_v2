const Footer = () => {
  return (
    <footer className="bg-red-700 py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <span
          className="italic text-4xl font-black tracking-tight text-white"
          style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: '-0.02em' }}
        >
          Zing Bites
        </span>
        <div className="flex gap-6 text-white font-medium tracking-tight">
          <a
            href="#"
            className="hover:underline hover:text-gray-200 transition"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:underline hover:text-gray-200 transition"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
