<script>
  import Carousel from "./Carousel.svelte";
  export let gallery_items;
  export let title = "Placeholder";
  export let description;
  export let github = null;
  export let figma = null;
  export let live = null;
  export let case_study = null;
  export let roles = [];
  export let team = [];
  export let tools = [];
  export let results = [];
  export let timeline;

</script>

<section class="flex flex-col gap-8 w-full">
  <div class="flex flex-col gap-4 my-20 items-center justify-center">
      <span class="flex flex-col gap-6 ">
          <h1>{title}</h1>
          <hr class="border-t border-gray-200 w-full" />
          <!-- Project Links -->
          <span class="flex gap-2">
              {#if github}
                  <a href={github} target="_blank" class="links">Github</a>
              {/if}
              {#if figma}
                  <a href={figma} target="_blank" class="links">Figma</a>
              {/if}
              {#if live}
                  <a href={live} target="_blank" class="links">Live</a>
              {/if}
              {#if case_study}
                  <a href={case_study} target="_blank" class="links">Case Study</a>
              {/if}
          </span>
          <!-- Divider -->
          <hr class="border-t border-gray-200 w-full" />

          <!-- INFO GRID -->
          <div class="grid grid-cols-3 gap-6 text-left text-gray-800">
            <div>
              <p class="mb-2 text-gray-400">ROLE</p>
              {#each roles as role}
                <p>{role}</p>
              {/each}
            </div>
            <div>
              <p class="mb-2 text-gray-400">DURATION</p>
              <p>{timeline}</p>
            </div>
            <div>
              <p class="mb-2 text-gray-400">TEAM</p>
              {#each team as team_member}
                <p>{team_member}</p>
              {/each}
            </div>
          </div>

          {#if results.length > 0}
            <hr class="border-t border-gray-200 w-full" />

            <p class="mb-2 text-gray-400">IMPACT & OUTCOMES</p>
            <ul class="list-disc pl-6">
              {#each results as result}
                <li><p>{result}</p></li>
              {/each}
            </ul>
          {/if}
          <hr class="border-t border-gray-200 w-full" />

          <slot name="description" />

          <slot name="content" />
      </span>

      <!-- <Carousel gallery_items={gallery_items}/> -->
  </div>
</section>
