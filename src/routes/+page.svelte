<script lang="ts">
    import PlasmaGrid from "$lib/motion-core/plasma-grid/PlasmaGrid.svelte";
    import { Github, Linkedin } from "@lucide/svelte";
    import gsap from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import { onMount } from "svelte";
    import * as Carousel from "$lib/components/ui/carousel/index.js";
    import SplitReveal from "$lib/motion-core/split-reveal/SplitReveal.svelte";
    import TextLoop from "$lib/motion-core/text-loop/TextLoop.svelte";
    import Highlighter from "$lib/components/ori/text-highlighter/text-highlighter.svelte";
    import Button from "$lib/components/ui/button/button.svelte";

    const COLOR_PRESETS = {
        dark: {
            color: "#18181B",
            highlightColor: "#572400",
        },
        light: {
            color: "#CBCBCB",
            highlightColor: "#636363",
        },
    };
    const projects = [
        {
            title: "Portfolio Website",
            description: "A personal site to showcase my work and background.",
            thumbnail: "/logo.svg",
        },
        {
            title: "Measurely",
            description:
                "Interactive interfaces and motion-driven web concepts.",
            thumbnail: "/logo.svg",
        },
        {
            title: "CPP_",
            description:
                "Interactive interfaces and motion-driven web concepts.",
            thumbnail: "/logo.svg",
        },
        {
            title: "Have something in mind ?",
            description:
                "Contact me for any project or idea that you have in mind.",
            thumbnail: "/logo.svg",
        },
    ];

    let scrollProgress = $state(0);
    let workCarouselSection: HTMLDivElement | undefined;
    let loading = $state(true);
    let reveal = $state(false);
    let selectedProjectIndex = $state(0);

    const clamp = (value: number, min = 0, max = 1) =>
        Math.min(max, Math.max(min, value));

    const mapRange = (
        value: number,
        inMin: number,
        inMax: number,
        outMin: number,
        outMax: number,
    ) => {
        if (inMax === inMin) return outMin;
        const progress = clamp((value - inMin) / (inMax - inMin));
        return outMin + (outMax - outMin) * progress;
    };

    const updateScrollProgress = () => {
        const viewportHeight = window.innerHeight || 1;
        scrollProgress = clamp(window.scrollY / viewportHeight);
    };

    onMount(() => {
        document.body.style.overflow = "hidden";
        gsap.registerPlugin(ScrollTrigger);

        updateScrollProgress();
        window.addEventListener("scroll", updateScrollProgress, {
            passive: true,
        });
        window.addEventListener("resize", updateScrollProgress);

        let animation: gsap.core.Tween | undefined;
        let trigger: ScrollTrigger | undefined;

        if (workCarouselSection) {
            const cards = workCarouselSection.querySelectorAll("article");
            const controls = workCarouselSection.querySelectorAll(
                "[data-carousel-controls]",
            );

            gsap.set([...cards, ...controls], {
                y: 48,
                opacity: 0,
            });

            animation = gsap.to([...cards, ...controls], {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power3.out",
                stagger: 0.05,
                delay: 1,
                scrollTrigger: {
                    trigger: workCarouselSection,
                    start: "top 80%",
                    once: true,
                },
            });

            trigger = animation.scrollTrigger;
        }

        setTimeout(() => {
            reveal = true;
        }, 1000);
        setTimeout(() => {
            loading = false;
            document.body.style.overflow = "";
        }, 2000);

        return () => {
            trigger?.kill();
            animation?.kill();
            window.removeEventListener("scroll", updateScrollProgress);
            window.removeEventListener("resize", updateScrollProgress);
        };
    });

    const heroOpacity = $derived(mapRange(scrollProgress, 0, 1, 1, 0));
    const heroScale = $derived(mapRange(scrollProgress, 0, 1, 1, 0.82));

    const contentOpacity = $derived(mapRange(scrollProgress, 0.72, 1, 0, 1));
    const contentScale = $derived(mapRange(scrollProgress, 0.72, 1, 0.92, 1));
    const contentTranslateY = $derived(
        mapRange(scrollProgress, 0.72, 1, 64, 0),
    );
</script>

<svelte:head>
    <title>Yassine Akhouayri</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin="anonymous"
    />
    <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap"
        rel="stylesheet"
    />
</svelte:head>

<PlasmaGrid
    color={COLOR_PRESETS.light.color}
    highlightColor={COLOR_PRESETS.light.highlightColor}
    class={`fixed inset-0 z-10 h-screen w-screen opacity-50`}
/>

{#if loading}
    <div
        class={`loader flex bg-foreground justify-center items-center w-screen h-screen absolute left-0 top-0 z-40 ${reveal ? "reveal" : ""}`}
    >
        <span class="font-serif text-accent text-5xl">yka.</span>
    </div>
{/if}

<div class="relative bg-background">
    <header
        class="fixed top-0 left-0 right-0 z-30 flex items-center justify-center gap-2 pt-5"
    >
        <span
            class="font-serif text-accent text-center text-2xl bg-foreground px-5 py-1"
            >yka.</span
        >

        <div class="flex items-center gap-2">
            <a
                href="https://github.com/yka-dev"
                aria-label="GitHub"
                target="_blank"
                rel="noreferrer"
                class="flex items-center justify-center text-foreground/80 transition-colors hover:text-foreground"
                style="
                    width: calc(var(--spacing) * 10);
                    height: calc(var(--spacing) * 10);
                    border-radius: var(--radius);
                    border: 1px solid color-mix(in oklab, var(--border) 60%, transparent);
                    background: color-mix(in oklab, var(--background) 70%, transparent);
                    backdrop-filter: blur(calc(var(--spacing) * 1));
                "
            >
                <Github size={18} />
            </a>
            <a
                href="https://www.linkedin.com/in/yassine-akhouayri"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
                class="flex items-center justify-center text-foreground/80 transition-colors hover:text-foreground"
                style="
                    width: calc(var(--spacing) * 10);
                    height: calc(var(--spacing) * 10);
                    border-radius: var(--radius);
                    border: 1px solid color-mix(in oklab, var(--border) 60%, transparent);
                    background: color-mix(in oklab, var(--background) 70%, transparent);
                    backdrop-filter: blur(calc(var(--spacing) * 1));
                "
            >
                <Linkedin size={18} />
            </a>
        </div>
    </header>

    <div class="relative min-h-[200vh]">
        <section class="sticky top-0 z-10 h-screen">
            <div
                class="relative z-10 flex h-full w-full flex-col items-center"
                style={`
                    opacity: ${heroOpacity};
                    transform: scale(${heroScale});
                    transform-origin: center center;
                    will-change: transform, opacity;
                    pointer-events: ${scrollProgress >= 1 ? "none" : "auto"};
                `}
            >
                <div class="flex min-h-screen w-full max-w-7xl flex-col">
                    <section
                        class="relative flex flex-1 items-center justify-center overflow-hidden"
                    >
                        <div class="select-none text-center]">
                            <SplitReveal
                                mode="chars"
                                delay={1.1}
                                config={{
                                    chars: { stagger: 0.03 },
                                }}
                                class="text-center leading-[0.85] text-foreground font-serif  text-7xl"
                            >
                                Yassine<br />
                                <span
                                    class="text-center text-foreground font-serif text-8xl"
                                    >Akhouayri</span
                                >
                            </SplitReveal>
                        </div>

                        <SplitReveal
                            mode="words"
                            class="absolute text-muted-foreground"
                            delay={1.4}
                            style="
                                    bottom: calc(var(--spacing) * 10);
                                    left: calc(var(--spacing) * 10);
                                "
                        >
                            <h2
                                class="text-left font-serif italic text-muted-foreground text-3xl"
                            >
                                A collection of <TextLoop
                                    class="text-secondary-foreground"
                                    texts={["projects", "ideas", "experiments"]}
                                    interval={2000}
                                /> <br />
                                by
                                <Highlighter color="#000000" action="underline"
                                    >Yassine</Highlighter
                                >
                            </h2>
                        </SplitReveal>
                    </section>
                </div>
            </div>
        </section>
    </div>

    <div
        class="relative z-20"
        style={`
            opacity: ${contentOpacity};
            transform: translateY(${contentTranslateY}px) scale(${contentScale});
            transform-origin: center center;
            will-change: transform, opacity;
            pointer-events: auto;
        `}
    >
        <section
            class="flex min-h-screen flex-col items-center justify-center gap-5"
        >
            <div class="flex flex-col items-center gap-4">
                <SplitReveal
                    triggerOnScroll={true}
                    mode="chars"
                    class="font-light leading-none text-foreground font-serif text-4xl"
                >
                    About me
                </SplitReveal>
            </div>
            <SplitReveal
                triggerOnScroll={true}
                delay={0.2}
                lines.duration={0.02}
                mode="lines"
                class="text-left text-muted-foreground text-lg max-w-200 font-sans"
            >
                Hi, I'm Yassine Akhouayri. I'm 18 years old and currently living
                in Montreal, Canada. I’ve always been curious about how
                technology works and how complex systems are built, which
                naturally led me to programming.
                <div class="h-10"></div>

                I started learning to code on my own a few years ago. What began
                as simple curiosity quickly turned into something I spent more
                and more time exploring. Everything I know about programming so
                far has been self-taught through documentation, online
                resources, and a lot of experimentation.
                <div class="h-10"></div>

                Most of what I learn comes from building things. I like taking
                an idea and turning it into a real project, figuring out
                problems along the way and improving the system step by step.
                That process of designing, debugging, and refining software is
                what I enjoy the most.
                <div class="h-10"></div>

                In the near future, I plan to study electrical engineering to
                better understand the hardware and systems that power modern
                computing. I'm particularly interested in the relationship
                between software and the underlying technology it runs on.
                <div class="h-10"></div>

                Outside of programming, I spend a lot of time learning new
                technologies, experimenting with ideas, and working on side
                projects to push my skills further.
            </SplitReveal>
        </section>

        <section class="min-h-screen mt-100">
            <div class="mx-auto flex w-full max-w-7xl flex-col gap-4">
                <div class="flex flex-col items-center gap-5">
                    <SplitReveal
                        triggerOnScroll={true}
                        mode="chars"
                        class="font-light leading-none text-foreground font-serif text-4xl"
                    >
                        My work
                    </SplitReveal>
                    <SplitReveal
                        triggerOnScroll={true}
                        delay={0.2}
                        mode="lines"
                        class="text-muted-foreground text-base w-100 font-sans"
                    >
                        My work focuses on building projects that help me
                        explore new ideas and improve my understanding of
                        software systems. Most of what I create comes from
                        curiosity and the desire to experiment, learn, and
                        gradually refine how I design and build things.
                    </SplitReveal>
                </div>

                <div
                    class="flex justify-center mt-5"
                    bind:this={workCarouselSection}
                >
                    <Carousel.Root
                        opts={{
                            align: "start",
                            loop: false,
                        }}
                        class="w-full max-w-6xl"
                    >
                        <Carousel.Content class="-ms-4">
                            {#each projects as project, i (i)}
                                <Carousel.Item
                                    class="ps-4 md:basis-1/2 xl:basis-1/3"
                                >
                                    <article
                                        class="project-card overflow-hidden flex flex-col justify-between"
                                        style="
		border-radius: var(--radius-xl);
		border: {i === selectedProjectIndex
                                            ? '2px solid color-mix(in oklab, var(--foreground) 20%, transparent)'
                                            : '1px solid color-mix(in oklab, var(--border) 60%, transparent)'};
		background: color-mix(in oklab, var(--background) 70%, transparent);
		box-shadow: var(--shadow-sm);
		backdrop-filter: blur(calc(var(--spacing) * 1));
	"
                                    >
                                        <div class="overflow-hidden bg-muted">
                                            <img
                                                src={project.thumbnail}
                                                alt={project.title}
                                                class="h-full w-full object-contain"
                                            />
                                        </div>

                                        <div
                                            class="content p-6 flex flex-col items-start gap-3"
                                        >
                                            <div class="text">
                                                <h3
                                                    class="text-2xl font-serif text-foreground"
                                                >
                                                    {project.title}
                                                </h3>

                                                <p
                                                    class="text-sm font-inter leading-6 text-muted-foreground"
                                                >
                                                    {project.description}
                                                </p>
                                            </div>

                                            <Button
                                                class="learn-more text-sm font-medium cursor-pointer hover:bg-accent-background"
                                                style="
                                                backdrop-filter: blur(calc(var(--spacing) * 1));
                                                "
                                                variant="outline"
                                                onclick={() =>
                                                    (selectedProjectIndex = i)}
                                            >
                                                Learn more
                                            </Button>
                                        </div>
                                    </article>
                                </Carousel.Item>
                            {/each}
                        </Carousel.Content>

                        <div
                            class="flex items-center justify-center mt-5 gap-4"
                            data-carousel-controls
                        >
                            <Carousel.Previous
                                style="
                                    width: calc(var(--spacing) * 10);
                                    height: calc(var(--spacing) * 10);
                                    border-radius: var(--radius);
                                    border: 1px solid color-mix(in oklab, var(--border) 60%, transparent);
                                    background: color-mix(in oklab, var(--background) 70%, transparent);
                                    backdrop-filter: blur(calc(var(--spacing) * 1));
                                "
                                class="static translate-y-0"
                                size="icon-lg"
                                variant="outline"
                            />
                            <Carousel.Next
                                style="
                                    width: calc(var(--spacing) * 10);
                                    height: calc(var(--spacing) * 10);
                                    border-radius: var(--radius);
                                    border: 1px solid color-mix(in oklab, var(--border) 60%, transparent);
                                    background: color-mix(in oklab, var(--background) 70%, transparent);
                                    backdrop-filter: blur(calc(var(--spacing) * 1));
                                "
                                class="static translate-y-0"
                                size="icon-lg"
                                variant="outline"
                            />
                        </div>
                    </Carousel.Root>
                </div>

                <div>The project learn more</div>
            </div>
        </section>

        <section class="min-h-screen">
            <div class="mx-auto flex w-full max-w-7xl flex-col gap-4">
                <div class="flex flex-col items-center gap-4">
                    <SplitReveal
                        triggerOnScroll={true}
                        mode="chars"
                        class="font-light leading-none text-foreground font-serif text-4xl"
                    >
                        My tools
                    </SplitReveal>
                    <SplitReveal
                        triggerOnScroll={true}
                        delay={0.2}
                        mode="lines"
                        class="text-muted-foreground w-100 text-base font-sans"
                    >
                        The tools I use to build and experiment with software,
                        from programming languages and frameworks to the editor
                        and utilities that shape my development workflow.
                    </SplitReveal>
                </div>

                <div class="flex justify-center"></div>
            </div>
        </section>
    </div>
</div>
