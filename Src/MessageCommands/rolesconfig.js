const { EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')
module.exports = {
    name: "rolesconfig",
    allowInDms: true,
    aliases: ["inconfig"],
    run: async(client, message, args) => {

        const embed1 = new EmbedBuilder()
        .setImage("https://cdn.discordapp.com/attachments/1123022140241870899/1126006164514144326/bannerintroduccion.png")
        .setColor("#37eb4b")

        const embed2 = new EmbedBuilder()
        .setTitle("¡Nos alegra tenerte aquí!")
        .setColor("#37eb4b")
        .setDescription("Bienvenido a nuestra comunidad dedicada a la plataforma Xbox. Aquí, nuestra misión es brindarte un espacio donde puedas compartir tus experiencias, jugar emocionantes títulos y expandir tus conocimientos sobre todo lo relacionado con [Xbox](https://www.xbox.com/es-AR).")
        .setThumbnail("https://emoji.discadia.com/emojis/9b657789-b3cb-4c42-9f2c-9809ce7f7935.PNG")
        .addFields({ name: '<:bmstaffofthemont:1125779373375635566> ¿Necesitas asistencia?', value: '> Contamos con un foro de <#1124721143622934558> especialmente diseñado para atender a toda nuestra comunidad. En este espacio, podrás publicar tus preguntas, aclarar tus dudas y recibir la ayuda necesaria por parte de otros miembros.', inline: false })

        const row = new ActionRowBuilder()
.addComponents(
    new ButtonBuilder()
    .setLabel('Cómo usar los menús desplegables (Select Menus)')
	.setURL('https://support-dev.discord.com/hc/en-us/articles/6382655804311-Bots-Select-Menus')
	.setStyle(ButtonStyle.Link),
    );

        const ActionRow = new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
            .setCustomId("selectMenuName")
            .setPlaceholder("Explora todos los detalles de los roles del servidor")
            .addOptions(
                [
                    {
                        label: "Roles comunes",
                        description: "¡Consigue tus roles rápidamente!",
                        value: "reglasserver",
                        emoji: "1129222534546595890"
                    },
                    {
                        label: "Roles especiales",
                        description: "Roles desafiantes pero alcanzables",
                        value: "infoserver",
                        emoji: "1129222532772401234"
                    },
                    {
                        label: "Niveles del servidor",
                        description: "Descubre los beneficios por nivel en el servidor",
                        value: "infoservers",
                        emoji: "1125593257406111754"
                    },
                    {
                        label: "Roles STAFF",
                        description: "Información de los roles del staff.",
                        value: "stafflist",
                        emoji: "1125597887221481552"
                    },
                    {
                        label: "Beneficios Boosters",
                        description: "Mira los beneficios tendrás al boostear.",
                        value: "updateserver",
                        emoji: "1129222538396966953"
                    }
                ]
            )
        );

        message.channel.send({ components: [ActionRow, row] });
    }
};