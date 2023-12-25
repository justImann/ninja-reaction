<template>
  <main class="">
    <Result v-if="showResult" :score="score" />
    <StartButton v-if="!isPlaying" @click="start">
      {{ showResult ? 'play again' : 'start' }}
    </StartButton>

    <Block :delay="delay" v-if="isPlaying" @end="endGame" />
  </main>
</template>

<script>
import Block from './components/Block.vue';
import Result from './components/Result.vue';
import StartButton from './components/StartButton.vue';

export default {
  name: 'App',
  components: {
    Block,
    Result,
    StartButton,
  },
  data() {
    return {
      isPlaying: false,
      showResult: false,
      delay: null,
      score: null,
    };
  },

  mounted() {},

  methods: {
    start() {
      this.delay = 1500 + Math.random() * 5500;
      this.isPlaying = true;
      this.showResult = false;
      console.log(this.delay);
    },
    endGame(reactionTime) {
      this.score = reactionTime;
      this.isPlaying = false;
      this.showResult = true;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
