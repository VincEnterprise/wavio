<template>
  <section
    pos="relative"
    z="1"
    p="x-2 y-6 sm:6 md:8 lg:10 xl:12"
  >
    <div
      pos="absolute inset-0"
      z="-1"
      display="overflow-hidden"
      border="sm:rounded-4xl"
      bg="white/20"
      shadow="md"
      backdrop="blur-lg"
    >
      <div
        pos="absolute inset-0"
        class="noise-texture"
      >
      </div>

      <div
        pos="absolute inset-0"
        p="y-[3px] sm:[3px]"
        border="sm:rounded-4xl"
        bg="gradient-to-b"
        gradient="from-white/25 to-white/30"
        class="mask-exclude"
      >
      </div>
    </div>
    <slot></slot>
  </section>
</template>

<style scoped>
.noise-texture {
  background-image: url("../img/noise-texture.png");
  background-image: url("../img/noise.jpg");
  opacity: 0.05;
  background-size: 50%;
}
</style>
