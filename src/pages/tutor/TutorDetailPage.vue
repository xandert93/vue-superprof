<template>
  <main>
    <section>
      <Card>
        <h2>{{ id }}</h2>
      </Card>
    </section>
    <section>
      <Card>
        <header>
          <h2>Interested? Reach out now!</h2>
          <Button link :to="'/'">Contact</Button>
        </header>
        <RouterView />
      </Card>
    </section>
    <section>
      <Card>
        <Badge
          v-for="area in areas"
          :key="area"
          :type="area"
          :title="area"
        ></Badge>
        <p>{{ description }}</p>
      </Card>
    </section>
  </main>
</template>

<script>
export default {
  props: {
    id: String,
  },
}
</script>

<style></style>
