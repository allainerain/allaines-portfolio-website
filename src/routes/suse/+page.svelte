<script>
    import { fly, blur } from "svelte/transition";
    import { onMount } from "svelte";
    import Carousel from "$lib/components/Carousel.svelte";

    let ready = false;
    onMount(() => ready = true);

    let suse_conf = [
        '/works/suse_conf/1.png',
        '/works/suse_conf/2.png',
        '/works/suse_conf/3.png'
    ];

</script>

<svelte:head>
	<!-- Preload header and key images -->
	<link rel="preload" as="image" href="/suse/suse-wireframes.png">
	<link rel="preload" as="image" href="/suse/suse-user-1.png">
	<link rel="preload" as="image" href="/suse/suse-user-2.png">
	<link rel="preload" as="image" href="/suse/suse-user-3.png">
  <link rel="preload" as="image" href="/suse/suse-header.png">
	<link rel="preload" as="image" href="/suse/suse-conf.png">
	<link rel="preload" as="image" href="/suse/suse-poster.png">
	<link rel="preload" as="image" href="/suse/suse-use-case-diagram.png">

  <link rel="preload" as="video" href="/suse/suse-approve.mp4" type="video/mp4">
  <link rel="preload" as="video" href="/suse/suse-avail.mp4" type="video/mp4">
  <link rel="preload" as="video" href="/suse/suse-log.mp4" type="video/mp4">
  <link rel="preload" as="video" href="/suse/suse-login.mp4" type="video/mp4">
  <link rel="preload" as="video" href="/suse/suse-logout.mp4" type="video/mp4">

	<!-- Preload build carousel images -->
	{#each suse_conf as src}
		<link rel="preload" as="image" href={src}>
	{/each}

</svelte:head>

{#if ready}
<div class="w-full px-10 py-12 flex flex-col gap-6 items-center">
    
	<!-- HEADER -->
	<div class="pt-24 pb-8 w-full max-w-5xl"
    transition:fly={{y: 400, duration: 800}}
  >
    <span in:blur={{amount: 100, duration: 800}}>
            <img class="rounded-xl w-full h-auto" src="/suse/suse-header.png" alt="BerdeBox header image" />
    </span>
	</div>

  <div class="lg:w-[50%] py-12 flex flex-col gap-6">
    <span transition:fly={{y: 400, duration: 800, delay: 100}}>
      <span class="flex flex-col gap-6" in:blur={{amount: 100, duration: 800, delay: 100}}>
        <h1>SUSe: Library borrowing made seamless</h1>
        <hr class="border-t border-gray-200 w-full" />
      </span>
    </span>

    <span transition:fly={{y: 400, duration: 800, delay: 200}}>
      <span class="flex flex-col gap-6" in:blur={{amount: 100, duration: 800, delay: 200}}>
        <!-- INFO GRID -->
        <div class="grid grid-cols-3 gap-6 text-left text-gray-800">
          <div>
            <p class="mb-2 text-gray-400">ROLE</p>
            <p>Product Designer, Frontend Developer</p>
          </div>
          <div>
            <p class="mb-2 text-gray-400">DURATION</p>
            <p>1 year</p>
          </div>
          <div>
            <p class="mb-2 text-gray-400">TEAM</p>
            <p>1 Frontend developer, 1 Backend developer</p>
          </div>
        </div>
      </span>
    </span>

    <span transition:fly={{y: 400, duration: 800, delay: 300}}>
      <span class="flex flex-col gap-6" in:blur={{amount: 100, duration: 800, delay: 300}}>
        <hr class="border-t border-gray-200 w-full" />
        <p class="mb-2 text-gray-400">IMPACT & OUTCOMES</p>
        <ul class="list-disc pl-6">
          <li><p>₱120,000 raised in funding for expansion</p></li>
          <li><p>800+ students served in the College of Engineering</p></li>
          <li><p>1,300+ borrowing records processed</p></li>
          <li><p>50% reduction in lending processing time and achieved 94% user satisfaction</p></li>
          <li><p> 🥉 2nd runner up of 20 groups in research colloquium of final year CS projects</p></li>
        </ul>

        <hr class="border-t border-gray-200 w-full" />
      </span>
    </span>

    <p>
      Borrowing services at our university library is slow and frustrating — every request required manually filling out the same Google Forms over and over. For our software engineering class, my team built SUSe, a seamless borrowing and lending system designed to automate this process for students and librarians.
    </p>


    <!-- USER RESERACH -->
    <h2 class="pt-10 text-center">User Research</h2>
    <hr class="border-t border-gray-200 w-full" />

    <h3 class="pt-8 font-semibold">
        The problem: Library services were being managed through a patchwork of Google Forms and Sheets. This led to frequent errors on the admin side and a repetitive, frustrating experience for students.
    </h3>
    <p>We conducted interviews with both students and librarians to understand pain points in the current borrowing process. As students ourselves, we had firsthand experience with the system's shortcomings.</p>
    
    <div class="grid grid-cols-3">
        <img src="/suse/suse-user-1.png" alt="student testimony for SUSe" />
        <img src="/suse/suse-user-2.png" alt="student testimony for SUSe" />
        <img src="/suse/suse-user-3.png" alt="student testimony for SUSe" />
    </div>

    <!-- DESIGN PROCESS -->
    <h2 class="pt-10 text-center">Design Process</h2>
    <hr class="border-t border-gray-200 w-full" />

    <!-- SECTION -->
    <h3 class="pt-8 font-semibold"> Wireframing & User Flows </h3>
    
    <p>I mapped out use cases for our two main personas—students and librarians—identifying critical pain points in the current workflow. Working in parallel with backend development, I designed intuitive user flows that would eliminate redundant steps.</p>
    <img class="rounded-xl w-full h-auto" src="/suse/suse-use-case-diagram.png" alt="wireframes for SUSe" />
    
    <p>I mapped out use cases for our two main personas—students and librarians—identifying critical pain points in the current workflow. Working in parallel with backend development, I designed intuitive user flows that would eliminate redundant steps.</p>
    <img class="rounded-xl w-full h-auto" src="/suse/suse-wireframes.png" alt="wireframes for SUSe" />

       
    <!-- OUT OF THE CLASSROOM -->
    <!-- TITLE -->
    <h2 class="pt-10 text-center">Taking It Beyond the Classroom</h2>
    <hr class="border-t border-gray-200 w-full" />

    <!-- SECTION -->
    <h3 class="pt-8 font-semibold">Stakeholder Engagement</h3>
    <p>Our team recognized the real-world potential of our solution. We proactively reached out to the Engineering Library, scheduled meetings, and pitched SUSe directly to librarians. Their enthusiasm confirmed we were solving a genuine problem.</p>

    <!-- SECTION -->
    <h3 class="pt-8 font-semibold">Leveraging a Colloquium for Customer Validation</h3>
    <p>We were invited to join our university's final-year project colloquium, despite being underclassmen. There, we presented our MVP and over 50 students provided feedback, with many expressing genuine interest in using SUSe if deployed in our library.</p>
    <p>While we went in with the intention to gather as much user feedback, we left with validation and a 2nd Runner Up prize.</p>

    <Carousel gallery_items={suse_conf}/>

    <!-- SECTION -->
    <h3 class="pt-8 font-semibold">Pilot Testing</h3>
    <p>Thanks to Zarah, SUSe was able to secure a pilot test with the Engineering Library using real-world scenarios. This validated that SUSe could successfully operate outside the controlled classroom environment.</p>
    
    <!-- SECTION -->
    <h3 class="pt-8 font-semibold">New and improved SUSe</h3>
    <p>After our successful pilot, we refined the system over winter break, launching SUSe 2.0 with improved branding, smoother user flows, cleaner code, and enhanced authentication.</p>

    <!-- STUDENT CORE EXPERIENCES -->
    <h2 class="pt-10 text-center">Core Experiences for Students</h2>
    <hr class="border-t border-gray-200 w-full" />

    <!-- Feature 1 -->
    <h3 class="pt-8 text-center font-semibold">Login with the tap of your ID</h3>
    <p class="text-center">Students only need to register once. After that, they can log in and borrow services just by tapping their RFID — no more re-entering the same details every time.</p>
    <video playsinline autoplay loop class="transition-transform border border-1 rounded-md duration-300 hover:scale-[102%]">
      <source src="/suse/suse-login.mp4" type="video/mp4" />
      <track kind="captions" />
    </video>

    <!-- Feature 2 -->
    <h3 class="pt-8 text-center font-semibold">Avail services in just 5 clicks</h3>
    <p class="text-center">No more filling out Google Forms. Students just click the service they need and hit "Avail." It’s faster, simpler, and smarter.</p>
    <video playsinline autoplay loop class="transition-transform border border-1 rounded-md duration-300 hover:scale-[102%]">
      <source src="/suse/suse-avail.mp4" type="video/mp4" />
      <track kind="captions" />
    </video>

    <!-- Feature 3 -->
    <h3 class="pt-8 text-center font-semibold">Automatic logout for the forgetful</h3>
    <p class="text-center">The system logs users out after a period of inactivity — protecting student privacy and preventing accidental misuse.</p>
    <video playsinline autoplay loop class="transition-transform border border-1 rounded-md duration-300 hover:scale-[102%]">
      <source src="/suse/suse-logout.mp4" type="video/mp4" />
      <track kind="captions" />
    </video>

    <!-- LIBRARIAN CORE EXPERIENCES -->
    <h2 class="pt-10 text-center">Core Experiences for Librarians</h2>
    <hr class="border-t border-gray-200 w-full" />

    <!-- Feature 1 -->
    <h3 class="pt-8 text-center font-semibold">Approve registered students</h3>
    <p class="text-center">No need to re-verify every semester. Librarians can quickly approve students based on class schedules and status.</p>
    <video playsinline autoplay loop class="transition-transform border border-1 rounded-md duration-300 hover:scale-[102%]">
      <source src="/suse/suse-approve.mp4" type="video/mp4" />
      <track kind="captions" />
    </video>

    <!-- Feature 2 -->
    <h3 class="pt-8 text-center font-semibold">See all active borrowings</h3>
    <p class="text-center">A live dashboard shows which students are borrowing what — no more spreadsheets or guessing games.</p>
    <video playsinline autoplay loop class="transition-transform border border-1 rounded-md duration-300 hover:scale-[102%]">
      <source src="/suse/suse-log.mp4" type="video/mp4" />
      <track kind="captions" />
    </video>

    <!-- OUTCOMES -->
    <h2 class="pt-10 text-center">Outcomes</h2>
    <hr class="border-t border-gray-200 w-full" />

    <h3 class="pt-8 font-semibold">SUSe in EnggLib: 700+ Students, 1,300+ Borrowing Records</h3>
    <p>SUSe is now fully integrated into the UP Engineering Library, actively serving over 700 students with more than 1,300 borrowing records to date. SUSe has also resulted in 50% reduction in lending processing time and achieved 94% user satisfaction.</p>

    <h3 class="pt-8 font-semibold">₱120K Grant & National Recognition</h3>
    <p>Using SUSe as a proof of concept, we successfully pitched Citrus—a broader initiative to implement similar systems across other institutions—and secured ₱120,000 in funding from the University of the Philippines. The project was also honored with the Gawad Pangulo: Natatanging Inobasyon ng Mag-aaral (Student Innovations Award), recognizing its impact and potential for broader adoption.</p>

    <!-- LEARNINGS -->
    <h2 class="pt-10 text-center">Learnings</h2>
    <hr class="border-t border-gray-200 w-full" />

    <h3 class="pt-8 font-semibold">The People You Work With Matter</h3>
    <p>This project wouldn’t have come to life without the unwavering collaboration with my teammate, Zarah. Her passion and intensity matched mine every step of the way. We trusted each other deeply (with her leading the backend and me leading the frontend), and that mutual trust, paired with a shared drive to build something meaningful, is what pushed SUSe forward.</p>

    <h3 class="pt-8 font-semibold">Solve Problems That Matter to You</h3>
    <p>It sounds simple, but it’s powerful: when you care about the problem, you care more about the solution. Being personally invested gave us a deeper motivation to keep going. After all, who better to solve a problem than someone who truly understands it?</p>
    
    <h3 class="pt-8 font-semibold">Don’t Let Constraints Limit Your Vision</h3>
    <p>This could have stayed a class project, but we saw more. We chose to go beyond the brief, engaging real stakeholders, continuing work long after the semester ended, and deploying the platform in the real world. Believing in its potential is what made the difference.</p>

  </div>
</div>
{/if}

<style lang="scss">
    .fade-corner-right::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(to top right,  rgba(255, 255, 255, 0.9) , rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.05) 60%, rgba(255, 255, 255, 0.9));
        pointer-events: none; 
    }

    .fade-corner::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(to top left,  rgba(255, 255, 255, 0.8) , rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.05) 60%, rgba(255, 255, 255, 0.8));
        pointer-events: none; 
    }
</style>