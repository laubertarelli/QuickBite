<template>
  <div class="d-flex align-items-center justify-content-center vh-100">
            <div class="text-center">
                <h1 class="display-1 fw-bold">404</h1>
                <p class="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>
                <p class="lead">The page you’re looking for doesn’t exist.</p>
                <router-link :to="{ name: 'Restorants' }" class="nav-link">Go Home</router-link>
            </div>
        </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
@Options({
  components: {
  },
})
export default class PageNotFound extends Vue {
 

}
</script>

<style scoped>
.nav-link {
  background-color: #0066ff;
  border-radius: 10px;
  display: inline-block;
  color: white;
  padding: 7px 13px;
  font-size: 22px;
  font-weight: 500;
}
</style>