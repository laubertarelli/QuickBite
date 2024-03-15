<template>
  <div class="container-fluid h-100">
    <nav class="navbar  navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img src="@/assets/logo.svg" alt="" height="60">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Restorants' }">Restorants</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Orders' }">Orders</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'NearMe' }">Near Me</router-link>
            </li>
            <li class="nav-item ">
              <router-link class="nav-link" :to="{ name: 'Admin' }">Account</router-link>
            </li>
          </ul>
          <form class="d-flex">
            <CartSummary />
          </form>
        </div>
      </div>
    </nav>
    <div class="row app-content no-gutters">
      <div class="data-container col">
        <router-view v-slot="{ Component }">
          <transition>
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
      <div class="data-container col-4 hideIfEmpty">
        <router-view name="Sidebar" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import CartSummary from '@/components/Cart/CartSummary.vue'
@Options({
  components: {
    CartSummary
  },
})
export default class HomeView extends Vue {

}
</script>
<style scoped>
.app-content {
  /* margin-top: 56px; */
  height: calc(100% - 90px);
  overflow: auto;
}
.data-container {
  height: 100%;
  overflow: auto;
}
.hideIfEmpty:empty {
  display: none;
}
.v-enter-active, .v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from, .v-leave-to {
  opacity: 0;
}
</style>
