"use client";

import { useState, useEffect } from "react";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isBackgroundLoaded, setIsBackgroundLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "https://picsum.photos/1920/1080?random";
    img.onload = () => {
      setIsBackgroundLoaded(true);
    };
  }, []);

  return (
    <div className="h-screen flex items-center justify-center relative">
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat ${
          isBackgroundLoaded ? 'animate-fade-in' : 'opacity-0'
        }`}
        style={{
          backgroundImage: "url('https://picsum.photos/1920/1080?random')"
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
