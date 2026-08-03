<template>
  <div class="w-full overflow-x-hidden pt-0 md:pt-24">
    <HeroSection />
    <ExploreSection />
    <PromoSection />
    <!-- <AboutSection /> -->
    <EventsSection />
    <RecommendedSection />
    <SubscribeSection />
    <Footer />
    <ScrollToTop />
  </div>
</template>
<script setup>
import HeroSection from '../components/HeroSection.vue';
import PromoSection from '../components/PromoSection.vue';
import ExploreSection from '../components/ExploreSection.vue';
import AboutSection from '../components/AboutSection.vue';
import EventsSection from '../components/EventsSection.vue';
import RecommendedSection from '../components/RecommendedSection.vue';
import SubscribeSection from '../components/SubscribeSection.vue';
import Footer from '../components/Footer.vue';
import ScrollToTop from '../components/ScrollToTop.vue';
</script>