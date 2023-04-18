<script setup lang="ts">
import {ref} from "vue";
import type {Candidate, GameCategory} from "@/@types/intern";
import router from "@/router";
import {useMainStore} from "@/stores/main";

  const store = useMainStore();

  const candidateList = ref<Candidate[]>([]);
  const candidateName = ref<string>("");


  function removeItem(idx: number) {
    candidateList.value.splice(idx, 1);
  }

  function addItem() {
    const name = candidateName.value;

    if (name === "") {
      return;
    }

    candidateList.value.push({
      name,
      score: 0
    });

    candidateName.value = "";
  }

  function startRound() {

    if (candidateList.value.length < 2) {
      alert("Bitte mindestens zwei Teilnehmer hinzufügen!")
      return;
    }

    const rulesetFile = document.getElementById("ruleset-upload") as HTMLInputElement;
    const ruleset = rulesetFile.files?.[0];
    if (!ruleset) {
      alert("Bitte Regelsatz hinzufügen!");
      return;
    }

    store.setCreatedCandidateList(candidateList.value);

    if (ruleset) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const rulesetJson = JSON.parse(e.target?.result as string);
        const parsedJson = JSON.parse(JSON.stringify(rulesetJson));
        const gameCategories: GameCategory[] = parsedJson.categories
        const gameMaxPoints: number = parseInt(parsedJson.maxPointTables)
        store.setExtractedGameCategories(gameCategories);
        store.setExtractedMaxPoints(gameMaxPoints);
      }
      reader.readAsText(ruleset);
    }
    router.push('/running-round')
  }

</script>

<template>
  <div class="creation-headliner">
    <h1 class="creation-headline">Ich hab's richtig, aber ich hab's falsch</h1>
    <hr class="rounded-creation-underliner">
  </div>

  <div class="button-container">
    <button class="back-button" @click="router.back()">Einen Schritt zurück</button>
    <button class="round-start start-button" @click="startRound">Runde starten</button>
  </div>

  <article class="section-container input-container">
    <p>
      Bitte Regelsatz auswählen:
    </p>

    <input type="file"
           id="ruleset-upload" name="uploadedRuleset"
           accept=".json">
  </article>

  <article class="section-container">
    <h2>
      Teilnehmer
    </h2>

    <div class="candidate-box">
      <ul class="candidate-list">
        <li v-for="(candidate, i) in candidateList" :key="candidate" @click="removeItem(i)">
          {{ candidate.name }}
        </li>
      </ul>
    </div>
  </article>

  <div class="input-section">
    <input class="add-candidate" type="text" v-model="candidateName">
    <button class="right-button" id="add-candidate-list" @click="addItem">Teilnehmer hinzufügen</button>
  </div>
</template>

<style scoped lang="scss">

  .button-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 30%;
    padding-bottom: 1.8rem;
    margin: -3rem auto 0;

    .round-start {
      margin-left: 1.1rem;
      padding: 0.2rem 1.8rem;
      font-size: 23px;
      border-radius: 10px;
    }
  }

  .section-container {
    font-size: 1.5rem;
    height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .candidate-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.5rem auto;
    outline: #000000 solid 1px;
    border-radius: 10px;
    padding: 10px;
    min-width: 25rem;
  }

  .candidate-list {
    list-style-type: none;
    padding: 0;
    margin: 0 auto;
    font-weight: bold;
    display: table;
    text-align: center;
    list-style-position: inside;
  }

  .candidate-list:hover {
    cursor: pointer;
  }

  .input-container {
    height: 15vh;
    outline: #000000 solid 1px;
    border-radius: 10px;
    margin: 0 auto;
    width: 30%;
  }

  .input-section {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 30%;
    padding-bottom: 1.8rem;
  }

  .add-candidate {
    background: #bebebe;
    border: black solid 2px;
    border-radius: 10px;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    font-family: "Oswald", sans-serif;
    padding: 0.1rem 1.2rem;
  }
</style>