<template>
  <section style="padding-top: 0;"
    class="w-full bg-white py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-12 xl:px-16 overflow-hidden">
    <div class="max-w-[1400px] mx-auto">
      <!-- Grid Container: Left Column & Right Column -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

        <!-- ========================================================== -->
        <!-- LEFT COLUMN (Video Card & Global Sourcing)                -->
        <!-- ========================================================== -->
        <div class="lg:col-span-5 flex flex-col space-y-10 sm:space-y-14">

          <!-- TOP: Feature Video Thumbnail Card -->
          <div class="flex flex-col space-y-4">
            <div
              class="relative w-full max-w-[480px] rounded-[22px] sm:rounded-[26px] overflow-hidden bg-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.06)] group">
              <!-- Main SUV Image -->
              <img :src="bigCarImg" alt="Luxury SUV in desert landscape"
                class="w-full h-[220px] sm:h-[270px] lg:h-[290px] object-cover transition-transform duration-500 group-hover:scale-[1.02]" />


            </div>

            <!-- Card Subtitle -->
            <h3 class="text-gray-900 text-sm sm:text-base font-extrabold tracking-wider uppercase mt-1"
              style="font-family: 'Orbitron', 'Inter', sans-serif;">
              PAY REELS BY FEATURES
            </h3>
          </div>

          <!-- BOTTOM: Global Sourcing Feature -->
          <div class="flex flex-col items-start max-w-[440px] pt-2">
            <!-- Red Wireframe Globe Logo -->
            <div class="w-12 h-12 sm:w-14 sm:h-14 mb-5 flex-shrink-0">
              <img :src="networkImg" alt="Global Sourcing Globe Icon" class="w-full h-full object-contain" />
            </div>

            <!-- Title -->
            <h2
              class="text-gray-950 text-xl sm:text-2xl lg:text-[26px] font-extrabold tracking-wide uppercase mb-3 leading-tight"
              style="font-family: 'Orbitron', 'Inter', sans-serif;">
              GLOBAL SOURCING
            </h2>

            <!-- Text Description -->
            <p class="text-gray-500 text-xs sm:text-[13px] font-semibold tracking-wider uppercase leading-relaxed">
              HAND-PICKED FROM JAPAN, UK & UAE – QUALITY WITHOUT COMPROMISE.
            </p>
          </div>

        </div>


        <!-- ========================================================== -->
        <!-- RIGHT COLUMN (Header, Description & Stat Cards)           -->
        <!-- ========================================================== -->
        <div class="lg:col-span-7 flex flex-col justify-between space-y-8 sm:space-y-10">

          <!-- TOP: Tag, Headline & Intro -->
          <div class="flex flex-col items-start">

            <!-- Category Tag -->
            <div class="inline-flex items-center text-xs sm:text-sm font-bold tracking-widest uppercase mb-3 sm:mb-4">
              <span class="text-gray-700">[</span>
              <span class="text-[#C81E1E] px-1 font-extrabold">ABOUT US_</span>
              <span class="text-gray-700 font-normal">]</span>
            </div>

            <!-- Main Headline -->
            <h1
              class="text-gray-950 text-3xl sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[54px] font-extrabold leading-[1.08] tracking-tight uppercase mb-4 sm:mb-6"
              style="font-family: 'Orbitron', 'Inter', sans-serif;">
              BUILT FOR THOSE<br />
              WHO CHOOSE DIFFERENTLY
            </h1>

            <!-- Subtitle Description -->
            <p
              class="text-gray-500 text-xs sm:text-sm font-semibold tracking-wider uppercase max-w-[620px] leading-relaxed">
              WORLD-CLASS VEHICLES, TOTAL TRANSPARENCY, AND ABSOLUTELY ZERO COMPROMISE ON QUALITY.
            </p>
          </div>


          <!-- BOTTOM: Stat Cards & Carousel Navigation Arrows -->
          <div class="flex flex-col space-y-4 pt-2 sm:pt-6">

            <!-- Top Right Nav Buttons -->
            <div class="flex items-center justify-end space-x-2.5 mb-1 pr-1">
              <button class="
        relative inline-flex items-center justify-center
        w-12 h-11
        
        text-charcoal
        transition-colors duration-200
        group
      " aria-label="Navigate">
                <!-- الخلفية البيضاء المائلة بزوايا دائرية -->
                <span style="border: solid 2px red;" class="
          absolute inset-0 bg-white 
          rounded-[8px]
          -skew-x-[15deg]
          group-hover:bg-gray-200 group-active:bg-gray-300
          transition-colors duration-200
          pointer-events-none
        "></span>
                <!-- الأيقونة -->
                <svg
                  class="relative z-10 w-[18px] h-[18px] lg:w-5 lg:h-5 -scale-x-100 transition-transform  duration-200 group-hover:-translate-x-[1px]"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="M13 5l7 7-7 7" />
                  <path d="M5 5l7 7-7 7" />
                </svg>
              </button>

              <button style="margin-left: 10px;" class="
        relative inline-flex items-center justify-center
        w-12 h-11
        
        text-charcoal
        transition-colors duration-200
        group
      " aria-label="Navigate">
                <!-- الخلفية البيضاء المائلة بزوايا دائرية -->
                <span class="
          absolute inset-0 bg-red-500
          rounded-[8px]
          -skew-x-[15deg]
          group-hover:bg-gray-200 group-active:bg-gray-300
          transition-colors duration-200
          pointer-events-none
        "></span>
                <!-- الأيقونة -->
                <svg
                  class="relative z-10 w-[18px] h-[18px] lg:w-5 lg:h-5 transition-transform text-white duration-200 group-hover:translate-x-[1px]"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="M13 5l7 7-7 7" />
                  <path d="M5 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <!-- Cards Row (3 Grid Cards) -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">

              <!-- CARD 1: TOP SPEED -->
              <div
                class="relative bg-white border border-gray-200/90 rounded-[20px] p-5 sm:p-6 flex flex-col justify-between items-center text-center overflow-hidden h-[280px] sm:h-[310px] lg:h-[330px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] group">
                <div class="z-10 flex flex-col items-center w-full">
                  <span class="text-gray-500 text-[11px] sm:text-xs font-bold tracking-widest uppercase">
                    TOP SPEED
                  </span>
                  <span
                    class="text-gray-950 text-xl sm:text-2xl lg:text-[26px] font-extrabold tracking-tight uppercase mt-1"
                    style="font-family: 'Orbitron', 'Inter', sans-serif;">
                    320 km/h
                  </span>
                </div>

                <!-- White Car Top-down View Image at Bottom -->
                <div
                  class="w-full flex justify-center items-end absolute -bottom-2 inset-x-0 transition-transform duration-300 group-hover:translate-y-[-4px]">
                  <img :src="whiteCarImg" alt="Top Speed White Supercar Top View"
                    class="w-[75%] sm:w-[85%] max-h-[190px] object-contain object-bottom" />
                </div>
              </div>

              <!-- CARD 2: TORQUE -->
              <div
                class="relative bg-[#EFEFEF] rounded-[20px] p-5 sm:p-6 flex flex-col justify-between items-center text-center overflow-hidden h-[280px] sm:h-[310px] lg:h-[330px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] group">
                <div class="z-10 flex flex-col items-center w-full">
                  <span class="text-gray-500 text-[11px] sm:text-xs font-bold tracking-widest uppercase">
                    TORQUE
                  </span>
                  <span
                    class="text-gray-950 text-xl sm:text-2xl lg:text-[26px] font-extrabold tracking-tight uppercase mt-1"
                    style="font-family: 'Orbitron', 'Inter', sans-serif;">
                    800 Nm
                  </span>
                </div>

                <!-- Red Car Top-down View Image at Bottom -->
                <div
                  class="w-full flex justify-center items-end absolute -bottom-2 inset-x-0 transition-transform duration-300 group-hover:translate-y-[-4px]">
                  <img :src="redCarImg" alt="Torque Red Supercar Top View"
                    class="w-[75%] sm:w-[85%] max-h-[190px] object-contain object-bottom" />
                </div>
              </div>

              <!-- CARD 3: SLEEK CAR ACTION CARD -->
              <div style="height: 200px; align-self: flex-end;"
                class="relative rounded-[20px] overflow-hidden h-[280px] sm:h-[310px] lg:h-[330px] bg-slate-900 shadow-[0_4px_20px_rgba(0,0,0,0.08)] group">
                <img :src="sleekCarImg" alt="Sleek Sports Car in Motion"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import bigCarImg from '../assets/imgs/about us/bigCar.png'
import networkImg from '../assets/imgs/about us/network.png'
import whiteCarImg from '../assets/imgs/about us/whiteCar.png'
import redCarImg from '../assets/imgs/about us/redCar.png'
import sleekCarImg from '../assets/imgs/about us/SleekCar.png'
</script>
<style scoped>
.buttoom {
  /* transform: skewX(10deg); */
  transform: skewX(-15deg);
}

.skewed-btn-bg {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: red;
  border-radius: 8px;
  transform: skewX(-15deg);
  transition: background-color 200ms ease;
  pointer-events: none;
}

/* تفاعل الـ Hover عند تمرير الماوس على العنصر الأب (.group) */
.group:hover .skewed-btn-bg {
  background-color: #e5e7eb;
  /* كود gray-200 */
}

/* تفاعل الـ Active عند الضغط على العنصر الأب (.group) */
.group:active .skewed-btn-bg {
  background-color: #d1d5db;
  /* كود gray-300 */
}
</style>
