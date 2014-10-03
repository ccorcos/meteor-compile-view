# View File

This package attempts to consolidate programming with meteor all into one file.
Do you ever get that feel of neurosis jumping in between files trying to find
the corresponding css, html, and js files?

Well this solution isn't perfect, but its a step in that direction. Use `!css`,
`!html`, and `!js` tags in  your `*.view` file to identify the the following
block of text. All of these blocks are concatenated into one file for each view
file.

I have yet to create an appropriate syntax highlighter for Atom or Sublime (help
is welcome!) but that should make this more usable. Everything works, but the
code starts to look very ugly with everything interlaced.

Note that view files only work for client code!

Check out my [leaderboard example!](https://github.com/ccorcos/meteor-compile-view-leaderboard)
