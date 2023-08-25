const { ApplicationCommandType, ApplicationCommandOptionType, EmbedBuilder } = require("discord.js");
const axios = require("axios"); // Asegúrate de tener axios instalado

module.exports = {
    name: "gamepass",
    description: "Ver tu perfil de Xbox",
    type: ApplicationCommandType.ChatInput,
    run: async (client, interaction) => {
        try {
            const apiKey = "e0c3d964-68f0-43d0-960c-d1b7719480bd"; // Reemplaza con tu propia clave de API
            const response = await axios.get(`https://xbl.io/api/v2/gamepass/all`, {
                headers: {
                    "X-Authorization": apiKey
                }
            });

            const gamePassData = response.data;
            const gamePassEmbed = new EmbedBuilder()
                .setTitle("Juegos del Game Pass")
                .setDescription("Lista de juegos disponibles en el Game Pass:");


            // Aquí puedes formatear la información del perfil como quieras y enviarla como respuesta

            gamePassData.forEach((game) => {
                gamePassEmbed.addField(game.name, `Descripción: ${game.description}\nFecha de lanzamiento: ${game.releaseDate}`);
            });

            await interaction.reply({ embeds: [gamePassEmbed] });
        } catch (error) {
            console.error(error);
            await interaction.reply("Hubo un error al obtener el perfil de Xbox. Por favor, verifica el Gamertag y tu clave de API.");
        }
    }
};
