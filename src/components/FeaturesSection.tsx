
export const FeaturesSection = () => {
  const features = [
    {
      title: "Lightning Fast",
      description: "Execute complex tasks with just 2 keystrokes. No menus, no clicking around.",
      color: "purple"
    },
    {
      title: "Universal Integration", 
      description: "Works seamlessly across all your favorite apps and platforms.",
      color: "green"
    },
    {
      title: "Smart Learning",
      description: "Adapts to your communication style and improves over time.",
      color: "purple"
    },
    {
      title: "Privacy First",
      description: "Your data stays secure and private. No cloud dependency required.",
      color: "green"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why choose
            <span className="text-purple-600"> Linkee?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built for professionals who value efficiency and precision in their daily communication.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center ${
                feature.color === 'purple' ? 'bg-purple-100' : 'bg-green-100'
              }`}>
                <div className={`w-6 h-6 rounded-full ${
                  feature.color === 'purple' ? 'bg-purple-600' : 'bg-green-600'
                }`}></div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
