<template>
  <div class="microwave-gradient grid min-h-full">
    <div class="container py-4 sm:p-4 place-self-center">
      <Header />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<style>
.microwave-gradient {
  background: linear-gradient(
    90deg,
    theme("colors.yellow.500") 0%,
    theme("colors.yellow.500") 25%,
    theme("colors.orange.500") 50%,
    theme("colors.yellow.500") 75%,
    theme("colors.yellow.500") 100%
  );
  background-size: 300%;
  animation: scrolling-gradient 10s linear infinite;
}

@keyframes scrolling-gradient {
  0%, 5% {
    background-position: 125% 0;
  }

  95%, 100% {
    background-position: -25% 0;
  }
}
</style>
