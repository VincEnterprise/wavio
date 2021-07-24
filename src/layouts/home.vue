<template>
  <div
    grid="~"
    min-h="full"
    class="microwave-gradient"
  >
    <div
      container="~"
      p="y-4 sm:p-4"
      place="self-center"
    >
      <Header />
      <router-view />
      <Footer />
    </div>
  </div>
</template>
