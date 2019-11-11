/**
 *  @filename  BeetD2.js
 *  @author    tunacom
 *  @desc    Beats d2. Norm->Hell.
 */

if (!isIncluded("bots/BeetD2Diablo.js")) {
	include("bots/BeetD2Diablo.js");
}

if (!isIncluded("bots/BeetD2Baal.js")) {
	include("bots/BeetD2Baal.js");
}

if (!isIncluded("common/BeetD2Common.js")) {
	include("common/BeetD2Common.js");
}

function BeetD2 () { // eslint-disable-line no-unused-vars
	// Attempt to beat diablo 2. Then beat it again. And again. It's probably worse than Autosmurf.
	var areaList = [];
	if (me.charlvl < 7) {
		areaList = [4];
	} else if (me.charlvl < 10) {
		areaList = [18, 19];
	} else if (me.charlvl < 14) {
		areaList = [16];
	} else if (me.charlvl < 17) {
		areaList = [33, 37];
	} else if (me.charlvl < 24) {
		areaList = [58, 61];
	} else if (me.charlvl < 26) {
		areaList = [66, 67, 68, 69, 70, 71, 72];
	} else if (me.charlvl < 30) {
		areaList = [88, 89];
	}

	this.playersInArea = function (area) {
		if (!area) {
			area = me.area;
		}

		var party = getParty();
		var count = 0;
		do {
			if (party.name !== me.name && party.area !== area) {
				return false;
			}
			count++;
			print(count);
		} while (party.getNext());

		return true;
	};

	this.waitForPlayers = function (x, y, fight) {
		Pather.moveTo(x, y, 3, fight);

		BeetD2Common.makePortal();
		say("1");

		while (!this.playersInArea()) {
			delay(1000);

			Pather.moveTo(x, y, 3, true);
			Attack.clear(3);
		}
	};

	this.den = function () {
		if (me.getQuest(1, 0) || me.charlvl >= 48) {
			return;
		}

		BeetD2Common.fightTo(8);
		Attack.clearLevel();
	};

	this.bloodraven = function () {
		if (me.getQuest(2, 0) || me.charlvl >= 48) {
			return;
		}

		BeetD2Common.fightTo(17);
		Attack.clearLevel();
		say("2");
		say("talk kashya");
		BeetD2Common.talkTo("kashya");
	};

	this.andy = function () {
		if (Pather.accessToAct(2)) {
			return;
		}

		// Fight or tele to cats 4.
		if (me.charlvl < 48) {
			BeetD2Common.disableTeleIfNeeded();
			while (!BeetD2Common.fightTo(37)) {
				// Keep retrying if we fail to fight there.
			}
		} else {
			Pather.teleport = true;
			Pather.journeyTo(37);
		}

		Pather.teleport = false;
		this.waitForPlayers(22582, 9612, true);
		Attack.clearLevel(Config.ClearType);

		Town.goToTown();
		say("2");
		delay(10000);

		say("a2");
		BeetD2Common.changeAct(2);
		delay(60000);

		if (me.charlvl >= 48) {
			Pather.teleport = true;
		}
	};

	this.cube = function () {
		if (me.getItem(549)) {
			return;
		}

		var fight = true;
		if (me.charlvl < 48) {
			BeetD2Common.disableTeleIfNeeded();
			while (!BeetD2Common.fightTo(60)) {
				// Retry if we fail to fight there.
			}
		} else {
			Pather.teleport = true;
			fight = false;
			Pather.journeyTo(60);
		}

		while (!Pather.moveToPreset(me.area, 2, 354, 0, 0, fight)) {
			BeetD2Common.wiggle();
		}

		Attack.clear(20);
		this.waitForPlayers(me.x, me.y, true);

		if (!BeetD2Common.getQuestItem(549, 354)) {
			throw new Error("Failed to pick cube.");
		}
		say("cube");

		delay(10000);
		say(2);
		Town.goToTown();
	};

	this.amulet = function () {
		if (me.getQuest(11, 0)) {
			return;
		}

		Pather.teleport = true;

		Pather.journeyTo(61);
		Pather.moveTo(15044, 14045, 3, true);

		if (!BeetD2Common.getQuestItem(521, 149)) {
			throw new Error("Failed to pick amulet.");
		}

		say("talk drognan");
		BeetD2Common.talkTo("drognan");

		Pather.teleport = false;
	};

	this.staff = function () {
		if (me.getItem(91) || me.getItem(92) || me.getQuest(10, 0)) {
			return;
		}

		// Get the staff.
		Pather.teleport = true;

		Pather.journeyTo(64);
		Pather.moveToPreset(me.area, 2, 356);
		if (!BeetD2Common.getQuestItem(92, 356)) {
			throw new Error("Failed to pick staff.");
		}

		Pather.teleport = false;

		// Prepare to cube.
		var amulet = me.getItem("vip");
		var staff = me.getItem("msf");

		if (!staff || !amulet) {
			throw new Error("Failed to find staff or amulet.");
		}

		// Shouldn't be necessary to move to the stash, but do it for safety.
		Town.move("stash");
		if (!Town.openStash()) {
			Town.openStash();
		}

		Storage.Cube.MoveTo(amulet);
		Storage.Cube.MoveTo(staff);
		Cubing.openCube();
		transmute();

		delay(1000);
		Cubing.emptyCube();
		me.cancel();
	};

	this.summoner = function () {
		if (me.getQuest(12, 0) && me.getQuest(13, 0)) {
			return;
		}

		Pather.teleport = true;

		Pather.journeyTo(74);
		BeetD2Common.getWP();

		var preset = getPresetUnit(me.area, 2, 357);
		var spot, journal;
		switch (preset.roomx * 5 + preset.x) {
		case 25011:
			spot = {
				x: 25081,
				y: 5446
			};
			break;
		case 25866:
			spot = {
				x: 25830,
				y: 5447
			};
			break;
		case 25431:
			switch (preset.roomy * 5 + preset.y) {
			case 5011:
				spot = {
					x: 25449,
					y: 5081
				};
				break;
			case 5861:
				spot = {
					x: 25447,
					y: 5822
				};
				break;
			}
			break;
		}

		// Move close to the summoner then to his exact position.
		Pather.moveTo(spot.x, spot.y);
		var target = getUnit(1, 250);
		this.waitForPlayers(target.x, target.y, false);
		Attack.clear(25);

		// TODO(tuna): Copied from Autosmurf but should really be cleaned up.
		var i;
		for (i = 0; i < 20 && !Pather.usePortal(46); i += 1) {
			if (journal) {
				sendPacket(1, 0x13, 4, journal.type, 4, journal.gid);
				delay(300 + me.ping);
				me.cancel();
			} else {
				journal = getUnit(2, 357);
				Pickit.pickItems();
			}
			delay(100 + me.ping);
		}
		if (i === 20) {
			throw new Error("Summoner failed.");
		}

		Pather.teleport = false;

		BeetD2Common.getWP();

		say("2");
		say("talk atma");
	};

	this.duriel = function () {
		if (me.getQuest(14, 0)) {
			return;
		}

		Pather.journeyTo(46);
		if (!Pather.moveToExit(getRoom().correcttomb, true) || !Pather.moveToPreset(me.area, 2, 152)) {
			throw new Error("Failed to move to oriface.");
		}

		var handleStaff = function () {
			var tombArea = me.area;
			Town.goToTown();
			Town.doChores();
			Town.move("stash");
			Town.openStash();

			var item = me.getItem(-1, 0);
			do {
				if (item.classid === 91) {
					if (Storage.Inventory.CanFit(item)) {
						Storage.Inventory.MoveTo(item);
						break;
					} else {
						throw new Error("Cannot fit staff in inventory.");
					}
				}
			} while (item.getNext());

			Pather.usePortal(tombArea, me.name);

			var orifice = getUnit(2, 152);
			Misc.openChest(orifice);
			var staff = me.getItem(91);
			staff.toCursor();
			submitItem();
		};

		if (!me.getQuest(10, 0)) {
			handleStaff();
		}

		BeetD2Common.makePortal();
		say("1");

		Attack.clear(25);
		while (!getUnit(2, 100)) {
			Attack.clear(10);
			delay(250);
		}

		Pather.useUnit(2, 100, 73);
		Pather.teleport = false;
		Attack.kill(211);

		// More stuff stolen from autosmurf.
		Pather.moveTo(22579, 15706);
		Pather.moveTo(22577, 15649, 10);
		Pather.moveTo(22577, 15609, 10);

		var unit = getUnit(1, "tyrael");
		Pather.moveToUnit(unit);
		unit.interact();
		//sendPacket(1, 0x31, 4, unit.gid, 4, 302);
		delay(1000);
		me.cancel();
		Town.goToTown();

		say("2");
		say("a3");
		BeetD2Common.changeAct(3);

		// TODO(tuna): This might always be worth keeping, but consider shortening
		// duration after implementing automatic act change in the merc script.
		delay(120000); // Wait for stragglers.

		Pather.teleport = true;
	};

	this.khalim_eye = function () {
		if (me.getQuest(18, 0) || me.getItem(553)) {
			return;
		}

		Pather.journeyTo(85);
		Pather.moveToPreset(me.area, 2, 407);
		BeetD2Common.getQuestItem(553, 407);

		Town.goToTown();
		Town.doChores();
	};

	this.khalim_brain = function () {
		if (me.getQuest(18, 0) || me.getItem(555)) {
			return;
		}

		Pather.journeyTo(91);
		Pather.moveToPreset(me.area, 2, 406);
		BeetD2Common.getQuestItem(555, 406);

		Town.goToTown();
		Town.doChores();
	};

	this.khalim_heart = function () {
		if (me.getQuest(18, 0) || me.getItem(554)) {
			return;
		}

		Pather.journeyTo(93);
		Pather.moveToPreset(me.area, 2, 405);
		BeetD2Common.getQuestItem(554, 405);

		Town.goToTown();
		Town.doChores();
	};

	this.council = function () {
		if (me.getQuest(21, 0) && me.getQuest(18, 0)) {
			return;
		}

		// Ensure that the entire group is ready to portal and begin immediately.
		say("town 3");
		delay(20000);

		Pather.useWaypoint(83);
		Pather.moveTo(me.x + 97, me.y - 68);
		BeetD2Common.makePortal();
		say("1");

		Attack.clear(10);

		var bosses = [2863, 2860, 2862];
		for (let i = 0; i < 3; i++) {
			try {
				Attack.kill(getLocaleString(bosses[i]));
			} catch (e) {
				// Expected if the bosses are killed out of order.
			}
		}

		BeetD2Common.getQuestItem(173);
		BeetD2Common.makePortal();
		Town.goToTown();
		say("2");
		delay(1000);
		say("talk cain");
		BeetD2Common.talkTo("cain");

		// Shouldn't be necessary, but move to the stash in case any items were deposited.
		Town.move("stash");
		if (!Town.openStash()) {
			Town.openStash();
		}

		Storage.Cube.MoveTo(me.getItem(553));
		Storage.Cube.MoveTo(me.getItem(554));
		Storage.Cube.MoveTo(me.getItem(555));
		Storage.Cube.MoveTo(me.getItem(173));
		Cubing.openCube();
		transmute();

		delay(1000);
		Cubing.emptyCube();
		me.cancel();

		var item = me.getItem(-1, 0);
		do {
			if (item.classid === 174) {
				if (Storage.Inventory.CanFit(item)) {
					Storage.Inventory.MoveTo(item);
					break;
				} else {
					throw new Error("Cannot fit flail in inventory.");
				}
			}
		} while (item.getNext());

		if (item.classid !== 174) {
			throw new Error("Unable to find flail.");
		}

		// TODO(tuna): Copied from AutoSmurf. This needs a great deal of cleanup.
		var nPos, orb = null;
		for (let i = 0; i < 10 && !me.itemoncursor; i += 1) {
			sendPacket(1, 0x19, 4, item.gid); // Unit to cursor.
			delay(me.ping * 2 + 500);
		}
		sendPacket(1, 0x1a, 4, item.gid, 2, 0x0004, 2, 0); // Equip.
		sendPacket(1, 0x1d, 4, item.gid, 2, 0x0004, 2, 0); //...swap : spam!
		delay(me.ping * 3 + 250);
		if (me.itemoncursor) {
			item = getUnit(100); //onCursor
			if (Storage.Inventory.CanFit(item)) {
				nPos = Storage.Inventory.FindSpot(item);
				sendPacket(1, 0x18, 4, item.gid, 4, nPos.y, 4, nPos.x, 4, 0); //to inv
			} else {
				sendPacket(1, 0x17, 4, item.gid); //drop
			}
		}
		delay(me.ping * 3 + 250);

		Town.move("portalspot");
		Config.PacketCasting = 1;
		Pather.usePortal(83, me.name);

		for (let i = 0; i < 5 && !orb; i += 1) {
			orb = getUnit(2, 404);
			delay(100 + me.ping);
		}
		if (!orb) {
			return;
		}

		Pather.moveToUnit(orb);
		for (let i = 0; i < 3 && orb; i += 1) {
			Skill.cast(0, 0, orb);
			delay(250 + me.ping * 2);
			orb = getUnit(2, 404);
		}

		if (item) {
			Town.goToTown();
			Town.doChores();
		}

		Config.PacketCasting = 0;
	};

	this.mephisto = function () {
		// Gate on access to act 4 rather than the mephisto quest.
		if (me.getQuest(23, 0)) {
			return;
		}

		Pather.journeyTo(102);
		Pather.moveTo(17566, 8069);
		BeetD2Common.makePortal();
		say("1");

		Attack.kill(242);
		Attack.clear(40);
		Pather.moveTo(17566, 8069);
		say("a4");

		// Have the sorc take the portal last. Prevents us from losing stragglers.
		while (!this.playersInArea(103)) {
			delay(1000);
		}

		BeetD2Common.changeAct(4);
	};

	this.diablo = function () {
		if (me.getQuest(26, 0)) {
			return;
		}

		Config.Diablo.Entrance = false; // Start from entrance
		Config.Diablo.SealWarning = "Leave the seals alone!";
		Config.Diablo.EntranceTP = "Entrance TP up";
		Config.Diablo.StarTP = "Star TP up";
		Config.Diablo.DiabloMsg = "Diablo";
		BeetD2Diablo();

		delay(1000);
		say("a5");
		BeetD2Common.changeAct(5);
	};

	this.ancients = function () {
		if (me.getQuest(39, 0)) {
			return;
		}

		Pather.journeyTo(120);
		this.waitForPlayers(10048, 12634, false);
		var altar = getUnit(2, 546);
		Pather.moveToUnit(altar);

		sendPacket(1, 0x31, 4, altar.gid, 4, 20002);
		sendPacket(1, 0x13, 4, altar.type, 4, altar.gid);
		delay(100 + me.ping * 2);
		me.cancel();

		var bosses = [22489, 22488, 22490];
		for (var i = 0; i < 3; i++) {
			try {
				Attack.kill(getLocaleString(bosses[i]));
			} catch (e) {
				// Expected if the bosses are killed out of order.
			}
		}

		Attack.clear(50);

		delay(3000);
		me.cancel();

		Town.goToTown();
		say("2");
	};

	this.baal = function () {
		Config.Baal.HotTPMessage = "Hot TP!";
		Config.Baal.SafeTPMessage = "Safe TP!";
		Config.Baal.BaalMessage = "Baal!";
		Config.Baal.SoulQuit = false;
		Config.Baal.DollQuit = false;
		Config.Baal.KillBaal = me.charlvl === 48 || me.charlvl === 78;
		BeetD2Baal();
	};

	this.questIfNecessary = function () {
		// TODO(tuna): Do quick chest runs if gold is very low.
		if (me.charlvl >= 1) {
			this.den();
		}

		if (me.charlvl >= 8) {
			// Unsure if this is actually a benefit.
			//this.bloodraven();
		}

		if (me.charlvl >= 16) {
			this.andy();
		}

		if (me.charlvl >= 24 && !Pather.accessToAct(3)) {
			this.cube();
			this.amulet();
			this.staff();
			this.summoner();
		}

		if (me.charlvl >= 26) {
			// For higher level quests, we always teleport.
			Pather.teleport = true;

			this.duriel();
			this.khalim_eye();
			this.khalim_brain();
			this.khalim_heart();
		}

		if (me.charlvl >= 30) {
			this.council();
			this.mephisto();
			this.diablo();
			this.ancients();
			this.baal();
		}
	};

	// This sells everything in inventory and stash. Be careful!
	BeetD2Common.nubSell();

	// Run normal town chores.
	Town.doChores();

	// TODO(tuna): This always disables at the moment. Improve in the future.
	BeetD2Common.disableTeleIfNeeded();
	this.questIfNecessary();

	for (var i = 0; i < areaList.length; i++) {
		if (Pather.teleport && me.getSkill(54, 1) && !Pather.journeyTo(areaList[i])) {
			continue;
		}

		if ((!Pather.teleport || !me.getSkill(54, 1)) && !BeetD2Common.fightTo(areaList[i])) {
			continue;
		}

		// TODO(tuna): This shouldn't be necessary, and we do it twice atm if we had to fight to an area.
		if (Config.QuitList.length > 1) {
			try {
				BeetD2Common.makePortal();
				say("1");
				delay(15000);
			} catch (e) {
				// Expected if we have no portals, e.g. if we're just starting.
			}
		}

		// Walk while clearing areas. This allows followers to keep up.
		BeetD2Common.disableTeleIfNeeded();
		Attack.clearLevel(true);
	}

	return true;
}
