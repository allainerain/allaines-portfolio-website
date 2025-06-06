<script>
	import { fly, blur } from "svelte/transition";
	import { onMount } from "svelte";
	import Carousel from "$lib/components/Carousel.svelte";

	let ready = false;
	onMount(() => (ready = true));

	let berdebox_build = [
		'/berde-box/build-1.jpg',
		'/berde-box/build-2.jpg'
	];

	let berdebox_iot_cup = [
		'/berde-box/iot-cup-1.jpg',
		'/berde-box/iot-cup-2.jpg',
		'/berde-box/iot-cup-3.jpg',
		'/berde-box/iot-cup-4.jpg'
	];
</script>

<svelte:head>
	<!-- Preload header and key images -->
	<link rel="preload" as="image" href="/berde-box/header.png">
	<link rel="preload" as="image" href="/berde-box/user-flow.png">
	<link rel="preload" as="image" href="/berde-box/sketches.png">
	<link rel="preload" as="image" href="/berde-box/modules.png">
	<link rel="preload" as="image" href="/berde-box/user-1.png">
	<link rel="preload" as="image" href="/berde-box/user-2.png">
	<link rel="preload" as="image" href="/berde-box/user-3.png">

  <link rel="preload" as="video" href="/berde-box/web.mp4" type="video/mp4">
	<link rel="preload" as="video" href="/berde-box/pitch.mp4" type="video/mp4">
	<link rel="preload" as="video" href="/berde-box/doorbell.mp4" type="video/mp4">
	<link rel="preload" as="video" href="/berde-box/unlock.mp4" type="video/mp4">

	<!-- Preload build carousel images -->
	{#each berdebox_build as src}
		<link rel="preload" as="image" href={src}>
	{/each}

	<!-- Preload exhibit carousel images -->
	{#each berdebox_iot_cup as src}
		<link rel="preload" as="image" href={src}>
	{/each}
</svelte:head>

{#if ready}
<div class="w-full md:px-10 px-4 py-12 flex flex-col gap-6 items-center">

	<!-- HEADER -->
	<div class="md:pt-24 pb-8 w-full max-w-5xl"
    transition:fly={{y: 400, duration: 800}}
  >
    <span in:blur={{amount: 100, duration: 800}}>
		<img class="rounded-xl w-full h-auto" src="/berde-box/header.png" alt="BerdeBox header image" />
    </span>
	</div>

	<div class="max-w-[900px] md:py-12 flex flex-col gap-6">
    <span transition:fly={{y: 400, duration: 800, delay: 100}}>
      <span class="flex flex-col gap-6" in:blur={{amount: 100, duration: 800, delay: 100}}>
        <h1>BerdeBox: Receive Packages Securely from Anywhere</h1>
        <hr class="border-t border-gray-200 w-full" />
      </span>
    </span>


    <span transition:fly={{y: 400, duration: 800, delay: 200}}>
      <span class="flex flex-col gap-6" in:blur={{amount: 100, duration: 800, delay: 200}}>

        <!-- INFO GRID -->
        <div class="grid md:grid-cols-3 gap-6 text-left text-gray-800">
          <div>
            <p class="mb-2 text-gray-400">ROLE</p>
            <p>Product Designer, Fullstack Developer</p>
          </div>
          <div>
            <p class="mb-2 text-gray-400">DURATION</p>
            <p>2 months</p>
          </div>
          <div>
            <p class="mb-2 text-gray-400">TEAM</p>
            <p>1 Product Manager, 1 Designer, 1 Fullstack Dev, 3 Hardware Devs</p>
          </div>
        </div>
      </span>
    </span>

    <span transition:fly={{y: 400, duration: 800, delay: 300}}>
      <span class="flex flex-col gap-6" in:blur={{amount: 100, duration: 800, delay: 300}}>

        <hr class="border-t border-gray-200 w-full" />
        <p class="mb-2 text-gray-400">IMPACT & OUTCOMES</p>
        <ul class="list-disc pl-6">
          <li><p>🥉 2nd Runner-Up & 🏅 People’s Choice — DCS Annual IoT Cup</p></li>
        </ul>

        <hr class="border-t border-gray-200 w-full" />
      </span>
    </span>

		<p>
			BerdeBox is a smart, modular delivery box designed for Filipino buyers who prefer cash-on-delivery (COD)—a reimagined mailbox for cautious, scam-wary consumers. Built for a networks class, it combines hardware and software to solve a real e-commerce problem.
		</p>

		<!-- USER RESEARCH -->
		<h2 class="pt-10 text-center">User Research</h2>
		<hr class="border-t border-gray-200 w-full" />

		<h3 class="pt-8 text-xl font-semibold">The problem: Filipinos are siguristas — we like to be sure.</h3>
		<p>
			Even with GCash and PayMaya, 7 out of 10 Filipinos still prefer COD. Why? Trust issues, scam fears, and the need for control. We don’t pay until we see the product — and definitely won’t leave cash in a regular mailbox.
		</p>
		<div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
			<img src="/berde-box/user-1.png" alt="User research testimony 1" />
			<img src="/berde-box/user-2.png" alt="User research testimony 2" />
			<img src="/berde-box/user-3.png" alt="User research testimony 3" />
		</div>

		<!-- DESIGN PROCESS -->
		<h2 class="pt-10 text-2xl font-semibold text-center">Designing the Perfect Remote Mailbox</h2>
		<hr class="border-t border-gray-200 w-full" />

		<h3 class="pt-8 font-semibold">Ideating the BerdeBox</h3>
		<p>
			A regular locked mailbox wouldn’t work. We designed BerdeBox with trust in mind — adding a camera, COD compartment, and modular extensions. I collaborated on sketches, prototyping, and UX flows.
		</p>
		<img class="rounded-xl w-full h-auto" src="/berde-box/user-flow.png" alt="User flow diagram for BerdeBox" />

		<h3 class="pt-8 font-semibold">The Tiny Details That Mattered</h3>
		<ul class="list-disc pl-6">
			<li><strong>Hold-to-unlock:</strong> Prevent accidental taps with subtle animation</li>
			<li><strong>Downward-opening cashbox:</strong> Riders easily spot where to collect</li>
			<li><strong>Electromagnetic locks:</strong> Single power source, multiple modules</li>
			<li><strong>Auto-locking door:</strong> Ensures security after inactivity</li>
		</ul>
		<img class="rounded-xl w-full h-auto" src="/berde-box/sketches.png" alt="Initial sketches of BerdeBox" />

		<h3 class="pt-8 font-semibold">Scalability: Our Unique Advantage</h3>
		<p>
			BerdeBox is modular. Need extra compartments, solar charging, or disinfection? Just add them. It’s more than a smart box — it’s an adaptable delivery system.
		</p>
		<img class="rounded-xl w-full h-auto" src="/berde-box/modules.png" alt="Modular features of BerdeBox" />

		<h3 class="pt-8 font-semibold">Behind the Name</h3>
		<p>If you're Filipino, you’ve probably heard:</p>
		<ul class="list-disc pl-6">
			<li><p><strong>Rider:</strong> Hello, Shopee delivery po.</p></li>
			<li><p><strong>Buyer:</strong> Kuya, iwan mo nalang sa BerdeBox.</p></li>
		</ul>
		<p>"Berde" (green) makes it stand out and easy to locate.</p>

		<!-- PROTOTYPING -->
		<h2 class="pt-10 text-center">Building BerdeBox</h2>
		<hr class="border-t border-gray-200 w-full" />

		<h3 class="pt-8 font-semibold">Developing the Experience</h3>
		<p>Using Firebase, SvelteKit, and a solenoid lock, we built a working prototype in just a month — staying true to the core concept.</p>
		<Carousel gallery_items={berdebox_build} />

		<h3 class="pt-8 font-semibold">Selling the Vision</h3>
		<p>To communicate the vision, we built a landing page in 2 days showing the product, use cases, and future modules.</p>
		<video autoplay playsinline loop class="rounded-md border hover:scale-[102%] duration-300">
			<source src="/berde-box/web.mp4" type="video/mp4" />
		</video>

		<!-- PITCH -->
		<h2 class="pt-10 text-2xl font-semibold text-center">Pitching BerdeBox</h2>
		<hr class="border-t border-gray-200 w-full" />

		<h3 class="pt-8 font-semibold">The Pitch to the Dragons</h3>
		<p>We pitched at the DCS IoT Cup sponsored by Enstack. Watch the full pitch below.</p>
		<video controls class="rounded-md border hover:scale-[102%] duration-300 w-full">
			<source src="/berde-box/pitch.mp4" type="video/mp4" />
		</video>

		<h3 class="pt-8 font-semibold">The Exhibit</h3>
		<p>Over 100 students experienced BerdeBox at our exhibit. We demoed real-world usage and let them try it hands-on.</p>
		<Carousel gallery_items={berdebox_iot_cup} />

		<!-- CORE FEATURES -->
		<h2 class="pt-10 text-center">Core Experience</h2>
		<hr class="border-t border-gray-200 w-full" />

		<h3 class="pt-8 text-center font-semibold">Livestream your mailbox</h3>
		<p class="text-center">Watch who’s outside your home via a real-time feed, even when you’re away.</p>
		<video autoplay playsinline loop class="rounded-md border hover:scale-[102%] duration-300">
			<source src="/berde-box/doorbell.mp4" type="video/mp4" />
		</video>

		<h3 class="pt-8 text-center font-semibold">Remote unlocking from your phone</h3>
		<p class="text-center">Control access to each compartment — COD or delivery door — with one tap.</p>
		<video autoplay playsinline loop class="rounded-md border hover:scale-[102%] duration-300">
			<source src="/berde-box/unlock.mp4" type="video/mp4" />
		</video>

		<!-- OUTCOMES -->
		<h2 class="pt-10 text-center">Outcomes</h2>
		<hr class="border-t border-gray-200 w-full" />
		<h3 class="pt-8 font-semibold">🏆 3rd Place and People’s Choice</h3>
		<p>BerdeBox earned both 3rd Place and People’s Choice at the IoT Cup. Judges loved the real-world relevance, and students resonated with its user-centered approach.</p>
	</div>
</div>
{/if}
