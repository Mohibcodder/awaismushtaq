const Work = () => {
    const projects = [
        {
          title: 'E-commerce Brand Growth',
          description: 'Increased sales by 300% for a Shopify store through targeted social media campaigns',
          tags: ['Shopify', 'Facebook Ads', 'Instagram'],
          image: 'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?auto=format&fit=crop&w=800&q=80', // Shopping online theme
        },
        {
          title: 'SEO Optimization',
          description: 'Improved organic traffic by 450% for a WordPress blog in 6 months',
          tags: ['SEO', 'WordPress', 'Content'],
          image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80', // SEO dashboard
        },
        {
          title: 'TikTok Influencer Campaign',
          description: 'Generated 1M+ views for a product launch through influencer collaborations',
          tags: ['TikTok', 'Influencers', 'Viral'],
          image: 'https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&w=800&q=80', // Person filming selfie (influencer-style)
        },
        {
          title: 'Local Business Marketing',
          description: 'Tripled foot traffic for a local restaurant with geo-targeted ads',
          tags: ['Google Ads', 'Local SEO', 'Facebook'],
          image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=80', // Local cafe/restaurant
        },
      ];
      
  
    return (
      <section id="work" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-red-50">
        <div className="container mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Work</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Some of my recent digital marketing projects and success stories
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Work;