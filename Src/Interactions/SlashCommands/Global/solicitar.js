const { ApplicationCommandType, EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require("discord.js");

module.exports = {
    name: "solicitar",
    type: ApplicationCommandType.ChatInput,
    description: "[BETA] Encuentra jugadores para tus partidas en equipo",
    run: async (client, interaction) => {
        const roleIds = [
            "973074261403107348", // Xbox Series X
            "973074373042905089", // Xbox Series S
            "973074227240534077", // Xbox One X
            "973074194512379915", // Xbox One S
            "973074160353939507", // Xbox One
            "973074030573780992", // Xbox 360
            "1013590659174772786" // Xbox Cloud Gaming
        ];

        const memberCounts = [];
        for (const roleId of roleIds) {
            const role = interaction.guild.roles.cache.get(roleId);
            if (role) {
                memberCounts.push({
                    roleId,
                    count: role.members.size
                });
            }
        }

        const ActionRow = new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
                .setCustomId("SelectMenuExample")
                .setPlaceholder("Selecciona la consola")
                .addOptions([
                    {
                        label: `Xbox Cloud Gaming`,
                        description: `${memberCounts.find(entry => entry.roleId === "1013590659174772786").count} miembros del servidor usan este servicio.`,
                        value: "XCLOUD",
                        emoji: "1124534390035333262"
                    },
                    {
                        label: `Xbox Series X`,
                        description: `${memberCounts.find(entry => entry.roleId === "973074261403107348").count} miembros del servidor cuentan con esta consola.`,
                        value: "XSX",
                        emoji: "1124766505138143304"
                    },
                    {
                        label: `Xbox Series S`,
                        description: `${memberCounts.find(entry => entry.roleId === "973074373042905089").count} miembros del servidor cuentan con esta consola.`,
                        value: "XSS",
                        emoji: "1124767486705942548"
                    },
                    {
                        label: `Xbox One X`,
                        description: `${memberCounts.find(entry => entry.roleId === "973074227240534077").count} miembros del servidor cuentan con esta consola.`,
                        value: "XNX",
                        emoji: "1124768092728332492"
                    },
                    {
                        label: `Xbox One S`,
                        description: `${memberCounts.find(entry => entry.roleId === "973074194512379915").count} miembros del servidor cuentan con esta consola.`,
                        value: "XNS",
                        emoji: "1124768887347621999"
                    },
                    {
                        label: `Xbox One`,
                        description: `${memberCounts.find(entry => entry.roleId === "973074160353939507").count} miembros del servidor cuentan con esta consola.`,
                        value: "XN",
                        emoji: "1124769315766407248"
                    },
                    {
                        label: `Xbox 360`,
                        description: `${memberCounts.find(entry => entry.roleId === "973074030573780992").count} miembros del servidor cuentan con esta consola.`,
                        value: "X360",
                        emoji: "1124769951740330146"
                    }
                ])
        );
        

        
        interaction.reply({
            content: 'https://cdn.discordapp.com/attachments/1123022140241870899/1129954368523870238/36e335da-9137-41ca-b8ec-f0847a0e53a6.jpg',
            components: [ActionRow],
            ephemeral: true
        });
    }
};
