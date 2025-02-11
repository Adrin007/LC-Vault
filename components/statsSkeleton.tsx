const StatsSkeleton = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-pulse">
            <div className="bg-[#3D3D3D]/30 p-4 rounded-lg flex flex-col items-center gap-4">
                <div className="w-24 h-24 rounded-full bg-gray-600/50"></div>
                <div className="w-full h-4 bg-gray-600/50 rounded"></div>
                <div className="w-full h-4 bg-gray-600/50 rounded"></div>
                <div className="w-full h-4 bg-gray-600/50 rounded"></div>
            </div>
            <div className="bg-[#3D3D3D]/30 p-4 rounded-lg flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gray-600/50"></div>
            </div>
            <div className="bg-[#3D3D3D]/30 p-4 rounded-lg flex flex-col gap-3">
                <div className="w-3/4 h-6 bg-gray-600/50 rounded"></div>
                <div className="w-full h-4 bg-gray-600/50 rounded"></div>
                <div className="w-full h-4 bg-gray-600/50 rounded"></div>
                <div className="w-full h-4 bg-gray-600/50 rounded"></div>
                <div className="w-full h-4 bg-gray-600/50 rounded"></div>
                <div className="w-full h-4 bg-gray-600/50 rounded"></div>
                <div className="w-full h-4 bg-gray-600/50 rounded"></div>
            </div>
        </div>
    );
};

export default StatsSkeleton;
