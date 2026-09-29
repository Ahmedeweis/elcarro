<template>
  <!-- Main Footer Wrapper: خلفية بيضاء نقية مثل باقي التصميم -->
  <footer class="w-full bg-white py-10 sm:py-14 px-4 sm:px-6 lg:px-12 text-white">
    <div>
      <!-- Rounded Black Container Card -->
      <div
        class="relative bg-black rounded-[36px] sm:rounded-[44px] px-6 sm:px-12 lg:px-16 pt-12 sm:pt-16 pb-0 shadow-2xl overflow-hidden h-[650px] flex flex-col justify-between">

        <!-- Mesh Background Overlay -->
        <div class="absolute inset-0 bg-cover bg-bottom opacity-25 mix-blend-screen pointer-events-none"
          :style="{ backgroundImage: `url(${bgImg})` }"></div>

        <!-- Relative Content Grid -->
        <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16 sm:mb-20">

          <!-- LEFT COLUMN: Brand Logo, Description, Social Links, Copyright -->
          <div class="lg:col-span-5 flex flex-col justify-between space-y-10">
            <div class="flex flex-col items-start space-y-5">
              <!-- Brand Logo -->
              <h2 class="text-white text-3xl sm:text-4xl font-black tracking-tight font-['Orbitron',sans-serif]">
                elcarro.
              </h2>

              <p
                class="text-neutral-400 text-xs sm:text-[13px] font-semibold tracking-wider uppercase leading-relaxed max-w-sm">
                EVERY WEEK WE SHARE THE LATEST ARRIVALS, BEST DEALS, AND EXCLUSIVE OFFERS.
              </p>

              <!-- Social Links -->
              <div class="flex items-center space-x-2.5 pt-2">
                <span class="text-neutral-400 font-semibold text-xs tracking-wider uppercase mr-2">FOLLOW US ON</span>

                <!-- Instagram -->
                <a href="#"
                  class="w-7 h-7 rounded border border-neutral-700 bg-neutral-900/60 hover:border-white text-white flex items-center justify-center transition-colors">
                  <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <!-- Facebook -->
                <a href="#"
                  class="w-7 h-7 rounded border border-neutral-700 bg-neutral-900/60 hover:border-white text-white flex items-center justify-center transition-colors">
                  <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path
                      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <!-- LinkedIn -->
                <a href="#"
                  class="w-7 h-7 rounded border border-neutral-700 bg-neutral-900/60 hover:border-white text-white flex items-center justify-center transition-colors">
                  <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path
                      d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
                <!-- X / Twitter -->
                <a href="#"
                  class="w-7 h-7 rounded border border-neutral-700 bg-neutral-900/60 hover:border-white text-white flex items-center justify-center transition-colors">
                  <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path
                      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>

            <!-- Divider Line & Copyright -->
            <div class="pt-8 border-t border-neutral-800/80">
              <p class="text-white font-bold text-[15px] tracking-widest uppercase">
                2025 ©DESIGN MONKS. ALL RIGHTS RESERVED
              </p>
            </div>
          </div>

          <!-- RIGHT COLUMN: Links Columns & Newsletter Box -->
          <div class="lg:col-span-7 flex flex-col justify-between space-y-10">

            <!-- Quick Links 3-Columns -->
            <div class="grid grid-cols-3 gap-6 text-xs sm:text-[13px] font-bold tracking-wider uppercase">
              <!-- Col 1 -->
              <div class="flex flex-col space-y-3.5">
                <a href="#" class="text-neutral-400 hover:text-white transition-colors">MODELS</a>
                <a href="#" class="text-neutral-400 hover:text-white transition-colors">BRANDS</a>
                <a href="#" class="text-neutral-400 hover:text-white transition-colors">NEW ARRIVALS</a>
                <a href="#" class="text-neutral-400 hover:text-white transition-colors">INVENTORY</a>
              </div>
              <!-- Col 2 -->
              <div class="flex flex-col space-y-3.5">
                <a href="#" class="text-white hover:text-neutral-300 transition-colors">ABOUT US</a>
                <a href="#" class="text-neutral-400 hover:text-white transition-colors">OUR STORY</a>
                <a href="#" class="text-neutral-400 hover:text-white transition-colors">OUR TEAM</a>
                <a href="#" class="text-neutral-400 hover:text-white transition-colors">CAREERS</a>
              </div>
              <!-- Col 3 -->
              <div class="flex flex-col space-y-3.5">
                <a href="#" class="text-neutral-400 hover:text-white transition-colors">TEST DRIVE</a>
                <a href="#" class="text-neutral-400 hover:text-white transition-colors">HOME DELIVERY</a>
                <a href="#" class="text-neutral-400 hover:text-white transition-colors">CAR FINANCING</a>
                <a href="#" class="text-neutral-400 hover:text-white transition-colors">EMI CALCULATOR</a>
              </div>
            </div>

            <!-- Subscribe Newsletter Section -->
            <div class="flex flex-col space-y-3 pt-2">
              <h3 class="text-white text-xl sm:text-2xl font-bold tracking-wide font-['Orbitron',sans-serif]">
                Subscribe on Newsletter
              </h3>

              <p
                class="text-neutral-400 text-xs sm:text-[12px] font-semibold tracking-wider uppercase leading-relaxed max-w-xl pb-2">
                GET THE LATEST AI INSIGHTS, UPDATES, AND INNOVATIONS DELIVERED STRAIGHT TO YOUR INBOX.
              </p>

              <!-- Newsletter Controls: Input with Inner Slanted Buttons -->
              <div
                class="relative flex items-center w-full bg-neutral-900/60 border border-neutral-800 rounded-xl p-1.5 sm:p-2 focus-within:border-neutral-500 transition-colors">
                <!-- Input Box -->
                <input type="email" placeholder="TYPE E-MAIL HERE"
                  class="w-full bg-transparent px-3 sm:px-4 text-white placeholder-neutral-500 font-semibold text-xs tracking-wider uppercase focus:outline-none" />

                <!-- Inner Buttons Container -->
                <div class="flex items-center gap-2 sm:gap-3 flex-shrink-0 pr-1">
                  <!-- الزرار الأول (Outlined + Rounded + Skew) -->
                  <button type="button"
                    class="relative inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-2.5 text-[10px] sm:text-[11px] font-bold tracking-[0.12em] uppercase bg-transparent transition-colors duration-200 group">
                    <span
                      class="absolute inset-0 border border-white/80 rounded-[6px] -skew-x-[15deg] group-hover:bg-white/10 active:bg-white/15 transition-colors duration-200 pointer-events-none"></span>
                    <span class="relative z-10 text-white whitespace-nowrap">
                      Subscribe
                    </span>
                  </button>

                  <!-- الزرار الثاني (Filled + Rounded + Skew) -->
                  <button type="submit"
                    class="relative inline-flex items-center justify-center w-9 h-8 sm:w-10 sm:h-9 transition-colors duration-200 group"
                    aria-label="Submit">
                    <span
                      class="absolute inset-0 bg-white rounded-[6px] -skew-x-[15deg] group-hover:bg-neutral-200 group-active:bg-neutral-300 transition-colors duration-200 pointer-events-none"></span>
                    <svg
                      class="relative text-black z-10 w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"
                      stroke-linejoin="round">
                      <path d="M13 5l7 7-7 7" />
                      <path d="M5 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <!-- Bottom Policy Links -->
            <div
              class="flex flex-wrap items-center gap-6 pt-2 text-xs font-semibold text-neutral-400 tracking-wider uppercase">
              <a href="#" class="hover:text-white transition-colors">PRIVACY POLICY</a>
              <a href="#" class="hover:text-white transition-colors">TERMS & CONDITIONS</a>
              <a href="#" class="hover:text-white transition-colors">COOKIES</a>
              <a href="#" class="hover:text-white transition-colors">FAQ</a>
            </div>

          </div>

        </div>

        <!-- GIANT OUTLINED WATERMARK: ELCARRO -->
        <div
          class="relative z-0 -mb-6 sm:-mb-10 lg:-mb-14 flex  justify-center pointer-events-none select-none overflow-hidden">
          <span class="text-[210px] font-black leading-none tracking-tight text-[#666666] font-['Orbitron',sans-serif]">
            ELCARRO
          </span>
        </div>

      </div>

    </div>
  </footer>
</template>

<script setup>
import bgImg from '../assets/imgs/inventory/bg.webp'
</script>