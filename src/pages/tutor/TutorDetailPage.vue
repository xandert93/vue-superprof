<template>
  <main>
    <p v-if="!tutor">fetching...</p>
    <section v-else>
      <Card>
        <h2>{{ tutor.fullName }}</h2>
        <p>{{ tutor.description }}</p>
        <h3>£{{ tutor.hourlyRate }}/h</h3>
      </Card>

      <Card>
        <header>
          <h2>Interested? Reach out now!</h2>
          <Button link :to="$route.path + '/contact'"
            >Contact {{ tutor.firstName }}</Button
          >
        </header>
        <RouterView />
      </Card>
      <Card>
        <Badge
          v-for="area in areas"
          :key="area"
          :type="area"
          :title="area"
        ></Badge>
      </Card>
    </section>
  </main>
</template>

<script>
import { tutorAPI } from '../../api'
import { addFullName } from '../../utils/string-utils'

export default {
  props: {
    id: String,
  },
  data() {
    return {
      tutor: null,
    }
  },
  async mounted() {
    const { id } = this.$props

    const foundTutor = await tutorAPI.getById(id)
    addFullName(foundTutor)
    this.tutor = foundTutor
  },
}
</script>

<style></style>
