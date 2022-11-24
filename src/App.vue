<template>
  <div id="app" class="row">
    <div class="col-2"></div>
    <div class="col-8">
      <NavbarComp />
      <RouterView />
      <FooterComp />
    </div>
    <div class="col-2"></div>
  </div>
</template>

<script>
import NavbarComp from './components/Navbar.vue'
import FooterComp from './components/Footer.vue'
export default {
  components: {
    NavbarComp,
    FooterComp
  }
}
</script>
