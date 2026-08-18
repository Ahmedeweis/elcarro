<template>
  <section class="w-full py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-12 text-gray-900 bg-white overflow-hidden">
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
        style="font-family: 'Orbitron', 'Inter', sans-serif;"
      >
        LET US CLEAR THINGS UP
      </h2>

      <!-- Subtitle -->
      <p class="text-gray-500 text-xs sm:text-[13px] font-bold tracking-wider uppercase text-center mb-10 sm:mb-12">
        WE ARE ALWAYS HERE TO HELP. NO QUESTION IS TOO SMALL.
      </p>

      <!-- Accordion Questions List -->
      <div class="w-full space-y-4 mb-14">
        
        <div 
          v-for="(item, idx) in faqs" 
          :key="idx"
          class="rounded-[20px] sm:rounded-[24px] transition-all duration-300 overflow-hidden"
          :class="[
            openIdx === idx 
              ? 'bg-[#F4F4F4] p-6 sm:p-7 shadow-sm' 
              : 'bg-white border border-gray-200/80 p-5 sm:p-6 hover:border-gray-300'
          ]"
        >
          <!-- Question Header Row -->
          <div 
            @click="openIdx = openIdx === idx ? null : idx"
            class="flex items-center justify-between cursor-pointer select-none group"
          >
            <h3 
              class="text-gray-950 text-base sm:text-lg md:text-xl font-bold tracking-wide uppercase pr-4"
              style="font-family: 'Orbitron', 'Inter', sans-serif;"
            >
              {{ item.question }}
            </h3>

            <!-- Plus / Minus Circle Icon Button -->
            <button 
              class="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 transition-colors duration-200"
              :class="openIdx === idx ? 'bg-[#C81E1E] text-white' : 'bg-white border border-gray-300 text-gray-800 group-hover:border-gray-400'"
              aria-label="Toggle answer"
            >
              <span>{{ openIdx === idx ? '−' : '+' }}</span>
            </button>
          </div>

          <!-- Answer Collapsible Container -->
          <div 
            class="grid transition-[grid-template-rows,opacity,margin] duration-300 ease-in-out overflow-hidden"
            :class="openIdx === idx ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'"
          >
            <div class="overflow-hidden">
              <p class="text-gray-600 font-semibold text-xs sm:text-[13px] leading-relaxed uppercase tracking-wide border-t border-gray-200/60 pt-4">
                {{ item.answer }}
              </p>
            </div>
          </div>

        </div>

      </div>

      <!-- Bottom Banner: Need more clarity? -->
      <div class="relative w-full rounded-[24px] sm:rounded-[32px] bg-[#F3F3F3] p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 overflow-hidden">
        
        <!-- Left Info -->
        <div class="flex flex-col items-start space-y-3 max-w-xl">
          <div class="flex items-center space-x-3">
            <!-- Team Avatars Stack -->
            <div class="flex -space-x-2">
              <img :src="pers1" alt="Team 1" class="w-8 h-8 rounded-full border-2 border-white object-cover" />
              <img :src="pers2" alt="Team 2" class="w-8 h-8 rounded-full border-2 border-white object-cover" />
              <img :src="pers3" alt="Team 3" class="w-8 h-8 rounded-full border-2 border-white object-cover" />
            </div>

            <h4 
              class="text-gray-950 text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight"
              style="font-family: 'Orbitron', 'Inter', sans-serif;"
            >
              Need more clarity?
            </h4>
          </div>

          <p class="text-gray-500 font-bold text-[11px] sm:text-xs tracking-wider uppercase leading-relaxed">
            STILL NOT SURE? OUR TEAM IS JUST ONE CALL AWAY — READY TO HELP YOU WITH ANYTHING YOU NEED.
          </p>

          <a href="mailto:hello@neurofly.com" class="text-[#C81E1E] font-extrabold text-xs sm:text-sm tracking-wider uppercase hover:underline pt-2">
            HELLO@NEUROFLY.COM —
          </a>
        </div>

        <!-- Right Action Button with Angled Notch / Split CTA -->
        <div class="self-end md:self-center flex items-center rounded-xl overflow-hidden shadow-md group">
          <button 
            class="px-6 py-3.5 bg-white hover:bg-gray-50 text-gray-950 font-extrabold text-xs sm:text-sm tracking-wider uppercase border border-gray-300 border-r-0 rounded-l-xl transition-colors"
            style="font-family: 'Orbitron', 'Inter', sans-serif;"
          >
            CONTACT US
          </button>
          <button 
            class="px-4 py-3.5 bg-black hover:bg-gray-900 text-white flex items-center justify-center rounded-r-xl transition-colors"
            aria-label="Contact us arrow"
          >
            <svg class="w-4 h-4 fill-none stroke-current stroke-[3] transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 17l5-5-5-5M6 17l5-5-5-5"/>
            </svg>
          </button>
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
