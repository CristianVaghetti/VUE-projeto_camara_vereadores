<template>
    <div id="app" class="container">
      <NavbarComp />
      <RouterView />
      <FooterComp />
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
