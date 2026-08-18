<template>
  <section class="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 text-white overflow-hidden bg-black">
    <div class="max-w-[1400px] mx-auto">
      
      <!-- Outer Card Frame with Cutout Corner Notch Top-Right -->
      <div class="relative bg-gradient-to-br from-[#0B0B0B] via-[#080808] to-[#040404] rounded-[28px] sm:rounded-[40px] border border-white/10 p-6 sm:p-10 lg:p-14 shadow-2xl overflow-hidden min-h-[440px] sm:min-h-[500px] flex flex-col justify-between">
        
        <!-- Top Right Concave Cutout Notch with Badge -->
        <div class="absolute top-0 right-0 z-20 flex items-start justify-end pointer-events-auto">
          <div class="relative bg-black p-4 sm:p-5 rounded-bl-[28px] sm:rounded-bl-[36px] flex items-center justify-center">
            
            <!-- Concave Corner Transition Left -->
            <div 
              class="absolute -left-[16px] top-0 w-[16px] h-[16px] bg-black pointer-events-none"
              style="mask: radial-gradient(circle at 0% 100%, transparent 16px, #000 16.5px); -webkit-mask: radial-gradient(circle at 0% 100%, transparent 16px, #000 16.5px);"
            ></div>
            
            <!-- Concave Corner Transition Bottom -->
            <div 
              class="absolute right-0 -bottom-[16px] w-[16px] h-[16px] bg-black pointer-events-none"
              style="mask: radial-gradient(circle at 0% 100%, transparent 16px, #000 16.5px); -webkit-mask: radial-gradient(circle at 0% 100%, transparent 16px, #000 16.5px);"
            ></div>

            <!-- Rotating Text Badge Badge -->
            <div class="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
              <svg class="w-full h-full animate-[spin_12s_linear_infinite]" viewBox="0 0 100 100">
                <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none"/>
                <text font-size="9.5" font-family="'Orbitron', sans-serif" font-weight="bold" fill="#888888" letter-spacing="2">
                  <textPath href="#circlePath">
                    * elcarro . Drive Your Dream Today
                  </textPath>
                </text>
              </svg>
              <!-- Center Down Arrow Icon -->
              <div class="absolute text-white font-bold text-lg sm:text-xl">
                ↓
              </div>
            </div>

          </div>
        </div>

        <!-- Heading Text Top Left -->
        <div class="relative z-10 max-w-2xl pt-2">
          <h2 
            class="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold leading-[1.08] tracking-wide uppercase"
            style="font-family: 'Orbitron', 'Inter', sans-serif;"
          >
            LET'S FIND YOUR NEXT<br />
            CAR TOGETHER
          </h2>
        </div>

        <!-- Main Banner Content Layout: Porsche Image on Left & CTA on Right -->
        <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mt-12 sm:mt-16">
          
          <!-- Left: Big Porsche Car Image -->
          <div class="lg:col-span-7 relative w-full h-[220px] sm:h-[300px] lg:h-[360px]">
            <img 
              :src="porscheImg" 
              alt="Porsche 911 GT3" 
              class="w-full h-full object-contain object-left-bottom drop-shadow-[0_20px_30px_rgba(0,0,0,0.9)]"
            />
          </div>

          <!-- Right: Description & CTA Buttons -->
          <div class="lg:col-span-5 flex flex-col items-start space-y-6 pb-4 lg:pl-6">
            <p class="text-gray-300 text-xs sm:text-[13px] font-bold tracking-wider uppercase leading-relaxed max-w-md">
              BROWSE OUR FULL COLLECTION, BOOK A TEST DRIVE, OR SIMPLY REACH OUT. WE ARE HERE AND READY TO HELP.
            </p>

            <!-- Split CTA Button (GETS STARTED + Red Arrow Button) -->
            <div class="flex items-stretch rounded-xl sm:rounded-2xl overflow-hidden shadow-lg group">
              <button 
                class="px-6 sm:px-8 py-3.5 sm:py-4 bg-white hover:bg-gray-100 text-gray-950 font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-colors duration-200"
                style="font-family: 'Orbitron', 'Inter', sans-serif;"
              >
                GETS STARTED
              </button>
              <button 
                class="px-4 sm:px-5 bg-[#C81E1E] hover:bg-red-700 text-white flex items-center justify-center transition-colors duration-200"
                aria-label="Gets started arrow"
              >
                <svg class="w-4 h-4 sm:w-5 sm:h-5 fill-none stroke-current stroke-[3] transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 17l5-5-5-5M6 17l5-5-5-5"/>
                </svg>
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import porscheImg from '../assets/imgs/inventory/porsh.webp'
</script>
