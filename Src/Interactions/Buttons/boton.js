// Code for the `Src/Interactions/Buttons/EvalButton.js
const { ComponentType } = require('discord.js');
module.exports = {
    name: "boton",
    run: async(client, interaction) => {

        const collector = boton1.createMessageComponentCollector({ componentType: ComponentType.Button, time: 15000 });

collector.on('collect', i => {
	if (i.user.id === interaction.user.id) {
		i.reply(`${i.user.id} clicked on the ${i.customId} button.`);
	} else {
		i.reply({ content: `These buttons aren't for you!`, ephemeral: true });
	}
});

collector.on('end', collected => {
	console.log(`Collected ${collected.size} interactions.`);
})

       const boton1 = await interaction.reply({
            content: "This button is working!"
        });
    }
};