import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { MapPin, Clock, Truck, Phone } from 'lucide-react';

const ReviewOrder = () => {
  const navigate = useNavigate();
  const [orderDetails] = useState({
    serviceType: 'Emergency Towing',
    provider: 'UK Tow Pro',
    rating: 4.8,
    location: '123 High Street, London',
    destination: 'Auto Repair Shop, 456 Park Lane',
    estimatedTime: '15 mins',
    distance: '2.3 km',
    basePrice: 85,
    serviceFee: 10,
    total: 95
  });

  const handleConfirmPayment = () => {
    navigate('/payment-confirmation');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Review Your Order</h1>
        
        <Card className="mb-4">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Truck className="h-5 w-5" />
              Service Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="text-sm text-gray-500">Service Type</div>
              <div className="font-semibold">{orderDetails.serviceType}</div>
            </div>
            
            <Separator />
            
            <div>
              <div className="text-sm text-gray-500">Service Provider</div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">{orderDetails.provider}</div>
                  <Badge variant="secondary" className="mt-1">
                    ⭐ {orderDetails.rating}
                  </Badge>
                </div>
                <Button variant="outline" size="sm">
                  <Phone className="h-4 w-4 mr-1" />
                  Contact
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Location Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <div className="text-sm text-gray-500">Pickup Location</div>
              <div className="font-medium">{orderDetails.location}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Drop-off Location</div>
              <div className="font-medium">{orderDetails.destination}</div>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>ETA: {orderDetails.estimatedTime}</span>
              </div>
              <div>Distance: {orderDetails.distance}</div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Price Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span>Base Price</span>
              <span>£{orderDetails.basePrice}</span>
            </div>
            <div className="flex justify-between">
              <span>Service Fee</span>
              <span>£{orderDetails.serviceFee}</span>
            </div>
            <Separator />
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span className="text-green-600">£{orderDetails.total}</span>
            </div>
          </CardContent>
        </Card>

        <Button 
          onClick={handleConfirmPayment}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-6 text-lg"
        >
          Proceed to Payment
        </Button>
      </div>
    </div>
  );
};

export default ReviewOrder;
