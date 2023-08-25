const { ApplicationCommandType, ApplicationCommandOptionType } = require("discord.js");
const axios = require("axios"); // Asegúrate de tener axios instalado

module.exports = {
    name: "xboxprofile",
    description: "Ver tu perfil de Xbox",
    options: [
        {
            name: "gamertag",
            type: ApplicationCommandOptionType.String,
            description: "El Gamertag del usuario de Xbox",
            required: true
        }
    ],
    type: ApplicationCommandType.ChatInput,
    run: async (client, interaction) => {
        const gamertag = interaction.options.getString("gamertag");

        try {
            const apiKey = "e0c3d964-68f0-43d0-960c-d1b7719480bd"; // Reemplaza con tu propia clave de API
            const response = await axios.get(`https://xbl.io/api/v2/search/${gamertag}`, {
                headers: {
                    "X-Authorization": apiKey
                }
            });

            const xboxProfile = response.data;
            // Aquí puedes formatear la información del perfil como quieras y enviarla como respuesta

            await interaction.reply(`Perfil de Xbox de ${gamertag}:\nGamerscore: ${xboxProfile.gamerscore}\nGamerpic: ${xboxProfile.gamerpic}`);
        } catch (error) {
            console.error(error);
            await interaction.reply("Hubo un error al obtener el perfil de Xbox. Por favor, verifica el Gamertag y tu clave de API.");
        }
    }
};
