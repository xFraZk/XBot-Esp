const { EmbedBuilder } = require('@discordjs/builders');
const { TextInputBuilder, ChannelType } = require('discord.js');
const solicitar = require('../SlashCommands/Global/solicitar'); 
require('../SelectMenus/SelectMenuExample')
module.exports = {
    name: "ExampleModal",
    run: async (client, interaction) => {
        const canalId = '1144062064072081439'; 
        const canal = await client.channels.fetch(canalId);
        const descripcionInput = interaction.fields.getTextInputValue('descripcionInput');
        const idxboxInput = interaction.fields.getTextInputValue('idxboxInput');
        const consolaimput = interaction.fields.getTextInputValue('consolaimput');
        const juegoInput = interaction.fields.getTextInputValue('juegoInput');

        
        const embed = new EmbedBuilder()
        .setTitle('Se busca personas para jugar')
        .setAuthor({ name:  'Función similar a buscar grupo de Xbox', iconURL: 'https://cdn.discordapp.com/emojis/1124534390035333262.webp?size=96&quality=lossless', url: 'https://support.xbox.com/es-AR/help/friends-social-activity/friends-groups/using-looking-for-group' })
            .setDescription(`${interaction.user.toString()}  | ${descripcionInput}`)
            .addFields({ name: 'Juego', value: `${juegoInput}`, inline: false })
            .addFields({ name: 'Gametag', value: `${idxboxInput}`, inline: true })
            .addFields({ name: 'Consola', value: `${consolaimput}`, inline: true })
            .setTimestamp()
	        .setFooter({ text: 'Únete al hilo y comienza a hablar para conectarte con el propietario y unirte a la partida', iconURL: 'https://cdn3.emoji.gg/emojis/7476-thread-badge.png' });
            
            

            canal.send({
                content: '<@&1125115459537211476>',
                embeds: [embed]
              })
              .then(() => {
                interaction.reply({ content:'**¡Anuncio enviado correctamente!** Ahora podrás verlo en <#1144062064072081439>. Este comando está en fase de pruebas y actualizaciones. El desarrollador recomienda que agregues sugerencias que puedan mejorar este comando en <#1142651671491645500>.',  ephemeral: true});
              })
              .catch((error) => {
                console.error('Error al enviar el mensaje al canal:', error);
                interaction.reply('Ocurrió un error al enviar el mensaje');
              });
    }
};
