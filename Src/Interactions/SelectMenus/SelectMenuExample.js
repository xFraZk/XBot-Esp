const { ApplicationCommandType, ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, EmbedBuilder } = require("discord.js");

module.exports = {
    name: "SelectMenuExample",
    type: ApplicationCommandType.Message,
    run: async (client, interaction) => {
        const modal = new ModalBuilder()
            .setCustomId('ExampleModal')
            .setTitle('Solicitud de juego');



        const juegoInput = new TextInputBuilder()
            .setCustomId('juegoInput')
            .setLabel("Nombre del juego que vas a jugar")
            .setPlaceholder('Nombre completo: Fortnite')
          
            .setStyle(TextInputStyle.Short);

        const descripcionInput = new TextInputBuilder()
            .setCustomId('descripcionInput')
            
            .setLabel("Explica lo que quieres hacer")
            .setPlaceholder('Busco 4 personas para completar misiones de Fortnite y asi también subir de nivel.')

            .setStyle(TextInputStyle.Paragraph);

        const idxboxInput = new TextInputBuilder()
            .setCustomId('idxboxInput')
            .setLabel("Tu gamertag")
            .setStyle(TextInputStyle.Short);

            const consolaimput = new TextInputBuilder()
            .setCustomId('consolaimput')
            .setLabel("¿Consola?")
            .setPlaceholder('La consola de Xbox que usarás')
            
            .setStyle(TextInputStyle.Short);


        const firstActionRow = new ActionRowBuilder().addComponents(descripcionInput);
        const secondActionRow = new ActionRowBuilder().addComponents(idxboxInput);
        const terActionRow = new ActionRowBuilder().addComponents(consolaimput);
        const cuartActionRow = new ActionRowBuilder().addComponents(juegoInput);

        // Add inputs to the modal
        modal.addComponents(firstActionRow, secondActionRow, terActionRow, cuartActionRow);

        // Show the modal to the user
        await interaction.showModal(modal);

      






























        /*
        if (interaction.isSelectMenu()) {
            const selectedValue = interaction.values[0];

            const modal = new ModalBuilder()
                .setCustomId('ExampleModal')
                .setTitle('My Modal');

            const favoriteColorInput = new TextInputBuilder()
                .setCustomId('favoriteColorInput')
                .setLabel("What's your favorite color?")
                .setStyle(TextInputStyle.Short);

            const hobbiesInput = new TextInputBuilder()
                .setCustomId('hobbiesInput')
                .setLabel("What are some of your favorite hobbies?")
                .setStyle(TextInputStyle.Paragraph);

            const firstActionRow = new ActionRowBuilder().addComponents(favoriteColorInput);
            const secondActionRow = new ActionRowBuilder().addComponents(hobbiesInput);

            modal.addComponents(firstActionRow, secondActionRow);
            await interaction.showModal(modal);

            const collector = interaction.createModalCollector();

            collector.on("collect", (modalInteraction) => {
                if (modalInteraction.isMessageComponent() && modalInteraction.customId === "ExampleModal") {
                    const favoriteColor = modalInteraction.values["favoriteColorInput"];
                    const hobbies = modalInteraction.values["hobbiesInput"];

                    const consoleOption = getConsoleOption(selectedValue); // Obtener la opción del menú de consola

                    const embed = new EmbedBuilder()
                        .setTitle("Formulario completado")
                        .addField("Color favorito", favoriteColor)
                        .addField("Hobbies", hobbies)
                        .addField("Consola seleccionada", consoleOption)
                        .setColor("#00FF00")
                        .build();

                    modalInteraction.reply({
                        embeds: [embed],
                        ephemeral: true
                    });
                }
            });

            collector.on("end", () => {
                interaction.followUp({
                    content: "El formulario ha expirado. Por favor inténtalo de nuevo.",
                    ephemeral: true
                });
            });
        } else {
            interaction.reply({
                content: "Este comando solo puede ser utilizado en un menú desplegable.",
                ephemeral: true
            });
        }
    }
};

function getConsoleOption(selectedValue) {
    switch (selectedValue) {
        case "XCLOUD":
            return "Xbox Cloud Gaming";
        case "XSX":
            return "Xbox Series X";
        case "XSS":
            return "Xbox Series S";
        case "XNX":
            return "Xbox One X";
        case "XNS":
            return "Xbox One S";
        case "XN":
            return "Xbox One";
        case "X360":
            return "Xbox 360";
        default:
            return "Opción inválida";*/
    }
}

