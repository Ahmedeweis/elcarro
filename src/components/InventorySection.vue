<template>
  <section style="padding-top: 0;"
    class="w-full py-14 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-12 xl:px-16 text-white overflow-hidden">
    <div class="max-w-[1400px] mx-auto">
      <!-- Main Container with subtle mesh grid effect & rounded outer frame -->
      <div
        class="relative bg-gradient-to-br from-[#121212] via-[#0D0D0D] to-[#050505] rounded-[32px] sm:rounded-[44px] border border-white/10 p-6 sm:p-10 lg:p-14 xl:p-16 overflow-hidden">

        <!-- Background subtle mesh line & image overlay -->
        <div class="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-screen pointer-events-none"
          :style="{ backgroundImage: `url(${bgImg})` }"></div>
        <div class="absolute inset-0 opacity-[0.05] pointer-events-none"
          style="background-image: radial-gradient(circle at 75% 50%, rgba(255,255,255,0.4) 0%, transparent 60%);">
        </div>

        <!-- Grid Layout: Left Content & Right Inventory Accordion -->
        <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">

          <!-- ========================================================== -->
          <!-- LEFT COLUMN (Section Info & Split Button CTA)             -->
          <!-- ========================================================== -->
          <div class="lg:col-span-5 flex flex-col justify-between h-full space-y-12 sm:space-y-16">

            <div class="flex flex-col items-start">
              <!-- Tag Header -->
              <div
                class="inline-flex items-center text-xs sm:text-sm font-bold tracking-widest uppercase mb-4 text-gray-400">
                <span>[</span>
                <span class="text-white px-1.5 font-extrabold">INVENTORY_</span>
                <span>]</span>
              </div>

              <!-- Main Title -->
              <h2
                class="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[52px] font-extrabold leading-[1.08] tracking-tight uppercase mb-5"
                style="font-family: 'Orbitron', 'Inter', sans-serif;">
                BROWSE<br />
                WHAT JUST<br />
                LANDED
              </h2>

              <!-- Subtitle Description -->
              <p
                class="text-gray-400 text-xs sm:text-[13px] font-semibold tracking-wider uppercase max-w-[340px] leading-relaxed mb-8">
                NEW CARS ADDED EVERY SINGLE DAY. DON'T MISS OUT.
              </p>

              <div class="flex items-center gap-3.5 sm:gap-4 md:gap-5">
                <!-- الزرار الأول (خلفية بيضاء وكلام أسود مائل) -->
                <button style="padding: 13px 36px;" class="
      relative inline-flex items-center justify-center
      px-5 sm:px-9 md:px-11 lg:px-14
      py-2 sm:py-4 md:py-5
      text-sm sm:text-[15px] md:text-base lg:text-[17px] font-extrabold tracking-[0.08em] uppercase
      text-black
      bg-transparent
      transition-colors duration-200
      group
    ">
                  <!-- الخلفية البيضاء المائلة بزوايا دائرية -->
                  <span class="
        absolute inset-0 bg-white
        
        rounded-[10px] sm:rounded-[12px]
        -skew-x-[15deg]
        group-hover:bg-gray-100 group-active:bg-gray-200
        transition-colors duration-200
        pointer-events-none
      "></span>
                  <!-- النص بلون أسود -->
                  <span class="relative z-10 text-black">
                    BROWSE MORE
                  </span>
                </button>
                <!-- الزرار الثاني (الأيقونة) -->
                <button class="
        relative inline-flex items-center justify-center
        w-12 h-11
         text-white
        text-charcoal
        transition-colors duration-200
        group
      " aria-label="Navigate">
                  <!-- الخلفية البيضاء المائلة بزوايا دائرية -->
                  <span class="
          absolute inset-0 bg-[red]
          rounded-[8px]
          -skew-x-[15deg]
          group-hover:bg-gray-200 group-active:bg-gray-300
          transition-colors duration-200
          pointer-events-none
        "></span>
                  <!-- الأيقونة -->
                  <svg
                    class="relative z-10 w-[18px] h-[18px] lg:w-5 lg:h-5 transition-transform duration-200 group-hover:translate-x-[1px]"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path d="M13 5l7 7-7 7" />
                    <path d="M5 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Bottom Left Widget: Happy Customer Counter -->
            <div class="flex flex-col items-start pt-6 border-t border-white/5">
              <!-- Globe Icon -->
              <div class="w-9 h-9 sm:w-10 sm:h-10 mb-3 text-white opacity-85">
                <svg viewBox="0 0 48 48" fill="none" class="w-full h-full stroke-current stroke-[2.2]">
                  <circle cx="24" cy="24" r="18" />
                  <ellipse cx="24" cy="24" rx="18" ry="7.5" />
                  <line x1="6" y1="24" x2="42" y2="24" />
                  <ellipse cx="24" cy="24" rx="7.5" ry="18" />
                  <line x1="24" y1="6" x2="24" y2="42" />
                </svg>
              </div>

              <!-- Label -->
              <span class="text-[10.5px] sm:text-[11px] font-bold text-gray-400 tracking-[0.2em] uppercase mb-1">
                HAPPY CUSTOMER
              </span>

              <!-- Number + Avatars -->
              <div class="flex items-center space-x-4">
                <span class="text-white text-2xl sm:text-3xl font-extrabold tracking-tight"
                  style="font-family: 'Orbitron', 'Inter', sans-serif;">
                  95K+
                </span>

                <div class="flex -space-x-2.5">
                  <img :src="pers1" alt="Customer 1"
                    class="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-[#121212] object-cover" />
                  <img :src="pers2" alt="Customer 2"
                    class="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-[#121212] object-cover" />
                  <img :src="pers3" alt="Customer 3"
                    class="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-[#121212] object-cover" />
                </div>
              </div>
            </div>

          </div>


          <!-- ========================================================== -->
          <!-- RIGHT COLUMN (Interactive Accordion List of 4 Cars)       -->
          <!-- ========================================================== -->
          <div class="lg:col-span-7 flex flex-col space-y-3 sm:space-y-4">

            <div v-for="car in cars" :key="car.id"
              class="border-b border-white/10 last:border-b-0 pb-3 sm:pb-4 transition-all duration-300">

              <!-- ---------------------------------------------------- -->
              <!-- ALWAYS VISIBLE HEADER ROW                            -->
              <!-- ---------------------------------------------------- -->
              <div @click="activeId = activeId === car.id ? null : car.id"
                class="flex items-center justify-between cursor-pointer py-2 sm:py-3 group select-none hover:opacity-95 transition-opacity">
                <div class="flex items-center space-x-4 sm:space-x-6">
                  <!-- Thumbnail Image (shown ONLY when collapsed / NOT active) -->
                  <div v-if="activeId !== car.id"
                    class="w-16 h-12 sm:w-20 sm:h-14 rounded-xl sm:rounded-2xl overflow-hidden bg-gray-900 border border-white/10 flex-shrink-0 shadow-md transition-all duration-300">
                    <img :src="car.image" :alt="car.name"
                      class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  </div>

                  <!-- Title -->
                  <h3
                    class="text-white text-base sm:text-lg lg:text-xl font-extrabold tracking-wide uppercase transition-colors group-hover:text-gray-200"
                    style="font-family: 'Orbitron', 'Inter', sans-serif;">
                    {{ car.number }} – {{ car.name }}
                  </h3>
                </div>

                <!-- Chevron Arrow Icon (Rotates 180° smoothly) -->
                <button class="p-2 transition-transform duration-400 ease-in-out"
                  :class="activeId === car.id ? 'rotate-180 text-white' : 'rotate-0 text-white/70 group-hover:text-white'"
                  aria-label="Toggle car details">
                  <svg class="w-5 h-5 fill-none stroke-current stroke-[2.5]" viewBox="0 0 24 24" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>


              <!-- ---------------------------------------------------- -->
              <!-- SMOOTH EXPANDABLE ACCORDION CONTAINER                -->
              <!-- ---------------------------------------------------- -->
              <div class="grid transition-[grid-template-rows,opacity,margin] duration-500 ease-in-out overflow-hidden"
                :class="activeId === car.id ? 'grid-rows-[1fr] opacity-100 mt-2 sm:mt-3' : 'grid-rows-[0fr] opacity-0 mt-0'">
                <div class="overflow-hidden flex flex-col space-y-4 pt-1">

                  <!-- Expanded Big Car Card Container -->
                  <div
                    class="relative w-full h-[260px] sm:h-[320px] lg:h-[360px] rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#EDEDED] shadow-2xl flex items-center justify-center "
                    style="background-color:black;">

                    <!-- Top-Left Dark Cutout Notch with Inverted Curved Corners -->
                    <div class="absolute top-0 left-0 z-20 flex items-start justify-start pointer-events-auto">
                      <div
                        class="relative bg-[#121212] p-2.5 sm:p-3 rounded-br-[24px] sm:rounded-br-[28px] flex items-center justify-center shadow-lg">

                        <!-- Inverted Concave Corner Transition (Right Side) -->
                        <div class="absolute -right-[16px] top-0 w-[16px] h-[16px] bg-[#121212] pointer-events-none"
                          style="mask: radial-gradient(circle at 100% 100%, transparent 16px, #000 16.5px); -webkit-mask: radial-gradient(circle at 100% 100%, transparent 16px, #000 16.5px);">
                        </div>

                        <!-- Inverted Concave Corner Transition (Bottom Side) -->
                        <div class="absolute left-0 -bottom-[16px] w-[16px] h-[16px] bg-[#121212] pointer-events-none"
                          style="mask: radial-gradient(circle at 100% 100%, transparent 16px, #000 16.5px); -webkit-mask: radial-gradient(circle at 100% 100%, transparent 16px, #000 16.5px);">
                        </div>

                        <!-- White Circular Arrow Button Inside Dark Notch -->
                        <a style="background-color:white;" href="#"
                          class="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-gray-950 flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-transform duration-200"
                          aria-label="View details">
                          <svg class="w-4.5 h-4.5 sm:w-5 sm:h-5 fill-none stroke-current stroke-[3]" viewBox="0 0 24 24"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M13 17l5-5-5-5M6 17l5-5-5-5" />
                          </svg>
                        </a>
                      </div>
                    </div>

                    <!-- Large Vehicle Image Filling full box -->
                    <img :src="car.image" :alt="car.name" class="w-full h-full object-cover" />

                  </div>

                  <!-- Active Car Description Info -->
                  <div class="flex flex-col items-start pt-1 pb-2 px-1">
                    <p
                      class="text-gray-400 text-xs sm:text-[13px] font-semibold tracking-wider uppercase max-w-[580px] leading-relaxed">
                      {{ car.description }}
                    </p>
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

import bgImg from '../assets/imgs/inventory/bg.webp'
import bmwImg from '../assets/imgs/inventory/BMW.webp'
import porshImg from '../assets/imgs/inventory/porsh.webp'
import mercedesImg from '../assets/imgs/inventory/mersedece.webp'
import ferrariImg from '../assets/imgs/inventory/ferarre.webp'

import pers1 from '../assets/imgs/pers1.webp'
import pers2 from '../assets/imgs/pers2.webp'
import pers3 from '../assets/imgs/pers3.webp'

const activeId = ref(3) // 03 - Porsche 911 Turbo S is active by default as shown in reference design

const cars = [
  {
    id: 1,
    number: '01',
    name: 'BMW M4 Competition',
    image: bmwImg,
    description: 'HIGH-PERFORMANCE ENGINEERING COMBINED WITH AGGRESSIVE STYLING AND UNMATCHED TRACK CAPABILITY.'
  },
  {
    id: 2,
    number: '02',
    name: 'Ferrari Roma Spider',
    image: ferrariImg,
    description: 'TIMLESS ITALIAN DESIGN ELEGANCE MEETS V8 TURBOCHARGED EXHILARATING PERFORMANCE.'
  },
  {
    id: 3,
    number: '03',
    name: 'Porsche 911 Turbo S',
    image: porshImg,
    description: 'BREATHTAKING SPEED AND PRECISION HANDLING WRAPPED IN TRULY ICONIC DESIGN.'
  },
  {
    id: 4,
    number: '04',
    name: 'Mercedes-Benz AMG GT',
    image: mercedesImg,
    description: 'PURE HANDCRAFTED AMG POWER DELIVERING LUXURY COMFORT AND UNCOMPROMISING SPEED.'
  }

]
</script>
