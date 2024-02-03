<template>
  <li>
    <Card>
      <h3 class="tutor-fullname">{{ tutor.fullName }}</h3>
      <h4>£{{ tutor.hourlyRate }}/h</h4>
      <!-- <div>
      <Badge v-for="area in areas" :key="area" :type="area" :title="area"></Badge>
    </div>-->
      <div class="tutor-actions">
        <Button
          variant="outlined"
          link
          :to="$route.path + '/' + tutor.id + '/contact'"
          >Contact</Button
        >
        <Button link :to="$route.path + '/' + tutor.id">View Details</Button>
      </div>
    </Card>
  </li>
</template>

<script>
export default {
  props: {
    tutor: Object,
  },
}
</script>

<style scoped>
.tutor-fullname {
  font-size: 1.5rem;
}

.tutor-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}
</style>
