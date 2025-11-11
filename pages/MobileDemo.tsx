import React from 'react';
import { Header } from '@/components/Header';
import LiveMobileDemo from '@/components/LiveMobileDemo';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Smartphone, Play } from 'lucide-react';

export default function MobileDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <Header />
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
            <Smartphone className="w-6 h-6 text-blue-300" />
            <span className="text-white font-semibold">Live Mobile App Simulation</span>
            <div className="flex items-center gap-2">
              <Play className="w-4 h-4 text-green-400 animate-pulse" />
              <span className="text-green-300 text-sm">LIVE</span>
            </div>
          </div>
          
          <h1 className="text-6xl font-bold text-white mb-6">
            Experience Our Mobile App
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
            Watch a live simulation of our customer mobile app in action. 
            See how easy it is to request roadside assistance, track your service provider, 
            and get help when you need it most.
          </p>
        </div>

        {/* Live Demo Component */}
        <LiveMobileDemo />

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-4xl mb-4">🚗</div>
            <h3 className="text-xl font-bold text-white mb-2">Quick Request</h3>
            <p className="text-blue-200">Request help in seconds with our intuitive interface</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-xl font-bold text-white mb-2">Live Tracking</h3>
            <p className="text-blue-200">Track your service provider in real-time on the map</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-white mb-2">Fast Response</h3>
            <p className="text-blue-200">Get matched with nearby providers instantly</p>
          </div>
        </div>
      </div>
    </div>
  );
}
