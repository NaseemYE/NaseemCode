var swiper = new Swiper(".swiper", {
  direction: "vertical", // اتجاه الحركة عمودي
  loop: true, // الحركة المستدامة
  autoplay: {
    delay: 2000, // الفاصل الزمني بين كل خطوة (2 ثانية)
    disableOnInteraction: false // يستمر حتى بعد التفاعل
  },
  speed: 500, // سرعة الانتقال (0.5 ثانية)
  slidesPerView: 3, // عدد الشرائح المرئية في نفس الوقت
  slidesPerGroup: 1, // عدد الشرائح التي يتم تمريرها في كل مرة
  spaceBetween: 8, // المسافة بين الشرائح
  allowTouchMove: false, // منع التمرير اليدوي
  loopedSlides: 6 // يجب أن يكون مساوٍ لعدد الشرائح الكلي
});