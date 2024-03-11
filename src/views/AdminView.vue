<template>
    <div class="container-fluid h-100" >
  <nav class="navbar  navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
   
    <div class="">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link :to="{ name: 'Profile' }" class="nav-link">Profile</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Billing' }" class="nav-link">Billing</router-link>
        </li>
       
      </ul>
     
    </div>
  </div>
</nav>
<div class="row app-content no-gutters" >
  <div class="data-container col" >
    <router-view />
  </div>
  
</div>
 </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
@Options({
  components: {
  
  },
})
export default class HomeView extends Vue {
  
}
</script>
<style scoped>
.app-content{
  /* margin-top: 56px; */
  height:calc(100% - 90px);
  overflow:auto;
}
.data-container{
  height:100%;
  overflow:auto;
}

</style>
