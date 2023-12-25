<template>
  <article class="group relative block h-72 mb-12">
    <span class="absolute inset-0 border-2 border-dashed border-black"></span>

    <div
      class="relative flex justify-center items-end h-full transform border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
    >
      <div
        class="text-center !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 p-8 select-none"
      >
        <span class="text-8xl">&#129399;</span>
        <h2 class="mt-2 font-medium text-2xl">See your result</h2>
      </div>

      <div
        class="absolute opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 p-8"
      >
        <span class="text-7xl select-none" v-html="emoticon"></span>
        <h3 class="mt-4 font-medium text-2xl">
          {{ finalScore }} {{ score < 1000 ? 'ms' : 's' }}
        </h3>

        <p class="mt-4 text-base">
          {{ message }}
        </p>
      </div>
    </div>
  </article>
</template>
<script>
import StartButton from './StartButton.vue';
export default {
  components: {
    StartButton,
  },
  props: ['score'],
  data() {
    return {
      message: '',
      emoticon: '',
      finalScore: null,
    };
  },
  mounted() {
    const score = this.score;
    console.log(`is mounted and the score is ${score}`);

    if (score < 80) {
      this.emoticon = '&#129399;';
      this.message =
        'Whoa! Did you just teleport or are you a ninja? Time to join the secret ninja circus!';
    } else if (score < 150) {
      this.emoticon = '&#128063;';
      this.message =
        'Blink and you missed it! Are you a ninja or just a very caffeinated squirrel?';
    } else if (score < 250) {
      this.emoticon = '&#127788;';
      this.message =
        'Superb reflexes! You move like the wind, or maybe just like a ninja on a hoverboard.';
    } else if (score < 400) {
      this.emoticon = '&#127993;';
      this.message =
        'Amazing, ninja! Your reflexes are unmatched. Did you just dodge a virtual arrow?';
    } else if (score < 600) {
      this.emoticon = '&#127829;';
      this.message =
        "Ninja master! Your speed is legendary. I bet you're faster than a pizza delivery!";
    } else if (score < 1000) {
      this.emoticon = '&#128012;';
      this.message =
        "Keep refining your skills, wise ninja. Just don't challenge a snail to a race!";
    } else {
      this.emoticon = '&#129445;';
      this.message =
        'Hmm, ninja, your reaction seems a bit sluggish. Maybe practice in slo-mo?';
    }

    if (score > 1000) {
      this.finalScore = Math.floor(score / 1000);
    } else {
      this.finalScore = score;
    }
  },
  methods: {
    playAgain() {},
  },
};
</script>
<style lang=""></style>
