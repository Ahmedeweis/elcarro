<template>
  <section style="padding-top: 0;"
    class="w-full bg-white py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 xl:px-16 overflow-hidden">
    <div class="max-w-[1400px]">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        <!-- ========================================================== -->
        <!-- LEFT COLUMN (Staggered 2-Column Feature Cards)             -->
        <!-- ========================================================== -->
        <div class="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 items-start">

          <!-- Column 1 (Left Cards: Offset Higher) -->
          <div class="flex flex-col space-y-6 sm:space-y-8">

            <!-- CARD 1: Competitive Pricing -->
            <div
              class="relative bg-[#F7F7F8] rounded-[24px] p-6 sm:p-7 pt-8 flex flex-col justify-between min-h-[260px] shadow-sm border border-gray-100/80 hover:shadow-md transition-shadow">

              <!-- Top Header: Icon + Title -->
              <div class="flex items-start justify-between">
                <!-- Black Circle Icon Badge -->
                <div
                  class="w-12 h-12 rounded-full bg-[#121212] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                  <svg class="w-5 h-5 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24">
                    <rect x="3" y="6" width="18" height="12" rx="2" />
                    <path d="M12 9v6M9.5 10.5h4.5a1.5 1.5 0 0 1 0 3H9.5" />
                  </svg>
                </div>

                <h3
                  class="text-gray-950 text-base sm:text-[17px] font-extrabold tracking-wide uppercase text-right max-w-[150px]"
                  style="font-family: 'Orbitron', 'Inter', sans-serif;">
                  Competitive Pricing
                </h3>
              </div>

              <!-- Body Description -->
              <p
                class="text-gray-500 text-xs sm:text-[12.5px] font-semibold tracking-wider uppercase leading-relaxed mt-10">
                NO HIDDEN CHARGES, NO MARKUPS. JUST FAIR AND HONEST PRICES EVERY TIME.
              </p>
            </div>

            <!-- CARD 2: Roadside Assistance -->
            <div
              class="relative bg-[#F7F7F8] rounded-[24px] p-6 sm:p-7 pt-8 flex flex-col justify-between min-h-[260px] shadow-sm border border-gray-100/80 hover:shadow-md transition-shadow">

              <div class="flex items-start justify-between">
                <div
                  class="w-12 h-12 rounded-full bg-[#121212] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                  <svg class="w-5 h-5 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path
                      d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5a9 9 0 0 1 18 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
                  </svg>
                </div>

                <h3
                  class="text-gray-950 text-base sm:text-[17px] font-extrabold tracking-wide uppercase text-right max-w-[150px]"
                  style="font-family: 'Orbitron', 'Inter', sans-serif;">
                  Roadside Assistance
                </h3>
              </div>

              <p
                class="text-gray-500 text-xs sm:text-[12.5px] font-semibold tracking-wider uppercase leading-relaxed mt-10">
                STUCK ON THE ROAD? OUR SUPPORT TEAM IS JUST ONE CALL AWAY, ANYTIME.
              </p>
            </div>

          </div>

          <!-- Column 2 (Right Cards: Staggered Downward Offset) -->
          <div class="flex flex-col space-y-6 sm:space-y-8 sm:mt-12">

            <!-- CARD 3: Certified Quality Guarantee -->
            <div
              class="relative bg-[#F7F7F8] rounded-[24px] p-6 sm:p-7 pt-8 flex flex-col justify-between min-h-[260px] shadow-sm border border-gray-100/80 hover:shadow-md transition-shadow">

              <div class="flex items-start justify-between">
                <div
                  class="w-12 h-12 rounded-full bg-[#121212] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                  <svg class="w-5 h-5 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>

                <h3
                  class="text-gray-950 text-base sm:text-[17px] font-extrabold tracking-wide uppercase text-right max-w-[160px]"
                  style="font-family: 'Orbitron', 'Inter', sans-serif;">
                  Certified Quality Guarantee
                </h3>
              </div>

              <p
                class="text-gray-500 text-xs sm:text-[12.5px] font-semibold tracking-wider uppercase leading-relaxed mt-10">
                EVERY CAR PASSES OUR STRICT 150-POINT INSPECTION BEFORE IT REACHES YOU.
              </p>
            </div>

            <!-- CARD 4: Easy EMI and Financing -->
            <div
              class="relative bg-[#F7F7F8] rounded-[24px] p-6 sm:p-7 pt-8 flex flex-col justify-between min-h-[260px] shadow-sm border border-gray-100/80 hover:shadow-md transition-shadow">

              <div class="flex items-start justify-between">
                <div
                  class="w-12 h-12 rounded-full bg-[#121212] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                  <svg class="w-5 h-5 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24" stroke-linecap="round"
                    stroke-linejoin="round">
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <line x1="2" y1="10" x2="22" y2="10" />
                  </svg>
                </div>

                <h3
                  class="text-gray-950 text-base sm:text-[17px] font-extrabold tracking-wide uppercase text-right max-w-[150px]"
                  style="font-family: 'Orbitron', 'Inter', sans-serif;">
                  Easy EMI and Financing
                </h3>
              </div>

              <p
                class="text-gray-500 text-xs sm:text-[12.5px] font-semibold tracking-wider uppercase leading-relaxed mt-10">
                FLEXIBLE PAYMENT PLANS WITH LOW INTEREST RATES FROM 12+ TOP BANKS WORLDWIDE.
              </p>
            </div>

          </div>

        </div>


        <!-- ========================================================== -->
        <!-- RIGHT COLUMN (Header & Car Hotspots Interactive Section)   -->
        <!-- ========================================================== -->
        <!-- التعديل 1: أضفنا كلاسات h-auto لتعديل الارتفاع -->
        <div class="lg:col-span-6 flex flex-col justify-between items-start space-y-8 lg:space-y-2 h-auto">

          <!-- Top Header Info -->
          <div class="flex flex-col items-start">
            <!-- Tag -->
            <div
              class="inline-flex items-center text-xs sm:text-sm font-bold tracking-widest uppercase mb-3 text-gray-700">
              <span>[</span>
              <span class="text-gray-950 px-1 font-extrabold">WHAT WE OFFER_</span>
              <span>]</span>
            </div>

            <!-- Headline -->
            <h2
              class="text-gray-950 text-3xl sm:text-4xl lg:text-[48px] font-extrabold leading-[1.08] tracking-tight uppercase mb-4 sm:mb-6"
              style="font-family: 'Orbitron', 'Inter', sans-serif;">
              EVERYTHING WE<br />
              DO IS BUILT<br />
              AROUND YOU
            </h2>

            <!-- Subtitle -->
            <p
              class="text-gray-500 text-xs sm:text-sm font-semibold tracking-wider uppercase max-w-[500px] leading-relaxed">
              WE DON'T JUST SELL CARS. WE BUILD RELATIONSHIPS THAT LAST LONG AFTER DELIVERY.
            </p>
          </div>

          <!-- Supercar Image with Interactive Red Hotspots & Floating Specs Badges -->
          <!-- التعديل 2: أزلنا h-full وأضفنا p-4 لتوفير مساحة وحشوة سفلية pb-10 -->
          <div class="relative w-full flex items-center justify-center p-4 pb-10">

            <!-- Top View White Supercar Image -->
            <!-- التعديل 3: استخدمنا w-full و h-auto لضمان عدم القص -->
            <img :src="carTopView" alt="White Supercar Top View" class="w-full h-auto object-contain " />

            <!-- ---------------------------------------------------- -->
            <!-- HOTSPOT 1: TOP SPEED (Top Right)                    -->
            <!-- ---------------------------------------------------- -->
            <div class="absolute top-[28%] right-[2%] sm:right-[-4%] flex items-center space-x-2 z-20">
              <!-- Connecting Line & Red Glowing Dot -->
              <div class="relative flex items-center justify-center">
                <span class="absolute w-4 h-4 rounded-full bg-red-600/40 animate-ping"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-red-600 border border-white shadow-md"></span>
              </div>
              <div class="w-8 h-[1px] bg-gray-300"></div>

              <!-- Floating Spec Badge -->
              <div
                class="bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 px-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col items-start">
                <span class="text-gray-950 text-base sm:text-lg font-extrabold uppercase tracking-tight"
                  style="font-family: 'Orbitron', 'Inter', sans-serif;">
                  330 km/h
                </span>
                <span class="text-gray-400 text-[10.5px] sm:text-11 font-semibold tracking-wider uppercase">
                  Top Speed
                </span>
              </div>
            </div>

            <!-- ---------------------------------------------------- -->
            <!-- HOTSPOT 2: HORSEPOWER (Middle Left)                  -->
            <!-- ---------------------------------------------------- -->
            <div class="absolute top-[60%] left-[-4%] sm:left-[-10%] flex items-center space-x-2 z-20">
              <!-- Floating Spec Badge -->
              <div
                class="bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 px-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col items-start">
                <span class="text-[#C81E1E] text-base sm:text-lg font-extrabold uppercase tracking-tight"
                  style="font-family: 'Orbitron', 'Inter', sans-serif;">
                  650 HP
                </span>
                <span class="text-gray-400 text-[10.5px] sm:text-11 font-semibold tracking-wider uppercase">
                  Horsepower
                </span>
              </div>

              <div class="w-8 h-[1px] bg-gray-300"></div>
              <!-- Red Glowing Dot -->
              <div class="relative flex items-center justify-center">
                <span class="absolute w-4 h-4 rounded-full bg-red-600/40 animate-ping"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-red-600 border border-white shadow-md"></span>
              </div>
            </div>

            <!-- ---------------------------------------------------- -->
            <!-- HOTSPOT 3: DISPLACEMENT (Bottom Right)              -->
            <!-- ---------------------------------------------------- -->
            <div class="absolute bottom-[16%] right-[-2%] sm:right-[-6%] flex items-center space-x-2 z-20">
              <!-- Red Glowing Dot -->
              <div class="relative flex items-center justify-center">
                <span class="absolute w-4 h-4 rounded-full bg-red-600/40 animate-ping"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-red-600 border border-white shadow-md"></span>
              </div>
              <div class="w-8 h-[1px] bg-gray-300"></div>

              <!-- Floating Spec Badge -->
              <div
                class="bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 px-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col items-start">
                <span class="text-gray-950 text-base sm:text-lg font-extrabold uppercase tracking-tight"
                  style="font-family: 'Orbitron', 'Inter', sans-serif;">
                  3,745 cc
                </span>
                <span class="text-gray-400 text-[10.5px] sm:text-11 font-semibold tracking-wider uppercase">
                  Displacement
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import carTopView from '../assets/imgs/what_we_offer.png'
</script>