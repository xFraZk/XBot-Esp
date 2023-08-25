const { ActionRowBuilder, StringSelectMenuBuilder } = require("discord.js");
module.exports = {
    name: "callmenu",
    run: async (client, message, args) => {
        const ActionRow = new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
            .setCustomId("SelectMenuExampleff")
            .setPlaceholder("Selecciona la consola")
            .addOptions(
                [
                    {
                        label: "Xbox Series X",
                        value: "CookieBox",
                        emoji: "1124534390035333262"
                    }
                ]
            )
        );
        message.channel.send({
            content: "'¿Que consola de Xbox es necesario?'",
            components: [ActionRow]
        });
    }
};