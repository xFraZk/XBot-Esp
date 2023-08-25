const { ApplicationCommandType, ApplicationCommandOptionType, EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require("discord.js");
const { run: positivoButtonRun } = require('../../Buttons/positivoButton');
const { run: negativoButtonRun } = require('../../Buttons/negativoButton');

module.exports = {
  name: "sugerencia",
  options: [{
    name: "sugerencia",
    type: ApplicationCommandOptionType.String,
    description: "Tu sugerencia.",
    required: true
  }],
  type: ApplicationCommandType.ChatInput,
  description: "Aporta una sugerencia para mejorar el servidor.",
  run: async (client, interaction) => {
    const sugerencia = interaction.options.getString("sugerencia");

    // Crear el Embed de la sugerencia
    const sugerenciaEmbed = new EmbedBuilder()
      .setColor('#7289da')
      .setTitle(`Sugerencia número #${Math.floor(Math.random() * 1) + 1}`)
      .setAuthor({
        name: interaction.user.username,
        iconURL: interaction.user.displayAvatarURL(),
      })
      .setDescription(sugerencia);

    // Crear los botones
    const buttonRow = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId('positivoButton')
          .setLabel('✅')
          .setStyle('Success'),
          new ButtonBuilder()
          .setCustomId('negativoButton')
          .setLabel('❎')
          .setStyle('Danger')
      );

    // Enviar el mensaje de sugerencia con los botones
    const sentMessage = await interaction.reply({ embeds: [sugerenciaEmbed], components: [buttonRow] });

    // Inicializar contadores de votos
    let positiveVotes = 0;
    let negativeVotes = 0;

    // Agregar los eventos de los botones
    const collectorFilter = (interaction) => {
      return interaction.customId === 'positivoButton' || interaction.customId === 'negativoButton';
    };

    const collector = sentMessage.createMessageComponentCollector({ filter: collectorFilter, time: 60000 });

    // Recolectar votos durante el tiempo del MessageComponentCollector
    collector.on('collect', (interaction) => {
      if (interaction.customId === 'positivoButton') {
        positivoButtonRun(interaction, positiveVotes, negativeVotes, sugerenciaEmbed, buttonRow);
      } else if (interaction.customId === 'negativoButton') {
        negativoButtonRun(interaction, positiveVotes, negativeVotes, sugerenciaEmbed, buttonRow);
      }
    });

    // Finalizar el MessageComponentCollector después del tiempo especificado
    collector.on('end', (collected) => {
      // Mensaje de finalización del MessageComponentCollector
      interaction.followUp({
        content: "¡La votación ha terminado!",
        ephemeral: true,
      });
    });
  },
};

