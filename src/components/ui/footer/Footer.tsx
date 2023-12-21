import { Linkedin, Mail, MapPin } from "react-feather";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 h-full w-full py-10">
      <div className="container text-white py-5 flex flex-wrap justify-between gap-7">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <div className="grid space-y-2">
              <h2 className="text-3xl font-medium">Get in touch</h2>
              <p>
                I'm always looking for new opportunities. If you have any
                suggestions, please don't hesitate to contact me.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin />
            <span>Bandung, West Java, Indonesian</span>
          </div>
        </div>

        <div>
          <a
            href="https://mail.google.com/mail/u/2/#inbox?compose=DmwnWsTHrLfCZRWBDTNSVZdKcdkvTsbTzVtpNrWnCrmtWpgVQmbtCqVWVjBzsKJXhmXshlfQfFhg"
            className="flex items-center gap-3 mt-5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail />
            <span>subagja.firman33@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/firmansubagja/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 mt-5"
          >
            <Linkedin />
            <span>Linkedin</span>
          </a>
        </div>
      </div>
      <div className="container text-white">
        <p>© {new Date().getFullYear()}. Firman Subagja</p>
      </div>
    </footer>
  );
};

export default Footer;
