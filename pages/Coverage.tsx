import { CoverageMap } from '@/components/coverage/CoverageMap';
import { PostcodeLookup } from '@/components/coverage/PostcodeLookup';
import { Card } from '@/components/ui/card';
import { MapPin, Clock, Shield, Zap } from 'lucide-react';

export default function Coverage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">UK Coverage Map</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Comprehensive roadside assistance across England, Scotland, Wales, and Northern Ireland
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          <Card className="p-6 text-center">
            <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <h3 className="text-3xl font-bold text-gray-900">150+</h3>
            <p className="text-gray-600">Cities Covered</p>
          </Card>
          <Card className="p-6 text-center">
            <Clock className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <h3 className="text-3xl font-bold text-gray-900">25 min</h3>
            <p className="text-gray-600">Avg Response Time</p>
          </Card>
          <Card className="p-6 text-center">
            <Shield className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <h3 className="text-3xl font-bold text-gray-900">24/7</h3>
            <p className="text-gray-600">Available Support</p>
          </Card>
          <Card className="p-6 text-center">
            <Zap className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <h3 className="text-3xl font-bold text-gray-900">2000+</h3>
            <p className="text-gray-600">Service Partners</p>
          </Card>
        </div>
      </div>

      {/* Postcode Lookup */}
      <div className="container mx-auto px-4 mb-12">
        <PostcodeLookup />
      </div>

      {/* Coverage Map */}
      <div className="container mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold mb-8">Regional Coverage Details</h2>
        <CoverageMap />
      </div>

      {/* Additional Info */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Choose ART Services?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">Nationwide Network</h3>
              <p className="text-gray-600">
                Over 2,000 certified service partners across the UK ensuring rapid response times
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">Transparent Pricing</h3>
              <p className="text-gray-600">
                Clear, upfront pricing based on your location with no hidden fees or surprises
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">Real-Time Tracking</h3>
              <p className="text-gray-600">
                Track your service provider in real-time with live GPS updates and ETA information
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
