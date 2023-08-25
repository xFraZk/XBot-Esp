const { EmbedBuilder } = require("@discordjs/builders");
require('../SlashCommands/Global/sugerencia')
module.exports = {
  name: "positivoButton",
  run: async (client, interaction, positiveVotes, negativeVotes, buttonRow) => {
    // Lógica del botón positivo
    positiveVotes++;
    const sugerenciaEmbed = new EmbedBuilder()
    .addFields(
      { name: 'Positivo', value: `${positiveVotes}`, inline: true },
      { name: 'Negativo', value: `${negativeVotes}`, inline: true },
    )
    
    try {
      await interaction.update({ embeds: [sugerenciaEmbed], components: [buttonRow] });
    } catch (error) {
      console.error("Error al actualizar la interacción:", error);
    }
  },
};
