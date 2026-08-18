<template>
  <section class="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 text-white overflow-hidden bg-black">
    <div class="max-w-[1400px] mx-auto flex flex-col items-center text-center">
      
      <!-- Main Title -->
      <h2 
        class="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.25] tracking-wide uppercase max-w-4xl mb-12 sm:mb-16"
        style="font-family: 'Orbitron', 'Inter', sans-serif;"
      >
        THE BRANDS PEOPLE ACTUALLY DREAM<br class="hidden sm:inline" />
        ABOUT – ALL IN ONE PLACE
      </h2>

      <!-- Overlapping Circular Brand Badges Row -->
      <div class="flex items-center justify-center -space-x-3 sm:-space-x-4 md:-space-x-5 lg:-space-x-6 overflow-x-auto py-4 px-2 w-full max-w-5xl select-none no-scrollbar">
        
        <!-- Ferrari -->
        <div class="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full bg-[#EAEAEA]/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-5 shadow-lg border border-white/20 hover:scale-110 hover:z-20 transition-all duration-300 flex-shrink-0 cursor-pointer group">
          <svg class="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain transition-transform duration-300 group-hover:scale-105" viewBox="0 0 100 120">
            <!-- Shield Background -->
            <path d="M10 10 H90 V70 C90 95 50 115 50 115 C50 115 10 95 10 70 Z" fill="#FFEB00" stroke="#000" stroke-width="2"/>
            <!-- Italian Flag Top Stripes -->
            <rect x="10" y="10" width="26.6" height="8" fill="#009246"/>
            <rect x="36.6" y="10" width="26.8" height="8" fill="#FFFFFF"/>
            <rect x="63.4" y="10" width="26.6" height="8" fill="#CE2B37"/>
            <!-- Prancing Horse silhouette -->
            <path d="M54 32 C52 30 48 30 46 32 C44 35 45 40 43 45 C41 48 36 50 35 55 C34 60 38 62 42 60 C40 65 37 68 36 75 C40 73 45 68 47 64 C48 68 50 78 52 85 C54 86 56 86 55 80 C54 74 53 68 53 64 C56 65 60 72 63 76 C65 74 64 70 60 66 C57 63 56 58 57 52 C58 46 62 40 58 35 Z" fill="#000000"/>
            <!-- SF Text -->
            <text x="30" y="102" font-family="'Orbitron', sans-serif" font-size="16" font-weight="900" fill="#000">S</text>
            <text x="58" y="102" font-family="'Orbitron', sans-serif" font-size="16" font-weight="900" fill="#000">F</text>
          </svg>
        </div>

        <!-- BMW -->
        <div class="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full bg-[#EAEAEA]/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-5 shadow-lg border border-white/20 hover:scale-110 hover:z-20 transition-all duration-300 flex-shrink-0 cursor-pointer group">
          <svg class="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 100 100">
            <!-- Outer Ring -->
            <circle cx="50" cy="50" r="48" fill="#000000" stroke="#CCCCCC" stroke-width="2"/>
            <circle cx="50" cy="50" r="32" fill="none" stroke="#FFFFFF" stroke-width="1.5"/>
            <!-- BMW Text -->
            <text x="50" y="24" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#FFFFFF">BMW</text>
            <!-- Inner Quadrants -->
            <path d="M50 50 L50 18 A32 32 0 0 1 82 50 Z" fill="#0066B1"/>
            <path d="M50 50 L82 50 A32 32 0 0 1 50 82 Z" fill="#FFFFFF"/>
            <path d="M50 50 L50 82 A32 32 0 0 1 18 50 Z" fill="#0066B1"/>
            <path d="M50 50 L18 50 A32 32 0 0 1 50 18 Z" fill="#FFFFFF"/>
          </svg>
        </div>

        <!-- Lamborghini -->
        <div class="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full bg-[#EAEAEA]/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-5 shadow-lg border border-white/20 hover:scale-110 hover:z-20 transition-all duration-300 flex-shrink-0 cursor-pointer group">
          <svg class="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 100 115">
            <!-- Black Gold Shield -->
            <path d="M50 5 L95 25 L85 95 L50 110 L15 95 L5 25 Z" fill="#111111" stroke="#D4AF37" stroke-width="3"/>
            <!-- Gold Inner Border -->
            <path d="M50 10 L88 28 L79 90 L50 103 L21 90 L12 28 Z" fill="none" stroke="#D4AF37" stroke-width="1.5"/>
            <!-- Text -->
            <text x="50" y="24" text-anchor="middle" font-family="'Orbitron', sans-serif" font-size="7" font-weight="900" letter-spacing="1" fill="#D4AF37">AUTOMOBILI</text>
            <text x="50" y="31" text-anchor="middle" font-family="'Orbitron', sans-serif" font-size="6.5" font-weight="900" letter-spacing="0.5" fill="#D4AF37">LAMBORGHINI</text>
            <!-- Raging Bull Silhouette -->
            <path d="M45 42 C40 40 32 45 35 52 C37 57 40 60 42 66 C43 72 38 78 40 82 C44 84 50 82 54 80 C58 84 62 82 60 75 C58 70 57 65 59 60 C62 55 64 48 58 45 C52 42 48 45 45 42 Z" fill="#D4AF37"/>
          </svg>
        </div>

        <!-- Audi -->
        <div class="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full bg-[#EAEAEA]/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-5 shadow-lg border border-white/20 hover:scale-110 hover:z-20 transition-all duration-300 flex-shrink-0 cursor-pointer group">
          <div class="flex flex-col items-center justify-center space-y-1">
            <svg class="w-14 h-8 sm:w-20 sm:h-10 md:w-24 md:h-12 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 160 60">
              <!-- 4 Interlocking Rings -->
              <circle cx="35" cy="30" r="22" fill="none" stroke="#222222" stroke-width="5"/>
              <circle cx="65" cy="30" r="22" fill="none" stroke="#222222" stroke-width="5"/>
              <circle cx="95" cy="30" r="22" fill="none" stroke="#222222" stroke-width="5"/>
              <circle cx="125" cy="30" r="22" fill="none" stroke="#222222" stroke-width="5"/>
            </svg>
            <span class="text-red-700 font-extrabold text-[10px] sm:text-xs tracking-wider font-sans uppercase">Audi</span>
          </div>
        </div>

        <!-- Ford -->
        <div class="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full bg-[#EAEAEA]/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-5 shadow-lg border border-white/20 hover:scale-110 hover:z-20 transition-all duration-300 flex-shrink-0 cursor-pointer group">
          <svg class="w-14 h-9 sm:w-20 sm:h-12 md:w-24 md:h-14 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 120 70">
            <!-- Blue Oval -->
            <ellipse cx="60" cy="35" rx="55" ry="30" fill="#10427A" stroke="#FFFFFF" stroke-width="3"/>
            <ellipse cx="60" cy="35" rx="51" ry="26" fill="none" stroke="#10427A" stroke-width="2"/>
            <!-- Ford Script Text -->
            <text x="60" y="44" text-anchor="middle" font-family="'Brush Script MT', cursive, sans-serif" font-style="italic" font-size="32" font-weight="bold" fill="#FFFFFF">Ford</text>
          </svg>
        </div>

        <!-- 12+ More Brands -->
        <div class="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full bg-[#EAEAEA]/90 backdrop-blur-sm flex flex-col items-center justify-center p-3 text-center shadow-lg border border-white/20 hover:scale-110 hover:z-20 transition-all duration-300 flex-shrink-0 cursor-pointer group">
          <span 
            class="text-gray-950 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight"
            style="font-family: 'Orbitron', 'Inter', sans-serif;"
          >
            12+
          </span>
          <span class="text-gray-600 text-[9px] sm:text-[11px] font-extrabold tracking-widest uppercase mt-0.5 sm:mt-1">
            MORE BRANDS
          </span>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
</script>
