<template>
  <div class="py-9 px-4 lg:px-11">
    <h1 class="content-center mb-4 text-center text-4xl">👻4️⃣8️⃣📷</h1>
    <div
      class="justify-center grid grid-cols-1 gap-1 sm:gap-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
    >
      <a
        class="col mx-auto bg-gray-100 rounded-3xl"
        v-for="item in items"
        :key="item.ID"
        :href="item.URL"
      >
        <img
          class="rounded-3xl item object-cover w-screen h-full"
          :src="item.URL"
          :title="item.CreatedAt.toLocaleString()"
        />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import firestoreDb from "../plugins/firebase.client";

import Vue from "vue";

const COLLECTION_ITEMS = "items";

interface Item {
  ID: string;
  ChannelID: string;
  ContentType: string;
  CreatedAt: Date;
  FileName: string;
  ProxyURL: string;
  URL: string;
  UserID: string;
  UserName: string;
}

export default Vue.extend({
  name: "index",
  data() {
    return {
      items: [] as Item[],
    };
  },
  created: async function() {
    try {
      const qs = await firestoreDb
        .collection(COLLECTION_ITEMS)
        .orderBy("CreatedAt", "desc")
        .get();
      qs.forEach((doc) => {
        const i = doc.data() as Item;
        i.ID = doc.id;
        i.CreatedAt = doc.data().CreatedAt.toDate();
        this.items.push(i);
      });
    } catch (e) {
      console.log(e);
    }
  },
});
</script>

<style>
.col {
  /* min-width: 300px; */
  max-width: 300px;
  height: 300px;
}

.item {
  /* height: 300px; */
}
</style>
