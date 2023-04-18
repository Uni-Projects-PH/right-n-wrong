<script setup lang="ts">
import {useMainStore} from "@/stores/main";
import {onMounted, ref} from "vue";
import type {GameCategory} from "@/@types/intern";

const store = useMainStore();
const candidateList = store.getCreatedCandidateList();
const numberOfCandidates = ref(0);
const numberOfCategories = ref(0);
const gameMaxPoints = store.getExtractedMaxPoints() || 5;
const gameCategories = store.getExtractedGameCategories();
const numberOfTables = ref(0);
const points = [100, 200, 300, 400, 500];

function createGameBoard() {
  candidateList?.forEach((candidate) => {
    numberOfCandidates.value++;
  })

  gameCategories?.forEach((category) => {
    numberOfCategories.value++;
  })

  numberOfTables.value = gameMaxPoints * numberOfCategories.value;

}


onMounted(() => {
  createGameBoard();
});

function select(cat: GameCategory, point: number) {
  console.log(cat, point);
}
</script>

<template>
  <div class="creation-headliner">
    <h1 class="creation-headline">Ich hab's richtig, aber ich hab's falsch</h1>
    <hr class="rounded-creation-underliner">
  </div>
  <transition-group tag="div" name="game-board" class="game-board-holder">
    <div class="category-table-wrapper" v-for="(cat, i) in gameCategories">
      <article class="category-table" :key="i">{{ cat.name }}</article>
      <article v-for="p in points" class="point-table" :key="i + '-' + p" @click="select(cat, p)">{{ p }}</article>
    </div>
  </transition-group>

  <div class="candidate-holder">
    <div class="candidate-table" v-for="(candi, i) in candidateList">
      <div class="candidate-name" :key="i">{{ candi.name + ':' }}</div>
      <div class="candidate-points">{{ candi.score }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.candidate-holder {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  cursor: default;
  background: #a80939;
  margin-top: 1.8rem;

  .candidate-table {
    border: black solid 2px;
    border-radius: 15px;
    margin-left: 0.8rem;

    .candidate-name {
      font-size: 1.8rem;
      font-weight: bolder;
      padding-bottom: 0.5rem;
      margin: 0 0.5rem 0 0.5rem;
      text-decoration: underline;
    }

    .candidate-points {
      font-size: 1.8rem;
      font-weight: bolder;
      margin: 0.5rem;
    }
  }
}

.game-board-holder {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;

}

.category-table-wrapper {
  display: flex;
  flex-direction: column;

  .category-table {
    font-size: 2.4rem;
    font-weight: bolder;
    line-height: 1.8;
    text-align: center;
    padding: 0.5rem;
    margin: 0.5rem;
    background: rgb(0,187,158);
    background: linear-gradient(0deg, rgba(0,139,173,1) 18%, rgba(152,181,244,1) 50%, rgba(0,139,173,1) 90%);
    border-radius: 15px;
    border: black solid 2px;
    box-shadow: 0 7px 4px rgba(0, 0, 0, 0.25);
    width: 16rem;
    cursor: default;

    @media only screen and (min-width: 1960px) {
      width: 18rem;
    }
  }

  .point-table {
    font-size: 2.4rem;
    font-weight: bold;
    line-height: 1.8;
    text-align: center;
    padding: 0.5rem;
    margin: 0.5rem;
    background: rgb(0,107,215);
    background: linear-gradient(0deg, rgba(0,107,215,1) 18%, rgba(111,116,238,1) 50%, rgba(0,107,215,1) 90%);
    border-radius: 15px;
    border: black solid 2px;
    box-shadow: 0 7px 4px rgba(0, 0, 0, 0.25);
    width: 16rem;

    @media only screen and (min-width: 1960px) {
      width: 18rem;
    }

    &:hover {
      background: rgb(0,107,215);
      background: linear-gradient(0deg, rgba(111,116,238,1) 18%, rgba(0,107,215,1)50%, rgba(111,116,238,1)  90%);
      border-radius: 15px;
      border: black solid 2px;
      box-shadow: 0 7px 4px rgba(0, 0, 0, 0.25);
      width: 16rem;
      cursor: pointer;

      @media only screen and (min-width: 1960px) {
        width: 18rem;
      }
    }
  }
}

/* Game Board Animation */
.game-board-enter-from {
  opacity: 0;
  transform: scale(0.5);
}

.game-board-enter-to {
  opacity: 1;
  transform: scale(1);
}

.game-board-enter-active {
  transition: all 0.5s ease;
}

</style>