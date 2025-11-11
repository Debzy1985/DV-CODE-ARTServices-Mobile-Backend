import { DriverMobileApp } from '@/components/driver/DriverMobileApp';

export default function DriverApp() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Driver Mobile App
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Manage job requests, track earnings, and navigate to customers with our powerful driver interface
          </p>
        </div>

        <div className="max-w-md mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-800">
          <div className="relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-gray-800 rounded-b-3xl z-10"></div>
            <DriverMobileApp />
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">🚗</div>
            <h3 className="font-bold text-white mb-2">Real-Time Jobs</h3>
            <p className="text-blue-200 text-sm">Receive instant notifications for nearby service requests</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">🗺️</div>
            <h3 className="font-bold text-white mb-2">Smart Navigation</h3>
            <p className="text-blue-200 text-sm">Optimized routes to reach customers quickly</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">💰</div>
            <h3 className="font-bold text-white mb-2">Track Earnings</h3>
            <p className="text-blue-200 text-sm">Monitor your income in real-time with detailed analytics</p>
          </div>
        </div>
      </div>
    </div>
  );
}
