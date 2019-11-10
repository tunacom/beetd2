// Battle orders script - Use this for 2+ characters (for example BO barb + sorc)
Scripts.BattleOrders = true;
Config.BattleOrders.Mode = me.classid === 4 ? 0 : 1;
Config.BattleOrders.Wait = false; // Idle until the player that received BO leaves.
Config.BattleOrders.Getters = Config.QuitList;

if (Config.Leader === "") {
	// Leader scripts.
	Scripts.BeetD2Diablo = true;
	Config.Diablo.Entrance = false; // Start from entrance
	Config.Diablo.SealWarning = "Leave the seals alone!";
	Config.Diablo.EntranceTP = "Entrance TP up";
	Config.Diablo.StarTP = "Star TP up";
	Config.Diablo.DiabloMsg = "Diablo";

	Scripts.BeetD2Baal = true;
	Config.Baal.HotTPMessage = "Hot TP!";
	Config.Baal.SafeTPMessage = "Safe TP!";
	Config.Baal.BaalMessage = "Baal!";
	Config.Baal.SoulQuit = false;
	Config.Baal.DollQuit = false;
	Config.Baal.KillBaal = true;

	Scripts.ChestMania = false; // Open chests in configured areas. See sdk/areas.txt
	Config.ChestMania.Act1 = [13, 14, 15, 16, 18, 19]; // List of act 1 areas to open chests in
	Config.ChestMania.Act2 = [55, 59, 65, 66, 67, 68, 69, 70, 71, 72]; // List of act 2 areas to open chests in
	Config.ChestMania.Act3 = [79, 80, 81, 92, 93, 84, 85]; // ..., 90]; // List of act 3 areas to open chests in
	Config.ChestMania.Act4 = []; // List of act 4 areas to open chests in
	Config.ChestMania.Act5 = [125, 126, 127]; //[115, 116, 119, 125, 126, 127]; // List of act 5 areas to open chests in
} else {
	// Follower scripts.
	Scripts.BeetD2Merc = true;
}
