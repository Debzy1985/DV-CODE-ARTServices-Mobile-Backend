import { createClient } from '@supabase/supabase-js';

// Use environment variables or fallback to demo mode
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'demo';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'demo';

// Create client only if valid credentials exist
export const supabase = supabaseUrl !== 'demo' && supabaseKey !== 'demo' 
  ? createClient(supabaseUrl, supabaseKey)
  : null;

// Mock data for demo mode
const mockDrivers = [
  { id: '1', name: 'John Smith', phone: '+1234567890', status: 'online', vehicle_type: 'Flatbed', rating: 4.8, completed_jobs: 156 },
  { id: '2', name: 'Mike Johnson', phone: '+1234567891', status: 'busy', vehicle_type: 'Hook & Chain', rating: 4.6, completed_jobs: 89 }
];

const mockRequests = [
  { id: '1', customer_name: 'Alice Brown', service_type: 'Emergency Towing', location: '123 Main St', status: 'pending', amount: 120, created_at: new Date().toISOString() },
  { id: '2', customer_name: 'Bob Wilson', service_type: 'Roadside Assistance', location: '456 Oak Ave', status: 'completed', amount: 80, created_at: new Date().toISOString() }
];

// Fallback functions for demo mode
export const getDrivers = async () => {
  if (!supabase) return mockDrivers;
  const { data, error } = await supabase.from('drivers').select('*');
  if (error) throw error;
  return data || [];
};

export const getServiceRequests = async () => {
  if (!supabase) return mockRequests;
  const { data, error } = await supabase.from('service_requests').select('*');
  if (error) throw error;
  return data || [];
};

export const getStats = async () => {
  if (!supabase) {
    return {
      totalRequests: mockRequests.length,
      activeDrivers: mockDrivers.filter(d => d.status === 'online').length,
      completedJobs: mockRequests.filter(r => r.status === 'completed').length,
      revenue: mockRequests.reduce((sum, r) => sum + (r.amount || 0), 0)
    };
  }
  
  const requests = await getServiceRequests();
  const drivers = await getDrivers();
  
  return {
    totalRequests: requests.length,
    activeDrivers: drivers.filter(d => d.status === 'online').length,
    completedJobs: requests.filter(r => r.status === 'completed').length,
    revenue: requests.reduce((sum, r) => sum + (r.amount || 0), 0)
  };
};

export const getVendorJobs = async () => {
  if (!supabase) return mockRequests;
  return getServiceRequests();
};

export const getVendorStats = async () => {
  if (!supabase) {
    return { totalJobs: 45, activeJobs: 3, earnings: 2840, rating: 4.7 };
  }
  return { totalJobs: 45, activeJobs: 3, earnings: 2840, rating: 4.7 };
};

export const updateJobStatus = async (jobId: string, status: string) => {
  if (!supabase) return mockRequests.find(r => r.id === jobId);
  const { data, error } = await supabase
    .from('service_requests')
    .update({ status })
    .eq('id', jobId)
    .select();
  if (error) throw error;
  return data;
};