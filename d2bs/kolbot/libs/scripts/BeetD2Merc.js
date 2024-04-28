/*
 * Improved follower script based on Follower by kolton.
 */

if (!isIncluded("common/BeetD2Common.js")) {
	include("common/BeetD2Common.js");
}

function BeetD2Merc () { // eslint-disable-line no-unused-vars
	// TODO(tuna): At some point, move away from 1980s C-style declarations.
	var i, leader, leaderUnit, result,
		attack = true,
		commands = [];

	// Get leader's Party Unit
	this.getLeader = function (name) {
		var player = getParty();

		if (player) {
			do {
				if (player.name === name) {
					return player;
				}
			} while (player.getNext());
		}

		return false;
	};

	this.getLeaderUnit = function (name) {
		var leaderUnit = getUnit(0, name);
		if (leaderUnit && leaderUnit.x) {
			return leaderUnit;
		}

		return null;
	};

	// Get leader's act from Party Unit
	this.checkLeaderAct = function (unit) {
		if (unit.area <= 39) {
			return 1;
		}

		if (unit.area >= 40 && unit.area <= 74) {
			return 2;
		}

		if (unit.area >= 75 && unit.area <= 102) {
			return 3;
		}

		if (unit.area >= 103 && unit.area <= 108) {
			return 4;
		}

		return 5;
	};

	// Change areas to where leader is
	this.checkExit = function (unit, area) {
		if (unit.inTown) {
			return false;
		}

		var j, target,
			exits = getArea().exits;

		for (j = 0; j < exits.length; j += 1) {
			if (exits[j].target === area) {
				return 1;
			}
		}

		if (unit.inTown) {
			target = getUnit(2, "waypoint");

			if (target && getDistance(me, target) < 20) {
				return 3;
			}
		}

		target = getUnit(2, "portal");

		if (target) {
			do {
				if (target.objtype === area) {
					Pather.usePortal(null, null, target);

					return 2;
				}
			} while (target.getNext());
		}

		// Arcane<->Cellar portal
		if ((me.area === 74 && area === 54) || (me.area === 54 && area === 74)) {
			Pather.usePortal(null);

			return 4;
		}

		// Tal-Rasha's tomb->Duriel's lair
		if (me.area >= 66 && me.area <= 72 && area === 73) {
			Pather.useUnit(2, 100, area);

			return 4;
		}

		// Throne->Chamber
		if (me.area === 131 && area === 132) {
			target = getUnit(2, 563);

			if (target) {
				Pather.usePortal(null, null, target);

				return 4;
			}
		}

		return false;
	};

	// Talk to a NPC
	this.talk = function (name) {
		if (!me.inTown) {
			say("I'm not in town!");

			return false;
		}

		if (typeof name === "string") {
			name = name.toLowerCase();
		} else {
			say("No NPC name given.");

			return false;
		}

		var npc, names;

		switch (me.act) {
		case 1:
			names = ["gheed", "charsi", "akara", "kashya", "cain", "warriv"];

			break;
		case 2:
			names = ["fara", "lysander", "greiz", "elzix", "jerhyn", "meshif", "drognan", "atma", "cain"];

			break;
		case 3:
			names = ["alkor", "asheara", "ormus", "hratli", "cain"];

			break;
		case 4:
			names = ["halbu", "tyrael", "jamella", "cain"];

			break;
		case 5:
			names = ["larzuk", "malah", "qual-kehk", "anya", "nihlathak", "cain"];

			break;
		}

		if (names.indexOf(name) === -1) {
			say("Invalid NPC.");

			return false;
		}

		if (!Town.move(name === "jerhyn" ? "palace" : name)) {
			Town.move("portalspot");
			say("Failed to move to town spot.");

			return false;
		}

		npc = getUnit(1);

		if (npc) {
			do {
				if (npc.name.replace(/ /g, "").toLowerCase().indexOf(name) > -1) {
					npc.openMenu();
					me.cancel();
					Town.move("portalspot");
					say("Done talking.");

					return true;
				}
			} while (npc.getNext());
		}

		say("NPC not found.");
		Town.move("portalspot");

		return false;
	};

	this.pickPotions = function (range) {
		if (me.dead) {
			return false;
		}

		Town.clearBelt();

		while (!me.idle) {
			delay(40);
		}

		var status,
			pickList = [],
			item = getUnit(4);

		if (item) {
			do {
				if ((item.mode === 3 || item.mode === 5) && item.itemType >= 76 && item.itemType <= 78 && getDistance(me, item) <= range) {
					pickList.push(copyUnit(item));
				}
			} while (item.getNext());
		}

		pickList.sort(Pickit.sortItems);

		while (pickList.length > 0) {
			item = pickList.shift();

			if (item && copyUnit(item).x) {
				status = Pickit.checkItem(item).result;

				if (status && Pickit.canPick(item)) {
					Pickit.pickItem(item, status);
				}
			}
		}

		return false;
	};

	this.returnToTown = function () {
		if (me.inTown) {
			Town.doChores();
			Town.move("portalspot");
			return true;
		}

		delay(150);

		if (!Pather.usePortal(null, null)) {
			try {
				Pather.makePortal();
			} catch (e) {
				print('No portals, attempting to continue (expected at low levels).');
				return false;
			}
			Pather.usePortal(null, me.name);
		}

		Town.doChores();
		Town.move("portalspot");

		return true;
	};

	this.chatEvent = function (nick, message) {
		if (message && nick === Config.Leader) {
			commands.push(message);
		}
	};

	addEventListener("chatmsg", this.chatEvent);

	// Override config values that use TP
	Config.TownCheck = false;
	Config.TownHP = 0;
	Config.TownMP = 0;

	for (i = 0; i < 20; i += 1) {
		leader = this.getLeader(Config.Leader);

		if (leader) {
			break;
		}

		delay(1000);
	}

	if (!leader) {
		say("Leader not found.");
		delay(1000);
		quit();
		return false;
	}

	// This sells everything in inventory and stash. Be careful!
	BeetD2Common.nubSell();

	// Normal prep.
	Town.doChores();
	Town.move("portalspot");

	// Prep before we start waiting around, uses time more efficiently.
	while (!Misc.inMyParty(Config.Leader)) {
		delay(500);
	}

	BeetD2Common.disableTeleIfNeeded();
	BeetD2Common.wiggle();

	// Main Loop, break this into its own function
	while (Misc.inMyParty(Config.Leader)) {
		// TODO(tuna): Improve/simplify this.
		leaderUnit = this.getLeaderUnit(Config.Leader);

		if (!me.inTown) {
			if (!leaderUnit) {
				me.overhead("leader not found");
			}

			if (!leader.inTown) {
				var lx, ly;
				if (leaderUnit) {
					lx = leaderUnit.x;
					ly = leaderUnit.y;
				} else {
					// Fall back to attempting to use leader over leaderUnit.
					lx = leader.x;
					ly = leader.y;
				}
				var distance = getDistance(me.x, me.y, lx, ly);
				if (distance > 10 || distance < 4) {
					var xOffset = rand(4, 9) * (rand(0, 2) ? -1 : 1);
					var yOffset = rand(4, 9) * (rand(0, 2) ? -1 : 1);
					Pather.moveTo(lx + xOffset, ly + yOffset); // Prevent clusterfucks in closed spaces.
				}
			}

			if (attack) {
				Attack.clear(25);
				this.pickPotions(25);
			}

			if (me.classid === 3 && Config.AttackSkill[2] > 0) {
				Skill.setSkill(Config.AttackSkill[2], 0);
			}

			if (leader.area !== me.area && !me.inTown) {
				while (leader.area === 0) {
					delay(100);
				}

				result = this.checkExit(leader, leader.area);

				switch (result) {
				case 1:
					delay(500);
					Pather.moveToExit(leader.area, true);
					break;
				case 2:
					//say("Taking portal.");
					break;
				case 3:
					//say("Taking waypoint.");
					delay(500);
					Pather.useWaypoint(leader.area, true);
					break;
				case 4:
					//say("Special transit.");
					break;
				}

				while (me.area === 0) {
					delay(100);
				}
			}
		}

		var message = commands.shift();
		var action = "";
		var params = [];
		if (message) {
			var parts = message.split(" ");
			action = parts[0];
			params = parts.slice(1, parts.length);
		}

		switch (action) {
		case "move":
			BeetD2Common.wiggle();
			break;
		case "1":
		case "come":
			// TODO(tuna): Do some of this automagically.
			if (me.inTown && leader.inTown && this.checkLeaderAct(leader) !== me.act) {
				Town.goToTown(this.checkLeaderAct(leader));
				Town.move("portalspot");
			} else if (me.inTown) {
				Town.goToTown(this.checkLeaderAct(leader));
				Town.move("portalspot");

				if (!Pather.usePortal(null, leader.name)) {
					Pather.journeyTo(leader.area);
					break;
				}
			}

			break;
		case "2":
		case "return":
			this.returnToTown();
			break;
		case "3":
		case "sell":
			this.returnToTown();
			BeetD2Common.nubSell();
			Town.move("portalspot");
			break;
		case "h":
			if (me.classid === 4) {
				Skill.cast(130);
			}
			break;
		case "bo":
			// TODO(tuna): This should be automatic if a nearby ally does not have it and we can cast bo.
			if (me.classid === 4) {
				Precast.doPrecast(true);
			}
			break;
		case "a2":
		case "a3":
		case "a4":
		case "a5":
			BeetD2Common.changeAct(parseInt(action[1], 10));
			break;
		case "town":
			if (params.length < 1) {
				break;
			}
			Town.goToTown(parseInt(params[0]));
			Town.move("portalspot");
			break;
		case "chest":
			if (params.length < 1) {
				break;
			}
			if (params.length === 1) {
				params = [params[0], undefined];
			}
			while (!BeetD2Common.getQuestItem(parseInt(params[0]), parseInt(params[1]))) {
				delay(500);
			}
			this.returnToTown();
		case "cube":
			while (!BeetD2Common.getQuestItem(549, 354)) {
				delay(500);
			}
			this.returnToTown();
			break;
		case "amulet":
			while (!BeetD2Common.getQuestItem(521, 149)) {
				delay(500);
			}
			this.returnToTown();
			BeetD2Common.talkTo("drognan");
			break;
		case "talk":
			if (params.length < 1) {
				break;
			}
			BeetD2Common.talkTo(params[0]);
			break;
		case "bird":
			delay(rand(1, 60000));
			BeetD2Common.talkTo("alkor");
			BeetD2Common.useItem(545);
			say("Bird quest done.");
			break;
		case "book":
			BeetD2Common.getQuestItem(552);
			BeetD2Common.useItem(552);
			say("Ate book.");
			break;
		case "anya":
			BeetD2Common.talkTo("malah");
			BeetD2Common.useItem(646);
			say("Ate scroll.");
			break;
		case "click":
			// Book 552, Potion 545, Scroll 646. Shouldn't be needed but just in case.
			if (params.length < 1) {
				break;
			}
			BeetD2Common.useItem(parseInt(params[0]));
			break;
		case "getchant":
			delay(rand(1, 5000));
			say("chant");
			break;
		case "wp":
			BeetD2Common.getWP();
			break;
		}

		delay(100);
	}

	return true;
}
