
export const TextVideoSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Send better messages.
              <span className="block text-green-600">Do less typing.</span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Linkee transforms the way you communicate by automating repetitive tasks 
              and helping you craft perfect messages in seconds, not hours.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-gray-700">Smart message templates that adapt to context</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-gray-700">2-keystroke activation for instant productivity</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-gray-700">Works across all your favorite apps</p>
              </div>
            </div>
          </div>
          
          {/* Video/Image Placeholder */}
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-green-100 to-purple-100 rounded-2xl shadow-xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-600/10 to-purple-600/10">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-3 mx-auto">
                    <div className="w-0 h-0 border-l-[12px] border-l-green-600 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
                  <p className="text-gray-600 font-medium">Demo Video</p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-3 -right-3 w-6 h-6 bg-green-600 rounded-full opacity-30"></div>
            <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-purple-600 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
