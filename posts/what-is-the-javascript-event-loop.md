---
title: "What is the JavaScript event loop?"
date: "2021-12-26"
---

The JavaScript event loop helps determine what parts of your code runs and when.

It is needed because JavaScript is single-threaded. At any particular time, only one sequence of code can be executing. There is no concurrency. Yet, what happens when two things need to execute at the same time?

First, we need to know that JavaScript has run-to-completion semantics. This means that the current task is run to completion before the next task is executed.

When a JavaScript program starts, it runs from top to bottom without interruption. After, the program may exit. However, if there are event listeners, the program waits.

When an event is fired, the event listener calls its event handler to run its code. If there’s no one in line, the code executes immediately. Otherwise, it joins the line to run next.

If another event is fired in the meantime, the event handler joins the queue once again. This happens over and over again as needed in a loop. Hence, the JavaScript event loop.

This model is simplistic, but that’s to help highlight the point. The lack of jargon helps avoid distraction. To me, ideas are more easily digested when they are minimalist. I hope this helps.
