const { ApplicationCommandType, ApplicationCommandOptionType, EmbedBuilder, ButtonBuilder, ActionRowBuilder } = require("discord.js");

module.exports = {
    name: "encuesta",
    options: [{
        name: "encuesta",
        type: ApplicationCommandOptionType.String,
        description: "encuesta.",
        required: true
    }],
    type: ApplicationCommandType.ChatInput,
    description: "encuesta",
    run: async(client, interaction) => {
        
        const encuesta = interaction.options.getString('encuesta');

        const feed = new EmbedBuilder()
        .setTitle("Encuesta para el servidor")
        .setColor("#3498db")
        .setDescription(encuesta)
        .addFields({ name: 'Opción 1: Con Decoraciones ❌', value: 'Si prefieres tener canales y categorías decoradas con un toque visual y atractivo, reacciona con ❌.'})
        .addFields({ name: 'Opción 2: Sin Decoraciones ✔️', value: 'Si prefieres mantener un diseño simple y minimalista sin demasiadas decoraciones, reacciona con ✔️.'})
        
        const row = new ActionRowBuilder()
.addComponents(
    new ButtonBuilder()
    .setCustomId('boton')
    .setLabel('boton')
    .setStyle('Danger'),
    );

        await interaction.reply({ embeds: [feed], components: [row] });
        
    }
};