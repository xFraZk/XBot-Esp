module.exports = {
    name: "negativoButton",
    run: async (client, interaction, positiveVotes, negativeVotes, sugerenciaEmbed, buttonRow) => {
      // Lógica del botón negativo
      negativeVotes++;
      sugerenciaEmbed.fields = [
        { name: 'Positivo', value: `${positiveVotes}`, inline: true },
        { name: 'Negativo', value: `${negativeVotes}`, inline: true },
      ];
      interaction.update({ embeds: [sugerenciaEmbed], components: [buttonRow] });
    },
  };
  