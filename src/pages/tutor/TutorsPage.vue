<template>
  <main>
    <div class="buttons-container">
      <Button variant="outlined" @click="loadTutors(true)">Refresh</Button>
      <Button v-if="!isTutor && !isLoading" link to="/register"
        >Register as Tutor</Button
      >
    </div>
    <div v-if="isLoading">
      <CircularProgress />
    </div>
    <ul class="tutor-preview-list" v-else-if="hasTutors">
      <TutorPreview v-for="tutor in tutors" :key="tutor.id" :tutor="tutor" />
    </ul>
    <h3 v-else>No tutors found.</h3>
  </main>
</template>

<script>
import { tutorAPI } from '../../api'
import { addFullName } from '../../utils/string-utils'

import TutorPreview from '../../components/tutors/TutorPreview.vue'

export default {
  components: { TutorPreview },

  data() {
    return {
      isLoading: true,
      tutors: [],
    }
  },

  computed: {
    hasTutors() {
      return !this.isLoading && this.tutors.length
    },
  },

  async mounted() {
    const foundTutors = await tutorAPI.getAll()
    foundTutors.forEach(addFullName)
    this.tutors.push(...foundTutors)
    this.isLoading = false
  },
}
</script>

<style scoped>
main {
  padding: 16px;
}

.buttons-container {
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  gap: 8px;
}

.tutor-preview-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
