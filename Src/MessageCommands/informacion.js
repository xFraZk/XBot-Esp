const { ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require("discord.js");
module.exports = {
    name: "informacion",
    aliases: ["informacion"],
    run: async(client, message, args) => {
        const ActionRow = new ActionRowBuilder().addComponents(
    new StringSelectMenuBuilder()
    .setCustomId("selectMenuName")
    .setPlaceholder("🔖 Más información del servidor")
    .addOptions(
        [
            {
                label: "Normativas",
                description: "Revisa las reglas principales del servidor",
                value: "reglasserver",
                emoji: '1140820881665429606'
            },
            {
                label: "Guía del servidor",
                description: "Comprende un poco el servidor con esta guía.",
                value: "B",
                emoji: '1126152241129193592'
            },
            {
                label: "Partners",
                description: "Información y requisitos sobre los partners del servidor.",
                value: "Cx",
                emoji: '1125593257406111754'
            }
        ],

    )
);

        const info = new EmbedBuilder()
        .setImage("https://cdn.discordapp.com/attachments/1123022094238748805/1140763331939029063/695.png")
        .setColor("#56ff00")

        const desc = new EmbedBuilder()
        .setColor("#56ff00")
        .setTitle("Bienvenido a Xbox en Español. Estamos felices de tenerte aquí")
        .setDescription("En nuestro servidor, puedes disfrutar de diversas actividades, como jugar con jugadores de Xbox, socializar con nuevos amigos, debatir temas relacionados con Xbox, buscar compañeros para jugar y mucho más. Además, en el menú interactivo encontrarás toda la información relevante sobre el servidor.")
        message.channel.send({
            embeds: [info, desc],
            components: [ActionRow]
        });
    }
};

// The command can be now ran with <BotPrefix>ping or <BotPrefix>pong and it will return the ping of the bot.

