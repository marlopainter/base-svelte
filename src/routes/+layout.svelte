<script lang="ts">
	import '$css/main.css';
	const year = new Date().getUTCFullYear();
</script>

<div
	id="main-app"
	class="flex flex-col gap-4 p-4">
	<header>HeaderMain</header>
	<main class="min-h-[70vh]"><slot /></main>
	<footer>
		<div>
			<div class="flex items-center justify-center">
				Copyright &nbsp; <i class="fa-solid fa-copyright"></i> &nbsp;
				{year} : Company, Inc.
			</div>
			<div class="flex items-center justify-center">
				Powered by &nbsp; <i class="fa-solid fa-tree"></i> &nbsp; Stuff Goes Here
			</div>
		</div>
	</footer>
</div>
