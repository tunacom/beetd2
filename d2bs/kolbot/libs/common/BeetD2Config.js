/**
 * @filename BeetD2Common.js
 * @author   tunacom
 * @desc   Common configuration options for BeetD2.
 */

var BeetD2Config = {
	fixConfiguration: function () {
		// Town settings.
		Config.HealHP = 95; // Go to a healer if under designated percent of life.
		Config.HealMP = 50; // Go to a healer if under designated percent of mana.
		Config.HealStatus = true; // Go to a healer if poisoned or cursed
		Config.UseMerc = true; // Use merc. This is ignored and always false in d2classic.
		Config.MercWatch = false; // Instant merc revive during battle.

		// Potion settings.
		Config.UseHP = 80; // Drink a healing potion if life is under designated percent.
		Config.UseRejuvHP = 45; // Drink a rejuvenation potion if life is under designated percent.
		Config.UseMP = 35; // Drink a mana potion if mana is under designated percent.
		Config.UseRejuvMP = 0; // Drink a rejuvenation potion if mana is under designated percent.
		Config.UseMercHP = 75; // Give a healing potion to your merc if his/her life is under designated percent.
		Config.UseMercRejuv = 10; // Give a rejuvenation potion to your merc if his/her life is under designated percent.
		Config.HPBuffer = 0; // Number of healing potions to keep in inventory.
		Config.MPBuffer = me.charlvl <= 60 ? 12 : 0; // Number of mana potions to keep in inventory.
		Config.RejuvBuffer = 4; // Number of rejuvenation potions to keep in inventory.

		// Chicken settings.
		Config.LifeChicken = 30; // Exit game if life is less or equal to designated percent.
		Config.ManaChicken = 0; // Exit game if mana is less or equal to designated percent.
		Config.MercChicken = 0; // Exit game if merc's life is less or equal to designated percent.
		Config.TownHP = 0; // Go to town if life is under designated percent.
		Config.TownMP = 0; // Go to town if mana is under designated percent.

		Config.LogExperience = true; // Print experience statistics in the manager.
		Config.StashGold = 10000; // Minimum amount of gold to stash.

		Config.BeltColumn = ["hp", "hp", "mp", "mp"]; // Mp slot is nice, so we pick/use quickly.
		Config.MinColumn = [2, 2, 2, 2];

		Config.Inventory[0] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
		Config.Inventory[1] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
		Config.Inventory[2] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
		Config.Inventory[3] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

		Config.FastPick = true;
		Config.MiniShopBot = false;

		Config.PickitFiles = ["beetd2/tuna.nip", "beetd2/nub.nip", "beetd2/low_level_additions.nip"];
		Config.PickRange = 30; // Pick radius
		Config.FastPick = true; // Check and pick items between attacks

		// Misc.
		Config.ClearType = 0x0;
		Config.OpenChests = true;
		Config.AutoEquip = me.charlvl < 80 ? true : false; // Assume gear is okay by 80. Probably going to need manual intervention by then.
		Config.MaxGameTime = 1800;

		// Cubing.
		//Config.Cubing = me.charlvl >= 36;  // Grab the cube during baal runs in case things have gone wrong.
		Config.Cubing = false; // TODO(tuna): Make sure everyone gets the cube more consistently then enable.

		Config.Recipes.push([Recipe.Gem, "Flawless Amethyst"]); // Make Perfect Amethyst
		Config.Recipes.push([Recipe.Gem, "Flawless Topaz"]); // Make Perfect Topaz
		Config.Recipes.push([Recipe.Gem, "Flawless Sapphire"]); // Make Perfect Sapphire
		Config.Recipes.push([Recipe.Gem, "Flawless Emerald"]); // Make Perfect Emerald
		Config.Recipes.push([Recipe.Gem, "Flawless Ruby"]); // Make Perfect Ruby
		Config.Recipes.push([Recipe.Gem, "Flawless Diamond"]); // Make Perfect Diamond
		Config.Recipes.push([Recipe.Gem, "Flawless Skull"]); // Make Perfect Skull

		Config.Recipes.push([Recipe.Token]); // Make Token of Absolution

		Config.Recipes.push([Recipe.Rune, "Pul Rune"]); // Upgrade Pul to Um
		//Config.Recipes.push([Recipe.Rune, "Um Rune"]); // Upgrade Um to Mal
		//Config.Recipes.push([Recipe.Rune, "Mal Rune"]); // Upgrade Mal to Ist
		//Config.Recipes.push([Recipe.Rune, "Ist Rune"]); // Upgrade Ist to Gul
		Config.Recipes.push([Recipe.Rune, "Gul Rune"]); // Upgrade Gul to Vex

		// TODO(tuna): Runewords!
		//Config.MakeRunewords = true;
	}
};
