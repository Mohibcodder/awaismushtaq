const About = () => {
    return (
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get to know the person behind the marketing strategies
            </p>
          </div>
  
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-10 md:mb-0 flex justify-center" data-aos="fade-right">
              <div className="relative w-64 h-64 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/hammad1.jpg"
                  alt="About Hammad"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3 md:pl-12" data-aos="fade-left">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Professional Digital Marketer with 7+ Years of Experience
              </h3>
              <p className="text-gray-600 mb-6">
                I'm Alex Carter, a passionate digital marketing professional specializing in social media marketing, SEO, and e-commerce solutions. With a proven track record of helping businesses grow their online presence, I combine creativity with data-driven strategies to deliver exceptional results.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Fast Results</h4>
                    <p className="text-gray-600">Quick implementation with measurable outcomes</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Secure Strategies</h4>
                    <p className="text-gray-600">White-hat techniques that stand the test of time</p>
                  </div>
                </div>
              </div>
              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-lg hover:opacity-90 transition shadow-lg"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;