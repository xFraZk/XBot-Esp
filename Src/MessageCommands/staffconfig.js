const { EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js')
module.exports = {
    name: "staffconfig",
    allowInDms: true,
    aliases: ["staffconfig"],
    run: async(client, message, args) => {

        const embed1 = new EmbedBuilder()
        .setImage("https://cdn.discordapp.com/attachments/1123022140241870899/1125580412945715280/STAFFIMAGE.png")
        .setColor("#c6f7ff")

        const embed2 = new EmbedBuilder()
        .setTitle("¡Bienvenido staff nuevo!")
        .setColor("#c6f7ff")
        .setDescription("<:STAFF:1125581282940821614> Permítenos acompañarte en tu camino para convertirte en un miembro destacado del staff mediante menu y botones interactivos. Aquí encontrarás reglas e información sobre los distintos roles que conforman nuestro equipo. Como eres nuevo y estás en periodo de prueba, te ha sido asignado el rol <@&1125586966969331723>. Queremos que te sientas bienvenido y apoyado en esta etapa.")

        const ActionRow = new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
            .setCustomId("StaffMenuExample")
            .setPlaceholder("Información")
            .addOptions(
                [
                    {
                        label: "STAFF Trial | Periodo de prueba",
                        description: "Información de como empezar tu periodo de prueba.",
                        value: "stafftrial",
                        emoji: "1125593257406111754"
                    },
                    {
                        label: "Moderador",
                        description: "Información para tu periodo como moderador.",
                        value: "staffmoderador",
                        emoji: "1125593259964649483"
                    },
                    {
                        label: "Administrador",
                        description: "Información para tu periodo como administrador.",
                        value: "staffadmin",
                        emoji: "1125593263173271643"
                    },
                    {
                        label: "Manager",
                        description: "Información para tu periodo como Manager.",
                        value: "staffmanager",
                        emoji: "1125597887221481552"
                    },
                    {
                        label: "Normas y Requisitos",
                        description: "Sé un miembro destacado siguiendo estas directrices.",
                        value: "staffinfo",
                        emoji: "1125779373375635566"
                    }
                ]
            )
        );

        message.channel.send({ embeds: [embed1, embed2], components: [ActionRow] });
    }
};