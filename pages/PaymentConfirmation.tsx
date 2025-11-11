import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Download, MapPin, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PaymentConfirmation = () => {
  const navigate = useNavigate();
  
  const trackingId = 'ART-2025-' + Math.random().toString(36).substr(2, 6).toUpperCase();
  
  const paymentDetails = {
    transactionId: 'TXN-2024-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
    amount: 95,
    paymentMethod: 'Credit Card',
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
    serviceType: 'Emergency Towing',
    provider: 'UK Tow Pro',
    location: '123 High Street, London',
    trackingId: trackingId
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4 flex items-center justify-center">
      <div className="max-w-2xl w-full">
        <Card className="shadow-2xl">
          <CardHeader className="text-center bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-t-lg py-8">
            <div className="flex justify-center mb-4">
              <CheckCircle2 className="h-20 w-20" />
            </div>
            <CardTitle className="text-3xl">Payment Successful!</CardTitle>
            <p className="text-green-100 mt-2">Your service has been confirmed</p>
          </CardHeader>
          
          <CardContent className="p-8 space-y-6">
            <div className="text-center">
              <Badge className="bg-green-100 text-green-800 px-4 py-2 text-lg">
                Service Provider On The Way
              </Badge>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-500">Transaction ID</div>
                  <div className="font-mono font-semibold">{paymentDetails.transactionId}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Amount Paid</div>
                  <div className="font-bold text-xl text-green-600">£{paymentDetails.amount}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Payment Method</div>
                  <div className="font-medium">{paymentDetails.paymentMethod}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Date & Time</div>
                  <div className="font-medium">{paymentDetails.date}</div>
                  <div className="text-sm">{paymentDetails.time}</div>
                </div>
              </div>
            </div>

            <div className="border-t pt-4">
              <h3 className="font-semibold mb-3">Service Details</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span>{paymentDetails.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span>Provider: {paymentDetails.provider}</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">Your Tracking ID</div>
              <div className="font-mono font-bold text-xl text-blue-600">{paymentDetails.trackingId}</div>
              <p className="text-sm text-gray-600 mt-2">Use this ID to track your service in real-time</p>
            </div>


            <div className="flex gap-3">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => window.print()}
              >
                <Download className="h-4 w-4 mr-2" />
                Download Receipt
              </Button>
              <Button 
                className="flex-1 bg-blue-600 hover:bg-blue-700"
                onClick={() => navigate(`/tracking?id=${paymentDetails.trackingId}`)}
              >
                Track Service
              </Button>
            </div>

            <Button 
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white"
              onClick={() => navigate('/mobile-demo')}
            >
              📱 View Mobile App Demo
            </Button>

            <Button 
              variant="ghost" 
              className="w-full"
              onClick={() => navigate('/')}
            >
              Return to Home
            </Button>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default PaymentConfirmation;
