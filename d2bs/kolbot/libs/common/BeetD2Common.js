/**
 *	@filename	BeetD2Common.js
 *	@author		tunacom
 *	@desc		Helper functions to make it easier to beat d2.
 */

var BeetD2Common = { // eslint-disable-line no-unused-vars,no-redeclare
	nubSellOneItem: function (item) {
		var npc = getInteractedNPC();
		while (!npc) {
			delay(100);
			this.wiggle();
			Town.initNPC("Shop", "nubSell");
			npc = getInteractedNPC();
		}

		// Rare early case where we can't afford to ID. Just sell anyway until we can buy scrolls.
		if (!item.getFlag(0x10)) {
			// We don't buy tomes. See if we have a scroll already.
			var scroll = me.findItem(530, 0, 3);

			if (!scroll && me.gold >= 80) {
				var npc_scroll = npc.getItem(530);
				if (npc_scroll && Storage.Inventory.CanFit(npc_scroll)) {
					npc_scroll.buy();
				}
				scroll = me.findItem(530, 0, 3);
			}

			if (scroll) {
				Town.identifyItem(item, scroll);
				Item.autoEquip();
			}
		}

		// Bail out if we just equipped the item.
		if (item.location !== 3) {
			return;
		}

		npc = getInteractedNPC();
		if (!npc) {
			Town.initNPC("Shop", "nubSell");
		}

		Misc.itemLogger("Sold", item);
		item.sell();
	},

	nubSell: function () {
		// We stop doing this after level 15. Sells literally everything since the bot will pick everything.
		if (me.charlvl > 15) {
			return; // Graduate from nubhood.
		}

		// Try autoequipping first.
		Item.autoEquip();

		var items = me.getItems();
		if (!items) {
			return;
		}

		Town.initNPC("Shop", "nubSell");
		var checkStash = true;
		while (checkStash) {
			var skipItems = [18, 41, 76, 77, 549, 521]; // Keep TP tomes, keys, health/mana pots, quest stuff.

			checkStash = false;
			for (let i = 0; i < items.length; i += 1) {
				if (skipItems.indexOf(items[i].itemType) !== -1) {
					continue;
				}

				if (items[i].location === 3) {
					this.nubSellOneItem(items[i]);
				}

				if (items[i].location === 7) {
					checkStash = true;
				}
			}

			if (checkStash) {
				items = me.getItems();
				for (let i = 0; i < items.length; i += 1) {
					if (skipItems.indexOf(items[i].itemType) !== -1) {
						continue;
					}

					if (items[i].location === 7 && Storage.Inventory.CanFit(items[i])) {
						Storage.Inventory.MoveTo(items[i]);
					}
				}
			}
		}
	},

	wiggle: function () {
		delay(100);
		Pather.moveTo(me.x + rand(-3, 4), me.y + rand(-3, 4));
	},

	makePortal: function () {
		if (Town.checkScrolls(518) >= 3) {
			Pather.makePortal();
		} else {
			// Restock if we're getting too low. Avoids awkward cases where we run out of scrolls in the field.
			Town.visitTown();
		}
	},

	// Copied from AutoSmurf. Rewrite if necessary and strip things we may not need.
	getQuestItem: function (classid, chestid) {
		print("picking QuestItem " + classid);

		var chest, item, i;

		if (me.getItem(classid)) {
			return true;
		}
		if (me.inTown) {
			return false;
		}
		if (chestid) {
			chest = getUnit(2, chestid);
			if (!chest) {
				return false;
			}
			Misc.openChest(chest);
		}
		item = getUnit(4, classid);
		for (i = 0; i < 10 && !item; i += 1) {
			delay(100 + me.ping);
			item = getUnit(4, classid);
		}
		if (!item) {
			return false;
		}
		if (!Storage.Inventory.CanFit(item)) {
			i = me.area;
			Town.goToTown();
			Town.doChores();
			Town.move("portalspot");
			Pather.usePortal(i, me.name);
			while (me.inTown) {
				delay(50);
			}
		}
		for (i = 0; i < 10 && !Pickit.pickItem(item); i += 1) {
			delay(250 + me.ping * 2);
		}
		return !!getUnit(4, classid); //(<3 kolton)
	},

	// TODO(tuna): This is essentially a modified version of Pather.journeyTo for walking as a group. Has a lot of unnecessary stuff and duplication.
	fightTo: function (area) {
		var i, special, unit, tick, target;

		target = Pather.plotCourse(area, me.area);

		print(target.course);

		if (target.useWP) {
			Town.goToTown();
		}

		// handle variable flayer jungle entrances
		if (target.course.indexOf(78) > -1) {
			Town.goToTown(3); // without initiated act, getArea().exits will crash

			special = getArea(78);

			if (special) {
				special = special.exits;

				for (i = 0; i < special.length; i += 1) {
					if (special[i].target === 77) {
						target.course.splice(target.course.indexOf(78), 0, 77); // add great marsh if needed

						break;
					}
				}
			}
		}

		while (target.course.length) {
			if (!me.inTown) {
				if (Config.QuitList.length > 1) {
					try {
						this.makePortal();
					} catch (e) {
						// Recoverable error. Can happen if we run out of portals at low levels.
					}
					say("1");
					delay(10000);
				}
				Precast.doPrecast(false);
			}

			// Only do this if we don't already have the wp (actually shouldn't matter, see below).
			/*
			if (Pather.wpAreas.indexOf(me.area) > -1 && !getWaypoint(Pather.wpAreas.indexOf(me.area))) {
				Pather.getWP(me.area, true);
			}
			*/

			if (me.inTown && Pather.wpAreas.indexOf(target.course[0]) > -1 && getWaypoint(Pather.wpAreas.indexOf(target.course[0]))) {
				Pather.useWaypoint(target.course[0], !Pather.plotCourse_openedWpMenu);
				Precast.doPrecast(false);
			} else if (me.area === 109 && target.course[0] === 110) { // Harrogath -> Bloody Foothills
				Pather.moveTo(5026, 5095);

				unit = getUnit(2, 449); // Gate

				if (unit) {
					for (i = 0; i < 3; i += 1) {
						Misc.click(0, 0, unit);
						//unit.interact();

						tick = getTickCount();

						while (getTickCount() - tick < 3000) {
							if (unit.mode === 2) {
								delay(1000);

								break;
							}

							delay(10);
						}
					}
				}

				Pather.moveToExit(target.course[0], true);
			} else if (me.area === 4 && target.course[0] === 38) { // Stony Field -> Tristram
				Pather.moveToPreset(me.area, 1, 737, 0, 0, true, true);

				for (i = 0; i < 5; i += 1) {
					if (Pather.usePortal(38)) {
						break;
					}

					delay(1000);
				}
			} else if (me.area === 40 && target.course[0] === 47) { // Lut Gholein -> Sewers Level 1 (use Trapdoor)
				Pather.moveToPreset(me.area, 5, 19);
				Pather.useUnit(2, 74, 47);
			} else if (me.area === 74 && target.course[0] === 46) { // Arcane Sanctuary -> Canyon of the Magi
				Pather.moveToPreset(me.area, 2, 357, 0, 0, true);

				for (i = 0; i < 5; i += 1) {
					unit = getUnit(2, 357);

					Misc.click(0, 0, unit);
					delay(1000);
					me.cancel();

					if (Pather.usePortal(46)) {
						break;
					}
				}
			} else if (me.area === 54 && target.course[0] === 74) { // Palace -> Arcane
				Pather.moveTo(10073, 8670, 3, true);
				Pather.usePortal(null);
			} else if (me.area === 109 && target.course[0] === 121) { // Harrogath -> Nihlathak's Temple
				Town.move("anya");
				Pather.usePortal(121);
			} else if (me.area === 111 && target.course[0] === 125) { // Abaddon
				Pather.moveToPreset(111, 2, 60, 0, 0, true);
				Pather.usePortal(125);
			} else if (me.area === 112 && target.course[0] === 126) { // Pits of Archeon
				Pather.moveToPreset(112, 2, 60, 0, 0, true);
				Pather.usePortal(126);
			} else if (me.area === 117 && target.course[0] === 127) { // Infernal Pit
				Pather.moveToPreset(117, 2, 60, 0, 0, true);
				Pather.usePortal(127);
			} else {
				while (!Pather.moveToExit(target.course[0], true, true)) {
					this.wiggle();
				}
				if (Pather.wpAreas.indexOf(target.course[0]) > -1) {
					Pather.getWP(target.course[0], true);
				}
			}

			target.course.shift();
		}

		return me.area === area;
	},

	changeAct: function (act, depth) {
		var npc, preArea, target;
		if (!depth) {
			depth = 0;
		}
		if (depth > 3) {
			say("Act change failed.");
			return false;
		}

		preArea = me.area;

		switch (act) {
		case 2:
			if (me.area >= 40) {
				break;
			}

			Town.move("warriv");

			npc = getUnit(1, 155);

			if (npc) {
				npc.openMenu();
				Misc.useMenu(0x0D36);
			}

			break;
		case 3:
			if (me.area >= 75) {
				break;
			}

			Town.move("palace");

			npc = getUnit(1, 201);

			if (npc) {
				npc.openMenu();
				me.cancel();
			}

			Town.move("meshif");

			npc = getUnit(1, 210);

			if (npc) {
				npc.openMenu();
				Misc.useMenu(0x0D38);
			}

			break;
		case 4:
			if (me.area >= 103) {
				break;
			}

			if (me.inTown) {
				Town.move("cain");

				npc = getUnit(1, 245);

				if (npc) {
					npc.openMenu();
					me.cancel();
				}

				Town.move("portalspot");
				Pather.usePortal(102, null);
			}

			delay(1500);

			target = getUnit(2, 342);

			if (target) {
				Pather.moveTo(target.x - 3, target.y - 1);
			}

			Pather.usePortal(null);

			break;
		case 5:
			if (me.area >= 109) {
				break;
			}

			Town.move("tyrael");

			npc = getUnit(1, "tyrael");

			if (npc) {
				npc.openMenu();
				me.cancel();

				try {
					Pather.useUnit(2, 566, 109);
				} catch (a5e) {
					// TODO(tuna): Figure out why this is valid. Copied from kolbot.
				}
			}

			break;
		}

		delay(2000);

		while (!me.area) {
			delay(500);
		}

		if (me.area === preArea) {
			me.cancel();
			return this.changeAct(act, depth + 1);
		}

		Town.move("portalspot");
		say("Act change successful.");
		return true;
	},

	// Simplified version of autosmurf's talkTo.
	talkTo: function (name) {
		if (name === "cain") {
			name = "deckard cain";
		}

		if (!me.inTown) {
			Town.goToTown();
		}

		Town.move(name);
		var npc = getUnit(1, name);
		if (npc) {
			if (npc.openMenu()) {
				me.cancel();
				Town.move("portalspot"); // TODO(tuna): This should be optional.
				return true;
			}
		}

		return false;
	},

	useItem: function (id) {
		var item = me.getItem(id);
		if (!item) {
			return false;
		}
		clickItem(1, item);
		return true;
	},

	ensureAccessTo: function (area) {
		if (area >= 40 && !Pather.accessToAct(2)) {
			say("a2");
			this.changeAct(2);
		}
		if (area >= 75 && !Pather.accessToAct(3)) {
			say("a3");
			this.changeAct(3);
		}
		if (area >= 103 && !Pather.accessToAct(4)) {
			say("a4");
			this.changeAct(4);
		}
		if (area >= 109 && !Pather.accessToAct(5)) {
			say("a5");
			this.changeAct(5);
		}
	},

	disableTeleIfNeeded: function () {
		// TODO(tuna): The mercs tend to walk all the time. There may be cases where we don't need to disable.
		Pather.teleport = false;
	},

	getWP: function () {
		var i, j, unit;
		if (me.inTown) {
			return;
		}

		delay(rand(1, 3) * 500);

		unit = getUnit(2, "waypoint");

		if (unit) {
			WPLoop: for (i = 0; i < 3; i += 1) {
				if (getDistance(me, unit) > 3) {
					Pather.moveToUnit(unit);
				}

				unit.interact();

				for (j = 0; j < 100; j += 1) {
					if (j % 20 === 0) {
						me.cancel();
						delay(300);
						unit.interact();
					}

					if (getUIFlag(0x14)) {
						break WPLoop;
					}

					delay(10);
				}
			}
		}

		if (getUIFlag(0x14)) {
			say("Got wp.");
		} else {
			say("Failed to get wp.");
		}

		me.cancel();
	}
};
