import {defineStore} from "pinia";
import type {Candidate, GameCategory} from "../@types/intern.ts";

export const useMainStore = defineStore("main", {
    state: () => ({
        createdCandidate: undefined as Candidate | undefined,
        createdCandidateList: undefined as Candidate[] | undefined,
        extractedGameCategories: undefined as GameCategory[] | undefined,
        extractedMaxPoints: undefined as number | undefined
    }),
    actions: {
        setCreatedCandidate(candidate: Candidate) {
            this.createdCandidate = candidate;
        },
        setCreatedCandidateList(candidateList: Array<Candidate>) {
            this.createdCandidateList = candidateList;
        },
        setExtractedGameCategories(gameCategoryArr: GameCategory[]) {
            this.extractedGameCategories = gameCategoryArr;
        },
        setExtractedMaxPoints(maxPoints: number) {
            this.extractedMaxPoints = maxPoints;
        },
        getCreatedCandidates() {
            return this.createdCandidateList;
        },
        getCreatedCandidateList() {
            return this.createdCandidateList;
        },
        getExtractedGameCategories() {
            return this.extractedGameCategories;
        },
        getExtractedMaxPoints() {
            return this.extractedMaxPoints;
        }
    }
});