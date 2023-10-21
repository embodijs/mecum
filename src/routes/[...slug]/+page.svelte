<script lang="ts" context="module">

    export * from "@embodi/generator/routes/+page.svelte";
    import EmbodiPage from "@embodi/generator/routes/+page.svelte";
</script>

<script lang="ts">
    export * from "@embodi/generator/routes/+page.svelte";
</script>

<EmbodiPage {...$$restProps} />
