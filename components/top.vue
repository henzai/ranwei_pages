<template>
  <div class="flex flex-row justify-center space-x-4">
    <NuxtLink to="/">
      <h1 class="content-center mb-4 text-center text-4xl">👻4️⃣8️⃣📷</h1>
    </NuxtLink>
    <NuxtLink to="/channel/823149495029334027">
      <button class="btn btn-blue">
        ＃live
      </button>
    </NuxtLink>
    <NuxtLink to="/channel/835717071332966432">
      <button class="btn btn-blue">
        #pocket48
      </button>
    </NuxtLink>
    <NuxtLink to="/channel/839784696267145238">
      <button class="btn btn-blue">
        #chuang
      </button>
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "top",
});
</script>
