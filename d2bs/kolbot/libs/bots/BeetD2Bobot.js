/**
 *	@filename	ChestMania.js
 *	@author		kolton
 *	@desc		Open chests in configured areas
 */

function BeetD2Bobot () {

	this.bo = function () {
		Town.heal();

		try {
			Pather.useWaypoint(35, true); // catacombs
		} catch (wperror) {
			say("Failed to wp.");
		}

		Precast.doPrecast(true);

		Pather.useWaypoint(1); // Let exceptions propagate.
	};

	this.chatEvent = function (nick, message) {
		if (message && message === "bo") {
			this.bo();
		}
	};

	addEventListener("chatmsg", this.chatEvent);

	while (true) {
		delay(1000);
	}

	return true;
}
