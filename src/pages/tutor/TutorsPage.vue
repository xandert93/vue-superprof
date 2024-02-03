<template>
  <main>
    <Card>
      <div class="controls">
        <Button variant="outlined" @click="loadTutors(true)">Refresh</Button>
        <Button v-if="!isTutor && !isLoading" link to="/register"
          >Register as Tutor</Button
        >
      </div>
      <div v-if="isLoading">
        <CircularProgress />
      </div>
      <ul v-else-if="hasTutors">
        <TutorPreview
          v-for="tutor in filteredTutors"
          :key="tutor.id"
          :id="tutor.id"
          :first-name="tutor.firstName"
          :last-name="tutor.lastName"
          :rate="tutor.hourlyRate"
          :areas="tutor.areas"
        />
      </ul>
      <h3 v-else>No tutors found.</h3>
    </Card>
  </main>
</template>

<script>
import TutorPreview from '../../components/tutors/TutorPreview.vue'
export default {
  components: { TutorPreview },
}
</script>

<style></style>
