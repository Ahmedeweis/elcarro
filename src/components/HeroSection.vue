<template>
  <section class="w-full min-h-screen bg-white overflow-x-hidden">
    <div class="relative max-w-[1440px] mx-auto px-3 sm:px-5 lg:px-7 pt-3 sm:pt-4 lg:pt-5 pb-10 lg:pb-16">
      <!-- ========================================================== -->
      <!--  HERO STAGE – combines NAV + DARK CARD + WHITE CURVED TOP  -->
      <!-- ========================================================== -->
      <div
        class="relative w-full h-[640px] sm:h-[700px] md:h-[760px] lg:h-[820px] rounded-[28px] sm:rounded-[32px] md:rounded-[36px] lg:rounded-[40px] overflow-hidden">
        <!-- ---------- DARK BACKGROUND (vehicle + gradient) ---------- -->
        <div class="absolute inset-0 z-0">
          <img :src="heroImg" alt="Luxury concept sports car side profile"
            class="w-full h-full object-cover opacity-[0.95]" />
          <div class="absolute inset-0 bg-gradient-to-b from-black/5 via-black/50 to-black/82"></div>
          <div class="absolute inset-0 bg-gradient-to-r from-black/78 via-black/12 to-transparent"></div>
          <div class="absolute inset-0 pointer-events-none" style="
              background:
                radial-gradient(1200px 600px at 26% 18%, rgba(255,255,255,0.05) 0%, transparent 60%),
                radial-gradient(900px 500px at 92% 90%, rgba(255,255,255,0.04) 0%, transparent 55%);
            "></div>
        </div>
        <!-- ========================================================== -->
        <!--  TOP WHITE ZONE with smooth CONCAVE CURVED notch on RIGHT  -->
        <!--  (This is the "أبيض مغطي ع جزء من الصورة فوق يسار و       -->
        <!--   طالع زي م النص فوق منحني ع اليمين" layer)                -->
        <!-- ========================================================== -->
        <div class="absolute top-0 left-0 right-0 z-30 pointer-events-none">
          <!-- Curved white SVG shape: full top width, concave smooth notch on bottom-right -->
          <svg class="block w-full pointer-events-none" viewBox="0 0 1440 138" preserveAspectRatio="none"
            aria-hidden="true">


            <!--
              SMOOTH CONCAVE CURVE path specs (coordinate box 1440 × 138):
              • Flat top (y=0): white area
              • Left side drops to y=138 at x=0 with tiny rounded corner
              • Right side: flat → sharp but SMOOTH double-Bezier concave dip that
                lands horizontally at y=123, then resumes to the right edge.
              This produces the curved "فوق يسار أبيض منحني ع اليمين" visual.
            -->
            <path fill="#FFFFFF" d="
                M 0,0
                L 1440,0
                L 1440,22
                C 1440,9.85  1430.15,0    1418,0
                L 1008,0
                L 966,0
                C 934,0    910,4     890,26
                C 874,44    866,66    842,84
                C 822,100   796,108   760,108
                L 28,108
                C 12.54,108  0,95.46   0,80
                L 0,0 Z
              " />
          </svg>
        </div>
        <!-- ---------- CONTENT LAYER (z-indexed above both bg + white notch) ---------- -->
        <div class="absolute inset-0 z-40 flex flex-col">
          <!-- ============ TOP NAVIGATION (inside the white curved zone) ============ -->
          <nav
            class="relative flex items-center justify-between h-[92px] sm:h-[96px] md:h-[102px] lg:h-[108px] px-5 sm:px-8 md:px-10 lg:px-14">
            <!-- BRAND LOGO (left) -->
            <a href="#" class="flex-shrink-0 select-none">
              <span
                class="text-2xl sm:text-[28px] md:text-3xl lg:text-[34px] font-extrabold text-charcoal tracking-tight"
                style="font-family: 'Syne', 'Inter', sans-serif; font-weight: 800;">elcarro<span
                  class="text-charcoal">.</span></span>
            </a>
            <!-- NAV LINKS (center / center-left) -->
            <div class="hidden md:flex items-center gap-6 lg:gap-9 xl:gap-11 ml-6 md:ml-10 lg:ml-16 xl:ml-20">
              <a href="#"
                class="text-[11px] lg:text-[12.5px] font-bold text-charcoal tracking-[0.14em] uppercase hover:text-racing transition-colors duration-200">HOME</a>
              <a href="#"
                class="text-[11px] lg:text-[12.5px] font-bold text-charcoal/70 tracking-[0.14em] uppercase hover:text-racing transition-colors duration-200">FEATURES</a>
              <a href="#"
                class="text-[11px] lg:text-[12.5px] font-bold text-charcoal/70 tracking-[0.14em] uppercase hover:text-racing transition-colors duration-200">MODEL</a>
              <a href="#"
                class="text-[11px] lg:text-[12.5px] font-bold text-charcoal/70 tracking-[0.14em] uppercase hover:text-racing transition-colors duration-200">TEST
                DRIVE</a>
            </div>
            <div class="hidden md:flex items-center ml-auto flex-shrink-0">
              <div class="flex items-center gap-3.5">
                <!-- الزرار الأول (Outlined + Rounded + Skew) -->
                <button class="
        relative inline-flex items-center justify-center
        px-6 lg:px-8 py-2.5 lg:py-3
        text-[11px] lg:text-[12.5px] font-bold tracking-[0.14em] uppercase
        text-
      
        bg-transparent
        transition-colors duration-200
        group
      ">
                  <!-- طبقة البوردر الأبيض ذات الزوايا الدائرية والميلان -->
                  <span style="border: solid 2px white; " class="
          absolute inset-0
          rounded-[8px]
          -skew-x-[15deg]
          group-hover:bg-white/10 active:bg-white/15
          transition-colors duration-200
          pointer-events-none
        "></span>
                  <!-- النص -->
                  <span class="relative z-10 text-white">
                    STAY WITH US
                  </span>
                </button>
                <!-- الزرار الثاني (Filled + Rounded + Skew) -->
                <button class="
        relative inline-flex items-center justify-center
        w-12 h-11
        text-charcoal
        transition-colors duration-200
        group
      " aria-label="Navigate">
                  <!-- الخلفية البيضاء المائلة بزوايا دائرية -->
                  <span class="
          absolute inset-0 bg-white
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
            <!-- Mobile menu icon -->
            <button class="md:hidden flex items-center justify-center w-10 h-10 text-charcoal ml-auto"
              aria-label="Open menu">
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </nav>
          <!-- ============ MAIN HERO CONTENT BELOW THE WHITE CURVE ============ -->
          <div class="flex-1 px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16 pb-6 lg:pb-10">
            <div
              class="h-full flex flex-col md:flex-row items-start md:items-start justify-between gap-7 md:gap-6 pt-2 md:pt-0">
              <!-- LEFT: HEADLINE + SPLIT CTA -->
              <div
                class="flex flex-col justify-start md:justify-center max-w-[680px] flex-shrink-0 pt-6 md:pt-4 lg:pt-0">
                <h1 class="text-white leading-[1.03] tracking-[0.01em] mb-9 md:mb-11 lg:mb-14"
                  style="font-family: 'Orbitron', 'Syne', sans-serif; font-weight: 800;">
                  <span
                    class="block text-[38px] sm:text-[46px] md:text-[54px] lg:text-[66px] xl:text-[78px] 2xl:text-[86px]">DRIVE
                    YOUR</span>
                  <span
                    class="block text-[38px] sm:text-[46px] md:text-[54px] lg:text-[66px] xl:text-[78px] 2xl:text-[86px]">DREAM
                    TODAY</span>
                </h1>
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
              <!-- MOBILE: METRICS BELOW HEADLINE -->
              <div class="flex md:hidden flex-row justify-between items-start gap-6 w-full max-w-[420px]">
                <div>
                  <div class="text-white font-black leading-none text-[30px] sm:text-[38px]"
                    style="font-family: 'Orbitron', sans-serif; font-weight: 800;">
                    640 <span class="text-[18px] sm:text-[22px] align-top">HP</span>
                  </div>
                  <div class="text-dimgray font-semibold mt-1.5 text-[12px] sm:text-sm tracking-wide">Horsepower</div>
                </div>
                <div>
                  <div class="text-white font-black leading-none text-[30px] sm:text-[38px]"
                    style="font-family: 'Orbitron', sans-serif; font-weight: 800;">
                    300 <span class="text-[18px] sm:text-[22px] align-top">mi</span>
                  </div>
                  <div class="text-dimgray font-semibold mt-1.5 text-[12px] sm:text-sm tracking-wide">Range</div>
                </div>
              </div>
              <!-- DESKTOP: METRICS RIGHT COLUMN (inside dark card, right aligned) -->
              <div
                class="hidden md:flex flex-col justify-start md:justify-center items-end gap-9 md:gap-11 lg:gap-14 pt-0 md:pt-2 lg:pt-0 pr-4 md:pr-8 lg:pr-6 xl:pr-4 self-start md:self-center mt-2">
                <div class="">
                  <div
                    class="text-white font-black leading-none text-[36px] md:text-[44px] lg:text-[54px] xl:text-[64px]"
                    style="font-family: 'Orbitron', sans-serif; font-weight: 800;">
                    640 <span
                      class="text-[18px] md:text-[22px] lg:text-[28px] xl:text-[32px] align-top font-extrabold">HP</span>
                  </div>
                  <div
                    class="text-dimgray text-white font-semibold mt-2 md:mt-2.5 text-sm md:text-[15px] lg:text-base tracking-wide">
                    Horsepower</div>
                </div>
                <div class="">
                  <div
                    class="text-white font-black leading-none text-[36px] md:text-[44px] lg:text-[54px] xl:text-[64px]"
                    style="font-family: 'Orbitron', sans-serif; font-weight: 800;">
                    300 <span
                      class="text-[18px] md:text-[22px] lg:text-[28px] xl:text-[32px] align-top font-extrabold">mi</span>
                  </div>
                  <div
                    class="text-dimgray  text-white  font-semibold mt-2 md:mt-2.5 text-sm md:text-[15px] lg:text-base tracking-wide">
                    Range</div>
                </div>
              </div>
            </div>
          </div>
          <!-- ============ VERTICAL RIGHT-EDGE SCROLL DOWN INDICATOR ============ -->
          <div class="
    absolute right-0 top-1/2 -translate-y-1/2 z-40
    hidden md:flex flex-col items-center gap-2 md:gap-3
    bg-white text-black
    px-3.5 py-6 md:px-4 md:py-8
    rounded-l-[28px]
    /* تكبير وتعميق الانحناء العكسي فوق */
    before:content-[''] before:absolute before:-top-[30px] before:right-0
    before:w-[30px] before:h-[30px] before:bg-transparent
    before:rounded--[28px] 
    before:pointer-events-none
    /* تكبير وتعميق الانحناء العكسي تحت */
    after:content-[''] after:absolute after:-bottom-[30px] after:right-0
    after:w-[30px] after:h-[30px] after:bg-transparent
    after:rounded-tr-[28px] 
    after:pointer-events-none
  ">
            <!-- النص الرأسي -->
            <span class="text-[10px] md:text-[11px] font-extrabold tracking-[0.28em] uppercase whitespace-nowrap"
              style="writing-mode: vertical-rl; text-orientation: mixed; letter-spacing: 0.28em;">
              SCROLL DOWN
            </span>
            <!-- مؤشر الحركة -->
            <div class="w-[3px] h-10 bg-black relative overflow-hidden rounded-full">
              <div class="absolute top-0 left-0 w-full h-1/2 bg-racing rounded-full animate-scroll-indicator"></div>
            </div>
            <!-- السهم -->
            <svg class="w-[18px] h-[18px] md:w-5 md:h-5 text-racing animate-scroll-arrow" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </div>
          <!-- ========================================================== -->
          <!--  BOTTOM-RIGHT CUSTOMER WIDGET in the exposed white notch  -->
          <!-- ========================================================== -->
          <div class="
    absolute z-50
    bottom-[-12px] right-[0px]
  " style="max-width: min(520px, 90vw);">
            <!-- الكارت الأبيض الرئيسي المائل من الشمال -->
            <div class="
      relative bg-white
      rounded-r-[28px] sm:rounded-r-[36px]
      p-3 sm:p-4 md:p-5 lg:p-6
      flex items-center gap-4 sm:gap-6 md:gap-8
      /* زاوية الميل الحاد للضلع الشمال (تمت زيادة الميل إلى 90px) */
      [clip-path:polygon(90px_0,_100%_0,_100%_100%,_0_100%)]
      /* الانحناء العكسي فوق على الشمال: تم تعديل left إلى (90px - 24px = 66px) */
      before:content-[''] before:absolute before:-top-[24px] before:left-[66px]
      before:w-[24px] before:h-[24px] before:bg-transparent
      before:rounded-bl-[24px]
      before:pointer-events-none
      /* الانحناء العكسي تحت على الشمال (يبقى ثابتاً عند 0) */
      after:content-[''] after:absolute after:-bottom-[24px] after:left-0
      after:w-[24px] after:h-[24px] after:bg-transparent
      after:rounded-tl-[24px] 
      after:pointer-events-none
    ">
              <!-- صورة السيارة داخل كارت مائل زواياه دائرية عبر SVG clipPath -->
              <div class="relative flex-shrink-0 ml-4 sm:ml-6">
                <svg viewBox="0 0 550 320"
                  class="w-[145px] sm:w-[185px] md:w-[225px] lg:w-[255px] h-auto block select-none "
                  aria-label="Car showcase">
                  <defs>
                    <!-- مسار يحدد الشكل المائل بزوايا دائرية فائقة النعومة والهندسة الدقيقة -->
                    <clipPath id="roundedSkewClip">
                      <path d="
                        M 130 10 
                        L 520 10 
                        A 25 25 0 0 1 544 32
                        L 420 290 
                        A 25 25 0 0 1 398 310 
                        L 30 310 
                        A 25 25 0 0 1 6 288 
                        L 108 30 
                        A 25 25 0 0 1 130 10 
                        Z" />
                    </clipPath>
                  </defs>

                  <!-- خلفية رمادية هادئة للكارت -->
                  <rect width="550" height="320" fill="#f3f4f6" clip-path="url(#roundedSkewClip)" />

                  <!-- تطبيق الماسك على الصورة مباشرة -->
                  <image :href="smallCarImg" :xlink:href="smallCarImg" width="550" height="320"
                    preserveAspectRatio="xMidYMid slice" clip-path="url(#roundedSkewClip)" />
                </svg>
              </div>
              <!-- 2. المحتوى الأيمن (الأيقونة + الإحصائيات + Avatars) -->
              <div class="flex-1 flex flex-col justify-between py-1 min-w-0">
                <!-- الأيقونة (كورتين متداخلتين) -->
                <div class="mb-2 sm:mb-3">
                  <svg class="w-8 h-8 sm:w-10 sm:h-10 text-racing" viewBox="0 0 64 40" fill="none" stroke="currentColor"
                    stroke-width="2">
                    <!-- الكورة الأولى -->
                    <circle cx="20" cy="20" r="16" />
                    <ellipse cx="20" cy="20" rx="7" ry="16" />
                    <line x1="4" y1="20" x2="36" y2="20" />
                    <!-- الكورة الثانية المتداخلة -->
                    <circle cx="40" cy="20" r="16" />
                    <ellipse cx="40" cy="20" rx="7" ry="16" />
                    <line x1="24" y1="20" x2="56" y2="20" />
                  </svg>
                </div>
                <!-- العنوان -->
                <div
                  class="text-[10px] sm:text-[11px] md:text-xs font-bold text-gray-800 uppercase tracking-wider mb-1 whitespace-nowrap">
                  HAPPY CUSTOMER
                </div>
                <!-- الرقم والأفاتارز في نفس السطر -->
                <div class="flex items-center gap-2 sm:gap-3">
                  <span
                    class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black leading-none font-sans tracking-tight">
                    95K+
                  </span>
                  <!-- الصور الدائرية للأشخاص -->
                  <div class="flex -space-x-1.5 sm:-space-x-2 mr-3">
                    <img :src="pers1" class="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover ring-2 ring-white"
                      alt="Avatar 1" />
                    <img :src="pers2" class="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover ring-2 ring-white"
                      alt="Avatar 2" />
                    <img :src="pers3" class="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover ring-2 ring-white"
                      alt="Avatar 3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div><!-- /absolute content layer -->
      </div><!-- /END hero stage -->
      <div class="h-14 md:h-20 lg:h-24"></div>
    </div>
  </section>
</template>
<script setup>
import heroImg from '../assets/imgs/hero.webp'
import smallCarImg from '../assets/imgs/small car.webp'
import pers1 from '../assets/imgs/pers1.webp'
import pers2 from '../assets/imgs/pers2.webp'
import pers3 from '../assets/imgs/pers3.webp'
</script>
<style scoped>
@keyframes scroll-indicator {

  0%,
  100% {
    transform: translateY(-10%);
    opacity: 0.85;
  }

  50% {
    transform: translateY(110%);
    opacity: 1;
  }
}

.animate-scroll-indicator {
  animation: scroll-indicator 2.1s cubic-bezier(0.65, 0, 0.35, 1) infinite;
}

@keyframes scroll-arrow {

  0%,
  100% {
    transform: translateY(0);
    opacity: 1;
  }

  50% {
    transform: translateY(6px);
    opacity: 0.75;
  }
}

.animate-scroll-arrow {
  animation: scroll-arrow 2.1s ease-in-out infinite;
}

.concave-tab {
  background-color: #ffffff;
  /* عمل قطعتين دائريتين مفرغتين في الزاوية الأعلى للشمال والأسفل للشمال */
  mask-image:
    radial-gradient(circle 16px at 0 0, transparent 98%, #000 100%),
    radial-gradient(circle 16px at 0 100%, transparent 98%, #000 100%);
  mask-composite: intersect;
  -webkit-mask-composite: destination-in;
}
</style>
