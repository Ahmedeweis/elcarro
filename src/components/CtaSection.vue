<template>
  <!-- Main Outer Section (خلفية بيضاء نقية تماماً كما في التصميم) -->
  <section class="w-full bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-12 flex justify-center">
    <div class="relative w-full max-w-[1360px]">


      <div
        class="relative w-full min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] bg-black text-white rounded-[36px] sm:rounded-[48px] overflow-hidden flex flex-col justify-between p-7 sm:p-12 lg:p-16"
        style="clip-path: polygon(0 0, calc(100% - 240px) 0, calc(100% - 170px) 110px, 100% 110px, 100% 100%, 0 100%);">
        <!-- Background Car Image (Full cover positioned bottom-left) -->
        <div class="absolute inset-0 pointer-events-none">
          <img :src="porscheImg" alt="Porsche Concept" class="w-full h-full object-cover object-bottom" />

          <div class="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-transparent"></div>
        </div>


        <div class="relative z-10 max-w-3xl">
          <h2
            class="text-white text-3xl sm:text-5xl lg:text-[54px] font-black leading-[1.08] tracking-wider uppercase font-['Orbitron',sans-serif]">
            LET'S FIND YOUR NEXT<br />
            CAR TOGETHER
          </h2>
        </div>

        <!-- 3. Bottom Right CTA + Description Area -->
        <div class="relative z-10 self-end max-w-sm flex flex-col items-start gap-5 mb-4 sm:mb-6">
          <p
            class="text-white text-[11px] sm:text-[12px] font-semibold tracking-wider uppercase leading-relaxed opacity-90">
            BROWSE OUR FULL COLLECTION, BOOK A TEST DRIVE, OR SIMPLY REACH OUT. WE ARE HERE AND READY TO HELP.
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
                Get Started
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

      </div>


      <div
        class="absolute top-[-20px] right-4 sm:right-8 z-20 pointer-events-none flex items-center justify-center w-28 h-28 sm:w-36 sm:h-36">
        <!-- Circular Animated Text -->
        <svg class="w-full h-full animate-[spin_20s_linear_infinite]" viewBox="0 0 140 140">
          <path id="stampCircle" d="M 70, 70 m -46, 0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0" fill="none" />
          <text font-size="8.8" font-family="'Orbitron', sans-serif" font-weight="700" fill="#111111"
            letter-spacing="3.2">
            <textPath href="#stampCircle" startOffset="0%">
              * Drive your Dream Today * elcarro .
            </textPath>
          </text>
        </svg>

        <!-- Center Straight Down Arrow -->
        <span class="absolute text-black text-base sm:text-lg font-bold">
          ↓
        </span>
      </div>

    </div>
  </section>
</template>

<script setup>
import porscheImg from '../assets/imgs/inventory/porsh.webp'
</script>