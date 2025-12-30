import React, { useState } from 'react';
import { COURSES, APP_CONSTANTS } from './constants';
import { PricingCard } from './components/PricingCard';
import { Logo } from './components/Logo';
import { ViewMode } from './types';

const AppContent: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.FULL);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 selection:bg-emerald-500/30">
      {/* Navbar / Header */}
      <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="Integrity Software Training" 
              className="w-24 h-20 object-contain"
            />
            <div className="flex flex-col justify-center mt-3">
              <span className="font-extrabold text-2xl tracking-tight text-gray-900 leading-none">INTEGRITY</span>
              <span className="text-[10px] text-gray-600 font-medium tracking-wider uppercase">Software Training</span>
            </div>
          </div>
          <div className="hidden md:flex flex-col items-end gap-2">
            <div className="flex items-center gap-2">
              <svg 
                className="w-[26px] h-[26px] text-gray-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href={`mailto:${APP_CONSTANTS.CONTACT_EMAIL}`} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                {APP_CONSTANTS.CONTACT_EMAIL}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-[26px] flex justify-center">
                <a 
                  href="https://wa.me/919652352635?text=Hi%20I%27m%20planning%20to%20join%20a%20course%20at%20Integrity%20Software%20Training.%20Could%20you%20please%20share%20complete%20course%20details%3F" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-green-500 hover:bg-green-600 transition-colors"
                >
                  <svg 
                    className="w-[13px] h-[13px] text-white" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </a>
              </div>
              <a 
                href="https://wa.me/919652352635?text=Hi%20I%27m%20planning%20to%20join%20a%20course%20at%20Integrity%20Software%20Training.%20Could%20you%20please%20share%20complete%20course%20details%3F" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                +91 9652352635, 6301387792
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-1 mb-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight m-0">
              Software <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-600">Training</span>
            </h1>
          </div>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Learning knows no boundaries. Start a new journey with us in exclusive 
            <span className="text-gray-800 font-semibold"> Offline Courses and Online Courses</span>. 
            We offer comprehensive training in software, hardware, and design.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
             {/* Toggle Switch */}
            <div className="inline-flex bg-gray-100 p-1.5 rounded-2xl border border-gray-300 shadow-inner">
              <button
                onClick={() => setViewMode(ViewMode.MONTHLY)}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  viewMode === ViewMode.MONTHLY
                    ? 'bg-white text-gray-900 shadow-md border border-gray-200'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Monthly Plan
              </button>
              <button
                onClick={() => setViewMode(ViewMode.FULL)}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                  viewMode === ViewMode.FULL
                    ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Full Course Plan
                <span className="text-[10px] bg-emerald-100 px-1.5 py-0.5 rounded text-emerald-700 font-bold">
                  SAVE
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {COURSES.map((course) => (
            <div key={course.id} className="flex justify-center h-full">
              <PricingCard plan={course} mode={viewMode} />
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-slate-900 bg-white dark:bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-gray-900 dark:text-white font-bold text-lg mb-2">INTEGRITY</h2>
          <p className="text-gray-600 dark:text-slate-400 text-sm mb-4">
            1st Floor, IT Tower Nalgonda, 508001 <br/>
            6-6-26/NR, Near Ganesh Temple, Vanasthalipuram 500070
          </p>
          <div className="flex justify-center gap-4 text-emerald-600 font-medium mb-8">
            <span>+91 9652352635</span>
            <span>63013 87792</span>
          </div>
          <p className="text-gray-500 text-xs">
            {new Date().getFullYear()} Integrity Software Training. All rights reserved. Prices subject to change.
          </p>
        </div>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AppContent />
  );
};

export default App;