<template>
  <section class="w-full py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-12 xl:px-16 text-white overflow-hidden">
    <div class="max-w-[1400px] mx-auto">
      
      <!-- Outer Card Frame with Curved Corners & Border -->
      <div class="relative bg-gradient-to-br from-[#0B0B0B] via-[#080808] to-[#040404] rounded-[28px] sm:rounded-[36px] border border-white/10 p-6 sm:p-10 lg:p-14 shadow-[0_30px_100px_rgba(0,0,0,0.9)] overflow-hidden">
        
        <!-- Subtle Mesh Line & Background Image Overlay -->
        <div 
          class="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-screen pointer-events-none" 
          :style="{ backgroundImage: `url(${bgImg})` }"
        ></div>
        <div 
          class="absolute inset-0 opacity-[0.04] pointer-events-none" 
          style="background-image: radial-gradient(circle at 50% 30%, rgba(255,255,255,0.4) 0%, transparent 70%);"
        ></div>

        <!-- Relative Content Container -->
        <div class="relative z-10 flex flex-col space-y-12 lg:space-y-16">
          
          <!-- TOP HEADER ROW: Title & Subtitle + Slider Controls -->
          <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-8">
            
            <div class="flex flex-col items-start max-w-2xl">
              <!-- Tag Header -->
              <div class="inline-flex items-center text-xs sm:text-sm font-bold tracking-widest uppercase mb-3 text-gray-400">
                <span>[</span>
                <span class="text-white px-1.5 font-extrabold">TESTIMONIAL_</span>
                <span>]</span>
              </div>

              <!-- Main Heading -->
              <h2 
                class="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-extrabold leading-[1.1] tracking-wide uppercase mb-4"
                style="font-family: 'Orbitron', 'Inter', sans-serif;"
              >
                EVERY REVIEW IS A STORY<br />
                WE ARE PROUD OF
              </h2>

              <!-- Subtitle -->
              <p class="text-gray-400 text-xs sm:text-[13px] font-semibold tracking-wider uppercase leading-relaxed">
                NEW CARS ADDED EVERY SINGLE DAY. DON'T MISS OUT.
              </p>
            </div>

            <!-- Navigation Arrow Buttons (Prev / Next) -->
            <div class="flex items-center space-x-3 self-end lg:self-auto">
              <!-- Previous Button (White) -->
              <button 
                @click="prevSlide"
                class="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white hover:bg-gray-100 text-black flex items-center justify-center transition-transform duration-200 active:scale-95 shadow-lg group"
                aria-label="Previous Testimonial"
              >
                <svg class="w-5 h-5 sm:w-6 sm:h-6 fill-none stroke-current stroke-[3] transition-transform duration-200 group-hover:-translate-x-0.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11 17l-5-5 5-5M18 17l-5-5 5-5"/>
                </svg>
              </button>

              <!-- Next Button (Red Accent) -->
              <button 
                @click="nextSlide"
                class="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#C81E1E] hover:bg-red-700 text-white flex items-center justify-center transition-transform duration-200 active:scale-95 shadow-lg group"
                aria-label="Next Testimonial"
              >
                <svg class="w-5 h-5 sm:w-6 sm:h-6 fill-none stroke-current stroke-[3] transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 17l5-5-5-5M6 17l5-5-5-5"/>
                </svg>
              </button>
            </div>

          </div>

          <!-- CARDS CAROUSEL GRID -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            
            <div 
              v-for="(item, idx) in visibleTestimonials" 
              :key="idx"
              class="relative flex flex-col justify-between rounded-[24px] sm:rounded-[28px] overflow-hidden transition-all duration-400 group"
              :class="[
                item.image 
                  ? 'bg-gradient-to-b from-[#181818] to-[#0E0E0E] border border-white/10' 
                  : 'bg-[#222222] border border-white/5'
              ]"
            >
              
              <!-- Card Header info (Name & Profession) -->
              <div class="p-6 sm:p-7 pb-4 flex flex-col items-start">
                <h3 
                  class="text-white text-lg sm:text-xl font-bold tracking-wide"
                  style="font-family: 'Orbitron', 'Inter', sans-serif;"
                >
                  {{ item.name }}
                </h3>
                <span class="text-[11px] sm:text-xs font-bold text-gray-400 tracking-widest uppercase mt-1">
                  {{ item.role }}
                </span>
              </div>

              <!-- Card Content Area: Image or Solid Box -->
              <div class="px-6 sm:px-7 flex-1 flex flex-col justify-center">
                
                <!-- IF HAS IMAGE (Featured Card) -->
                <div v-if="item.image" class="relative w-full h-[180px] sm:h-[200px] rounded-2xl overflow-hidden mb-5 border border-white/10">
                  <img 
                    :src="item.image" 
                    :alt="item.name" 
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                </div>

                <!-- Review Text Quote -->
                <p 
                  class="text-white font-extrabold text-xs sm:text-[13px] leading-relaxed uppercase tracking-wider mb-6"
                  :class="{ 'mt-2': !item.image }"
                >
                  "{{ item.text }}"
                </p>

              </div>

              <!-- Card Footer: Stars + Rating & Inverted Bottom-Right Quote Notch -->
              <div class="relative px-6 sm:px-7 pb-6 pt-2 flex items-center justify-between mt-auto">
                
                <!-- Stars & Rating Score -->
                <div class="flex items-center space-x-2">
                  <div class="flex items-center text-amber-400 text-xs sm:text-sm space-x-0.5">
                    <span v-for="star in 5" :key="star">★</span>
                  </div>
                  <span 
                    class="text-white font-bold text-xs sm:text-sm tracking-wide"
                    style="font-family: 'Orbitron', 'Inter', sans-serif;"
                  >
                    {{ item.rating }}
                  </span>
                </div>

                <!-- Inverted Corner Notch with White Quote Icon -->
                <div class="absolute bottom-0 right-0 flex items-end justify-end pointer-events-none">
                  <div class="relative bg-[#040404] p-3 sm:p-3.5 rounded-tl-[20px] sm:rounded-tl-[24px] flex items-center justify-center">
                    
                    <!-- Concave Curve Left -->
                    <div 
                      class="absolute -left-[16px] bottom-0 w-[16px] h-[16px] bg-[#040404] pointer-events-none"
                      style="mask: radial-gradient(circle at 0% 0%, transparent 16px, #000 16.5px); -webkit-mask: radial-gradient(circle at 0% 0%, transparent 16px, #000 16.5px);"
                    ></div>
                    
                    <!-- Concave Curve Top -->
                    <div 
                      class="absolute right-0 -top-[16px] w-[16px] h-[16px] bg-[#040404] pointer-events-none"
                      style="mask: radial-gradient(circle at 0% 0%, transparent 16px, #000 16.5px); -webkit-mask: radial-gradient(circle at 0% 0%, transparent 16px, #000 16.5px);"
                    ></div>

                    <!-- Double Quote Symbol SVG -->
                    <div class="w-6 h-6 sm:w-7 sm:h-7 text-white flex items-center justify-center">
                      <svg class="w-full h-full fill-current" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                      </svg>
                    </div>

                  </div>
                </div>

              </div>

            </div>

          </div>


          <!-- BOTTOM STATS NUMBERS ROW -->
          <div class="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            
            <div 
              v-for="(stat, sIdx) in stats" 
              :key="sIdx"
              class="flex flex-col items-start space-y-1.5"
            >
              <div 
                class="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold tracking-tight"
                style="font-family: 'Orbitron', 'Inter', sans-serif;"
              >
                {{ stat.number }}
              </div>
              <div class="text-gray-400 text-[10px] sm:text-xs font-bold tracking-widest uppercase">
                {{ stat.label }}
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

import bgImg from '../assets/imgs/inventory/bg.webp'
import test1 from '../assets/imgs/testmonials/1.png'
import test2 from '../assets/imgs/testmonials/2.png'
import test3 from '../assets/imgs/testmonials/3.png'

const currentIndex = ref(0)

const testimonials = [
  {
    name: 'Esther Howard',
    role: 'BUSINESSMAN',
    image: test1,
    text: 'BOUGHT MY FIRST LUXURY CAR FROM ELCARRO AND HONESTLY THE EXPERIENCE WAS NOTHING LIKE I EXPECTED.',
    rating: '4.9/5'
  },
  {
    name: 'Robert Fox',
    role: 'ARCHITECT',
    image: null,
    text: 'THE AFTER-SALES SUPPORT ALONE IS WORTH IT. THREE MONTHS AFTER BUYING MY CAR I HAD A SMALL ISSUE AND THEY SORTED IT OUT THE SAME DAY.',
    rating: '4.9/5'
  },
  {
    name: 'Jacob Jones',
    role: 'DOCTOR',
    image: test3,
    text: 'BEST CAR BUYING EXPERIENCE I EVER HAD. THE SELECTION AND SERVICE IS COMPLETELY TOP TIER.',
    rating: '5.0/5'
  },
  {
    name: 'Cody Fisher',
    role: 'ENTREPRENEUR',
    image: test2,
    text: 'FOUND MY DREAM CAR WITHIN MINUTES. SMOOTH TRANSACTION AND SUPER FAST DELIVERY.',
    rating: '4.9/5'
  }
]

const visibleTestimonials = computed(() => {
  const result = []
  for (let i = 0; i < 3; i++) {
    const idx = (currentIndex.value + i) % testimonials.length
    result.push(testimonials[idx])
  }
  return result
})

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + testimonials.length) % testimonials.length
}

const stats = [
  {
    number: '12K+',
    label: 'HAPPY CUSTOMERS SERVED'
  },
  {
    number: '600+',
    label: 'CLIENT SATISFACTION RATE'
  },
  {
    number: '150',
    label: 'PROJECTS DELIVERED'
  },
  {
    number: '150',
    label: 'PROJECTS DELIVERED'
  }
]
</script>
