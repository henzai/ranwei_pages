<template>
  <div>
    <h1>👻4️⃣8️⃣📷</h1>
    <div v-for="item in items" :key="item.ID">
      <a :href="item.URL">
        <img class="item" :src="item.URL" />
      </a>
      {{ item.CreatedAt.toLocaleString() }}
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
      mountains: [],
      items: [] as Item[],
    };
  },
  mounted: async function() {
    try {
      const qs = await firestoreDb.collection(COLLECTION_ITEMS).get();
      qs.forEach((doc) => {
        const i = doc.data() as Item;
        i.ID = doc.id;
        i.CreatedAt = doc.data().CreatedAt.toDate();
        this.items.push(i);
      });
    } catch (e) {
      console.log(e);
    }

    this.mountains = await fetch(
      "https://api.nuxtjs.dev/mountains"
    ).then((res) => res.json());
  },
});
</script>

<style>
.item {
  width: 200px;
  height: 200px;
  object-fit: cover;
}
</style>
