
<template>
    <div class="blur">
      <Header />
      <main>
        <div class="container">
          <CoverList />
          <About />
        </div>
      </main>
    </div>
</template>
<style lang="scss">
  .blur {
    height: 100%;
    background-color: rgba($color: #f8f8f8, $alpha: .7);

    // backdrop-filter: blur(20px);
  }
</style>