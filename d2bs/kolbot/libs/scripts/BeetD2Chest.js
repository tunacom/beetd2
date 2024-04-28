/**
 *	@filename	BeetD2Chest.js
 *	@author		kolton modified by Tunacom
 *	@desc		Open chests in configured areas, optimized for faster runs than the kolbot version of this script.
 */

function BeetD2Chest () {
	//var chestZones = [115, 116, 119, 125, 126, 127, 55, 59, 64, 65, 66, 67, 68, 69, 70, 71, 72, 79, 80, 81, 92, 93, 84, 85, 90, 13, 14, 15, 16, 18, 19];  // Full area list.
	var chestZones = [115, 116, 119, 55, 59, 66, 67, 68, 69, 70, 71, 72, 79, 80, 81, 92, 93, 84, 85, 90, 18, 19]; // Fast area list.

	var buyKeys = function () {
		if (!Town.checkKeys() >= 48) {
			return true;
		}

		// Fuck Hratli.
		if (me.act === 3) {
			Town.goToTown(1);
		}

		var key,
			npc = Town.initNPC("Key", "buyKeys");

		if (!npc) {
			return false;
		}

		key = npc.getItem("key");

		if (!key) {
			return false;
		}

		while (Town.checkKeys() < 48) {
			try {
				key.buy(true);
			} catch (e) {
				print(e.message);

				return false;
			}
		}

		return true;
	};

	Town.doChores();

	// Buy a shitload of keys.
	buyKeys();

	for (let i = 0; i < chestZones.length; i++) {
		Pather.journeyTo(chestZones[i]);
		Precast.doPrecast(i === 0 ? true : false);
		Misc.openChestsInArea(chestZones[i]);
	}

	return true;
}
