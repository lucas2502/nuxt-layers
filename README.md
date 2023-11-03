# Nuxt Layer Starter

Create Nuxt extendable layer with this GitHub template.

## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

## Working on your theme

Your theme is at the root of this repository, it is exactly like a regular Nuxt project, except you can publish it on NPM.

The `.playground` directory should help you on trying your theme during development.

Running `pnpm dev` will prepare and boot `.playground` directory, which imports your theme itself.

## Distributing your theme

Your Nuxt layer is shaped exactly the same as any other Nuxt project, except you can publish it on NPM.

To do so, you only have to check if `files` in `package.json` are valid, then run:

```bash
npm publish --access public
```

Once done, your users will only have to run:

```bash
npm install --save your-theme
```

Then add the dependency to their `extends` in `nuxt.config`:

```ts
defineNuxtConfig({
  extends: 'your-theme'
})
```

## Development Server

Start the development server on http://localhost:3000

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Or statically generate it with:

```bash
pnpm generate
```

Locally preview production build:

```bash
pnpm preview
```

Checkout the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

```
pmesp-front-end
├─ .docker
├─ .editorconfig
├─ .eslintrc.cjs
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ branches
│  ├─ config
│  ├─ description
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  └─ master
│  │     └─ remotes
│  │        └─ origin
│  │           ├─ main
│  │           └─ master
│  ├─ objects
│  │  ├─ 00
│  │  │  └─ 7463b4d189b95bc250c8ad3b9b13a1f37ccfce
│  │  ├─ 05
│  │  │  └─ 66f957efb962f26e5664afdb29e5714fc316b8
│  │  ├─ 06
│  │  │  └─ 23f35fb490c13bc82d3b6634849043e6dc5940
│  │  ├─ 07
│  │  │  └─ 88698b5dd31a249721e01ac15ac523b1d6c6ea
│  │  ├─ 0b
│  │  │  └─ 2822748260157074136d5e700abd3b04319ff6
│  │  ├─ 0d
│  │  │  └─ 1ff7cee18b47313acb2794c831624bb551ddb3
│  │  ├─ 0f
│  │  │  └─ d6c1aa348fbfc65e05d791e33ff3a421d64dd9
│  │  ├─ 10
│  │  │  └─ 2fc1ccd4175af75be4cce08483b2eca880c7a2
│  │  ├─ 11
│  │  │  └─ 8b2a3b5a0013ed351d28673c9369e708d65973
│  │  ├─ 12
│  │  │  ├─ 23fb12d70caa53581f6463df4fc3249d755526
│  │  │  └─ bc3a1abb88761e7cc58ccaefbbbef9fdd5bd18
│  │  ├─ 13
│  │  │  └─ 423ed2c515c18abd64166f8cfbd698b50b69d8
│  │  ├─ 16
│  │  │  └─ 6c0bb0ca39b1d0f31ff3c4cb567a0481ff393a
│  │  ├─ 17
│  │  │  ├─ 0681dda93d4207eed51fcce89adbfa54386772
│  │  │  └─ e0012964e926ab45116e97d22e8fe63c575af2
│  │  ├─ 1b
│  │  │  └─ fe4eec4f88ecbbd07774862000a1e8e1664ce2
│  │  ├─ 1c
│  │  │  ├─ e211ee94a0f321f94dfc1f923a0164fdebef9f
│  │  │  └─ e8454c1f7794a316a72ad01cb7210fe4bf36ff
│  │  ├─ 1d
│  │  │  ├─ 746c1a2288fb5e0acb8d421e66fffd9eb5ad37
│  │  │  └─ 79b3659ece5e0456fbb72956570b026f663ba3
│  │  ├─ 22
│  │  │  └─ 06425737162ea1678a73e8904fb64736cb4019
│  │  ├─ 24
│  │  │  └─ 4f8db8fa947153ebfb62d75434966b15e3d926
│  │  ├─ 26
│  │  │  ├─ 4a4c89a3fe903bdf5729756a9742afa7595337
│  │  │  └─ 7a3fa404ea23673517061d7e76630526590841
│  │  ├─ 27
│  │  │  └─ f7061d12a9d1dd5c0af1eef7c6884efef097c6
│  │  ├─ 28
│  │  │  ├─ 66c9715fdc8fd99bbfc966ab40c94142abb3dc
│  │  │  └─ 81b485442d0586140e0e6c0463d4b107bdc1e1
│  │  ├─ 29
│  │  │  └─ 4959fe11f494fbada66d84052c79b6b8a5cb18
│  │  ├─ 2b
│  │  │  └─ 25be264a40676e4b90df71dae79b4b1d46f37c
│  │  ├─ 2c
│  │  │  ├─ 5e6cb76f18516828b7e9b8cf8a43793475e9aa
│  │  │  ├─ b62d5b4d65ff4f507497da37c762ba740ef676
│  │  │  ├─ bfeffb67855704d2f07e91c0e1d5d89ab57f47
│  │  │  └─ cf441cbfd22ebfc6f002b1d210dcd2e4241d88
│  │  ├─ 2e
│  │  │  └─ 818ca196a89db72f7d8dbdd8605d4cf41985f7
│  │  ├─ 2f
│  │  │  └─ a260ccc249f0f536c9fe1710ccd11e5b3d5693
│  │  ├─ 32
│  │  │  └─ 8854307c31ffc524393648703d362c5cd29b5c
│  │  ├─ 35
│  │  │  ├─ 3133ce8a99104caa8bd192f2f4e24220567855
│  │  │  └─ 5ce18ae6cc7a963a91b9aa71115db991c5cd2b
│  │  ├─ 36
│  │  │  └─ 9048ec09ced32901cea02c589c5b60b83e1a4d
│  │  ├─ 39
│  │  │  └─ ca850b3c5a06395d2876d5bffbfe64361e3e0f
│  │  ├─ 3d
│  │  │  └─ 0e5110dd0c06c4a32909a8a8089bacf667d222
│  │  ├─ 3e
│  │  │  ├─ 805d14dbe222efc06159fa7de01e28532668ea
│  │  │  └─ 9b31d92a95cbe7b9f37fbf89b57b9131cf6915
│  │  ├─ 3f
│  │  │  └─ c5f369b2c45fdd9b64ed78739d7a4225197ea0
│  │  ├─ 40
│  │  │  ├─ 656cd6eb139228c92b7e60b012767ccff28ba7
│  │  │  └─ 75a72607c82b328897d6d65b420d82a03e37aa
│  │  ├─ 47
│  │  │  └─ d34acaed96909764f1f65e834377a9c34668e0
│  │  ├─ 48
│  │  │  ├─ 1b2b1c498798d013884dbed797a70d68f4a196
│  │  │  └─ debcefd49b13c917eb9a36359a915536b2be79
│  │  ├─ 4a
│  │  │  └─ d5b27aedd8837a90e6e57745a4565bf83f2bd8
│  │  ├─ 4c
│  │  │  └─ f9c7adc06c3646364f1954c1661d2de09b3afe
│  │  ├─ 4e
│  │  │  └─ e3489ab7c9a093d2b0e5a4bab221f8e9c78099
│  │  ├─ 4f
│  │  │  └─ 9366e7c797ec5ac1bc27cd2f74af91827f550f
│  │  ├─ 50
│  │  │  ├─ 73d23a58710e65c87330d4aa319e9c567c29e3
│  │  │  └─ 9caac4eedf8af885f4d81509aa2e0cf8c7e1b1
│  │  ├─ 51
│  │  │  └─ fbca31b83432d2ae52accc12a95f828aa23167
│  │  ├─ 52
│  │  │  └─ 01c19db69ab2a0b0eeac3b0a50cc51624abb15
│  │  ├─ 56
│  │  │  ├─ 51294965986b76ee89025154aae6482b832047
│  │  │  └─ 5ca272edc5d2ac14f5995aa7b44be842a7310d
│  │  ├─ 58
│  │  │  └─ 90f1b9e74bb421216897463216e7618762fcdc
│  │  ├─ 59
│  │  │  └─ 5adbeb7989a777accd920db554854a4455ab75
│  │  ├─ 5b
│  │  │  └─ 1dada067821511f0cc1a246d3815053a4af609
│  │  ├─ 5c
│  │  │  ├─ c06a904089997b9f235308bce7b4a0e29d5ea3
│  │  │  └─ d64008db0479fd26334d2b24c7078db7c70027
│  │  ├─ 5e
│  │  │  └─ 5f5563eadfb27d1af7ede9c9296d98c3b77771
│  │  ├─ 5f
│  │  │  └─ 6ff108dce4aa54f9c2ecf4d8d0d2836da35596
│  │  ├─ 63
│  │  │  └─ 2fcfd2e0d07cf882e83e0a687ae84a3025ac5b
│  │  ├─ 69
│  │  │  └─ 7d9d839c985a8d219cb0d96baa365e47dc7812
│  │  ├─ 6c
│  │  │  ├─ 11ae3c6f864da6e5f432f25e6784f8c19b618b
│  │  │  ├─ a9e81742ba3170634f07a6389e01a7480e3cb1
│  │  │  ├─ d53b7ae9f83d3481b47f3ca091697e42aee8a5
│  │  │  └─ e246a3b96da41916af35570717b43f6c657d45
│  │  ├─ 6d
│  │  │  ├─ 1c40b1758cc88837a5d122e3a6f3bf2910ecb0
│  │  │  └─ 3371ced6813895bb3de3c9ad38813656a3da0c
│  │  ├─ 6f
│  │  │  └─ ce628e8078571eca5e9f5ca84c6248d460ca7c
│  │  ├─ 71
│  │  │  └─ ea62cf1601e6f51a3dbbf30f7a9712c52f87af
│  │  ├─ 72
│  │  │  └─ 05e1c57d79492d9c5251892770de8fe7b2f504
│  │  ├─ 74
│  │  │  ├─ 55b86aa64c03cc272e4737b5813961bfac0588
│  │  │  └─ 8c51a166c343c457e9a9d174f65163ccd734b9
│  │  ├─ 77
│  │  │  └─ 4ebdad870aa68d6ef76442e89a6c0b8ee0e7d4
│  │  ├─ 78
│  │  │  └─ ecc59df6e523537e83e1b7de1631a04964b2a8
│  │  ├─ 7a
│  │  │  └─ 01750f0df4cc44822124abca12cb63cbf1d412
│  │  ├─ 7c
│  │  │  └─ e15315ec11f00797fb7a562215117fc64a4eb6
│  │  ├─ 7d
│  │  │  └─ 8caafbd3ffe8c9dabd34c937d1cbeb4365acac
│  │  ├─ 7e
│  │  │  └─ 73504f0e62f196447fd7606a1301fbdf14a01a
│  │  ├─ 7f
│  │  │  └─ 767f3c3b6819ff3fe67d682b459e5db59dc7cd
│  │  ├─ 88
│  │  │  └─ 51e7746b250e08c1db37abcc563179d9a47b5f
│  │  ├─ 8a
│  │  │  ├─ 0631cea7a14c30a1fbd36d903722b406dcd021
│  │  │  └─ fa3ec910fba205aa16d82e8b3719046dfaace8
│  │  ├─ 8c
│  │  │  └─ 04308147c0f47c38e7866078c2c19c3e7851d0
│  │  ├─ 8d
│  │  │  └─ 943e1b17f7f6a0f67ecba2dc424f86571a3c19
│  │  ├─ 8f
│  │  │  └─ dad3eecbe55bbb3a533785ba82f1107a6a15c4
│  │  ├─ 90
│  │  │  ├─ 872a3b52e45e353931564b72ba393986c246d0
│  │  │  └─ e3eab1d95eaad0b0b8e0369d78ae370f3683da
│  │  ├─ 91
│  │  │  └─ 27b98d2deb2ab1cb6f9f258bd8453c36c8c38d
│  │  ├─ 92
│  │  │  └─ 80e05d5a60acf9877a2f9b408b57c1ce37018d
│  │  ├─ 93
│  │  │  └─ 7eedb14a15ac6c19fc75dabfd1077f1306dbab
│  │  ├─ 95
│  │  │  ├─ 1a3b30ed2c49aa310bd99e19acf95d61b073fb
│  │  │  └─ 971185b145e5c10f4b87efacbab92e9dd43aeb
│  │  ├─ 97
│  │  │  ├─ 0cd198fdf479dca0dd3ed69cbaf2279de62322
│  │  │  └─ d75b6d8ce7cdd6f3bf15ef5f1ef4011d86f559
│  │  ├─ 98
│  │  │  └─ 7dfd1112bfc93ae972f78e280dce9c2c29b25f
│  │  ├─ 9b
│  │  │  └─ 2482e28b7399504dda05d2bcc196b8bf0943ed
│  │  ├─ 9c
│  │  │  └─ 50c2e1922d08ccfce2036252926a28144d74bd
│  │  ├─ 9e
│  │  │  └─ b49a5d7f2a34a94da57b41300f8dd3505ea82c
│  │  ├─ a0
│  │  │  └─ 2b9c16e2899fe58193f2ea5b5eb8bcc8b46f96
│  │  ├─ a1
│  │  │  ├─ b0057ceeaf1575398f1f0db159413794891488
│  │  │  └─ bc5a1c8c6a26cb28acf10e3bb9f18463ccc919
│  │  ├─ a2
│  │  │  └─ 4453a73811c3052d8c63026e20aec904e61274
│  │  ├─ a3
│  │  │  └─ 2a4745307aac4e2cdc7d4a010536cca05a9f57
│  │  ├─ a4
│  │  │  └─ a74ac3742374f1d3441129f5aea719a8f6ba8d
│  │  ├─ a6
│  │  │  └─ 416081cba9f412e3612dd2ebb41a9a39b350cf
│  │  ├─ a7
│  │  │  └─ 1710f4afeb8617d5c3394f8eb5f4356774453a
│  │  ├─ a9
│  │  │  └─ c50912a000afa1993ba07b4fbd59b2ee2603d2
│  │  ├─ ab
│  │  │  ├─ 4ff0bc090ae59f905eed197978c99e8086b702
│  │  │  └─ 9d815753f15fc717524cb17e3f4152d364be42
│  │  ├─ ad
│  │  │  └─ 0b49fa1655f4bc205443dc0576dd5a960af2be
│  │  ├─ ae
│  │  │  └─ 7e31bf368f1d73c81abfedbd79d133df141529
│  │  ├─ b0
│  │  │  └─ ce3f3f72a4b492a26fabbc3244e9e6738a73da
│  │  ├─ b2
│  │  │  └─ d0682ca8af5b954d8c5d7bf93226e0249fc714
│  │  ├─ b4
│  │  │  └─ 58cca1311f7c08b202e382b4cf0489a9322f23
│  │  ├─ bc
│  │  │  └─ 53aac9a231c7a809d6f799541071b1012a734e
│  │  ├─ bd
│  │  │  ├─ 4edd7350616622f74d267ca9af6c14c248e3bc
│  │  │  └─ 8728f44000d7df7866eac32563510aeab546c6
│  │  ├─ be
│  │  │  └─ a835cd9e47064d7b3f4ebfdde7c834a4fd113c
│  │  ├─ bf
│  │  │  └─ 07a91893d2ba794e927a0304c3e51a08b542f3
│  │  ├─ c2
│  │  │  ├─ 20f72343e950c14cc38538499872c6805dc4b2
│  │  │  └─ 677d7fef0fd14681a00097f4c66dd4c79d2f53
│  │  ├─ c4
│  │  │  └─ 83022c0a34166a5a75bb3e58d523ff754c008d
│  │  ├─ ce
│  │  │  └─ 50adf79f1c1de9674a6579d0af22d623814089
│  │  ├─ d2
│  │  │  └─ b666f83ccd9c3c454e302b832f207781b59e9a
│  │  ├─ d5
│  │  │  └─ 157c4a2e49748f158e1f425f5fb47f9ba52b86
│  │  ├─ d8
│  │  │  └─ bd62ed671f39a3775ded0053ed7491fa38a54d
│  │  ├─ d9
│  │  │  └─ ee2591705acb4000bd5e2a4126e6018ac350cd
│  │  ├─ da
│  │  │  ├─ 9bace8c8e5da9cd0f06576e3cf65dd1c6e51f7
│  │  │  └─ d944675e7abff4df01ef85cd299e970607f63d
│  │  ├─ de
│  │  │  ├─ 0c14c5869c0ab9366963436bcaf5bb12d15297
│  │  │  └─ 38d5075dd629c528779d3941c905797dfa16bb
│  │  ├─ df
│  │  │  └─ 29f6554a84d9cac0bb5517d37424f1ee0244d4
│  │  ├─ e0
│  │  │  └─ ed61d1b61b0b7f8c3bb6f229c7efe610ef3efb
│  │  ├─ e2
│  │  │  └─ 568aeeab61c4ad83556febc1e776a8d0bb978d
│  │  ├─ e3
│  │  │  └─ 276b7ad1dcdd7b8b9bcdf4aa50c530955d5a32
│  │  ├─ e6
│  │  │  └─ 3ebaa04d59618b48e8839b77c1f5deff49a5bb
│  │  ├─ e8
│  │  │  └─ ac80c355b94adfe83002db5b3190d7a398e5c5
│  │  ├─ e9
│  │  │  └─ 045f421d278dbf2a69f0fd751af6068971b1e0
│  │  ├─ f3
│  │  │  └─ 9b328b2aed099731de9d80e9d418a3e8478733
│  │  ├─ f5
│  │  │  ├─ 9cd0a54be25fea943085f7ee0f576e9b1b1a9c
│  │  │  └─ c6370d986f55f07656fc5cb9a1440fcf7eb698
│  │  ├─ f9
│  │  │  └─ b5dfc7ea8cca0c078a4271782b4b36aa1cae42
│  │  ├─ fb
│  │  │  └─ 4e4945dc73ba69a3174c245fba69ac4353ea78
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ master
│     ├─ remotes
│     │  └─ origin
│     │     ├─ main
│     │     └─ master
│     └─ tags
├─ .gitignore
├─ .npmrc
├─ .storybook
│  ├─ main.ts
│  └─ preview.ts
├─ Dockerfile
├─ README.md
├─ app
│  ├─ admin-portal
│  │  ├─ .editorconfig
│  │  ├─ .eslintrc.cjs
│  │  ├─ .git
│  │  │  ├─ COMMIT_EDITMSG
│  │  │  ├─ HEAD
│  │  │  ├─ branches
│  │  │  ├─ config
│  │  │  ├─ description
│  │  │  ├─ hooks
│  │  │  │  ├─ applypatch-msg.sample
│  │  │  │  ├─ commit-msg.sample
│  │  │  │  ├─ post-update.sample
│  │  │  │  ├─ pre-applypatch.sample
│  │  │  │  ├─ pre-commit.sample
│  │  │  │  ├─ pre-push.sample
│  │  │  │  ├─ pre-rebase.sample
│  │  │  │  ├─ pre-receive.sample
│  │  │  │  ├─ prepare-commit-msg.sample
│  │  │  │  └─ update.sample
│  │  │  ├─ index
│  │  │  ├─ info
│  │  │  │  └─ exclude
│  │  │  ├─ logs
│  │  │  │  ├─ HEAD
│  │  │  │  └─ refs
│  │  │  │     └─ heads
│  │  │  │        └─ master
│  │  │  ├─ objects
│  │  │  │  ├─ 00
│  │  │  │  │  └─ 7463b4d189b95bc250c8ad3b9b13a1f37ccfce
│  │  │  │  ├─ 1d
│  │  │  │  │  └─ 746c1a2288fb5e0acb8d421e66fffd9eb5ad37
│  │  │  │  ├─ 28
│  │  │  │  │  └─ 66c9715fdc8fd99bbfc966ab40c94142abb3dc
│  │  │  │  ├─ 2c
│  │  │  │  │  └─ bfeffb67855704d2f07e91c0e1d5d89ab57f47
│  │  │  │  ├─ 2e
│  │  │  │  │  └─ 818ca196a89db72f7d8dbdd8605d4cf41985f7
│  │  │  │  ├─ 35
│  │  │  │  │  └─ 3133ce8a99104caa8bd192f2f4e24220567855
│  │  │  │  ├─ 3f
│  │  │  │  │  └─ c5f369b2c45fdd9b64ed78739d7a4225197ea0
│  │  │  │  ├─ 4c
│  │  │  │  │  └─ f9c7adc06c3646364f1954c1661d2de09b3afe
│  │  │  │  ├─ 59
│  │  │  │  │  └─ 5adbeb7989a777accd920db554854a4455ab75
│  │  │  │  ├─ 5b
│  │  │  │  │  └─ 1dada067821511f0cc1a246d3815053a4af609
│  │  │  │  ├─ 69
│  │  │  │  │  └─ 7d9d839c985a8d219cb0d96baa365e47dc7812
│  │  │  │  ├─ 6c
│  │  │  │  │  └─ e246a3b96da41916af35570717b43f6c657d45
│  │  │  │  ├─ 74
│  │  │  │  │  └─ 8c51a166c343c457e9a9d174f65163ccd734b9
│  │  │  │  ├─ 77
│  │  │  │  │  └─ 4ebdad870aa68d6ef76442e89a6c0b8ee0e7d4
│  │  │  │  ├─ 7c
│  │  │  │  │  └─ e15315ec11f00797fb7a562215117fc64a4eb6
│  │  │  │  ├─ 9e
│  │  │  │  │  └─ b49a5d7f2a34a94da57b41300f8dd3505ea82c
│  │  │  │  ├─ bf
│  │  │  │  │  └─ 07a91893d2ba794e927a0304c3e51a08b542f3
│  │  │  │  ├─ c4
│  │  │  │  │  └─ 83022c0a34166a5a75bb3e58d523ff754c008d
│  │  │  │  ├─ ce
│  │  │  │  │  └─ 50adf79f1c1de9674a6579d0af22d623814089
│  │  │  │  ├─ d3
│  │  │  │  │  └─ 808ba8a53bf09077dececeb845ebcaeeacc7c7
│  │  │  │  ├─ d9
│  │  │  │  │  └─ ee2591705acb4000bd5e2a4126e6018ac350cd
│  │  │  │  ├─ de
│  │  │  │  │  └─ 0c14c5869c0ab9366963436bcaf5bb12d15297
│  │  │  │  ├─ info
│  │  │  │  └─ pack
│  │  │  └─ refs
│  │  │     ├─ heads
│  │  │     │  └─ master
│  │  │     └─ tags
│  │  ├─ .gitignore
│  │  ├─ .npmrc
│  │  ├─ .playground
│  │  │  ├─ app.config.ts
│  │  │  └─ nuxt.config.ts
│  │  ├─ README.md
│  │  ├─ nuxt.config.ts
│  │  ├─ package.json
│  │  ├─ pnpm-lock.yaml
│  │  ├─ src
│  │  │  ├─ app.config.ts
│  │  │  ├─ app.vue
│  │  │  ├─ components
│  │  │  │  └─ HelloWorld.vue
│  │  │  └─ pages
│  │  │     └─ index.vue
│  │  └─ tsconfig.json
│  └─ portal
│     ├─ .editorconfig
│     ├─ .eslintrc.cjs
│     ├─ .git
│     │  ├─ COMMIT_EDITMSG
│     │  ├─ HEAD
│     │  ├─ branches
│     │  ├─ config
│     │  ├─ description
│     │  ├─ hooks
│     │  │  ├─ applypatch-msg.sample
│     │  │  ├─ commit-msg.sample
│     │  │  ├─ post-update.sample
│     │  │  ├─ pre-applypatch.sample
│     │  │  ├─ pre-commit.sample
│     │  │  ├─ pre-push.sample
│     │  │  ├─ pre-rebase.sample
│     │  │  ├─ pre-receive.sample
│     │  │  ├─ prepare-commit-msg.sample
│     │  │  └─ update.sample
│     │  ├─ index
│     │  ├─ info
│     │  │  └─ exclude
│     │  ├─ logs
│     │  │  ├─ HEAD
│     │  │  └─ refs
│     │  │     └─ heads
│     │  │        └─ master
│     │  ├─ objects
│     │  │  ├─ 00
│     │  │  │  └─ 7463b4d189b95bc250c8ad3b9b13a1f37ccfce
│     │  │  ├─ 10
│     │  │  │  └─ 2fc1ccd4175af75be4cce08483b2eca880c7a2
│     │  │  ├─ 12
│     │  │  │  └─ c8466d971553e748d4a61061700d75394f60b4
│     │  │  ├─ 28
│     │  │  │  └─ 66c9715fdc8fd99bbfc966ab40c94142abb3dc
│     │  │  ├─ 2e
│     │  │  │  └─ 818ca196a89db72f7d8dbdd8605d4cf41985f7
│     │  │  ├─ 4c
│     │  │  │  └─ f9c7adc06c3646364f1954c1661d2de09b3afe
│     │  │  ├─ 58
│     │  │  │  └─ 90f1b9e74bb421216897463216e7618762fcdc
│     │  │  ├─ 69
│     │  │  │  └─ 7d9d839c985a8d219cb0d96baa365e47dc7812
│     │  │  ├─ 74
│     │  │  │  └─ 8c51a166c343c457e9a9d174f65163ccd734b9
│     │  │  ├─ 77
│     │  │  │  └─ 4ebdad870aa68d6ef76442e89a6c0b8ee0e7d4
│     │  │  ├─ 7c
│     │  │  │  └─ e15315ec11f00797fb7a562215117fc64a4eb6
│     │  │  ├─ 97
│     │  │  │  └─ d75b6d8ce7cdd6f3bf15ef5f1ef4011d86f559
│     │  │  ├─ 9e
│     │  │  │  └─ b49a5d7f2a34a94da57b41300f8dd3505ea82c
│     │  │  ├─ b0
│     │  │  │  └─ ce3f3f72a4b492a26fabbc3244e9e6738a73da
│     │  │  ├─ bf
│     │  │  │  └─ 07a91893d2ba794e927a0304c3e51a08b542f3
│     │  │  ├─ c2
│     │  │  │  └─ 677d7fef0fd14681a00097f4c66dd4c79d2f53
│     │  │  ├─ c4
│     │  │  │  └─ 83022c0a34166a5a75bb3e58d523ff754c008d
│     │  │  ├─ ce
│     │  │  │  └─ 50adf79f1c1de9674a6579d0af22d623814089
│     │  │  ├─ da
│     │  │  │  └─ 9bace8c8e5da9cd0f06576e3cf65dd1c6e51f7
│     │  │  ├─ de
│     │  │  │  └─ 0c14c5869c0ab9366963436bcaf5bb12d15297
│     │  │  ├─ e0
│     │  │  │  └─ ed61d1b61b0b7f8c3bb6f229c7efe610ef3efb
│     │  │  ├─ e6
│     │  │  │  └─ 3ebaa04d59618b48e8839b77c1f5deff49a5bb
│     │  │  ├─ info
│     │  │  └─ pack
│     │  └─ refs
│     │     ├─ heads
│     │     │  └─ master
│     │     └─ tags
│     ├─ .gitignore
│     ├─ .npmrc
│     ├─ .playground
│     │  ├─ app.config.ts
│     │  └─ nuxt.config.ts
│     ├─ README.md
│     ├─ nuxt.config.ts
│     ├─ package.json
│     ├─ pnpm-lock.yaml
│     ├─ src
│     │  ├─ app.config.ts
│     │  ├─ app.vue
│     │  ├─ components
│     │  │  └─ HelloWorld.vue
│     │  └─ pages
│     │     └─ index.vue
│     └─ tsconfig.json
├─ app.config.ts
├─ docker-compose.yml
├─ lib
│  ├─ logic
│  │  └─ src
│  │     └─ core
│  │        ├─ adapter
│  │        │  └─ HttpAdapter.ts
│  │        ├─ base
│  │        │  ├─ AppError.ts
│  │        │  ├─ Either.ts
│  │        │  ├─ Result.ts
│  │        │  ├─ UseCase.ts
│  │        │  └─ UseCaseError.ts
│  │        ├─ enums
│  │        │  ├─ ErrorCodeEnum.ts
│  │        │  └─ ProvisionStatus.ts
│  │        ├─ helpers
│  │        │  ├─ CreditCardHelper.ts
│  │        │  ├─ FormValidator.ts
│  │        │  ├─ FormatHelper.ts
│  │        │  ├─ Helper.spec.ts
│  │        │  ├─ Helper.ts
│  │        │  └─ HttpHelper.ts
│  │        └─ types
│  │           ├─ ErrorType.ts
│  │           └─ HttpResponseBody.ts
│  └─ ui
│     ├─ components
│     │  ├─ HelloWorld.vue
│     │  └─ UIButton.vue
│     ├─ nuxt.config.ts
│     └─ plugins
│        └─ vuetify.ts
├─ nuxt.config.ts
├─ package.json
├─ pnpm-lock.yaml
├─ stories
│  └─ assets
└─ tsconfig.json

```