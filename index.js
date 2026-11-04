// ESN Discord bot starter (Node.js, discord.js v14). MIT License. https://esnoffical.com
require("dotenv").config();
const { Client, GatewayIntentBits, EmbedBuilder, SlashCommandBuilder, REST, Routes, time } = require("discord.js");

const TOKEN = process.env.DISCORD_TOKEN;
const GUILD_ID = process.env.GUILD_ID;
const COLOR = 0x6c5ce7;

const commands = [
  {
    data: new SlashCommandBuilder().setName("ping").setDescription("Show the bot's latency"),
    run: (i) => i.reply({ embeds: [new EmbedBuilder().setColor(COLOR).setTitle("Pong!").setDescription(`${i.client.ws.ping} ms`)] }),
  },
  {
    data: new SlashCommandBuilder().setName("hello").setDescription("Say hi"),
    run: (i) => i.reply({ embeds: [new EmbedBuilder().setColor(COLOR).setDescription(`Hey ${i.user}! 👋`)] }),
  },
  {
    data: new SlashCommandBuilder().setName("serverinfo").setDescription("Show info about this server").setDMPermission(false),
    run: (i) => {
      const g = i.guild;
      const e = new EmbedBuilder().setColor(COLOR).setTitle(g.name).addFields(
        { name: "Members", value: String(g.memberCount), inline: true },
        { name: "Created", value: time(g.createdAt, "D"), inline: true },
      );
      if (g.iconURL()) e.setThumbnail(g.iconURL());
      return i.reply({ embeds: [e] });
    },
  },
];

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once("ready", async () => {
  console.log(`Logged in as ${client.user.tag} (${client.user.id})`);
  const rest = new REST().setToken(TOKEN);
  const body = commands.map((c) => c.data.toJSON());
  const route = GUILD_ID ? Routes.applicationGuildCommands(client.user.id, GUILD_ID) : Routes.applicationCommands(client.user.id);
  await rest.put(route, { body });
  console.log(`Synced ${body.length} slash commands${GUILD_ID ? " to the test server" : ""}`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  const cmd = commands.find((c) => c.data.name === interaction.commandName);
  if (!cmd) return;
  try {
    await cmd.run(interaction);
  } catch (err) {
    console.error(err);
    const msg = { content: "Something went wrong running that command.", ephemeral: true };
    if (interaction.replied || interaction.deferred) await interaction.followUp(msg);
    else await interaction.reply(msg);
  }
});

if (!TOKEN) {
  console.error("Set DISCORD_TOKEN in .env first.");
  process.exit(1);
}
client.login(TOKEN);
