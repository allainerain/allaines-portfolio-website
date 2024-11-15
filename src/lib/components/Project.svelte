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
  export let timeline;

  let maxRows = Math.max(1, roles.length, team.length, tools.length);
</script>

<section class="flex flex-col gap-8 w-full h-svh items-center justify-center">
  <div class="flex flex-col gap-4 mt-20 pt-10">
      <span class="flex flex-col gap-2 ">
          <h2>{title}</h2>
          
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
          <p>{description}</p>
      </span>

      <!-- Table Details -->
      <div class="flex p-4 rounded-lg border border-1 dark:bg-[#161616] dark:border-[#2D2D2D]">
          <table class="text-light-accent rounded-lg border-collapse w-full m-2 dark:text-dark-text text-left">
            <thead>
              <tr>
                <th class="font-bold mb-2">Role</th>
                <th class="font-bold mb-2">Team</th>
                <th class="font-bold mb-2">Tools</th>
                <th class="font-bold mb-2">Timeline</th>
              </tr>
            </thead>
            <tbody>
              {#each Array(maxRows) as _, index}
                <tr>
                  <td>{roles[index] || ""}</td>
                  <td>{team[index] || ""}</td>
                  <td>{tools[index] || ""}</td>
                  {#if index === 0}
                    <td rowspan={maxRows} class="align-top">{timeline}</td>
                  {/if}
                </tr>
              {/each}
            </tbody>
          </table>
        </div>

      <Carousel gallery_items={gallery_items}/>
  </div>
</section>
