import profile from "../data/profile";

function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-28 border-t border-gray-800 bg-[#0a0a0a] px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
            Contact
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Let's Work Together
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-400">
            Jika Anda tertarik untuk berdiskusi mengenai project,
            pekerjaan, atau kesempatan lainnya, silakan hubungi saya.
          </p>
        </div>

        {/* Contact Card */}
        <div className="group relative mt-12 overflow-hidden rounded-2xl border border-gray-800 bg-white/2 p-6 transition-all duration-500 hover:border-gray-600 hover:bg-white/2 d:p-10">
          {/* Top Highlight */}
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="grid gap-8 md:grid-cols-3">
            {/* Email */}
            <div>
              <p className="text-sm uppercase tracking-[0.15em] text-gray-600">
                Email
              </p>

              <a
                href={`mailto:${profile.email}`}
                className="mt-3 block break-all text-base font-medium text-white transition-colors duration-300 hover:text-gray-400 md:text-lg"
              >
                {profile.email}
              </a>
            </div>

            {/* WhatsApp */}
           <div>
  <p className="text-sm uppercase tracking-wider text-gray-500">
    WhatsApp
  </p>

  <a
    href={`https://wa.me/${profile.whatsapp}`}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-2 block text-lg font-medium text-white transition hover:text-gray-400"
  >
    Chat on WhatsApp ↗
  </a>
</div>

            {/* LinkedIn */}
            <div>
              <p className="text-sm uppercase tracking-[0.15em] text-gray-600">
                LinkedIn
              </p>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-base font-medium text-white transition-colors duration-300 hover:text-gray-400 md:text-lg"
              >
                LinkedIn Profile ↗
              </a>
            </div>
          </div>
        </div>

        {/* Closing Text */}
        <div className="mt-16 border-t border-gray-800 pt-8">
          <p className="text-sm text-gray-600">
            Available for opportunities and collaboration.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;