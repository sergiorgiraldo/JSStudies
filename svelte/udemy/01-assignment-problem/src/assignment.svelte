<script>
    export let userGoal = "";
</script>
<style>
    .red{
        color: #ff0000;
    }
    .blue{
        color: #0000ff;
    }
</style>
<h1 class="{userGoal.indexOf('!') != -1?'red':'blue'}">{userGoal}</h1>
