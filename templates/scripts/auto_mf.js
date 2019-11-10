// Battle orders script - Use this for 2+ characters (for example BO barb + sorc)
Scripts.BattleOrders = true;
Config.BattleOrders.Mode = me.classid === 4 ? 0 : 1;
Config.BattleOrders.Wait = false; // Idle until the player that received BO leaves.
Config.BattleOrders.Getters = Config.QuitList;

if (Config.Leader === "") {
	// Leader scripts.
	Config.MFLeader = true;

	Scripts.Countess = false;
	Config.Countess.KillGhosts = false;
	Scripts.Andariel = true;
	Scripts.Mephisto = true;
	Config.Mephisto.MoatTrick = false;
	Config.Mephisto.KillCouncil = false;
	Config.Mephisto.TakeRedPortal = false;

	Scripts.Diablo = false;
	Config.Diablo.Entrance = false; // Start from entrance
	Config.Diablo.SealWarning = "Leave the seals alone!";
	Config.Diablo.EntranceTP = "Entrance TP up";
	Config.Diablo.StarTP = "Star TP up";
	Config.Diablo.DiabloMsg = "Diablo";

	Scripts.Baal = true;
	Config.Baal.HotTPMessage = "Hot TP!";
	Config.Baal.SafeTPMessage = "Safe TP!";
	Config.Baal.BaalMessage = "Baal!";
	Config.Baal.SoulQuit = false; // End script if Souls (Undead Soul Killers) are found.
	Config.Baal.DollQuit = false; // End script if Dolls (Undead Stigyan Dolls) are found.
	Config.Baal.KillBaal = true; // Kill Baal. Leaves game after wave 5 if false.
} else {
	// Follower scripts.
	Scripts.MFHelper = true; // Run the same MF run as the MFLeader. Leader must have Config.MFLeader = true

	Scripts.DiabloHelper = false; // Chaos helper, kills monsters and doesn't open seals on its own.
	Config.DiabloHelper.Wait = 300; // Seconds to wait for a runner to be in Chaos. If Config.Leader is set, it will wait only for the leader.
	Config.DiabloHelper.Entrance = false; // Start from entrance. Set to false to start from star.around
	Config.DiabloHelper.SkipTP = false; // Don't wait for town portal and directly head to chaos. It will clear monsters  chaos entrance and wait for the runner.
	Config.DiabloHelper.SkipIfBaal = false; // End script if there are party members in a Baal run.

	Scripts.BaalHelper = true;
	Config.BaalHelper.Wait = 300; // Seconds to wait for a runner to be in Throne
	Config.BaalHelper.KillNihlathak = false; // Kill Nihlathak before going to Throne
	Config.BaalHelper.FastChaos = false; // Kill Diablo before going to Throne
	Config.BaalHelper.DollQuit = false; // End script if Dolls (Undead Soul Killers) are found.
	Config.BaalHelper.KillBaal = true; // Kill Baal. If set to false, you must configure Config.QuitList or the bot will wait indefinitely.
	Config.BaalHelper.SkipTP = false; // Don't wait for a TP, go to WSK3 and wait for someone to go to throne. Anti PK measure.
}
