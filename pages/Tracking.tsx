import { useSearchParams } from 'react-router-dom';
import CustomerTracking from '@/components/customer/CustomerTracking';

export default function Tracking() {
  const [searchParams] = useSearchParams();
  const trackingId = searchParams.get('id') || 'ART-2025-001';

  return <CustomerTracking trackingId={trackingId} />;
}
