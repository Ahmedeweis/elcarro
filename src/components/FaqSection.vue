<template>
  <section style="padding-top: 0;"
    class="w-full py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-12 text-gray-900 bg-white overflow-hidden">
    <div class="max-w-[1000px] mx-auto flex flex-col items-center">

      <!-- Top Tag Header -->
      <div class="inline-flex items-center text-xs sm:text-sm font-bold tracking-widest uppercase mb-3 text-gray-500">
        <span>[</span>
        <span class="text-gray-950 px-1 font-extrabold">FAQ_</span>
        <span>]</span>
      </div>

      <!-- Main Section Heading -->
      <h2
        class="text-gray-950 text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold leading-[1.1] tracking-wide uppercase text-center mb-3"
        style="font-family: 'Orbitron', 'Inter', sans-serif;">
        LET US CLEAR THINGS UP
      </h2>

      <!-- Subtitle -->
      <p class="text-gray-500 text-xs sm:text-[13px] font-bold tracking-wider uppercase text-center mb-10 sm:mb-12">
        WE ARE ALWAYS HERE TO HELP. NO QUESTION IS TOO SMALL.
      </p>

      <!-- Accordion Questions List -->
      <div class="w-full space-y-4 mb-14">

        <div v-for="(item, idx) in faqs" :key="idx"
          class="rounded-[20px] sm:rounded-[24px] transition-all duration-300 overflow-hidden" :class="[
            openIdx === idx
              ? 'bg-[#F4F4F4] p-6 sm:p-7 shadow-sm'
              : 'bg-white border border-black p-5 sm:p-6 '
          ]">
          <!-- Question Header Row -->
          <div @click="openIdx = openIdx === idx ? null : idx"
            class="flex items-center justify-between cursor-pointer select-none group">
            <h3 class="text-gray-950 text-base sm:text-lg md:text-xl font-bold tracking-wide uppercase pr-4"
              style="font-family: 'Orbitron', 'Inter', sans-serif;">
              {{ item.question }}
            </h3>

            <!-- Plus / Minus Circle Icon Button -->
            <button
              class="w-9 h-9 sm:w-10 cursor-pointer sm:h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 transition-colors duration-200"
              :class="openIdx === idx ? 'bg-[#C81E1E] text-white' : 'bg-white border border-black text-gray-800 group-hover:border-gray-400'"
              aria-label="Toggle answer">
              <span>{{ openIdx === idx ? '−' : '+' }}</span>
            </button>
          </div>

          <!-- Answer Collapsible Container -->
          <div class="grid transition-[grid-template-rows,opacity,margin] duration-300 ease-in-out overflow-hidden"
            :class="openIdx === idx ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'">
            <div class="overflow-hidden">
              <p
                class="text-gray-600 font-semibold text-xs sm:text-[13px] leading-relaxed uppercase tracking-wide border-t border-gray-200/60 pt-4">
                {{ item.answer }}
              </p>
            </div>
          </div>

        </div>

      </div>

      <!-- Bottom Banner Wrapper -->
      <div class="relative w-full max-w-5xl mx-auto pb-6">

        <!-- Main Gray Card with Cutout Corner -->
        <div
          class="relative w-full bg-[#F5F5F7] rounded-[28px] sm:rounded-[36px] pt-8 px-8 sm:pt-10 sm:px-12 pb-14 sm:pb-16"
          style="clip-path: polygon(0 0, 100% 0, 100% calc(100% - 46px), calc(100% - 320px) calc(100% - 46px), calc(100% - 365px) 100%, 0 100%);">

          <div class="flex flex-col space-y-4 max-w-xl">
            <!-- Title & Avatars -->
            <div class="flex items-center gap-3.5">
              <div class="flex -space-x-2.5 items-center">
                <img :src="pers1" alt="Team 1"
                  class="w-9 h-9 rounded-full border-2 border-white object-cover shadow-xs" />
                <img :src="pers2" alt="Team 2"
                  class="w-9 h-9 rounded-full border-2 border-white object-cover shadow-xs" />
                <img :src="pers3" alt="Team 3"
                  class="w-9 h-9 rounded-full border-2 border-white object-cover shadow-xs" />
              </div>

              <h3 class="text-black text-2xl sm:text-3xl font-medium tracking-tight">
                Need more clarity?
              </h3>
            </div>

            <!-- Description -->
            <p
              class="text-neutral-700 font-semibold text-[11px] sm:text-[12px] leading-relaxed tracking-wider uppercase">
              STILL NOT SURE? OUR TEAM IS JUST ONE CALL AWAY — READY TO HELP<br class="hidden sm:inline" />
              YOU WITH ANYTHING YOU NEED.
            </p>

            <!-- Email Link -->
            <div class="pt-2">
              <a href="mailto:HELLO@NEUROFLY.COM"
                class="text-[#cf1322] font-black text-xs sm:text-sm tracking-widest uppercase hover:opacity-85 transition-opacity">
                HELLO@NEUROFLY.COM —
              </a>
            </div>
          </div>
        </div>

        <!-- Action Button (Positioned exactly inside the bottom-right slot) -->
        <div class="absolute bottom-1 right-8 sm:right-12 flex items-center -skew-x-[5deg]">
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
              <span style="border: black solid 2px;" class="
        absolute inset-0 bg-white
        
        rounded-[10px] sm:rounded-[12px]
        -skew-x-[5deg]
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
          -skew-x-[5deg]
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

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

import pers1 from '../assets/imgs/pers1.webp'
import pers2 from '../assets/imgs/pers2.webp'
import pers3 from '../assets/imgs/pers3.webp'

const openIdx = ref(1) // Second question open by default as in reference image

const faqs = [
  {
    question: 'IS ELCARRO A TRUSTED DEALERSHIP?',
    answer: 'YES, ELCARRO HAS BEEN SERVING PREMIUM VEHICLE BUYERS WORLDWIDE WITH FULL TRANSPARENCY, CERTIFIED INSPECTIONS, AND DEDICATED AFTER-SALES SUPPORT.'
  },
  {
    question: 'WHAT IF I DON\'T LIKE THE CAR AFTER BUYING?',
    answer: 'WE HAVE A TRANSPARENT RETURN POLICY. YOUR SATISFACTION COMES FIRST – NO QUESTIONS ASKED.'
  },
  {
    question: 'CAN I NEGOTIATE THE PRICE?',
    answer: 'OUR PRICES ARE COMPETITIVELY PRICED BASED ON MARKET VALUE AND VEHICLE CONDITION, BUT WE ALWAYS WELCOME REASONABLE OFFER DISCUSSIONS.'
  },
  {
    question: 'CAN I SEE THE CAR BEFORE BUYING?',
    answer: 'ABSOLUTELY. YOU CAN SCHEDULE A PRIVATE IN-PERSON SHOWROOM VIEWING OR A COMPREHENSIVE VIRTUAL HIGH-DEFINITION VIDEO TOUR WITH OUR SPECIALISTS.'
  }
]
</script>
