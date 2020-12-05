<template>
  <div class="container mx-auto px-24">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Share+Tech+Mono&display=swap');
@import url('https://fonts.googleapis.com/css?family=Nunito:300,400,600,700,800&display=swap');

html {
  font-family:
    'Nunito',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

h2 {
  @apply text-2xl pt-6 -mb-1;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

</style>
