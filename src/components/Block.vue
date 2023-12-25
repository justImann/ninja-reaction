<template>
  <div class="mx-auto" v-if="!showBlock">
    <div class="loader mx-auto"></div>
  </div>

  <div
    v-if="showBlock"
    @click="stopTimer"
    class="grid place-content-center w-full h-64 border-2 border-black cursor-pointer hover:bg-black border-dashed hover:text-white"
  >
    <h2 class="text-xl font-bold uppercase">click me!</h2>
  </div>
</template>
<script>
export default {
  props: ['delay'],
  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTime: 0,
    };
  },
  mounted() {
    console.log('component mounted');
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
    }, this.delay);
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTime += 10;
      }, 10);
    },
    stopTimer() {
      clearInterval(this.timer);
      this.$emit('end', this.reactionTime);
      console.log(this.reactionTime);
    },
  },
};
</script>
<style>
.loader {
  position: relative;
  font-size: 16px;
  width: 5.5em;
  height: 5.5em;
}

.loader:before {
  content: '';
  position: absolute;
  transform: translate(-50%, -50%) rotate(45deg);
  height: 100%;
  width: 4px;
  background: black;
  left: 50%;
  top: 50%;
}

.loader:after {
  content: '';
  position: absolute;
  left: 0.2em;
  bottom: 0.18em;
  width: 1em;
  height: 1em;
  border: 0.1em solid black;
  border-radius: 15%;
  animation: rollingRock 2.5s cubic-bezier(0.79, 0, 0.47, 0.97) infinite;
}

@keyframes rollingRock {
  0% {
    transform: translate(0, -1em) rotate(-45deg);
  }

  5% {
    transform: translate(0, -1em) rotate(-50deg);
  }

  20% {
    transform: translate(1em, -2em) rotate(47deg);
  }

  25% {
    transform: translate(1em, -2em) rotate(45deg);
  }

  30% {
    transform: translate(1em, -2em) rotate(40deg);
  }

  45% {
    transform: translate(2em, -3em) rotate(137deg);
  }

  50% {
    transform: translate(2em, -3em) rotate(135deg);
  }

  55% {
    transform: translate(2em, -3em) rotate(130deg);
  }

  70% {
    transform: translate(3em, -4em) rotate(217deg);
  }

  75% {
    transform: translate(3em, -4em) rotate(220deg);
  }

  100% {
    transform: translate(0, -1em) rotate(-225deg);
  }
}
</style>
