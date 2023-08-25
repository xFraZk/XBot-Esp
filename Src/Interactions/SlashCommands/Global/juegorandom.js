const { ApplicationCommandType } = require("discord.js");
const gamesData = require('../../../../games.json');
module.exports = {
    name: "juegosrandom",
    type: ApplicationCommandType.ChatInput,
    description: "Obtiene el nombre de un juego aleatorio",
    run: async(client, interaction) => {
        const games = gamesData.juegos;
    const randomIndex = Math.floor(Math.random() * games.length);
    const randomGame = games[randomIndex];

    const embed = {
        color: 0x0099ff,
        title: '<a:xbox:1128775808803143871>  Juego Aleatorio',
        url: 'https://www.xbox.com/es-AR/microsoft-store',
        description: `¡Puedes jugar "**${randomGame.nombre}**"!`,
        thumbnail: {
            url: 'https://emoji.discadia.com/emojis/a491b967-9f40-4363-822e-c56ea0fc4923.PNG',
        },
        fields: [
          {
            name: 'Plataformas',
            value: randomGame.plataformas.join(', '),
            inline: true,
          },
          {
            name: 'Género',
            value: randomGame.genero,
            inline: true,
          },
          {
            name: 'Lanzamiento',
            value: randomGame.lanzamiento,
            inline: true,
          },
        ],
        footer: {
          text: '¡Diviértete jugando!',
          icon_url: 'https://cdn.discordapp.com/emojis/1125991538724450335.webp?size=96&quality=lossless',
        },
      };

        interaction.reply({
            embeds: [embed]
        });
    }
};