<script>
    import Main from "./pages/Main.svelte"
</script>

<div>
    <div class="text-black p-5 text-2xl">
        <div class="inline-block">Gasukaku</div>
        <div class="inline-block float-right">
            <a class="ml-2" href="//twitter.com/gasukaku" target="_blank">
                <i class="ph-twitter-logo-fill" />
            </a>
            <a class="ml-2" href="//www.youtube.com/channel/UCCekMRBo_soYqW0uTzFlXXQ" target="_blank">
                <i class="ph-youtube-logo-fill" />
            </a>
            <a class="ml-2" href="//github.com/gasukaku" target="_blank">
                <i class="ph-github-logo-fill" />
            </a>
        </div>
    </div>
    <div class="text-white p-5 text-center bg-blue-500">
        サイトデザインを更新しました
    </div>
    <div class="p-24 mx-40">
        <Main />
    </div>
    <div class="p-10 text-center">
        Host by Gasukaku
    </div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&display=swap');
    *{
        font-family: "M PLUS Rounded 1c", sans-serif, system-ui;
    }
</style>