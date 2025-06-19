
export const VideoSection = () => {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See Linkee Replace
            <span className="block text-purple-600">Hours of Work in 2 Keystrokes</span>
          </h2>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="aspect-video bg-gradient-to-br from-purple-100 to-green-100 rounded-2xl shadow-2xl overflow-hidden">
            {/* Video placeholder */}
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-600/10 to-green-600/10">
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg mb-4 mx-auto">
                  <div className="w-0 h-0 border-l-[15px] border-l-purple-600 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1"></div>
                </div>
                <p className="text-gray-600 font-medium">Video Player</p>
                <p className="text-sm text-gray-500">Click to play demo</p>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-600 rounded-full opacity-20"></div>
          <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-green-600 rounded-full opacity-20"></div>
        </div>
      </div>
    </section>
  );
};
