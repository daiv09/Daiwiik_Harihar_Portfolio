import CertificatesPage from '@/components/CertificatesPage';
import Navbar from '@/components/Navbar';

export default function Certificates() {
  return (
    <main className="min-h-screen bg-slate-900">
        <Navbar/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <CertificatesPage />
      </div>
    </main>
  );
}