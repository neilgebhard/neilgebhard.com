---
title: "What is the JavaScript event loop?"
date: "2021-12-07"
---

Why is it needed?

    Javascript is single-threaded, yet it's non-blocking -- it doesn't block code execution.

How can JavaScript handle I/O and network requests at the same time if it can spin up an extra thread?

    The JavaScript engine allows your program to take turns executing different blocks.

What is the JavaScript event loop?

    The JavaScript event loops decides what code to run and when.

How does the JavaScript event loop work?

By monitoring the Call Stack and Callback Queue.
