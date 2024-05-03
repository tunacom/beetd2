/**
 *	@filename	BeetD2Diablo.js
 *	@author		kolton modified by Tunacom
 *	@desc		clear Chaos Sanctuary and kill Diablo with added BeetD2 hacks
 */

// TODO(tuna): This file is quickly hacked together from a copy. Needs to be linted and cleaned up.
function BeetD2Diablo () { // eslint-disable-line no-unused-vars
	// start
	delay(5000); // Ensure that previous script is done for followers.

	say("town 4");
	Town.doChores();
	Pather.useWaypoint(Config.RandomPrecast ? "random" : 107);
	Precast.doPrecast(true);

	include("core/Common/Diablo.js");
	Pather._teleport = Pather.teleport;
	Common.Diablo.clearRadius = Config.Diablo.ClearRadius;
	
	if (!Pather.moveToExit(sdk.areas.ChaosSanctuary, true) && !Pather.moveTo(7790, 5544)) {
		throw new Error("Failed to move to Chaos Sanctuary");
	}
	
	Common.Diablo.initLayout();
	
	try {
		if (Config.Diablo.Entrance && !Config.Diablo.Fast) {
			Attack.clear(30, 0, false, Common.Diablo.sort);
			Pather.moveTo(7790, 5544);
			
			if (Config.PublicMode && Pather.makePortal()) {
				say("1");
				delay(5000);
				Pather.teleport = false;
			}
		
			Pather.moveTo(7790, 5544);
			Precast.doPrecast(true);
			Attack.clear(30, 0, false, Common.Diablo.sort);
			Common.Diablo.followPath(Common.Diablo.entranceToStar);
		} else {
			Pather.moveTo(7774, 5305);
			Attack.clear(15, 0, false, Common.Diablo.sort);
		}
		
		Pather.moveTo(7791, 5293);
		
		if (Config.PublicMode && Pather.makePortal()) {
			say("1");
			delay(5000);
			Pather.teleport = !Config.Diablo.WalkClear && Pather._teleport;
		}
		
		Attack.clear(30, 0, false, Common.Diablo.sort);
		
		try {
			Common.Diablo.runSeals(Config.Diablo.SealOrder);
			// maybe instead of throwing error if we fail to open seal, add it to an array to re-check before diabloPrep then if that fails throw and error
			Config.PublicMode && say(Config.Diablo.DiabloMsg);
			console.log("Attempting to find Diablo");
			Common.Diablo.diabloPrep();
		} catch (error) {
			console.warn("Diablo wasn't found. Checking seals.");
			Common.Diablo.runSeals(Config.Diablo.SealOrder, true, true);
			Common.Diablo.diabloPrep();
		}
		
		Attack.kill(sdk.monsters.Diablo);
		Pickit.pickItems();
		Config.Diablo.SealLeader && say("done");
	} finally {
		if (Pather.teleport !== Pather._teleport) {
			Pather.teleport = Pather._teleport;
		}
	}

	say("bo");
	delay(5000);
	Pather.teleport = true;
	say("2");

	return true;
}
