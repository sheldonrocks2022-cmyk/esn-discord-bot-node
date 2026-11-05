# ESN Discord Bot Starter (Node.js)

[![Deploy to ESN](https://panel.esnoffical.com/deploy/badge.svg)](https://panel.esnoffical.com/deploy?repo=https://github.com/sheldonrocks2022-cmyk/esn-discord-bot-node)

A clean Node.js (discord.js v14) starter for a Discord bot with slash commands, made by [ESN Systems](https://esnoffical.com/?utm_source=github&utm_medium=readme&utm_campaign=bot-templates).

It comes with three slash commands to build on:

- `/ping` shows the bot's latency
- `/hello` says hi back
- `/serverinfo` shows the server's name, member count and creation date

## Quick start

1. Create an app at https://discord.com/developers/applications. Under **Bot**, copy the token.
2. Copy `.env.example` to `.env` and paste your token in `DISCORD_TOKEN`.
3. Install and run:

```bash
npm install
npm start
```

4. Invite the bot with the `bot` and `applications.commands` scopes (OAuth2 → URL Generator in the developer portal).

Slash commands sync on startup. Set `GUILD_ID` in `.env` to register them on one test server instantly while you build.

## Files

- `index.js`: the bot and its slash commands
- `package.json`: discord.js and dotenv
- `.env.example`: copy to `.env` and add your token


Needs Node.js 18 or newer.

## Host it 24/7

Your PC has to stay on for the bot to stay online. [ESN Hosting](https://esnoffical.com/?utm_source=github&utm_medium=readme&utm_campaign=bot-templates) keeps it running 24/7, with bot hosting from $0.50/month. Upload this folder in the panel's file manager, set `DISCORD_TOKEN` and press Start. Step-by-step guides are at [docs.esnoffical.com](https://docs.esnoffical.com/).

Need help? Join the ESN Discord: https://discord.gg/RGPt3zEfGy

## License

MIT. See [LICENSE](LICENSE).
