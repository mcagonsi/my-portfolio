export default function Loading() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="relative animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 text-white"></div>
            <p className="absolute z-20">Loading...</p>
        </div>
    );
}