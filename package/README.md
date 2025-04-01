# Spectre (Integration)

This package acts as an integration which you can pass various configurations to. It then provides these options to the pages via [virtual modules](https://vite.dev/guide/api-plugin.html#virtual-modules-convention).

> <details>
>   <summary>Don't know what a virtual module is?</summary>
>   <div>
>     <p>A virtual module is essentially a way for me to provide various information to Node using "fake" modules. Imagine it like this:</p>
>     <ol>
>     <li>Astro's server starts and reads the configuration for the integration</li>
>     <li>A "fake" module is created and exposed to the entire app (held in memory)</li>
>     <li>Any part of the site can now access the values from the fake module</li>
>     <p>This is obviously a gross oversimplification, but it might help you understand what I'm doing here a bit better.</p>
>   </div>
> </details>

Let's go through the files to see what they each do!

## `src/index.ts`

The index file does nothing except re-exporting the default export from `src/integration.ts`!

## `src/integration.ts`

This is where the magic happens. Line 1-3 are the imports, it is after that where things get exciting.

### Line 5 - 111

I'm defining some [Zod](https://zod.dev) schemas here which will later be used to verify the options passed to the integration. Check out Zod's website if you want to know more about what it does!

### Line 113 - 142

These lines contain the actual function that is used in the `astro.config.ts` file.

First, on line `114`, I parse the options using Zod. The important part is that I do not call `schema.safeParse` here, so the server fails to start if an invalid configuration is passed to the integration.

Next, starting from line `116`, using a helper function in `src/utils/virtual-module-plugin-builder.ts`, I create the virtual module. All I do is pass in a module ID (which I can then import from later), a name and a string containing the exports!

If you noticed that the third string (from line `117` - `125`) suspiciously looks a lot like JS, you'd be correct! That is the code that gets injected into the virtual module that provides all of the variables from the configuration. This is also where you can see how your options are actually being brought into the virtual module itself.

The last important thing would be from line `131` to `139`, where I use one of Astro's integration hooks, specifically the [`astro:config:done`](https://docs.astro.build/en/reference/integrations-reference/#astroconfigdone) hook. It allows me to update the Astro configuration (from `astro.config.ts`) to retroactively add the Integration as a Vite plugin! (If you're new to Integrations, or Astro as a whole, don't worry. Vite is the runtime that Astro uses under the hood, and you don't need to understand it for now.)

## `src/utils/virtual-module-plugin-builder.ts`

This is a small utility which simplifies adding a virtual module to Vite. Read their section on [virtual modules](https://vite.dev/guide/api-plugin.html#virtual-modules-convention) to find out more.