import React from 'react';
import { Header } from '@/components/Header';
import { TowRequestForm } from '@/components/TowRequestForm';
import { CustomerTrackingHistory } from '@/components/customer/CustomerTrackingHistory';
import { CustomerVehicles } from '@/components/customer/CustomerVehicles';
import { CustomerPaymentMethods } from '@/components/customer/CustomerPaymentMethods';
import { CustomerAccountSettings } from '@/components/customer/CustomerAccountSettings';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User } from 'lucide-react';

const Customer: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <User className="h-8 w-8" />
            Customer Portal
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage your service requests, vehicles, and account settings
          </p>
        </div>

        <Tabs defaultValue="request" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="request">New Request</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="vehicles">Vehicles</TabsTrigger>
            <TabsTrigger value="payment">Payment</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="request">
            <TowRequestForm />
          </TabsContent>

          <TabsContent value="history">
            <CustomerTrackingHistory />
          </TabsContent>

          <TabsContent value="vehicles">
            <CustomerVehicles />
          </TabsContent>

          <TabsContent value="payment">
            <CustomerPaymentMethods />
          </TabsContent>

          <TabsContent value="settings">
            <CustomerAccountSettings />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Customer;
