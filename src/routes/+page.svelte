<script lang="ts">
  import { quadOut } from 'svelte/easing';
  import { slide, type TransitionConfig } from 'svelte/transition';

  const transitionConfig: TransitionConfig = {
    easing: quadOut,
    duration: 100,
  };
</script>

<div
  class="bg-foreground absolute w-full border text-sm"
  transition:slide={transitionConfig}
>
  hello
</div>
