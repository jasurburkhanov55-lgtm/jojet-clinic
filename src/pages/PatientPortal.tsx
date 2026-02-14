import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { User, Calendar, FileText, MessageSquare, Settings, LogOut, Eye, EyeOff } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const PatientPortal = () => {
  const { t } = useTranslation();
  const { section } = useParams();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState(section || 'dashboard');
  const [showLogin, setShowLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  // Check if user is logged in (simulated)
  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    if (loggedIn === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate('/portal');
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen pt-32 bg-light">
        <div className="container-luxury py-16">
          <ScrollAnimation animation="scaleIn">
            <div className="max-w-md mx-auto bg-white p-8 md:p-12 luxury-shadow">
              <div className="text-center mb-8">
                <h1 className="font-display text-3xl md:text-4xl mb-2">
                  {t('portal.title')}
                </h1>
                <div className="divider-gold mx-auto mb-4" />
                <p className="text-gray-600">
                  Access your appointments, documents, and messages
                </p>
              </div>

              {/* Toggle */}
              <div className="flex mb-8 bg-gray-100 p-1">
                <button
                  onClick={() => setShowLogin(true)}
                  className={`flex-1 py-3 text-sm uppercase tracking-wider transition-colors ${
                    showLogin ? 'bg-white text-gold shadow-sm' : 'text-gray-500'
                  }`}
                >
                  {t('portal.login')}
                </button>
                <button
                  onClick={() => setShowLogin(false)}
                  className={`flex-1 py-3 text-sm uppercase tracking-wider transition-colors ${
                    !showLogin ? 'bg-white text-gold shadow-sm' : 'text-gray-500'
                  }`}
                >
                  {t('portal.register')}
                </button>
              </div>

              {showLogin ? (
                <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <label className="form-label">{t('portal.email')}</label>
                    <input
                      type="email"
                      required
                      className="form-input"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="form-label">{t('portal.password')}</label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        className="form-input pr-10"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span className="text-gray-600">Remember me</span>
                    </label>
                    <button type="button" className="text-gold hover:underline">
                      {t('portal.forgotPassword')}
                    </button>
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    {t('portal.login')}
                  </button>
                </form>
              ) : (
                <form onSubmit={handleRegister} className="space-y-6">
                  <div>
                    <label className="form-label">{t('portal.fullName')}</label>
                    <input
                      type="text"
                      required
                      className="form-input"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="form-label">{t('portal.email')}</label>
                    <input
                      type="email"
                      required
                      className="form-input"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="form-label">{t('portal.phone')}</label>
                    <input
                      type="tel"
                      required
                      className="form-input"
                      placeholder="+998 XX XXX XX XX"
                    />
                  </div>
                  <div>
                    <label className="form-label">{t('portal.password')}</label>
                    <input
                      type="password"
                      required
                      className="form-input"
                      placeholder="••••••••"
                    />
                  </div>
                  <div>
                    <label className="form-label">{t('portal.confirmPassword')}</label>
                    <input
                      type="password"
                      required
                      className="form-input"
                      placeholder="••••••••"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    {t('portal.register')}
                  </button>
                </form>
              )}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    );
  }

  // Dashboard Sidebar
  const sidebarItems = [
    { id: 'dashboard', label: t('portal.dashboard.title'), icon: User },
    { id: 'appointments', label: t('portal.dashboard.appointments'), icon: Calendar },
    { id: 'documents', label: t('portal.dashboard.documents'), icon: FileText },
    { id: 'messages', label: t('portal.dashboard.messages'), icon: MessageSquare },
    { id: 'profile', label: t('portal.dashboard.profile'), icon: Settings },
  ];

  return (
    <div className="min-h-screen pt-32 bg-light">
      <div className="container-luxury py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 luxury-card sticky top-32">
              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center">
                  <User className="w-7 h-7 text-gold" />
                </div>
                <div>
                  <p className="font-display text-lg">Welcome back,</p>
                  <p className="text-gold">Patient</p>
                </div>
              </div>

              <nav className="space-y-2">
                {sidebarItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                      activeTab === item.id
                        ? 'bg-gold/10 text-gold'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                ))}
              </nav>

              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 text-left text-red-500 hover:bg-red-50 transition-colors mt-8"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'dashboard' && <DashboardContent />}
            {activeTab === 'appointments' && <AppointmentsContent />}
            {activeTab === 'documents' && <DocumentsContent />}
            {activeTab === 'messages' && <MessagesContent />}
            {activeTab === 'profile' && <ProfileContent />}
          </div>
        </div>
      </div>
    </div>
  );
};

// Dashboard Content
const DashboardContent = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gold text-white p-8">
        <h2 className="font-display text-3xl mb-2">Welcome to Your Portal</h2>
        <p className="text-white/80">
          Manage your appointments, access your medical documents, and communicate with our team.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Upcoming Appointments', value: '2', icon: Calendar },
          { label: 'Documents', value: '5', icon: FileText },
          { label: 'Unread Messages', value: '1', icon: MessageSquare },
        ].map((stat, index) => (
          <div key={index} className="bg-white p-6 luxury-card">
            <stat.icon className="w-8 h-8 text-gold mb-4" />
            <p className="text-3xl font-display mb-1">{stat.value}</p>
            <p className="text-gray-600 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-8 luxury-card">
        <h3 className="font-display text-2xl mb-6">Next Appointment</h3>
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 bg-gold/10 flex items-center justify-center flex-shrink-0">
            <Calendar className="w-8 h-8 text-gold" />
          </div>
          <div>
            <p className="font-display text-xl mb-1">Follow-up Consultation</p>
            <p className="text-gray-600 mb-2">March 25, 2024 at 10:00 AM</p>
            <p className="text-gray-500 text-sm">Dr. Jasurjon Burkhanov</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Appointments Content
const AppointmentsContent = () => {
  const appointments = [
    { date: 'March 25, 2024', time: '10:00 AM', type: 'Follow-up', doctor: 'Dr. Burkhanov', status: 'Upcoming' },
    { date: 'April 10, 2024', time: '2:00 PM', type: 'Check-up', doctor: 'Dr. Burkhanov', status: 'Scheduled' },
    { date: 'February 15, 2024', time: '11:00 AM', type: 'Initial Consultation', doctor: 'Dr. Burkhanov', status: 'Completed' },
  ];

  return (
    <div className="bg-white p-8 luxury-card">
      <h3 className="font-display text-2xl mb-6">My Appointments</h3>
      <div className="space-y-4">
        {appointments.map((apt, index) => (
          <div key={index} className="flex items-center justify-between p-4 border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gold/10 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="font-display text-lg">{apt.type}</p>
                <p className="text-gray-600 text-sm">{apt.date} at {apt.time}</p>
                <p className="text-gray-500 text-sm">{apt.doctor}</p>
              </div>
            </div>
            <span className={`px-3 py-1 text-xs uppercase tracking-wider ${
              apt.status === 'Completed' ? 'bg-green-100 text-green-600' :
              apt.status === 'Upcoming' ? 'bg-gold/10 text-gold' :
              'bg-gray-100 text-gray-600'
            }`}>
              {apt.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Documents Content
const DocumentsContent = () => {
  const documents = [
    { name: 'Treatment Plan.pdf', date: 'Feb 15, 2024', size: '2.4 MB' },
    { name: 'Pre-Op Instructions.pdf', date: 'Feb 15, 2024', size: '1.1 MB' },
    { name: 'Post-Op Care Guide.pdf', date: 'Feb 15, 2024', size: '3.2 MB' },
    { name: 'Consent Forms.pdf', date: 'Feb 10, 2024', size: '856 KB' },
    { name: 'Medical History.pdf', date: 'Jan 20, 2024', size: '1.5 MB' },
  ];

  return (
    <div className="bg-white p-8 luxury-card">
      <h3 className="font-display text-2xl mb-6">My Documents</h3>
      <div className="space-y-3">
        {documents.map((doc, index) => (
          <div key={index} className="flex items-center justify-between p-4 border border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer">
            <div className="flex items-center gap-4">
              <FileText className="w-8 h-8 text-gold" />
              <div>
                <p className="font-medium">{doc.name}</p>
                <p className="text-gray-500 text-sm">{doc.date} • {doc.size}</p>
              </div>
            </div>
            <button className="text-gold text-sm hover:underline">Download</button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Messages Content
const MessagesContent = () => {
  return (
    <div className="bg-white p-8 luxury-card">
      <h3 className="font-display text-2xl mb-6">Messages</h3>
      <div className="space-y-4">
        <div className="p-4 border border-gold bg-gold/5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
              <User className="w-5 h-5 text-white" />
            </div>
            <div className="flex-grow">
              <div className="flex items-center justify-between mb-2">
                <p className="font-medium">Dr. Jasurjon Burkhanov</p>
                <span className="text-xs text-gray-500">Mar 20, 2024</span>
              </div>
              <p className="text-gray-600 text-sm">
                Hello! Just checking in on your recovery. How are you feeling? Please let me know if you have any questions or concerns.
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 border border-gray-100">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
              <User className="w-5 h-5 text-gray-500" />
            </div>
            <div className="flex-grow">
              <div className="flex items-center justify-between mb-2">
                <p className="font-medium">Maria Santos - Patient Coordinator</p>
                <span className="text-xs text-gray-500">Mar 15, 2024</span>
              </div>
              <p className="text-gray-600 text-sm">
                Your follow-up appointment has been scheduled for March 25th at 10:00 AM. Please confirm your attendance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Profile Content
const ProfileContent = () => {
  return (
    <div className="bg-white p-8 luxury-card">
      <h3 className="font-display text-2xl mb-6">My Profile</h3>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="form-label">First Name</label>
            <input type="text" defaultValue="John" className="form-input" />
          </div>
          <div>
            <label className="form-label">Last Name</label>
            <input type="text" defaultValue="Doe" className="form-input" />
          </div>
        </div>
        <div>
          <label className="form-label">Email</label>
          <input type="email" defaultValue="john.doe@email.com" className="form-input" />
        </div>
        <div>
          <label className="form-label">Phone</label>
          <input type="tel" defaultValue="+998 91 123 45 67" className="form-input" />
        </div>
        <div>
          <label className="form-label">Address</label>
          <input type="text" defaultValue="45 Amir Temur Avenue, Tashkent" className="form-input" />
        </div>
        <div>
          <label className="form-label">Emergency Contact</label>
          <input type="text" defaultValue="Jane Doe - +998 91 987 65 43" className="form-input" />
        </div>
        <button type="button" className="btn-primary">
          Save Changes
        </button>
      </form>
    </div>
  );
};

// Scroll Animation Component
interface ScrollAnimationProps {
  children: React.ReactNode;
  animation: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn';
  delay?: number;
}

const ScrollAnimation = ({ children, animation, delay = 0 }: ScrollAnimationProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const animations = {
    fadeIn: 'animate-fade-in',
    slideUp: 'animate-slide-up',
    slideLeft: 'animate-slide-left',
    slideRight: 'animate-slide-right',
    scaleIn: 'animate-scale-in',
  };

  return (
    <div
      ref={ref}
      className={`${isVisible ? animations[animation] : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default PatientPortal;
