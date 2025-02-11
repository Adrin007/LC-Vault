export default function SkeletonLoader() {
    return (
      <div className="flex flex-col gap-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="bg-[#3D3D3D]/20 animate-pulse rounded-lg p-4">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-2 items-center">
                <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
                <div className="w-10 h-5 bg-gray-600 rounded"></div>
                <div className="w-32 h-5 bg-gray-600 rounded"></div>
              </div>
              <div className="hidden md:block w-16 h-5 bg-gray-600 rounded"></div>
            </div>
            <div className="flex flex-row justify-between mt-3">
              <div className="hidden md:flex flex-wrap gap-2">
                <div className="w-12 h-5 bg-gray-600 rounded"></div>
                <div className="w-16 h-5 bg-gray-600 rounded"></div>
                <div className="w-10 h-5 bg-gray-600 rounded"></div>
              </div>
              <div className="flex flex-row gap-2">
                <div className="w-16 h-5 bg-gray-600 rounded"></div>
                <div className="w-24 h-5 bg-gray-600 rounded"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  