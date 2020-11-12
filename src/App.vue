<template>
	<div id="app">
		<TopBar />
		<Weeks />
	</div>
</template>

<script>
import Weeks from './components/weeks.vue'
import TopBar from './components/header.vue'

export default {
	name: 'App',
	components: {
		TopBar,
		Weeks
	}
}
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Quantico:wght@400;700&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap');
/* #app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2a2a2a;
	margin-top: 60px;
} */
</style>
