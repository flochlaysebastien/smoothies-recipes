<template>
  <div class="index container">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    // <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <div class="card" v-for="smoothie in smoothies" :key="smoothie.id">
      <div class="card-content">
        <h2 class="indigo-text">{{ smoothie.title }}</h2>
        <ul class="ingredients">
          <li v-for="(ingredient, index) in smoothie.ingredients" :key="index">
            <span class="chip">{{ ingredient }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  // components: {
  //   HelloWorld
  // }
  data() {
    return {
      smoothies: [
        {
          title: "Zelda Brew",
          slug: "zelda-brew",
          ingredients: ["bananas", "coffee", "milk"],
          id: "1"
        },
        {
          title: "Mario Mood",
          slug: "mario-mood",
          ingredients: ["mango", "lime", "juice"],
          id: "2"
        }
      ]
    };
  }
};
</script>

<style>
.index {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 60px;
}
.index h2 {
  font-size: 1.8em;
  text-align: center;
  margin-top: 0;
}
.index .ingredients {
  margin: 30px auto;
}
.index .ingredients li {
  display: inline-block;
}
</style>