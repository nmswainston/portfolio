export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-800 via-indigo-800 to-purple-800 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side - Text */}
        <div className="max-w-xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
            Building Websites that Work - Fast, Modern, and Made for Growth
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Hi, I’m <span className="font-semibold text-white">Nick Swainston</span> - a web developer who helps businesses 
            turn their ideas into sleek, responsive sites that convert visitors into customers.
          </p>
          
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="btn btn-primary"
            >
              Work With Me
            </button>
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('projects');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="btn btn-outline"
            >
              View My Projects
            </button>
          </div>
        </div>
        
        {/* Right Side - Image Placeholder */}
        <div className="mt-12 md:mt-0 md:ml-12 flex justify-center">
          <div className="w-72 h-72 md:w-96 md:h-96 bg-gray-200 rounded-xl shadow-inner flex items-center justify-center">
            <span className="text-gray-600">[Project Preview / Photo]</span>
          </div>
        </div>
      </div>
    </section>
  );
}
