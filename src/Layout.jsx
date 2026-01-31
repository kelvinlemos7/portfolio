import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="font-sans antialiased">
      <style>{`
        :root {
          --background: 0 0% 4%;
          --foreground: 0 0% 98%;
        }
        
        body {
          background-color: #0A0A0A;
          color: #fafafa;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #0A0A0A;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #3b3b3b;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #8B5CF6;
        }
        
        /* Selection color */
        ::selection {
          background-color: rgba(139, 92, 246, 0.3);
          color: #fff;
        }
      `}</style>
      {children}
    </div>
  );
}