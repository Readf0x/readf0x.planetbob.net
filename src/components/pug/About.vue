<!-- eslint-disable vue/multi-word-component-names -->
<template lang="pug">
h3
    .head-wrapper
        span.head Music
p I love music, not so much making it as listening to it though, lol. I enjoy a wide variety of genres from japanese alt-rock to emo rap. I’m definitely not a “I listen to everything” person. I #[em despise] hyperpop. My favorite artist is probably #[a(href="https://www.youtube.com/@porterrobinson") Porter Robinson], but it’s quite hard to pin down an overall favorite when you listen to as much as I do 😅.#[br] Some of my favorites include:
ul
    li Arctic Monkeys
    li Foster the People
    li Gorillaz
    li Joji
    li King Gizzard
    li Lovejoy
    li Machine girl
    li Poorstacy
    li Tame Impala
    li The Academic
    li The Strokes
    li Tyler, The Creator
    li Wienners
    li Zutomayo
    li And more!

h3
    .head-wrapper
        span.head Movies
p If you’re wondering what kind of movies I enjoy watching, here are some of my favorites:
ul
    li The Matrix
    li Your Name
    li Akira
    li Alita: Battle Angel
    li Doctor Strange
    li Blade
    li Forest Gump
    li Hackers
    li Hardcore Henry
    li John Wick
    li Joker (2019)
    li MFKZ
    li Neon Genesis Evangelion: The End of Evangelion #[em #[code (You should probably watch the show first lol)]]
    li No Country for Old Men
    li Office Space
    li Spider-Man: Into the Spider-Verse
    li Spirited Away
h3
    .head-wrapper
        span.head Gaming
p As previously mentioned, I do enjoy a bit of gaming here and there, not #[em that] much…
    img(src="/images/sarcasm.png",alt="")
p I swear I don’t play 
    strong
    em that  much… Only a 
    a(href="https://steamtime.info/s/76561198311420145")
    em liiitle … :P
h3
    .head-wrapper
        span.head Programming
p I’ve been a programmer since I was maybe ~11. It all started with #[a(href="https://www.youtube.com/watch?v=ttcOHNlNKPE") a video from a russian youtuber] where he jokingly taught the basics of html. I was scared of javascript for a long time because I thought that I was too dumb to understand it, lol. I still don’t properly know any high-level languages, despite my efforts to learn both java and kotlin.
pre
    code.hljs
        :highlight(lang="kotlin")
                int day = 1;
                boolean caffeine = false;
                switch(day) {
                    case 1:
                        System.out.println("Sunday");
                        break;
                    case 7:
                        System.out.println("Saturday");
                        break;
                    default:
                        if(caffeine) {
                            System.out.println("Looking forward to the weekend!");
                        } else {
                            System.out.println("I'm going to kill myself");
                        }
                }
p This terrible function is about the extent of my knowledge of kotlin… yeah. Despite these challenges, I have pursued front end web development to the point of making the site you’re on right now! This site is written in #[a(href="https://vuejs.org/") vue] and #[a(href="https://vitejs.dev/") vite], with help from #[a(href="https://getbootstrap.com/") bootstrap]. I’m using single-file components for all the elements on the site. The text you’re reading right now is actually #[a(href="https://pugjs.org") pug.js] code for performance reasons, but it was originally markdown being transformed with #[a(href="https://marked.js.org/") marked]. The kotlin code block above was styled with #[a(href="https://highlightjs.org/") highight.js]. The navbar and the buttons on it use bootstrap, with custom styling from yours truly.
h3
    .head-wrapper
        span.head Keyboards
p I love custom keyboards (mechanical, to be specific). I built the keyboard I use at home and once I have a job I’ll definitely be building another, better one. Right now my build consists of a GMMK TKL, filmed alpaca switches, and some cheap typewriter style keycaps I bought off amazon. Truly not the best setup, I know. I don’t know what case I’m gonna use next, but I do know I’m gonna use gateron’s oil kings or ink black switches. I definitely want to get an alice keyboard at sone point, because they look so cool, but I’m a little scared I won’t get my money’s worth because I’ve never used any layout other than the standard ansi one.
</template>