
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
    height: 100vh;
    background-color: rgba($color: #ffffffd2, $alpha: .2);
    backdrop-filter: blur(10px);
  }
</style>