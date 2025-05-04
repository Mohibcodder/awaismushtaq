const Hero = () => {
    return (
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">AWAIS MUSHTAQ</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">Front-end Developer</h2>
            <p className="text-gray-600 mb-8 max-w-lg">
              Helping businesses grow through strategic digital marketing solutions. Specializing in social media, SEO, and e-commerce marketing.
            </p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-lg hover:opacity-90 transition shadow-lg"
              >
                Get In Touch
              </a>
              <a
                href="#services"
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
              >
                View My Work
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center" data-aos="fade-left">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-red-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <div className="relative w-full h-full bg-white rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src="/awais.jpg"
                  alt="Alex Carter"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;