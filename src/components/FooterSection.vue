<template>
  <footer class="w-full py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-12 text-white bg-black overflow-hidden">
    <div class="max-w-[1400px] mx-auto">
      
      <!-- Rounded Black Container Card -->
      <div class="relative bg-[#060606] rounded-[28px] sm:rounded-[36px] border border-white/10 p-6 sm:p-10 lg:p-14 shadow-2xl overflow-hidden flex flex-col justify-between space-y-12">
        
        <!-- Subtle Mesh Line Background -->
        <div 
          class="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-screen pointer-events-none" 
          :style="{ backgroundImage: `url(${bgImg})` }"
        ></div>

        <!-- Relative Content Grid -->
        <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          <!-- LEFT COLUMN: Brand Logo, Description, Social Links, Copyright -->
          <div class="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div class="flex flex-col items-start space-y-4">
              <!-- Brand Logo -->
              <h2 
                class="text-white text-3xl sm:text-4xl font-black tracking-tight"
                style="font-family: 'Orbitron', 'Inter', sans-serif;"
              >
                elcarro.
              </h2>

              <p class="text-gray-400 text-xs sm:text-[13px] font-bold tracking-wider uppercase leading-relaxed max-w-sm">
                EVERY WEEK WE SHARE THE LATEST ARRIVALS, BEST DEALS, AND EXCLUSIVE OFFERS.
              </p>

              <!-- Social Links -->
              <div class="flex items-center space-x-3 pt-2">
                <span class="text-gray-400 font-bold text-xs tracking-widest uppercase mr-1">FOLLOW US ON</span>
                
                <a href="#" class="w-8 h-8 rounded-lg bg-white/10 border border-white/15 hover:bg-white hover:text-black text-white flex items-center justify-center transition-colors">
                  <span class="text-xs font-bold">📷</span>
                </a>
                <a href="#" class="w-8 h-8 rounded-lg bg-white/10 border border-white/15 hover:bg-white hover:text-black text-white flex items-center justify-center transition-colors">
                  <span class="text-xs font-bold">f</span>
                </a>
                <a href="#" class="w-8 h-8 rounded-lg bg-white/10 border border-white/15 hover:bg-white hover:text-black text-white flex items-center justify-center transition-colors">
                  <span class="text-xs font-bold">in</span>
                </a>
                <a href="#" class="w-8 h-8 rounded-lg bg-white/10 border border-white/15 hover:bg-white hover:text-black text-white flex items-center justify-center transition-colors">
                  <span class="text-xs font-bold">𝕏</span>
                </a>
              </div>
            </div>

            <!-- Divider Line & Copyright -->
            <div class="pt-6 border-t border-white/10">
              <p class="text-gray-500 font-bold text-[10.5px] sm:text-xs tracking-widest uppercase">
                2025 ©DESIGN MONKS. ALL RIGHTS RESERVED
              </p>
            </div>
          </div>


          <!-- RIGHT COLUMN: Links Columns & Newsletter Box -->
          <div class="lg:col-span-7 flex flex-col justify-between space-y-10">
            
            <!-- Quick Links 3-Columns -->
            <div class="grid grid-cols-3 gap-4 sm:gap-6 text-xs sm:text-[13px] font-bold tracking-wider uppercase">
              <!-- Col 1 -->
              <div class="flex flex-col space-y-3">
                <a href="#" class="text-gray-400 hover:text-white transition-colors">MODELS</a>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">BRANDS</a>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">NEW ARRIVALS</a>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">INVENTORY</a>
              </div>
              <!-- Col 2 -->
              <div class="flex flex-col space-y-3">
                <a href="#" class="text-white hover:text-gray-300 transition-colors">ABOUT US</a>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">OUR STORY</a>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">OUR TEAM</a>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">CAREERS</a>
              </div>
              <!-- Col 3 -->
              <div class="flex flex-col space-y-3">
                <a href="#" class="text-gray-400 hover:text-white transition-colors">TEST DRIVE</a>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">HOME DELIVERY</a>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">CAR FINANCING</a>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">EMI CALCULATOR</a>
              </div>
            </div>

            <!-- Subscribe Newsletter Section -->
            <div class="flex flex-col space-y-4 pt-4">
              <h3 
                class="text-white text-xl sm:text-2xl font-bold tracking-wide"
                style="font-family: 'Orbitron', 'Inter', sans-serif;"
              >
                Subscribe on Newsletter
              </h3>

              <p class="text-gray-400 text-xs sm:text-[12px] font-bold tracking-wider uppercase leading-relaxed max-w-lg">
                GET THE LATEST AI INSIGHTS, UPDATES, AND INNOVATIONS DELIVERED STRAIGHT TO YOUR INBOX.
              </p>

              <!-- Newsletter Input Form -->
              <div class="flex items-center w-full max-w-lg bg-black border border-white/20 rounded-xl p-1.5 focus-within:border-white/50 transition-colors">
                <input 
                  type="email" 
                  placeholder="TYPE E-MAIL HERE" 
                  class="bg-transparent text-white placeholder-gray-500 font-bold text-xs px-4 py-2 flex-1 focus:outline-none tracking-wider uppercase"
                />
                
                <div class="flex items-center space-x-1">
                  <button 
                    class="px-5 py-2.5 bg-black border border-white/20 hover:border-white text-white font-extrabold text-xs tracking-wider uppercase rounded-lg transition-colors"
                    style="font-family: 'Orbitron', 'Inter', sans-serif;"
                  >
                    SUBSCRIBE
                  </button>
                  <button 
                    class="px-3 py-2.5 bg-white text-black hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors"
                    aria-label="Submit newsletter"
                  >
                    <svg class="w-4 h-4 fill-none stroke-current stroke-[3]" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13 17l5-5-5-5M6 17l5-5-5-5"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <!-- Bottom Policy Links -->
            <div class="flex flex-wrap items-center gap-6 pt-4 text-xs font-bold text-gray-400 tracking-wider uppercase">
              <a href="#" class="hover:text-white transition-colors">PRIVACY POLICY</a>
              <a href="#" class="hover:text-white transition-colors">TERMS & CONDITIONS</a>
              <a href="#" class="hover:text-white transition-colors">COOKIES</a>
              <a href="#" class="hover:text-white transition-colors">FAQ</a>
            </div>

          </div>

        </div>

        <!-- GIANT WATERMARK BRANDING FOOTER TEXT: ELCARRO -->
        <div class="relative z-10 pt-8 border-t border-white/5 flex items-center justify-center overflow-hidden">
          <h1 
            class="text-[72px] sm:text-[120px] md:text-[160px] lg:text-[210px] font-black leading-none text-transparent stroke-text tracking-tighter opacity-75 select-none"
            style="font-family: 'Orbitron', 'Inter', sans-serif; -webkit-text-stroke: 2px rgba(255, 255, 255, 0.25);"
          >
            ELCARRO
          </h1>
        </div>

      </div>

    </div>
  </footer>
</template>

<script setup>
import bgImg from '../assets/imgs/inventory/bg.webp'
</script>
