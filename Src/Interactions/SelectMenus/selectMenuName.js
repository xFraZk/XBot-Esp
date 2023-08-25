const { EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder, ButtonBuilder } = require("discord.js");

module.exports = {
    name: "selectMenuName",
    run: async (client, interaction) => {
        const selectedOption = interaction.values[0]; // Obtén la opción seleccionada

        // Comprueba la opción seleccionada y crea el embed correspondiente
        let embed;
        let embed1;
        let actionRow;
        let row;
        

        if (selectedOption === "reglasserver") {
      embed = new EmbedBuilder()

                .setTitle("<:icons8voluta128:1141519966449967174> Normas de conducta")
                .setColor("#63ff53")
                .setDescription("El servidor tiene reglas adicionales no especificadas para garantizar un entorno seguro y positivo. Los moderadores tienen la autoridad para intervenir en situaciones de comportamiento inapropiado o dañino con el objetivo de mantener la integridad de la comunidad.");
                embed1 = new EmbedBuilder()
                .setColor("#63ff53")
                .setDescription("<:xr:1142156244518449273> Es de suma importancia que todos los miembros cumplan obligatoriamente, y sin excepciones, las [Condiciones del Servicio](https://discord.com/terms) y las [Directivas de la Comunidad de Discord](https://discord.com/guidelines).")
   
                .addFields(
                { name: '<:X1:1142145521667022868> Sigue las indicaciones de los moderadores.', value: '▸ Los moderadores están ahí para mantener el orden, la seguridad y la calidad en la comunidad. Si un moderador te da instrucciones o te proporciona orientación sobre tu comportamiento, publicaciones o interacciones, es importante que las sigas.' },
                { name: '<:X2:1142146244538548344> No trates de dañar la comunidad de Xbox.', value: '▸ **No permitiremos la tolerancia de:** burlas, trolling o comentarios despectivos dirigidos hacia las opiniones sobre juegos de otras personas. Además, está estrictamente prohibida la difusión de contenido relacionado con la piratería de Xbox u otras plataformas, así como la propagación de información falsa.', inline: true },
                { name: '<:X3:1142152675220279377> El contenido para adultos esta prohibido en este servidor.', value: '▸ Queda prohibida la publicación de contenido para adultos o NSFW en este espacio, lo que incluye temas de conversación, avatares y apodos. Esta restricción se establece para garantizar que la comunidad sea un entorno apropiado para todas las <:discordcirclelog:1126670309328691312> [edades permitidas en Discord](https://support.discord.com/hc/es/articles/360040724612--Por-qu%C3%A9-Discord-quiere-saber-mi-fecha-de-nacimiento-).'},
                { name: '<:X5:1142152679951433728> Habla solo español y utiliza los canales de forma correcta.', value: '▸ Te pedimos que utilices exclusivamente el español en este servidor y que siempre revises las descripciones de los canales. Asimismo, no está permitido mencionar a personas que no participen activamente en el chat, y se prohíbe realizar roleplay en los canales de texto.'},
            )
                


        } else if (selectedOption === "infoserver") {
            embed = new EmbedBuilder()
                .setTitle("Información del servidor")
                .setDescription("Aquí encontrarás toda la información del servidor.");
            
            const selectMenu = new StringSelectMenuBuilder()
                .setCustomId("InfoSelectMenu")
                .setPlaceholder("Información")
                .addOptions([
                    {
                        label: "Xbox Control Total",
                        description: "Comandos personalizados de Xbox.",
                        value: "xboxinfoimput",
                        emoji: "<:xbox:1124534390035333262>"
                    },
                    {
                        label: "Roles comunes",
                        description: "Comandos personalizados de Xbox.",
                        value: "xboxinfoimput",
                        emoji: "<:xbox:1124534390035333262>"
                    },
                    {
                        label: "Roles especiales",
                        description: "Comandos personalizados de Xbox.",
                        value: "xboxinfoimput",
                        emoji: "<:xbox:1124534390035333262>"
                    },
                    {
                        label: "Roles especiales",
                        description: "Comandos personalizados de Xbox.",
                        value: "xboxinfoimput",
                        emoji: "<:xbox:1124534390035333262>"
                    }
                ]);

            actionRow = new ActionRowBuilder()
	.addComponents(selectMenu);


        } else if (selectedOption === "stafflist") {
            embed = new EmbedBuilder()
                .setTitle("Equipo del STAFF")
                .setDescription("Aquí puedes ver quiénes hacen parte del equipo del STAFF.");
            
        } else if (selectedOption === "updateserver") {
            embed = new EmbedBuilder()
                .setTitle("Actualizaciones del servidor")
                .setDescription("Aquí puedes ver los últimos cambios que se han realizado en el servidor.");
        }

        // Envía la respuesta
        if (actionRow) {
            await interaction.reply({ embeds: [embed, embed1], components: [actionRow], ephemeral: true });
        } else {
            await interaction.reply({ embeds: [embed, embed1], ephemeral: true });
        } if (row) {
                interaction.reply({ embeds: [embed], components: [row]})
            }
    }
};
