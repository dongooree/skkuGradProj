<template>
  <div class="content">
    <div class="container-fluid">
        <transition name="fade" mode="out-in">
          <!-- your content here -->
          <h3>유권자 맞춤형 선거 정보 종합 서비스</h3>
        </transition>
        <transition name="fade" mode="out-in">
          <!-- your content here -->
          <h2>eSKKort에 오신 것을 환영합니다.</h2>
          <router-view></router-view>
        </transition>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .1s
  }

  .fade-enter,
  .fade-leave-to
  /* .fade-leave-active in <2.1.8 */

  {
    opacity: 0
  }
</style>
