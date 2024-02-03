<template>
  <header>
    <nav>
      <h1>
        <RouterLink to="/">Superprof</RouterLink>
      </h1>
      <ul>
        <li>
          <RouterLink to="/tutors">Tutors</RouterLink>
        </li>
        <li>
          <RouterLink to="/requests">Requests</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: #090056;
}

header a {
  color: #ffe642;
  display: inline-block;
  padding: 12px 24px;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border-bottom: 1px solid #ffe642;
}

h1 a {
  color: white;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 8px;
}
</style>
