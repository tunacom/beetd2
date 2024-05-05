/**
 *	@filename	BeetD2Baal.js
 *	@author		kolton, modified by YGM then Tunacom
 *	@desc		clear Throne of Destruction and kill Baal with added BeetD2 hacks.
 */

// TODO(tuna): This file is quickly hacked together from a copy. Needs to be linted and cleaned up.
function BeetD2Baal () { // eslint-disable-line no-unused-vars\
	include("core/Common/Baal.js");
	
	delay(5000); // Ensure that previous script is done for followers.
	say("town 5");

	Town.doChores();
	Pather.useWaypoint(Config.RandomPrecast ? "random" : 129);
	Precast.doPrecast(true);

	if (me.area !== 129) {
		Pather.useWaypoint(129);
	}

	if (Pather.canTeleport()) {
		if (!Pather.moveToExit([130, 131], true)) {
			throw new Error("Failed to move to Throne of Destruction.");
		}
		Pather.moveTo(15095, 5029);
	}
	else {
		BeetD2Common.fightTo(131);
		Pather.moveTo(15095, 5029, 5, true);
	}


	if (Config.Baal.DollQuit && getUnit(1, 691)) {
		//say("Dolls found! NG.");

		Town.doChores();
		return true;
	}

	if (Config.Baal.SoulQuit && getUnit(1, 641)) {
		//say("Souls found! NG.");

		Town.doChores();
		return true;
	}

	if (Config.PublicMode) {
		//this.announce();
		Pather.moveTo(15118, 5002);
		Pather.makePortal();
		say("1");
		Pather.teleport = false;
		Attack.clear(15);
		delay(5000);
	}

	Common.Baal.clearThrone();

	if (Config.PublicMode) {
		Pather.moveTo(15118, 5045);
		Pather.makePortal();
		//say("1");
		Precast.doPrecast(true);
	}

	if (!Common.Baal.clearWaves()) {
		throw new Error("Couldn't clear baal waves");
	}
	
	Config.Baal.KillBaal && Common.Baal.killBaal();

	say("bo");
	delay(5000);
	Pather.teleport = true;
	say("2");

	return true;
}
